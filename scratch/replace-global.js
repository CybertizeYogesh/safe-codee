const fs = require('fs');
const path = require('path');

const replacements = [
  // Phone numbers - specific combinations first
  { search: /\+91\s*8005746241\s*\/\s*8094273586/g, replace: '+91 8095279595' },
  { search: /\+91\s*8005746241\s*\/[\s\S]*?8094273586/g, replace: '+91 8095279595' },
  { search: /8005746241/g, replace: '8095279595' },
  { search: /8094273586/g, replace: '8095279595' },
  { search: /08005746241/g, replace: '8095279595' },

  // Addresses - long strings first
  { search: /Plot\s+No\.\s+31,32,\s+Shri\s+Jagdishpuri,\s+Heerapura,\s+Ajmer\s+Road,\s+Jaipur\s+-\s+302021/gi, replace: '#30 near marthalli bridge Bangalore 560037' },
  { search: /Plot\s+No\.\s+31,32,\s+Shri\s+Jagdishpuri,\s+Heerapura,\s+Ajmer\s+Road/gi, replace: '#30 near marthalli bridge' },
  
  // Specific schema lines
  { search: /"streetAddress":\s*"Plot\s+No\.\s+31,32,\s+Shri\s+Jagdishpuri,\s+Heerapura,\s+Ajmer\s+Road"/gi, replace: '"streetAddress": "#30 near marthalli bridge"' },
  { search: /"addressLocality":\s*"Jaipur"/gi, replace: '"addressLocality": "Bangalore"' },
  { search: /"postalCode":\s*"302021"/gi, replace: '"postalCode": "560037"' },
  { search: /"addressRegion":\s*"Rajasthan"/gi, replace: '"addressRegion": "Karnataka"' },

  // Company Name
  { search: /Indian\s+Best\s+Packers\s+&\s+Movers\s+Jaipur/gi, replace: 'Agarwal On Time Cargo Packers & Movers' },
  { search: /Indian\s+Best\s+Packers\s+and\s+Movers\s+Jaipur/gi, replace: 'Agarwal On Time Cargo Packers and Movers' },
  { search: /Indian\s+Best\s+Packers\s+&amp;\s+Movers\s+Jaipur/gi, replace: 'Agarwal On Time Cargo Packers &amp; Movers' },
  { search: /Indian\s+Best\s+Packers\s+&\s+Movers/gi, replace: 'Agarwal On Time Cargo Packers & Movers' },
  { search: /Indian\s+Best\s+Packers\s+and\s+Movers/gi, replace: 'Agarwal On Time Cargo Packers and Movers' },
  { search: /Indian\s+Best\s+Packers\s+&amp;\s+Movers/gi, replace: 'Agarwal On Time Cargo Packers &amp; Movers' },
  { search: /Indian\s+Best\s+Packers/gi, replace: 'Agarwal On Time Cargo Packers' }
];

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    if (isDirectory) {
      if (f !== 'node_modules' && f !== '.next' && f !== '.git') {
        walkDir(dirPath, callback);
      }
    } else {
      callback(dirPath);
    }
  });
}

const targetDir = 'c:\\Users\\Yogesh Poonia\\Desktop\\new-website\\src';
let modifiedCount = 0;

walkDir(targetDir, (filePath) => {
  const ext = path.extname(filePath);
  if (['.js', '.jsx', '.json', '.css'].includes(ext)) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    for (const r of replacements) {
      content = content.replace(r.search, r.replace);
    }

    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log('Modified:', filePath);
      modifiedCount++;
    }
  }
});

console.log(`Finished replacement. Total files modified: ${modifiedCount}`);
