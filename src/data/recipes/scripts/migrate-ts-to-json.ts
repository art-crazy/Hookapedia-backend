import * as fs from 'fs';
import * as path from 'path';
import { Recipe, RecipeCollection } from '../types';

// Translation dictionary (extended from translate-ingredient-names.js)
const translations: Record<string, string> = {
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

function translateIngredientName(name: string): string {
  return translations[name] || name;
}

function migrate() {
  const baseDir = path.join(__dirname, '../by-strength');
  const strengthCategories = ['legkaya-krepost', 'srednyaya-krepost', 'krepkaya-krepost'];

  strengthCategories.forEach(category => {
    const categoryPath = path.join(baseDir, category);
    if (!fs.existsSync(categoryPath)) return;

    const files = fs.readdirSync(categoryPath).filter(f => f.endsWith('.ts') && f !== 'index.ts');

    files.forEach(file => {
      const filePath = path.join(categoryPath, file);
      console.log(`Processing ${category}/${file}...`);

      try {
        // Dynamic require to load the TS file content
        // Note: This relies on ts-node being used to run this script
        const module = require(filePath);
        const recipes: RecipeCollection = module.recipes;

        if (!recipes) {
            console.warn(`No recipes found in ${filePath}`);
            return;
        }

        const recipeList = Object.values(recipes).map(recipe => {
          // Translate ingredients
          const translatedIngredients = recipe.ingredients.map(ing => ({
            ...ing,
            name: translateIngredientName(ing.name)
          }));

          return {
            ...recipe,
            ingredients: translatedIngredients
          };
        });

        const jsonContent = {
          recipes: recipeList
        };

        const jsonPath = filePath.replace('.ts', '.json');
        fs.writeFileSync(jsonPath, JSON.stringify(jsonContent, null, 2));
        console.log(`  -> Created ${jsonPath}`);

      } catch (err) {
        console.error(`Error processing ${filePath}:`, err);
      }
    });
  });
}

migrate();
