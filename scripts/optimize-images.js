#!/usr/bin/env node

/**
 * Image Optimization Script
 * Converts images to WebP, updates code references, and cleans up originals
 * Usage: node scripts/optimize-images.js [--dry-run]
 */

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const heicConvert = require('heic-convert');

// Configuration
const CONFIG = {
  maxWebPSize: 120 * 1024, // 120 KB in bytes
  qualityStart: 80, // Starting quality for WebP
  qualityMin: 30, // Minimum quality allowed
  dryRun: process.argv.includes('--dry-run'),
  projectRoot: path.join(__dirname, '..'),
  logFile: path.join(__dirname, '..', 'image-optimization.log'),
};

// Image extensions to process
const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp'];

// Source code extensions to scan for image references
const SOURCE_EXTENSIONS = ['.html', '.css', '.js', '.jsx', '.ts', '.tsx', '.md'];

// Directories to exclude
const EXCLUDE_DIRS = ['node_modules', '.next', '.git', 'dist', 'build', '.vercel'];

const MIN_DIMENSION = 32;
const SCALE_STEP = 0.92;
const QUALITY_STEP = 5;

// Logger
class Logger {
  constructor(logFile) {
    this.logFile = logFile;
    this.logs = [];
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const formatted = `[${timestamp}] [${level}] ${message}`;
    console.log(formatted);
    this.logs.push(formatted);
  }

  info(message) {
    this.log(message, 'INFO');
  }

  warn(message) {
    this.log(message, 'WARN');
  }

  error(message) {
    this.log(message, 'ERROR');
  }

  success(message) {
    this.log(message, 'SUCCESS');
  }

  save() {
    fs.writeFileSync(this.logFile, this.logs.join('\n'), 'utf8');
  }
}

const logger = new Logger(CONFIG.logFile);

// Helper: Check if directory should be excluded
function shouldExcludeDir(dirPath) {
  return EXCLUDE_DIRS.some((excluded) => dirPath.includes(path.sep + excluded + path.sep) || dirPath.endsWith(path.sep + excluded));
}

// Helper: Recursively find all files
function findFiles(dirPath, extensions = null) {
  const files = [];

  function walk(currentPath) {
    if (shouldExcludeDir(currentPath)) {
      return;
    }

    try {
      const entries = fs.readdirSync(currentPath, { withFileTypes: true });

      for (const entry of entries) {
        const fullPath = path.join(currentPath, entry.name);

        if (entry.isDirectory()) {
          walk(fullPath);
        } else if (extensions === null || extensions.includes(path.extname(entry.name).toLowerCase())) {
          files.push(fullPath);
        }
      }
    } catch (err) {
      logger.warn(`Failed to read directory ${currentPath}: ${err.message}`);
    }
  }

  walk(dirPath);
  return files;
}

// Helper: Calculate file size in KB
function getFileSizeKB(filePath) {
  const stats = fs.statSync(filePath);
  return stats.size / 1024;
}

async function createWebPBufferFromHeif(imagePath, quality, width, height) {
  const inputBuffer = await fs.promises.readFile(imagePath);
  const convertedBuffer = await heicConvert({
    buffer: inputBuffer,
    format: 'PNG',
  });

  let transformer = sharp(convertedBuffer).webp({ quality });
  if (width && height) {
    transformer = transformer.resize(width, height, {
      fit: 'inside',
      withoutEnlargement: true,
    });
  }

  return transformer.toBuffer();
}

async function createWebPBuffer(imagePath, quality, width, height) {
  try {
    let transformer = sharp(imagePath).webp({ quality });
    if (width && height) {
      transformer = transformer.resize(width, height, {
        fit: 'inside',
        withoutEnlargement: true,
      });
    }
    return await transformer.toBuffer();
  } catch (err) {
    const unsupported = /heif|HEIF|unsupported|Unsupported|bad seek|cannot decode/i.test(err.message);
    if (!unsupported) {
      throw err;
    }

    return createWebPBufferFromHeif(imagePath, quality, width, height);
  }
}

// Step 1: Find all images
async function discoverImages() {
  logger.info('Step 1: Discovering images...');
  const imageFiles = findFiles(CONFIG.projectRoot, IMAGE_EXTENSIONS);
  logger.success(`Found ${imageFiles.length} image(s)`);
  return imageFiles;
}

