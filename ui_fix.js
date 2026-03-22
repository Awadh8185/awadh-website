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
    let newContent = content;

    // Remove specific blue backgrounds and text everywhere
    newContent = newContent.replace(/bg-\[#0f172a\]\/80/g, 'bg-zinc-100');
    newContent = newContent.replace(/dark:bg-\[#0f172a\]/g, 'dark:bg-zinc-900');
    
    // Tone down the red text for icons in Skills that is currently text-red-500
    // Wait, let's fix the specific wrapper in Skills.tsx
    newContent = newContent.replace(/dark:text-red-500 rounded-lg hover:bg-blue-500\/10 hover:border-blue-500\/30 hover:text-blue-600 dark:hover:text-red-500/g, 'dark:text-zinc-300 rounded-lg hover:bg-red-500/10 dark:hover:bg-red-500/10 hover:border-red-500/30 hover:text-red-600 dark:hover:text-red-400');
    
    // Remove blue-500/10 backgrounds
    newContent = newContent.replace(/bg-blue-500\/10/g, 'bg-red-500/10');
    newContent = newContent.replace(/border-blue-500\/10/g, 'border-red-500/10');
    newContent = newContent.replace(/hover:border-blue-500\/30/g, 'hover:border-red-500/30');
    newContent = newContent.replace(/hover:border-blue-500\/50/g, 'hover:border-red-500/50');
    newContent = newContent.replace(/text-blue-600/g, 'text-red-600');
    newContent = newContent.replace(/dark:text-blue-400/g, 'dark:text-red-500');
    newContent = newContent.replace(/text-blue-500/g, 'text-red-500');
    newContent = newContent.replace(/text-blue-400/g, 'text-red-500');
    newContent = newContent.replace(/text-blue-900/g, 'text-red-600');
    newContent = newContent.replace(/text-blue-300/g, 'text-red-400');
    
    // Also, inside Skills.tsx where we had icon colors
    newContent = newContent.replace(/text-orange-400/g, 'text-red-500');
    newContent = newContent.replace(/text-purple-400/g, 'text-red-500');
    newContent = newContent.replace(/text-green-400/g, 'text-red-500');
    newContent = newContent.replace(/text-pink-400/g, 'text-red-500');
    
    newContent = newContent.replace(/bg-blue-600/g, 'bg-red-600');
    newContent = newContent.replace(/dark:bg-blue-400/g, 'dark:bg-red-500');
    newContent = newContent.replace(/border-blue-600/g, 'border-red-600');
    newContent = newContent.replace(/dark:border-blue-500/g, 'dark:border-red-500');

    // Button hover colors
    newContent = newContent.replace(/hover:bg-blue-600/g, 'hover:bg-red-600');
    newContent = newContent.replace(/dark:hover:bg-blue-500/g, 'dark:hover:bg-red-500');
    
    if (content !== newContent) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`Updated ${filePath}`);
    }
  }
});
