import { DataSource } from 'typeorm';
import { Recipe } from '@/entities/recipe.entity';
import { loadAllRecipes } from '@/data/recipes';

interface RecipeData {
  id: number;
  name: string;
  title: string;
  description: string;
  cookTime: string;
  difficulty: string;
  nutrition: {
    calories: { value: number; unit: string };
    protein: { value: number; unit: string };
    fat: { value: number; unit: string };
    carbs: { value: number; unit: string };
  };
  cuisine: string;
  servings: number;
  ingredients: Array<{
    name: string;
    amount: number;
    unit: string;
  }>;
  steps: Array<{
    image?: string;
    title: string;
    text: string;
  }>;
  imageMain: string;
  categories: string[];
  rating: number;
  reviews: number;
  flavorCategory?: string;
  mintCategory?: string;
  coolingCategory?: string;
  strengthCategory?: string;
}

export async function seedRecipes(dataSource: DataSource) {
  const recipeRepository = dataSource.getRepository(Recipe);

  console.log('Starting to load recipes from new hierarchical structure...');

  // Load all recipes using the new index system
  const allRecipes = loadAllRecipes();
  const recipeArray = Object.values(allRecipes);

  console.log(`Loaded ${recipeArray.length} recipes from new structure`);

  let created = 0;
  let updated = 0;
  let skipped = 0;

  for (const recipeData of recipeArray) {
    try {
      console.log(`Processing recipe: ${recipeData.title} (ID: ${recipeData.id})`);
      const existingRecipe = await recipeRepository.findOne({ where: { id: recipeData.id } });

      if (!existingRecipe) {
        console.log(`Creating new recipe: ${recipeData.title}`);

        // Create recipe with specific ID via raw query
        await recipeRepository.query(`
          INSERT INTO recipes (id, name, title, description, "cookTime", difficulty, nutrition, cuisine, servings, ingredients, steps, "imageMain", categories, rating, reviews, "flavorCategory", "mintCategory", "coolingCategory", "strengthCategory", "createdAt", "updatedAt")
          VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, NOW(), NOW())
        `, [
          recipeData.id, recipeData.name, recipeData.title, recipeData.description,
          recipeData.cookTime, recipeData.difficulty, JSON.stringify(recipeData.nutrition),
          recipeData.cuisine, recipeData.servings, JSON.stringify(recipeData.ingredients),
          JSON.stringify(recipeData.steps), recipeData.imageMain || '/mock.webp', recipeData.categories.join(','),
          recipeData.rating, recipeData.reviews,
          recipeData.flavorCategory, recipeData.mintCategory, recipeData.coolingCategory, recipeData.strengthCategory
        ]);
        console.log(`Recipe created with ID: ${recipeData.id}`);
        created++;
      } else {
        console.log(`Recipe already exists: ${recipeData.title} - skipping`);
        skipped++;
      }
    } catch (error) {
      console.error(`Error processing recipe ${recipeData.id}:`, error);
    }
  }

  console.log('\n=== Recipe seeding completed ===');
  console.log(`Created: ${created} recipes`);
  console.log(`Updated: ${updated} recipes`);
  console.log(`Skipped: ${skipped} recipes`);
  console.log(`Total processed: ${recipeArray.length} recipes`);
}
