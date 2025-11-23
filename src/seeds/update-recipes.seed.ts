import { DataSource } from 'typeorm';
import { Recipe } from '@/entities/recipe.entity';
import { loadAllRecipes } from '@/data/recipes';

export async function updateRecipes(dataSource: DataSource) {
  const recipeRepository = dataSource.getRepository(Recipe);

  console.log('Starting to update recipes with new titles...');

  const allRecipes = loadAllRecipes();
  const recipeArray = Object.values(allRecipes);

  console.log(`Loaded ${recipeArray.length} recipes from files`);

  let updated = 0;

  for (const recipeData of recipeArray) {
    try {
      console.log(`Updating recipe ID ${recipeData.id}: ${recipeData.title}`);

      await recipeRepository.query(`
        UPDATE recipes
        SET
          title = $1,
          description = $2,
          name = $3,
          ingredients = $4,
          "updatedAt" = NOW()
        WHERE id = $5
      `, [
        recipeData.title,
        recipeData.description,
        recipeData.name,
        JSON.stringify(recipeData.ingredients),
        recipeData.id
      ]);

      updated++;
    } catch (error) {
      console.error(`Error updating recipe ${recipeData.id}:`, error);
    }
  }

  console.log('\n=== Recipe update completed ===');
  console.log(`Updated: ${updated} recipes`);
}
