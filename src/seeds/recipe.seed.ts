import { DataSource } from 'typeorm';
import { Recipe } from '@/entities/recipe.entity';
import { loadAllRecipes } from '@/data/recipes';
import { Recipe as RecipeType } from '@/data/recipes/types';

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
          INSERT INTO recipes (
            id, name, title, description, 
            "preparationTime", "smokingDuration", difficulty, "recipeType", persons, 
            ingredients, "bowlType", "packingMethod", charcoal, "smokeLevel", 
            steps, tips, "imageMain", tags, rating, reviews, likes,
            "flavorCategory", "mintCategory", "coolingCategory", "strengthCategory", 
            "updatedAt"
          )
          VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, NOW())
        `, [
          recipeData.id,
          recipeData.name,
          recipeData.title,
          recipeData.description,
          recipeData.preparationTime,
          recipeData.smokingDuration,
          recipeData.difficulty,
          recipeData.recipeType,
          recipeData.persons,
          JSON.stringify(recipeData.ingredients),
          recipeData.bowlType,
          recipeData.packingMethod,
          JSON.stringify(recipeData.charcoal),
          recipeData.smokeLevel,
          JSON.stringify(recipeData.steps),
          JSON.stringify(recipeData.tips || []),
          recipeData.imageMain || '/mock.webp',
          recipeData.tags.join(','), // Storing tags as comma-separated string for simple-array column
          recipeData.rating,
          recipeData.reviews,
          recipeData.likes,
          recipeData.flavorCategory,
          recipeData.mintCategory,
          recipeData.coolingCategory,
          recipeData.strengthCategory
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
