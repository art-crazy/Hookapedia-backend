/**
 * Script to translate ingredient names to Russian
 */

const fs = require('fs');
const path = require('path');

// English to Russian translations for tobacco flavors
const translations = {
  // Desserts
  'Vanilla Sky': 'Ванильное Небо',
  'Vanilla': 'Ваниль',
  'Caramel': 'Карамель',
  'Chocolate': 'Шоколад',
  'Cream': 'Крем',
  'Cookie': 'Печенье',
  'Cookie Dough': 'Тесто для печенья',
  'Milk': 'Молоко',
  'Ice Cream': 'Мороженое',

  // Fruits
  'Apple': 'Яблоко',
  'Pear': 'Груша',
  'Peach': 'Персик',
  'Nectarine': 'Нектарин',
  'Grape': 'Виноград',
  'Melon': 'Дыня',
  'Watermelon': 'Арбуз',

  // Berries
  'Raspberry': 'Малина',
  'Blueberry': 'Черника',
  'Strawberry': 'Клубника',
  'Blackberry': 'Ежевика',
  'Cherry': 'Вишня',
  'Currant': 'Смородина',

  // Citrus
  'Orange': 'Апельсин',
  'Tangerine': 'Мандарин',
  'Lemon': 'Лимон',
  'Lime': 'Лайм',
  'Grapefruit': 'Грейпфрут',
  'Pomelo': 'Помело',

  // Exotic
  'Mango': 'Манго',
  'Papaya': 'Папайя',
  'Lychee': 'Личи',
  'Rambutan': 'Рамбутан',
  'Guava': 'Гуава',
  'Starfruit': 'Карамбола',
  'Passion Fruit': 'Маракуйя',
  'Dragon Fruit': 'Питайя',

  // Herbs & Spices
  'Mint': 'Мята',
  'Ice Mint': 'Ледяная Мята',
  'Eucalyptus': 'Эвкалипт',
  'Cinnamon': 'Корица',
  'Clove': 'Гвоздика',
  'Basil': 'Базилик',
  'Thyme': 'Тимьян',

  // Ice/Cooling
  'Ice': 'Лед',
  'Light Ice': 'Легкий Лед',
  'Strong Ice': 'Сильный Лед',
  'Extreme Ice': 'Экстремальный Лед'
};

function translateIngredients(content) {
  Object.keys(translations).forEach(english => {
    const russian = translations[english];

    // Replace "name: 'English Name'" with "name: 'Русское Название'"
    const regex = new RegExp(`(name:\\s*)'${english}'`, 'g');
    content = content.replace(regex, `$1'${russian}'`);
  });

  return content;
}

function processFile(filePath) {
  console.log(`Processing: ${filePath}`);

  let content = fs.readFileSync(filePath, 'utf-8');
  content = translateIngredients(content);
  fs.writeFileSync(filePath, content, 'utf-8');

  console.log(`  ✓ Updated`);
}

// Process all recipe files
const recipesDir = path.join(__dirname, 'by-strength');
const strengthDirs = ['legkaya-krepost', 'srednyaya-krepost', 'krepkaya-krepost'];
const flavorFiles = ['deserty.ts', 'ekzotika.ts', 'frukty.ts', 'pryanosti-travy.ts', 'tsitrusovye.ts', 'yagody.ts'];

console.log('Translating ingredient names to Russian...\n');

strengthDirs.forEach(strengthDir => {
  flavorFiles.forEach(flavorFile => {
    const filePath = path.join(recipesDir, strengthDir, flavorFile);
    if (fs.existsSync(filePath)) {
      processFile(filePath);
    }
  });
});

console.log('\n✓ All files updated!');