// Step 2: Convert images to WebP with size constraints
async function convertImagesToWebP(imageFiles) {
  logger.info('Step 2: Converting images to WebP...');
  const results = {
    success: [],
    failed: [],
  };

  for (const imagePath of imageFiles) {
    const fileName = path.basename(imagePath, path.extname(imagePath));
    const fileDir = path.dirname(imagePath);
    const webpPath = path.join(fileDir, `${fileName}.webp`);
    const ext = path.extname(imagePath).toLowerCase();

    try {
      logger.info(`Processing: ${path.relative(CONFIG.projectRoot, imagePath)}`);

      const originalSizeBytes = fs.statSync(imagePath).size;
      let width = null;
      let height = null;
      let format = 'unknown';

      try {
        const metadata = await sharp(imagePath).metadata();
        width = metadata.width || null;
        height = metadata.height || null;
        format = metadata.format || 'unknown';
      } catch (metaErr) {
        if (!/heif|HEIF|unsupported|Unsupported|bad seek|cannot decode/i.test(metaErr.message)) {
          throw metaErr;
        }
        format = 'heif';
      }

      logger.info(
        `  Original: ${(originalSizeBytes / 1024).toFixed(2)} KB (${width || '?'}x${height || '?'} , ${format})`
      );

      if (ext === '.webp' && originalSizeBytes <= CONFIG.maxWebPSize) {
        logger.info(`  Skipping: already WebP and under ${CONFIG.maxWebPSize / 1024} KB`);
        results.success.push({
          original: imagePath,
          webp: imagePath,
          originalSize: originalSizeBytes / 1024,
          webpSize: originalSizeBytes / 1024,
          skipped: true,
        });
        continue;
      }

      let currentQuality = CONFIG.qualityStart;
      let currentWidth = width;
      let currentHeight = height;
      let optimized = false;
      let bestBuffer = null;
      let bestSize = Infinity;
      let attemptCount = 0;

      while (attemptCount < 100) {
        attemptCount += 1;
        const buffer = await createWebPBuffer(imagePath, currentQuality, currentWidth, currentHeight);

        if (buffer.length < bestSize) {
          bestSize = buffer.length;
          bestBuffer = buffer;
        }

        if (buffer.length <= CONFIG.maxWebPSize) {
          logger.info(
            `  Converted with quality ${currentQuality}, dimensions ${currentWidth || width}x${currentHeight || height}: ${(buffer.length / 1024).toFixed(2)} KB`
          );
          optimized = true;
          break;
        }

        if (currentQuality > CONFIG.qualityMin) {
          currentQuality = Math.max(CONFIG.qualityMin, currentQuality - QUALITY_STEP);
          continue;
        }

        if (currentWidth && currentHeight && currentWidth > MIN_DIMENSION && currentHeight > MIN_DIMENSION) {
          currentWidth = Math.max(MIN_DIMENSION, Math.floor(currentWidth * SCALE_STEP));
          currentHeight = Math.max(MIN_DIMENSION, Math.floor(currentHeight * SCALE_STEP));
          currentQuality = CONFIG.qualityStart;
          continue;
        }

        break;
      }

      if (!optimized) {
        if (!bestBuffer) {
          throw new Error(`Could not generate a WebP version for this image.`);
        }
        logger.warn(`  Could not reach ${CONFIG.maxWebPSize / 1024} KB exactly; using smallest available WebP output.`);
      }

      const outputBuffer = bestBuffer;
      if (!CONFIG.dryRun) {
        fs.writeFileSync(webpPath, outputBuffer);
      }

      results.success.push({
        original: imagePath,
        webp: webpPath,
        originalSize: originalSizeBytes / 1024,
        webpSize: outputBuffer.length / 1024,
      });
      logger.success(`  ✓ Created: ${path.basename(webpPath)}`);
    } catch (err) {
      const isUnsupportedHeif = /heif|HEIF|unsupported|Unsupported|bad seek|cannot decode/i.test(err.message);
      if (isUnsupportedHeif) {
        logger.warn(`  ⚠️ Skipping unsupported image format: ${err.message}`);
      } else {
        logger.error(`  ✗ Failed: ${err.message}`);
      }
      results.failed.push({
        original: imagePath,
        error: err.message,
      });
    }
  }

  logger.success(`Conversion complete: ${results.success.length} succeeded, ${results.failed.length} failed`);
  return results;
}

