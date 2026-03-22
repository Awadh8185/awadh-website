const fs = require('fs');

function replaceInFile(filePath, replacements) {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;
  for (let [search, replace] of replacements) {
    content = content.split(search).join(replace);
  }
  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${filePath}`);
  }
}

// Fix Hero.tsx
replaceInFile('c:\\Users\\awadh\\Videos\\pragat website\\src\\components\\Hero.tsx', [
  ['dark:bg-red-500/10', 'dark:bg-white/5'],
  ['dark:from-red-600 dark:to-red-400', 'dark:from-white dark:to-neutral-400'],
  ['text-red-600 dark:text-red-500', 'text-foreground dark:text-white']
]);

// Fix Skills.tsx (Clean out the overly aggressive reds in all icons)
let skillsPath = 'c:\\Users\\awadh\\Videos\\pragat website\\src\\components\\Skills.tsx';
let skillsContent = fs.readFileSync(skillsPath, 'utf8');
let skillsModified = skillsContent.replace(/className="w-([45]) h-\1 text-[a-z]+-[0-9]+"/g, 'className="w-$1 h-$1 text-foreground/70 dark:text-zinc-400"');
skillsModified = skillsModified.replace(/<span className="text-red-600 dark:text-red-500">Skills<\/span>/g, '<span className="text-foreground dark:text-white">Skills</span>');
skillsModified = skillsModified.replace(/bg-red-600 dark:bg-red-500 mx-auto/g, 'bg-foreground dark:bg-white mx-auto');
if (skillsModified !== skillsContent) {
  fs.writeFileSync(skillsPath, skillsModified, 'utf8');
  console.log(`Updated ${skillsPath}`);
}

// Fix Projects.tsx
replaceInFile('c:\\Users\\awadh\\Videos\\pragat website\\src\\components\\Projects.tsx', [
  ['text-red-600 dark:text-red-400', 'text-foreground dark:text-white'],
  ['text-red-600 dark:text-red-500', 'text-foreground dark:text-white'],
  ['group-hover:text-red-600 dark:group-hover:text-red-400', 'group-hover:text-foreground dark:group-hover:text-white'],
  ['hover:border-red-500/50', 'hover:border-white/20'],
  ['bg-red-600 dark:bg-red-400 mx-auto rounded-full', 'bg-foreground dark:bg-white mx-auto rounded-full'],
  ['bg-red-600 dark:bg-red-500 mx-auto rounded-full', 'bg-foreground dark:bg-white mx-auto rounded-full'],
  ['<span className="text-red-600 dark:text-red-400">Projects', '<span className="text-foreground dark:text-white">Projects'],
  ['text-red-600 dark:text-red-400 mb-2', 'text-foreground/50 dark:text-zinc-400 mb-2']
]);

// Fix About.tsx
replaceInFile('c:\\Users\\awadh\\Videos\\pragat website\\src\\components\\About.tsx', [
  ['text-red-600 dark:text-red-400', 'text-foreground dark:text-white'],
  ['bg-red-600 dark:bg-red-400', 'bg-foreground dark:bg-white'],
  ['text-red-600 dark:text-red-500', 'text-foreground dark:text-white'],
  ['bg-red-600 dark:bg-red-500', 'bg-foreground dark:bg-white'],
]);

// Fix Education.tsx
replaceInFile('c:\\Users\\awadh\\Videos\\pragat website\\src\\components\\Education.tsx', [
  ['text-red-600 dark:text-red-400', 'text-foreground dark:text-white'],
  ['bg-red-600 dark:bg-red-400', 'bg-foreground dark:bg-white'],
  ['text-red-600 dark:text-red-500', 'text-foreground dark:text-white'],
  ['bg-red-600 dark:bg-red-500', 'bg-foreground dark:bg-white'],
  ['bg-red-600 border-4', 'bg-foreground dark:bg-white border-4'],
]);

// Fix Achievements.tsx
replaceInFile('c:\\Users\\awadh\\Videos\\pragat website\\src\\components\\Achievements.tsx', [
  ['text-red-600 dark:text-red-400', 'text-foreground dark:text-white'],
  ['bg-red-600 dark:bg-red-400', 'bg-foreground dark:bg-white'],
  ['text-red-600 dark:text-red-500', 'text-foreground dark:text-white'],
  ['bg-red-600 dark:bg-red-500', 'bg-foreground dark:bg-white'],
]);

// Fix Certifications.tsx
replaceInFile('c:\\Users\\awadh\\Videos\\pragat website\\src\\components\\Certifications.tsx', [
  ['text-red-600 dark:text-red-400', 'text-foreground dark:text-white'],
  ['bg-red-600 dark:bg-red-400', 'bg-foreground dark:bg-white'],
  ['text-red-600 dark:text-red-500', 'text-foreground dark:text-white'],
  ['bg-red-600 dark:bg-red-500', 'bg-foreground dark:bg-white'],
]);

// Fix Contact.tsx
replaceInFile('c:\\Users\\awadh\\Videos\\pragat website\\src\\components\\Contact.tsx', [
  ['text-red-600 dark:text-red-400', 'text-foreground dark:text-white'],
  ['bg-red-600 dark:bg-red-400', 'bg-foreground dark:bg-white'],
  ['text-red-600 dark:text-red-500', 'text-foreground dark:text-white'],
  ['bg-red-600 dark:bg-red-500', 'bg-foreground dark:bg-white'],
  ['hover:text-red-600 dark:hover:text-red-400', 'hover:text-foreground dark:hover:text-white'],
  ['border-red-600 dark:border-red-500', 'border-foreground dark:border-white/20'],
]);
