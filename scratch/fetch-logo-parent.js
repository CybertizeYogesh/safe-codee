const https = require('https');

https.get('https://www.indianbestpackersmovers.com/about.html', (res) => {
  let html = '';
  res.on('data', chunk => html += chunk);
  res.on('end', () => {
    const idx = html.indexOf('class="header-logo"');
    if (idx !== -1) {
      console.log(html.substring(idx - 150, idx + 400));
    }
  });
});
