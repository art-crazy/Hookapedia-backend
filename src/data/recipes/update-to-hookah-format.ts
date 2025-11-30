/**
 * Script to update all recipes from food format to hookah format
 * This script reads all recipe files and updates them with proper hookah-specific data
 */

import * as fs from 'fs';
import * as path from 'path';

// Popular hookah tobacco brands
const BRANDS = [
  'Darkside', 'Adalya', 'Fumari', 'Tangiers', 'Azure',
  'Element', 'Duft', 'Chaos', 'Must Have', 'Северный',
  'Burn', 'Satyr', 'BlackBurn', 'Daily Hookah', 'Daly'
];

// Tobacco types by strength
const TOBACCO_TYPES = {
  'legkaya-krepost': 'Virginia',
  'srednyaya-krepost': 'Burley',
  'krepkaya-krepost': 'Dark Blend'
};

// Bowl types
const BOWL_TYPES = ['Phunnel', 'Funnel', 'Egyptian', 'Силиконовая Phunnel', 'Глиняная Phunnel'];

// Packing methods
const PACKING_METHODS = ['Воздушная', 'Плотная', 'Оверпак'];

// Smoke levels
const SMOKE_LEVELS = ['Низкий', 'Средний', 'Высокий'];

// Recipe types by flavor category
const RECIPE_TYPES = {
  'frukty': 'Фруктовый',
  'yagody': 'Ягодный',
  'tsitrusovye': 'Цитрусовый',
  'deserty': 'Десертный',
  'pryanosti-travy': 'Пряный',
  'ekzotika': 'Экзотический'
};

// Get random element from array
function randomChoice<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Generate tags based on recipe data
function generateTags(recipe: any): string[] {
  const tags: string[] = [];

  // Add flavor category
  if (recipe.flavorCategory) {
    const flavorNames = {
      'frukty': 'фрукты',
      'yagody': 'ягоды',
      'tsitrusovye': 'цитрус',
      'deserty': 'десерт',
      'pryanosti-travy': 'пряности',
      'ekzotika': 'экзотика'
    };
    tags.push(flavorNames[recipe.flavorCategory] || recipe.flavorCategory);
  }

  // Add strength
  if (recipe.strengthCategory) {
    const strengthNames = {
      'legkaya-krepost': 'легкая',
      'srednyaya-krepost': 'средняя',
      'krepkaya-krepost': 'крепкая'
    };
    tags.push(strengthNames[recipe.strengthCategory] || recipe.strengthCategory);
  }

  // Add mint/cooling
  if (recipe.mintCategory === 's-myatoy') tags.push('мята');
  if (recipe.coolingCategory === 'legkiy-kholod') tags.push('холодок');
  if (recipe.coolingCategory === 'silnyy-kholod') tags.push('ледяной');

  // Add time of day based on strength
  if (recipe.strengthCategory === 'legkaya-krepost') {
    tags.push('дневной', 'для начинающих');
  } else if (recipe.strengthCategory === 'krepkaya-krepost') {
    tags.push('вечерний', 'для опытных');
  }

  return tags;
}

// Generate tips based on recipe data
function generateTips(recipe: any): string[] {
  const tips: string[] = [];

  // General tips
  tips.push('Тщательно перемешайте табак перед забивкой');

  // Strength-based tips
  if (recipe.strengthCategory === 'legkaya-krepost') {
    tips.push('Идеально подходит для дневного курения');
    tips.push('Подойдет для новичков в кальянной культуре');
  } else if (recipe.strengthCategory === 'krepkaya-krepost') {
    tips.push('Не рекомендуется для новичков');
    tips.push('Лучше курить на полный желудок');
  }

  // Cooling tips
  if (recipe.coolingCategory !== 'bez-kholoda') {
    tips.push('Добавьте лёд в колбу для усиления эффекта холодка');
  }

  // Mint tips
  if (recipe.mintCategory === 's-myatoy') {
    tips.push('Мята добавляет освежающий оттенок');
  }

  // Packing tip
  tips.push('Не утрамбовывайте табак слишком плотно');

  return tips.slice(0, 3); // Return max 3 tips
}

// Convert old ingredient to new hookah ingredient
function convertIngredient(oldIngredient: any, index: number, total: number, strengthCategory: string): any {
  const name = oldIngredient.name.replace('Табак ', '');
  const brand = randomChoice(BRANDS);
  const tobaccoType = TOBACCO_TYPES[strengthCategory] || 'Virginia';

  // Calculate percentage - should sum to 100%
  let percentage: number;
  if (total === 1) {
    percentage = 100;
  } else if (total === 2) {
    percentage = index === 0 ? 60 : 40;
  } else if (total === 3) {
    percentage = index === 0 ? 50 : (index === 1 ? 30 : 20);
  } else if (total === 4) {
    percentage = index === 0 ? 40 : (index === 1 ? 30 : (index === 2 ? 20 : 10));
  } else {
    percentage = index === 0 ? 35 : Math.floor((65 / (total - 1)));
  }

  return {
    name,
    brand,
    percentage,
    tobaccoType,
    amount: oldIngredient.amount,
    unit: oldIngredient.unit
  };
}

