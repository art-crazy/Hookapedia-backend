import { DataSource } from 'typeorm';
import { Recipe } from '@/entities/recipe.entity';
import { Category } from '@/entities/category.entity';
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
  dishCategoriesList?: Record<string, { id: string; title: string }>;
  dishCategoriesSubList?: Record<string, { id: string; title: string }>;
  cuisineCategoriesList?: Record<string, { id: string; title: string }>;
  dietCategoriesList?: Record<string, { id: string; title: string }>;
}

export async function seedRecipes(dataSource: DataSource) {
  const categoryRepository = dataSource.getRepository(Category);
  const recipeRepository = dataSource.getRepository(Recipe);

  // Создаем категории, если они еще не существуют
  const categories = [
    { slug: 'main-dishes', title: 'Основные блюда', type: 'dish' as const },
    { slug: 'snacks', title: 'Закуски', type: 'dish' as const },
    { slug: 'dumplings', title: 'Пельмени', type: 'subcategory' as const },
    { slug: 'street-food', title: 'Уличная еда', type: 'subcategory' as const },
    { slug: 'russian', title: 'Русская кухня', type: 'cuisine' as const },
    { slug: 'fusion', title: 'Фьюжн', type: 'cuisine' as const },
    { slug: 'traditional', title: 'Традиционная кухня', type: 'diet' as const },
    { slug: 'meat', title: 'Мясные блюда', type: 'diet' as const }
  ];

  const savedCategories = new Map<string, Category>();

  for (const categoryData of categories) {
    let category = await categoryRepository.findOne({ where: { slug: categoryData.slug } });
    if (!category) {
      console.log(`Creating new category: ${categoryData.slug}`);
      category = categoryRepository.create(categoryData);
      category = await categoryRepository.save(category);
      console.log(`Category created: ${category.slug}`);
    } else {
      console.log(`Category already exists: ${categoryData.slug}`);
    }
    savedCategories.set(categoryData.slug, category);
  }

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

        // Преобразуем категории из списков в массивы
        const dishCategories = Object.values(recipeData.dishCategoriesList || {}).map(cat =>
          savedCategories.get(cat.id) || null
        ).filter((cat): cat is Category => cat !== null);

        const subcategories = Object.values(recipeData.dishCategoriesSubList || {}).map(cat =>
          savedCategories.get(cat.id) || null
        ).filter((cat): cat is Category => cat !== null);

        const cuisineCategories = Object.values(recipeData.cuisineCategoriesList || {}).map(cat =>
          savedCategories.get(cat.id) || null
        ).filter((cat): cat is Category => cat !== null);

        const dietCategories = Object.values(recipeData.dietCategoriesList || {}).map(cat =>
          savedCategories.get(cat.id) || null
        ).filter((cat): cat is Category => cat !== null);

        const filteredRecipeData = {
          ...recipeData,
          dishCategories,
          subcategories,
          cuisineCategories,
          dietCategories
        };

        const recipe = recipeRepository.create(filteredRecipeData as Partial<Recipe>);
        const savedRecipe = await recipeRepository.save(recipe);
        console.log(`Recipe created with ID: ${savedRecipe.id}`);
      } else {
        console.log(`Recipe already exists: ${recipeData.title}`);
      }
    }
  }

  console.log('Recipe seeding completed');
}
