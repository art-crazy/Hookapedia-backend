import { DataSource } from 'typeorm';
import { Recipe } from '@/entities/recipe.entity';
import { loadAllRecipes } from '@/data/recipes';
import { Recipe as RecipeData } from '@/data/recipes/types';

export async function updateRecipes(dataSource: DataSource) {
  const recipeRepository = dataSource.getRepository(Recipe);

  console.log('Starting to update recipes with new titles...');

  const recipeArray: RecipeData[] = loadAllRecipes();

  console.log(`Loaded ${recipeArray.length} recipes from files`);

  let updated = 0;

  for (const recipeData of recipeArray) {
    const recipeName = recipeData.name ?? recipeData.title;

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
        recipeName,
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
