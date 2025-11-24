import { DataSource } from 'typeorm';
import { Recipe } from '@/entities/recipe.entity';
import { allRecipes } from '@/data/recipes';
import { Ingredient } from '@/data/recipes/types';

interface RecipeData {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  ingredients: Ingredient[];
  strength: number;
  tags: string[];
  author: string;
  createdAt: string;
  likes: number;
}

export async function seedRecipes(dataSource: DataSource) {
  const recipeRepository = dataSource.getRepository(Recipe);

  console.log('Deleting all existing recipes...');
  await recipeRepository.query('TRUNCATE TABLE "recipes" RESTART IDENTITY CASCADE;');
  console.log('All recipes have been deleted.');

  console.log('Starting to load recipes from the new structure...');

  const recipeArray: RecipeData[] = allRecipes;

  console.log(`Loaded ${recipeArray.length} recipes from the new structure`);

  let created = 0;
  let skipped = 0;

  for (const recipeData of recipeArray) {
    try {
      console.log(`Processing recipe: ${recipeData.title} (ID: ${recipeData.id})`);

      const newRecipe = recipeRepository.create({
        id: recipeData.id,
        title: recipeData.title,
        description: recipeData.description,
        imageUrl: recipeData.imageUrl,
        ingredients: JSON.stringify(recipeData.ingredients),
        strength: recipeData.strength,
        tags: recipeData.tags,
        author: recipeData.author,
        likes: recipeData.likes,
        createdAt: new Date(recipeData.createdAt),
      });

      await recipeRepository.save(newRecipe);
      
      console.log(`Recipe created: ${recipeData.title}`);
      created++;
    } catch (error) {
      console.error(`Error processing recipe ${recipeData.id}:`, error);
      skipped++;
    }
  }

  console.log('\n=== Recipe seeding completed ===');
  console.log(`Created: ${created} recipes`);
  console.log(`Skipped: ${skipped} recipes`);
  console.log(`Total processed: ${recipeArray.length} recipes`);
}
