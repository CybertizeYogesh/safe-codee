const https = require('https');

https.get('https://www.indianbestpackersmovers.com/about.html', (res) => {
  let html = '';
  res.on('data', chunk => html += chunk);
  res.on('end', () => {
    const lines = html.split('\n');
    lines.forEach((line, idx) => {
      if (line.includes('logo.webp')) {
        console.log(`${idx + 1}: ${line.trim()}`);
      }
    });
  });
});
