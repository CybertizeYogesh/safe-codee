const https = require('https');

https.get('https://www.indianbestpackersmovers.com/assets/css/style.css', (res) => {
  let css = '';
  res.on('data', chunk => css += chunk);
  res.on('end', () => {
    const lines = css.split('\n');
    const matches = [];
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].includes('th-header') || lines[i].includes('header-layout')) {
        matches.push(`${i+1}: ${lines[i].trim()}`);
      }
    }
    console.log(`Found ${matches.length} header-related lines`);
    console.log(matches.slice(0, 100).join('\n'));
  });
});
