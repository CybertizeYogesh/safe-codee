const https = require('https');

https.get('https://www.indianbestpackersmovers.com/assets/css/style.css', (res) => {
  let css = '';
  res.on('data', chunk => css += chunk);
  res.on('end', () => {
    const lines = css.split('\n');
    console.log(lines.slice(2470, 2485).join('\n'));
    console.log('\n=========================\n');
    console.log(lines.slice(6290, 6495).join('\n'));
  });
});
