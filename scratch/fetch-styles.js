const https = require('https');

https.get('https://www.indianbestpackersmovers.com/about.html', (res) => {
  let html = '';
  res.on('data', chunk => html += chunk);
  res.on('end', () => {
    const linkRegex = /<link[^>]*rel="stylesheet"[^>]*href="([^"]+)"/g;
    let match;
    console.log('Stylesheets:');
    while ((match = linkRegex.exec(html)) !== null) {
      console.log(match[1]);
    }
  });
});
