# Image Optimization Script - Setup & Usage Guide

## Overview

This script automatically:
1. **Discovers** all image files (.jpg, .jpeg, .png) in your project
2. **Converts** them to WebP format with automatic quality/dimension adjustment to stay under 120 KB
3. **Updates** all code references (.html, .css, .js, .jsx, .ts, .tsx) to point to the new .webp files
4. **Cleans up** original image files after successful conversion

## Prerequisites

- **Node.js** version 14 or higher (check with `node --version`)
- **npm** (comes with Node.js)

## Installation Steps

### 1. Install Sharp (Image Processing Library)

```bash
npm install sharp
```

**Note**: Sharp will automatically download platform-specific bindings. The first installation may take 1-2 minutes.

### 2. Verify Installation

```bash
npm list sharp
```

## Usage

### Safe Dry-Run Mode (Recommended First)

Always run in dry-run mode first to see what will be changed **without making any modifications**:

```bash
node scripts/optimize-images.js --dry-run
```

**Output**: You'll see:
- How many images will be converted
- The conversion details (original size → WebP size)
- All code references that will be updated
- Files that will be deleted

### Execute the Script

Once you've reviewed the dry-run output and are satisfied, run without the dry-run flag:

```bash
node scripts/optimize-images.js
```

**This will**:
- Create .webp versions of all images
- Update all code references
- Delete original image files
- Generate a detailed log file at `image-optimization.log`

## Safety & Best Practices

### ⚠️ Before Running

1. **Backup Your Project**
   ```bash
   # Create a git commit first
   git add .
   git commit -m "Backup before image optimization"
   ```

2. **Always Test with Dry-Run First**
   ```bash
   node scripts/optimize-images.js --dry-run
   ```

3. **Review the Dry-Run Output** - Check:
   - No unexpected directories are being processed
   - Image sizes are reasonable
   - All code references look correct

### ✅ After Running

1. **Check the Log File**: `image-optimization.log`
2. **Verify Website**: Test your site locally
   ```bash
   npm run dev
   ```
3. **Review Git Diff**: See what changed
   ```bash
   git diff --stat
   git diff
   ```

## Rollback Instructions

If something goes wrong, rollback is simple:

```bash
# Undo the last commit (restores original images and code)
git reset --hard HEAD~1
```

## Configuration

Edit these values in `scripts/optimize-images.js` if needed:

```javascript
const CONFIG = {
  maxWebPSize: 120 * 1024,      // Maximum WebP file size in bytes
  qualityStart: 80,              // Starting quality (1-100)
  qualityMin: 30,                // Minimum quality allowed
  dryRun: process.argv.includes('--dry-run'),
  // ...
};
```

### What Each Option Does:

| Option | Default | Purpose |
|--------|---------|---------|
| `maxWebPSize` | 120 KB | Target maximum size for WebP files |
| `qualityStart` | 80 | Initial WebP quality level (higher = better quality) |
| `qualityMin` | 30 | Minimum quality before trying dimension scaling |

## Excluded Directories

The script automatically skips these directories:
- `node_modules/`
- `.next/`
- `.git/`
- `dist/`
- `build/`
- `.vercel/`

To exclude more directories, add them to the `EXCLUDE_DIRS` array in the script.

## Output Explanation

### Console Output
```
[2024-01-15T10:30:45.123Z] [INFO] Step 1: Discovering images...
[2024-01-15T10:30:45.234Z] [SUCCESS] Found 42 image(s)
[2024-01-15T10:30:45.345Z] [INFO] Step 2: Converting images to WebP...
...
```

### Log File (`image-optimization.log`)
Complete record of all operations for reference and debugging.

### Statistics
```
✓ Converted: 42 images
✗ Failed: 0 images
Space Saved: 2,458.50 KB (75.43%)
```

## Troubleshooting

### Error: "sharp is not installed"
```bash
npm install sharp
```

### Error: "Failed to process image"
- Check image is not corrupted: `file image.jpg`
- Try opening the image in an image viewer
- Check file permissions: `ls -l image.jpg`

### Images Over 120 KB After Conversion
- This shouldn't happen - the script adjusts quality and dimensions automatically
- If you see this warning, check the `maxWebPSize` setting in the config
- You can manually adjust specific images afterward

### Code References Not Updated
- Ensure the image filenames are used consistently in your code
- Check the log file for which patterns were searched
- Manual updates may be needed for unusual formats

### WebP Files Not Being Created
- Check disk space is available
- Verify write permissions on the `public/` directory
- Check the log file for detailed error messages

## Image Format Support

| Format | Supported | Notes |
|--------|-----------|-------|
| JPEG | ✅ Yes | Most common format |
| PNG | ✅ Yes | Lossless format |
| GIF | ❌ No | Not processed |
| SVG | ❌ No | Keep as-is (vectors) |
| WebP | ⏭️ Already optimized | Skipped |

## Browser Compatibility

WebP format is supported in:
- ✅ Chrome 23+
- ✅ Edge 18+
- ✅ Firefox 65+
- ✅ Safari 16+
- ✅ iOS Safari 16+

For unsupported browsers, implement a fallback in your Next.js image component.

## Performance Impact

Expected improvements after optimization:
- **Page Load**: 10-40% faster (depending on image-heavy content)
- **Bandwidth**: 60-80% reduction in image data transfer
- **Initial Build**: Slightly faster due to smaller asset sizes
- **Search Engine**: Better SEO due to improved page speed

## Advanced: Custom Processing

To process only specific directories:

```bash
# Modify the script to change CONFIG.projectRoot or add directory filtering
```

To skip specific file types:

```javascript
// Modify IMAGE_EXTENSIONS array
const IMAGE_EXTENSIONS = ['.png']; // Only PNG files
```

## Need Help?

1. **Check the log file**: `cat image-optimization.log` (or `type image-optimization.log` on Windows)
2. **Run dry-run again**: `node scripts/optimize-images.js --dry-run`
3. **Review git changes**: `git diff`

## What Gets Updated

The script finds and updates image references in these files:

- **HTML**: `<img src="image.jpg">`, `<picture>`, etc.
- **CSS**: `background-image: url('image.jpg')`, etc.
- **JavaScript**: `import image from 'image.jpg'`, `require('image.jpg')`, etc.
- **JSX**: `<Image src={image} />`, etc.
- **Markdown**: `![alt](image.jpg)`, etc.

## Next Steps (Optional)

After optimization, consider:

1. **Implement WebP Fallback** in your Next.js `<Image>` component for older browsers
2. **Add Image Optimization** to your CI/CD pipeline
3. **Monitor Performance** with web vitals
4. **Consider Lazy Loading** for better performance

---

**Script Version**: 1.0.0  
**Last Updated**: 2024  
**Tested With**: Node.js 18+, Sharp 0.33+
