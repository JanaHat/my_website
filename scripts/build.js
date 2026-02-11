const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const publicDir = path.join(rootDir, 'public');
const distDir = path.join(rootDir, 'dist');

const copyDir = (src, dest) => {
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
};

const updateIndex = (filePath) => {
  let html = fs.readFileSync(filePath, 'utf8');
  html = html.replace('css/style.css', 'css/style.min.css');
  html = html.replace('main.js', 'main.min.js');
  fs.writeFileSync(filePath, html, 'utf8');
};

if (fs.existsSync(distDir)) {
  fs.rmSync(distDir, { recursive: true, force: true });
}

copyDir(publicDir, distDir);

const indexPath = path.join(distDir, 'index.html');
if (fs.existsSync(indexPath)) {
  updateIndex(indexPath);
}
