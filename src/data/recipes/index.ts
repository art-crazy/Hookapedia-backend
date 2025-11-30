import { RecipeCollection } from './types';
import * as fs from 'fs';
import * as path from 'path';

/**
 * Dynamically loads all recipe files from the by-strength directory structure
 * and merges them into a single collection
 */
export function loadAllRecipes(): RecipeCollection {
  const allRecipes: RecipeCollection = {};
  const strengthDir = path.join(__dirname, 'by-strength');

  // Get all strength categories (legkaya-krepost, srednyaya-krepost, krepkaya-krepost)
  const strengthCategories = fs.readdirSync(strengthDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

  // Load recipes from each strength category
  for (const strengthCategory of strengthCategories) {
    const categoryPath = path.join(strengthDir, strengthCategory);
    const flavorFiles = fs.readdirSync(categoryPath)
      .filter(file => file.endsWith('.json'));

    // Load each flavor category file
    for (const flavorFile of flavorFiles) {
      const filePath = path.join(categoryPath, flavorFile);
      try {
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        const { recipes } = JSON.parse(fileContent);

        if (Array.isArray(recipes)) {
          recipes.forEach((recipe: any) => {
            allRecipes[recipe.id] = recipe;
          });
          console.log(`Loaded ${recipes.length} recipes from ${strengthCategory}/${flavorFile}`);
        }

      } catch (error) {
        console.error(`Error loading recipes from ${filePath}:`, error);
      }
    }
  }

  console.log(`Total recipes loaded: ${Object.keys(allRecipes).length}`);
  return allRecipes;
}

// Export for direct import
export const recipes = loadAllRecipes();
export { RecipeCollection, Recipe, Unit } from './types';
