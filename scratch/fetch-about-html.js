const https = require('https');

https.get('https://www.indianbestpackersmovers.com/about.html', (res) => {
  let html = '';
  res.on('data', chunk => html += chunk);
  res.on('end', () => {
    // Find the breadcumb-wrapper block
    const startIndex = html.indexOf('class="breadcumb-wrapper"');
    if (startIndex !== -1) {
      console.log(html.substring(startIndex - 20, startIndex + 1500));
    } else {
      console.log('breadcumb-wrapper not found');
    }
  });
});