// Step 3: Update code references
async function updateCodeReferences(conversionResults) {
  logger.info('Step 3: Updating code references...');

  const sourceFiles = findFiles(CONFIG.projectRoot, SOURCE_EXTENSIONS);
  let totalUpdates = 0;

  for (const webpInfo of conversionResults.success) {
    const originalFileName = path.basename(webpInfo.original);
    const originalNameWithoutExt = path.basename(webpInfo.original, path.extname(webpInfo.original));
    const webpFileName = path.basename(webpInfo.webp);

    // Create regex patterns to match the original file in various contexts
    const patterns = [
      new RegExp(`(['"])${originalFileName}(['"])`, 'g'), // 'filename.jpg' or "filename.jpg"
      new RegExp(`(['"])([^'"]*[\\/])${originalFileName}(['"])`, 'g'), // 'path/filename.jpg'
      new RegExp(`(url\\(['"]?)${originalFileName}`, 'g'), // url(filename.jpg) or url('filename.jpg')
      new RegExp(`src=['"]([^'"]*[\\/])?${originalFileName}`, 'g'), // src="path/filename.jpg"
    ];

    for (const sourceFile of sourceFiles) {
      try {
        let content = fs.readFileSync(sourceFile, 'utf8');
        let updatedContent = content;
        let updateCount = 0;

        for (const pattern of patterns) {
          const matches = updatedContent.match(pattern);
          if (matches) {
            updatedContent = updatedContent.replace(pattern, (match) => {
              updateCount++;
              // Replace the old filename with the new webp filename
              return match.replace(originalFileName, webpFileName);
            });
          }
        }

        if (updateCount > 0) {
          logger.info(
            `  Updated ${updateCount} reference(s) in: ${path.relative(CONFIG.projectRoot, sourceFile)}`
          );
          totalUpdates += updateCount;

          if (!CONFIG.dryRun) {
            fs.writeFileSync(sourceFile, updatedContent, 'utf8');
          }
        }
      } catch (err) {
        logger.warn(
          `  Failed to process ${path.relative(CONFIG.projectRoot, sourceFile)}: ${err.message}`
        );
      }
    }
  }

  logger.success(`Updated ${totalUpdates} reference(s) across all source files`);
  return totalUpdates;
}

// Step 4: Cleanup original files
async function cleanupOriginalFiles(conversionResults) {
  logger.info('Step 4: Cleaning up original files...');

  let deletedCount = 0;
  let skippedCount = 0;
  let failedCount = 0;

  for (const webpInfo of conversionResults.success) {
    const samePath = path.resolve(webpInfo.original) === path.resolve(webpInfo.webp);
    if (samePath) {
      logger.info(`  Skipped deletion for already-WebP file: ${path.relative(CONFIG.projectRoot, webpInfo.original)}`);
      skippedCount++;
      continue;
    }

    try {
      if (!CONFIG.dryRun) {
        fs.unlinkSync(webpInfo.original);
      }
      logger.info(`  Deleted: ${path.relative(CONFIG.projectRoot, webpInfo.original)}`);
      deletedCount++;
    } catch (err) {
      logger.error(
        `  Failed to delete ${path.relative(CONFIG.projectRoot, webpInfo.original)}: ${err.message}`
      );
      failedCount++;
    }
  }

  logger.success(`Cleanup complete: ${deletedCount} deleted, ${skippedCount} skipped, ${failedCount} failed`);
}

// Main execution
async function main() {
  logger.info('═══════════════════════════════════════════════════════');
  logger.info('IMAGE OPTIMIZATION SCRIPT');
  logger.info('═══════════════════════════════════════════════════════');
  logger.info(`Project Root: ${CONFIG.projectRoot}`);
  logger.info(`Max WebP Size: ${CONFIG.maxWebPSize / 1024} KB`);
  logger.info(`Dry Run: ${CONFIG.dryRun ? 'YES' : 'NO'}`);
  logger.info('');

  if (CONFIG.dryRun) {
    logger.warn('⚠️  DRY RUN MODE: No files will be modified');
    logger.warn('');
  }

  try {
    // Step 1: Discover images
    const imageFiles = await discoverImages();
    if (imageFiles.length === 0) {
      logger.info('No images found. Exiting.');
      logger.save();
      process.exit(0);
    }

    logger.info('');

    // Step 2: Convert to WebP
    const conversionResults = await convertImagesToWebP(imageFiles);
    logger.info('');

    if (conversionResults.success.length === 0) {
      logger.error('No images were successfully converted. Exiting without making further changes.');
      logger.save();
      process.exit(1);
    }

    // Step 3: Update code references
    await updateCodeReferences(conversionResults);
    logger.info('');

    // Step 4: Cleanup
    await cleanupOriginalFiles(conversionResults);
    logger.info('');

    // Summary
    logger.info('═══════════════════════════════════════════════════════');
    logger.success('IMAGE OPTIMIZATION COMPLETED SUCCESSFULLY!');
    logger.info('═══════════════════════════════════════════════════════');
    logger.info(`✓ Converted: ${conversionResults.success.length} images`);
    logger.info(`✗ Failed: ${conversionResults.failed.length} images`);

    // Calculate total space saved
    const totalOriginalSize = conversionResults.success.reduce((sum, item) => sum + item.originalSize, 0);
    const totalWebPSize = conversionResults.success.reduce((sum, item) => sum + item.webpSize, 0);
    const spaceSaved = totalOriginalSize - totalWebPSize;
    const savingPercent = ((spaceSaved / totalOriginalSize) * 100).toFixed(2);

    logger.info(`Space Saved: ${spaceSaved.toFixed(2)} KB (${savingPercent}%)`);
    logger.info(`Log file saved to: ${CONFIG.logFile}`);
    logger.info('');

    logger.save();
  } catch (err) {
    logger.error(`Fatal error: ${err.message}`);
    logger.error(err.stack);
    logger.save();
    process.exit(1);
  }
}

main();
