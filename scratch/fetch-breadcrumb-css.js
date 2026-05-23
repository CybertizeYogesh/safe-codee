const https = require('https');

function fetchCss(url) {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', () => resolve(''));
  });
}

async function run() {
  const urls = [
    'https://www.indianbestpackersmovers.com/assets/css/app.min.css',
    'https://www.indianbestpackersmovers.com/assets/css/style.css'
  ];

  for (const url of urls) {
    console.log(`=== FETCHING ${url} ===`);
    const css = await fetchCss(url);
    // Find all CSS rules containing breadcumb
    // We can do a regex or scan for lines
    const lines = css.split('\n');
    let matchedLines = [];
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].includes('breadcumb') || lines[i].includes('bread') || lines[i].includes('bg-src')) {
        matchedLines.push({ lineNum: i + 1, content: lines[i].trim() });
      }
    }
    console.log(`Found ${matchedLines.length} matches`);
    matchedLines.slice(0, 100).forEach(m => {
      console.log(`${m.lineNum}: ${m.content.substring(0, 300)}`);
    });
  }
}

run();
