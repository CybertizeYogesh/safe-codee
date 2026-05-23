const https = require('https');

const pages = [
  'about.html',
  'house.html',
  'transport.html',
  'packing.html',
  'domestic.html',
  'car.html',
  'warehousing.html',
  'office.html',
  'air.html',
  'sea.html',
  'branches.html',
  'gallery.html',
  'faq.html',
  'contact.html',
  'payment.html',
  'packers-and-movers-jagatpura-jaipur.html'
];

function fetchPage(page) {
  return new Promise((resolve) => {
    https.get(`https://www.indianbestpackersmovers.com/${page}`, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => {
        const match = data.match(/class="breadcumb-wrapper"[^>]*data-bg-src="([^"]+)"/i);
        if (match) {
          resolve({ page, bg: match[1] });
        } else {
          // try alternative regex
          const match2 = data.match(/breadcumb-wrapper[^>]*background-image:[^;]*url\(([^)]+)\)/i);
          if (match2) {
            resolve({ page, bg: match2[1] });
          } else {
            resolve({ page, bg: 'Not Found' });
          }
        }
      });
    }).on('error', (err) => {
      resolve({ page, bg: 'Error: ' + err.message });
    });
  });
}

async function run() {
  console.log('Checking background images on original website...');
  for (const page of pages) {
    const res = await fetchPage(page);
    console.log(`${res.page} : ${res.bg}`);
  }
}

run();
