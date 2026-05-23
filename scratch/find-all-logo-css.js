const https = require('https');

https.get('https://www.indianbestpackersmovers.com/assets/css/style.css', (res) => {
  let css = '';
  res.on('data', chunk => css += chunk);
  res.on('end', () => {
    const lines = css.split('\n');
    lines.forEach((line, idx) => {
      if (line.toLowerCase().includes('logo')) {
        console.log(`--- Line ${idx + 1} ---`);
        console.log(lines.slice(Math.max(0, idx - 3), idx + 4).join('\n'));
      }
    });
  });
});
