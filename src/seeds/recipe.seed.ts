import { DataSource } from 'typeorm';
import { Recipe } from '@/entities/recipe.entity';
import * as fs from 'fs';
import * as path from 'path';

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
    image: string;
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

  console.log('Starting to load recipes from data files...');

  // Получаем список всех файлов с рецептами
  const dataDir = path.join(__dirname, '../data');
  const recipeFiles = fs.readdirSync(dataDir)
    .filter(file => file.endsWith('.ts') && file !== 'index.ts');

  // Загружаем и обрабатываем каждый файл
  for (const file of recipeFiles) {
    console.log(`Processing file: ${file}`);
    const filePath = path.join(dataDir, file);
    const { recipes } = require(filePath) as { recipes: Record<number, RecipeData> };

    // Преобразуем объект рецептов в массив
    const recipeArray = Object.values(recipes);

    for (const recipeData of recipeArray) {
      console.log(`Processing recipe: ${recipeData.title}`);
      const existingRecipe = await recipeRepository.findOne({ where: { name: recipeData.name } });

      if (!existingRecipe) {
        console.log(`Creating new recipe: ${recipeData.title}`);

        // Создаём рецепт с конкретным ID через raw query
        await recipeRepository.query(`
          INSERT INTO recipes (id, name, title, description, "cookTime", difficulty, nutrition, cuisine, servings, ingredients, steps, "imageMain", categories, rating, reviews, "flavorCategory", "mintCategory", "coolingCategory", "strengthCategory", "createdAt", "updatedAt")
          VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, NOW(), NOW())
        `, [
          recipeData.id, recipeData.name, recipeData.title, recipeData.description,
          recipeData.cookTime, recipeData.difficulty, JSON.stringify(recipeData.nutrition),
          recipeData.cuisine, recipeData.servings, JSON.stringify(recipeData.ingredients),
          JSON.stringify(recipeData.steps), recipeData.imageMain, recipeData.categories.join(','),
          recipeData.rating, recipeData.reviews,
          recipeData.flavorCategory, recipeData.mintCategory, recipeData.coolingCategory, recipeData.strengthCategory
        ]);
        console.log(`Recipe created with ID: ${recipeData.id}`);
      } else {
        console.log(`Recipe already exists: ${recipeData.title}`);
      }
    }
  }

  console.log('Recipe seeding completed');
}
