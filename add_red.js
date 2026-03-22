const fs = require('fs');

function replaceInFile(filePath, replacements) {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;
  for (let [search, replace] of replacements) {
    if (search instanceof RegExp) {
        content = content.replace(search, replace);
    } else {
        content = content.split(search).join(replace);
    }
  }
  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${filePath}`);
  }
}

// 1. Hero.tsx
replaceInFile('c:\\Users\\awadh\\Videos\\pragat website\\src\\components\\Hero.tsx', [
  // Restore red gradient text for Awadh Kishor
  ['dark:from-white dark:to-neutral-400', 'dark:from-red-600 dark:to-red-500'],
  // Make the spinning ball red instead of white
  // Using pure #ef4444 for Tailwind red-500
  ['#ffffff_360deg', '#ef4444_360deg']
]);

// 2. Skills.tsx
replaceInFile('c:\\Users\\awadh\\Videos\\pragat website\\src\\components\\Skills.tsx', [
  // Restore the red specific icons
  [/className="w-([45]) h-\1 text-foreground\/70 dark:text-zinc-400"/g, 'className="w-$1 h-$1 text-red-600 dark:text-red-500"'],
  // Replace ball color
  ['#ffffff_360deg', '#ef4444_360deg'],
  // Restore main red header
  ['<span className="text-foreground dark:text-white">Skills</span>', '<span className="text-red-600 dark:text-red-500">Skills</span>'],
  ['bg-foreground dark:bg-white mx-auto', 'bg-red-600 dark:bg-red-500 mx-auto']
]);

// 3. Projects.tsx
replaceInFile('c:\\Users\\awadh\\Videos\\pragat website\\src\\components\\Projects.tsx', [
  ['<span className="text-foreground dark:text-white">Projects', '<span className="text-red-600 dark:text-red-500">Projects'],
  ['bg-foreground dark:bg-white mx-auto rounded-full', 'bg-red-600 dark:bg-red-500 mx-auto rounded-full'],
  ['group-hover:text-foreground dark:group-hover:text-white', 'group-hover:text-red-600 dark:group-hover:text-red-500'],
  ['text-foreground/50 dark:text-zinc-400 mb-2', 'text-red-600 dark:text-red-500 mb-2']
]);

// 4. About.tsx
replaceInFile('c:\\Users\\awadh\\Videos\\pragat website\\src\\components\\About.tsx', [
  ['text-foreground dark:text-white', 'text-red-600 dark:text-red-500'],
  ['bg-foreground dark:bg-white', 'bg-red-600 dark:bg-red-500']
]);

// 5. Education.tsx
replaceInFile('c:\\Users\\awadh\\Videos\\pragat website\\src\\components\\Education.tsx', [
  ['text-foreground dark:text-white', 'text-red-600 dark:text-red-500'],
  ['bg-foreground dark:bg-white', 'bg-red-600 dark:bg-red-500'],
  ['bg-foreground dark:bg-white border-4', 'bg-red-600 dark:bg-red-500 border-4']
]);

// 6. Achievements.tsx
replaceInFile('c:\\Users\\awadh\\Videos\\pragat website\\src\\components\\Achievements.tsx', [
  ['text-foreground dark:text-white', 'text-red-600 dark:text-red-500'],
  ['bg-foreground dark:bg-white', 'bg-red-600 dark:bg-red-500']
]);

// 7. Certifications.tsx
replaceInFile('c:\\Users\\awadh\\Videos\\pragat website\\src\\components\\Certifications.tsx', [
  ['text-foreground dark:text-white', 'text-red-600 dark:text-red-500'],
  ['bg-foreground dark:bg-white', 'bg-red-600 dark:bg-red-500']
]);

// 8. Contact.tsx
replaceInFile('c:\\Users\\awadh\\Videos\\pragat website\\src\\components\\Contact.tsx', [
  ['hover:text-foreground dark:hover:text-white', 'hover:text-red-600 dark:hover:text-red-500']
]);

