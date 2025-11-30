/**
 * Script to add strength field to all recipes based on strengthCategory
 */

const fs = require('fs');
const path = require('path');

const strengthMap = {
  'legkaya-krepost': 3,
  'srednyaya-krepost': 6,
  'krepkaya-krepost': 9
};

function processFile(filePath) {
  console.log(`Processing: ${filePath}`);

  let content = fs.readFileSync(filePath, 'utf-8');

  // For each strengthCategory, add strength field before it
  Object.keys(strengthMap).forEach(category => {
    const strength = strengthMap[category];

    // Pattern: find strengthCategory without preceding strength
    const regex = new RegExp(
      `(\\s+)(strengthCategory: '${category}',)(?!\\n\\s+strength:)`,
      'g'
    );

    content = content.replace(
      regex,
      `$1strength: ${strength},\n$1$2`
    );
  });

  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`  ✓ Updated`);
}

// Process all recipe files
const recipesDir = path.join(__dirname, 'by-strength');
const strengthDirs = ['legkaya-krepost', 'srednyaya-krepost', 'krepkaya-krepost'];
const flavorFiles = ['deserty.ts', 'ekzotika.ts', 'frukty.ts', 'pryanosti-travy.ts', 'tsitrusovye.ts', 'yagody.ts'];

console.log('Adding strength field to all recipes...\n');

strengthDirs.forEach(strengthDir => {
  flavorFiles.forEach(flavorFile => {
    const filePath = path.join(recipesDir, strengthDir, flavorFile);
    if (fs.existsSync(filePath)) {
      processFile(filePath);
    }
  });
});

console.log('\n✓ All files updated!');
