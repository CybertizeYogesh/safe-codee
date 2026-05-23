const fs = require('fs');

const file = 'c:\\Users\\Yogesh Poonia\\Desktop\\new-website\\public\\assets\\img\\logo.png';

try {
  const buffer = fs.readFileSync(file);
  // PNG width is at offset 16 (4 bytes), height is at offset 20 (4 bytes)
  const width = buffer.readUInt32BE(16);
  const height = buffer.readUInt32BE(20);
  console.log(`PNG Dimensions: ${width}x${height}`);
  console.log(`Aspect Ratio: ${width / height}`);
} catch (e) {
  console.error('Error reading PNG:', e);
}
