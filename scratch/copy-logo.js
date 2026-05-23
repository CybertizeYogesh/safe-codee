const fs = require('fs');
const path = require('path');

const src = 'C:\\Users\\Yogesh Poonia\\.gemini\\antigravity\\brain\\7c6d6734-158e-4cba-afa9-75fad18d4ada\\media__1779469830740.png';
const dest = 'c:\\Users\\Yogesh Poonia\\Desktop\\new-website\\public\\assets\\img\\logo.png';

try {
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log('Logo copied successfully from', src, 'to', dest);
  } else {
    console.error('Source logo file does not exist at', src);
  }
} catch (e) {
  console.error('Error copying logo:', e);
}