// Update single recipe object
function updateRecipe(oldRecipe: any): any {
  // Filter out tobacco ingredients only
  const tobaccoIngredients = oldRecipe.ingredients.filter((ing: any) =>
    ing.name.includes('Табак') ||
    ing.name.includes('табак')
  );

  const newIngredients = tobaccoIngredients.map((ing: any, index: number) =>
    convertIngredient(ing, index, tobaccoIngredients.length, oldRecipe.strengthCategory)
  );

  // Determine bowl type and packing based on strength
  let bowlType, packingMethod, smokeLevel;
  if (oldRecipe.strengthCategory === 'legkaya-krepost') {
    bowlType = randomChoice(['Phunnel', 'Funnel']);
    packingMethod = 'Воздушная';
    smokeLevel = randomChoice(['Средний', 'Высокий']);
  } else if (oldRecipe.strengthCategory === 'srednyaya-krepost') {
    bowlType = randomChoice(['Phunnel', 'Силиконовая Phunnel']);
    packingMethod = randomChoice(['Воздушная', 'Плотная']);
    smokeLevel = 'Высокий';
  } else {
    bowlType = randomChoice(['Phunnel', 'Глиняная Phunnel']);
    packingMethod = randomChoice(['Плотная', 'Оверпак']);
    smokeLevel = 'Высокий';
  }

  return {
    id: oldRecipe.id,
    name: oldRecipe.name,
    title: oldRecipe.title,
    description: oldRecipe.description,
    preparationTime: '10-15 минут',
    smokingDuration: oldRecipe.strengthCategory === 'legkaya-krepost' ? '40-50 минут' :
                     oldRecipe.strengthCategory === 'srednyaya-krepost' ? '50-60 минут' : '60-75 минут',
    difficulty: oldRecipe.difficulty === '1/5' ? 'Легко' :
                oldRecipe.difficulty === '2/5' ? 'Легко' :
                oldRecipe.difficulty === '3/5' ? 'Средне' : 'Сложно',
    recipeType: RECIPE_TYPES[oldRecipe.flavorCategory] || 'Фруктовый',
    persons: oldRecipe.strengthCategory === 'legkaya-krepost' ? 1 :
             oldRecipe.strengthCategory === 'srednyaya-krepost' ? 2 : 2,
    ingredients: newIngredients,
    bowlType,
    packingMethod,
    charcoal: {
      type: 'Кокосовый',
      brand: randomChoice(['Cocobrico', 'Tom Cococha', 'Blackcoco\'s']),
      pieces: oldRecipe.strengthCategory === 'legkaya-krepost' ? 2 : 3,
      size: '25мм куб'
    },
    smokeLevel,
    steps: oldRecipe.steps,
    tips: generateTips(oldRecipe),
    imageMain: oldRecipe.imageMain || '/mock.webp',
    tags: generateTags(oldRecipe),
    rating: oldRecipe.rating,
    reviews: oldRecipe.reviews,
    likes: Math.floor(oldRecipe.reviews * (0.3 + Math.random() * 0.5)), // Generate likes based on reviews
    flavorCategory: oldRecipe.flavorCategory,
    mintCategory: oldRecipe.mintCategory,
    coolingCategory: oldRecipe.coolingCategory,
    strengthCategory: oldRecipe.strengthCategory
  };
}

// Process a single file
function processFile(filePath: string): void {
  console.log(`Processing: ${filePath}`);

  const content = fs.readFileSync(filePath, 'utf-8');

  // Extract the recipes object
  const recipesMatch = content.match(/export const recipes: RecipeCollection = ({[\s\S]*});/);
  if (!recipesMatch) {
    console.log(`  Skipped (no recipes found)`);
    return;
  }

  // Use eval to parse the object (be careful with this in production!)
  // For a safer approach, you might want to use a proper TypeScript parser
  let recipes: any;
  try {
    // Create a temporary function to execute the code safely
    const Unit = {
      g: 'г',
      ml: 'мл',
      pcs: 'шт.',
      tbsp: 'ст. л.',
      tsp: 'ч. л.',
      to_taste: 'по вкусу',
      kcal: 'ккал',
      l: 'л',
      pinch: 'щепотка',
    };

    eval(`recipes = ${recipesMatch[1]}`);
  } catch (error) {
    console.log(`  Error parsing: ${error.message}`);
    return;
  }

  // Update all recipes
  const updatedRecipes: any = {};
  for (const [id, recipe] of Object.entries(recipes)) {
    updatedRecipes[id] = updateRecipe(recipe);
  }

  // Generate new file content
  const newContent = `import { Recipe, RecipeCollection, Unit } from '../../types';

export const recipes: RecipeCollection = ${JSON.stringify(updatedRecipes, null, 2)
    .replace(/"([^"]+)":/g, '$1:')  // Remove quotes from keys
    .replace(/: "Unit\.(\w+)"/g, ': Unit.$1')  // Fix Unit enum references
    .replace(/: "(\w+)"/g, (match, p1) => {
      // Keep strings as strings, but enum values without quotes
      if (['g', 'ml', 'pcs', 'tbsp', 'tsp', 'to_taste', 'kcal', 'l', 'pinch'].includes(p1)) {
        return `: Unit.${p1}`;
      }
      return match;
    })
};
`;

  // Write back to file
  fs.writeFileSync(filePath, newContent, 'utf-8');
  console.log(`  ✓ Updated ${Object.keys(updatedRecipes).length} recipes`);
}

// Main execution
function main() {
  const recipesDir = path.join(__dirname, 'by-strength');
  const strengthDirs = ['legkaya-krepost', 'srednyaya-krepost', 'krepkaya-krepost'];
  const flavorFiles = ['deserty.ts', 'ekzotika.ts', 'frukty.ts', 'pryanosti-travy.ts', 'tsitrusovye.ts', 'yagody.ts'];

  console.log('Starting recipe update process...\n');

  let totalUpdated = 0;
  for (const strengthDir of strengthDirs) {
    for (const flavorFile of flavorFiles) {
      const filePath = path.join(recipesDir, strengthDir, flavorFile);
      if (fs.existsSync(filePath)) {
        processFile(filePath);
        totalUpdated++;
      }
    }
  }

  console.log(`\n✓ Process complete! Updated ${totalUpdated} files.`);
}

// Run the script
main();
