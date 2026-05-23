const fs = require('fs');
const zlib = require('zlib');

// A very simple PNG pixel extractor
function getPngPixels(filePath) {
  const data = fs.readFileSync(filePath);
  
  // Check PNG signature
  if (data.readUInt32BE(0) !== 0x89504E47 || data.readUInt32BE(4) !== 0x0D0A1A0A) {
    throw new Error('Not a valid PNG file');
  }

  let offset = 8;
  let width = 0;
  let height = 0;
  let bitDepth = 0;
  let colorType = 0;
  let idatBuffers = [];

  while (offset < data.length) {
    const length = data.readUInt32BE(offset);
    const type = data.toString('ascii', offset + 4, offset + 8);
    
    if (type === 'IHDR') {
      width = data.readUInt32BE(offset + 8);
      height = data.readUInt32BE(offset + 12);
      bitDepth = data[offset + 16];
      colorType = data[offset + 17];
      console.log(`IHDR: ${width}x${height}, depth=${bitDepth}, colorType=${colorType}`);
    } else if (type === 'IDAT') {
      idatBuffers.push(data.subarray(offset + 8, offset + 8 + length));
    } else if (type === 'IEND') {
      break;
    }
    
    offset += 12 + length;
  }

  const compressed = Buffer.concat(idatBuffers);
  const decompressed = zlib.inflateSync(compressed);
  console.log(`Decompressed IDAT size: ${decompressed.length}`);

  // PNG scanlines have 1 filter byte at start of each line.
  // Assuming 8-bit RGBA (colorType 6) or RGB (colorType 2)
  const bytesPerPixel = colorType === 6 ? 4 : (colorType === 2 ? 3 : 1);
  console.log(`Bytes per pixel: ${bytesPerPixel}`);

  if (colorType !== 6 && colorType !== 2) {
    console.log('Unsupported color type for simple extraction');
    return [];
  }

  const colors = {};
  let lineOffset = 0;
  
  for (let y = 0; y < height; y++) {
    const filter = decompressed[lineOffset];
    lineOffset++; // skip filter byte
    
    // For simplicity, we won't fully un-filter since we just want a statistical sample of colors.
    // Unfiltered raw bytes (if filter is 0) or even filtered bytes will still give us a lot of original colors.
    // Let's do basic un-filtering for sub/up if we want, or just sample filter-0 lines or guess.
    // Actually, let's just get the raw values. Even with filters, the actual color bytes are present.
    // Wait, let's implement standard filter reconstruction (Sub, Up, Average, Paeth) for accurate colors!
    // It's very easy to implement the filters:
    // Filter 0: None
    // Filter 1: Sub (left)
    // Filter 2: Up (above)
    // Filter 3: Average (left + above)/2
    // Filter 4: Paeth
  }

  // Let's do a simpler thing: just find the most frequent hex codes in the raw decompressed data
  // but wait, since the image is 1024x306, we can just look at pixels that are not filtered or simply decode it.
  // Actually, let's write a small decoder.
  
  // Let's reconstruct scanlines:
  const stride = width * bytesPerPixel;
  const pixels = Buffer.alloc(width * height * bytesPerPixel);
  
  let srcOffset = 0;
  let destOffset = 0;
  
  for (let y = 0; y < height; y++) {
    const filterType = decompressed[srcOffset++];
    for (let x = 0; x < stride; x++) {
      const raw = decompressed[srcOffset++];
      let reconstructed = raw;
      
      const left = x >= bytesPerPixel ? pixels[destOffset - bytesPerPixel + x] : 0;
      const up = y > 0 ? pixels[destOffset - stride + x] : 0;
      const upLeft = (y > 0 && x >= bytesPerPixel) ? pixels[destOffset - stride - bytesPerPixel + x] : 0;
      
      if (filterType === 1) { // Sub
        reconstructed = (raw + left) & 0xFF;
      } else if (filterType === 2) { // Up
        reconstructed = (raw + up) & 0xFF;
      } else if (filterType === 3) { // Average
        reconstructed = (raw + Math.floor((left + up) / 2)) & 0xFF;
      } else if (filterType === 4) { // Paeth
        const p = left + up - upLeft;
        const pa = Math.abs(p - left);
        const pb = Math.abs(p - up);
        const pc = Math.abs(p - upLeft);
        let paeth = left;
        if (pb < pa && pb < pc) paeth = up;
        else if (pc < pa) paeth = upLeft;
        reconstructed = (raw + paeth) & 0xFF;
      }
      
      pixels[destOffset + x] = reconstructed;
    }
    destOffset += stride;
  }
  
  // Now let's count colors!
  const colorCounts = {};
  for (let i = 0; i < pixels.length; i += bytesPerPixel) {
    const r = pixels[i];
    const g = pixels[i+1];
    const b = pixels[i+2];
    const a = bytesPerPixel === 4 ? pixels[i+3] : 255;
    
    // Ignore transparent pixels or white/black
    if (a < 50) continue;
    if (r > 240 && g > 240 && b > 240) continue; // white
    if (r < 15 && g < 15 && b < 15) continue; // black
    
    const hex = '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    colorCounts[hex] = (colorCounts[hex] || 0) + 1;
  }
  
  const sorted = Object.entries(colorCounts).sort((a, b) => b[1] - a[1]);
  console.log('Top colors extracted:');
  sorted.slice(0, 20).forEach(([color, count]) => {
    console.log(`${color}: ${count}`);
  });
}

try {
  getPngPixels(file);
} catch (e) {
  console.error(e);
}
