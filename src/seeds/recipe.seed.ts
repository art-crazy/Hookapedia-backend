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

  // Создаем категории для кальянов, если они еще не существуют
  const categories = [
    // Основные типы смесей
    { slug: 'light-mixes', title: 'Легкие смеси', type: 'dish' as const },
    { slug: 'fruity-mixes', title: 'Фруктовые смеси', type: 'dish' as const },
    { slug: 'berry-mixes', title: 'Ягодные смеси', type: 'dish' as const },
    { slug: 'dessert-mixes', title: 'Десертные смеси', type: 'dish' as const },
    { slug: 'classic-mixes', title: 'Классические смеси', type: 'dish' as const },
    { slug: 'cool-mixes', title: 'Холодные смеси', type: 'dish' as const },
    { slug: 'premium-mixes', title: 'Премиум смеси', type: 'dish' as const },
    { slug: 'experimental-mixes', title: 'Экспериментальные смеси', type: 'dish' as const },
    { slug: 'tropical-mixes', title: 'Тропические смеси', type: 'dish' as const },
    { slug: 'elite-mixes', title: 'Элитные смеси', type: 'dish' as const },
    
    // Подкатегории по вкусам
    { slug: 'citrus', title: 'Цитрусовые', type: 'subcategory' as const },
    { slug: 'tropical', title: 'Тропические', type: 'subcategory' as const },
    { slug: 'forest-berries', title: 'Лесные ягоды', type: 'subcategory' as const },
    { slug: 'coffee', title: 'Кофейные', type: 'subcategory' as const },
    { slug: 'apple', title: 'Яблочные', type: 'subcategory' as const },
    { slug: 'grape', title: 'Виноградные', type: 'subcategory' as const },
    { slug: 'chocolate', title: 'Шоколадные', type: 'subcategory' as const },
    { slug: 'herbs', title: 'Травяные', type: 'subcategory' as const },
    { slug: 'stone-fruits', title: 'Косточковые фрукты', type: 'subcategory' as const },
    { slug: 'floral', title: 'Цветочные', type: 'subcategory' as const },
    
    // Кухни мира
    { slug: 'arabic', title: 'Арабская традиция', type: 'cuisine' as const },
    { slug: 'caribbean', title: 'Карибская', type: 'cuisine' as const },
    { slug: 'european', title: 'Европейская', type: 'cuisine' as const },
    { slug: 'french', title: 'Французская', type: 'cuisine' as const },
    { slug: 'turkish', title: 'Турецкая', type: 'cuisine' as const },
    { slug: 'mediterranean', title: 'Средиземноморская', type: 'cuisine' as const },
    { slug: 'italian', title: 'Итальянская', type: 'cuisine' as const },
    { slug: 'greek', title: 'Греческая', type: 'cuisine' as const },
    { slug: 'brazilian', title: 'Бразильская', type: 'cuisine' as const },
    { slug: 'persian', title: 'Персидская', type: 'cuisine' as const },
    
    // Специальные категории
    { slug: 'beginner', title: 'Для начинающих', type: 'diet' as const },
    { slug: 'sweet', title: 'Сладкие', type: 'diet' as const },
    { slug: 'tart', title: 'Кислые', type: 'diet' as const },
    { slug: 'gourmet', title: 'Гурманские', type: 'diet' as const },
    { slug: 'traditional', title: 'Традиционные', type: 'diet' as const },
    { slug: 'refreshing', title: 'Освежающие', type: 'diet' as const },
    { slug: 'premium', title: 'Премиум', type: 'diet' as const },
    { slug: 'unusual', title: 'Необычные', type: 'diet' as const },
    { slug: 'exotic', title: 'Экзотические', type: 'diet' as const },
    { slug: 'connoisseur', title: 'Для знатоков', type: 'diet' as const }
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
