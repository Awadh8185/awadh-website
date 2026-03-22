const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(dirPath);
  });
}

walkDir('c:\\Users\\awadh\\Videos\\pragat website\\src', (filePath) => {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Find all dark:*blue-* classes and replace with red
    let newContent = content.replace(/dark:([a-zA-Z:-]+)-blue-[0-9]+/g, 'dark:$1-red-500');
    
    // Also replace arbitrary hex codes in Hero.tsx
    newContent = newContent.replace(/dark:from-\[#[0-9a-fA-F]+\]/g, 'dark:from-red-600');
    newContent = newContent.replace(/dark:to-\[#[0-9a-fA-F]+\]/g, 'dark:to-red-400');

    // Also let's change pure background in some places from blue-900 to red-900
    newContent = newContent.replace(/dark:bg-blue-900/g, 'dark:bg-red-900');
    
    if (content !== newContent) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`Updated ${filePath}`);
    }
  }
});

let globalsCss = 'c:\\Users\\awadh\\Videos\\pragat website\\src\\app\\globals.css';
let globals = fs.readFileSync(globalsCss, 'utf8');
let newGlobals = globals.replace(/--background:\s*#[0-9a-fA-F]+;/g, (match, offset, str) => {
    // Only target the one inside .dark block
    let darkIndex = str.indexOf('.dark');
    if (darkIndex > -1 && offset > darkIndex) {
        return '--background: #000000;';
    }
    return match;
});
if (newGlobals !== globals) {
    fs.writeFileSync(globalsCss, newGlobals, 'utf8');
    console.log(`Updated globals.css`);
}
