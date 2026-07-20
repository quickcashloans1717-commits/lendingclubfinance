const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

function walk(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    const dirPath = path.join(dir, f);
    const isDirectory = fs.statSync(dirPath).isDirectory();
    if (isDirectory) {
      walk(dirPath, callback);
    } else {
      callback(path.join(dir, f));
    }
  });
}

const replacements = [
  { search: /\+1 \(818\) 252-9640/g, replace: '+1 (916)-957-4707' },
  { search: /\+1 \(818\) 252-9985/g, replace: '+1 (916)-957-4707' },
  { search: /595 Market St #200, San Francisco, CA 94105, USA/g, replace: '595 Market Street, Suite 200, San Francisco, CA 94105' },
  { search: /595 Market St #200/g, replace: '595 Market Street, Suite 200' },
  { search: /San Francisco, CA 94105, USA/g, replace: 'San Francisco, CA 94105' },
  { search: /United Capital Lending/g, replace: 'LendingClub Finance' }
];

walk(srcDir, (filePath) => {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
    let content = fs.readFileSync(filePath, 'utf-8');
    let modified = false;
    
    replacements.forEach(({search, replace}) => {
      if (search.test(content)) {
        content = content.replace(search, replace);
        modified = true;
      }
    });

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf-8');
      console.log(`Updated: ${filePath}`);
    }
  }
});
