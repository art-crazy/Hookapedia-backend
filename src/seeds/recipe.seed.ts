import { DataSource, In } from 'typeorm';
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
  const allowedCategorySlugs = new Set(categories.map(category => category.slug));

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

  const existingCategories = await categoryRepository.find({ select: ['slug', 'id'] });
  const obsoleteCategories = existingCategories.filter(category => !allowedCategorySlugs.has(category.slug));
  if (obsoleteCategories.length > 0) {
    const obsoleteSlugs = obsoleteCategories.map(category => category.slug);
    console.log(`Removing obsolete categories: ${obsoleteSlugs.join(', ')}`);
    await categoryRepository.delete({ slug: In(obsoleteSlugs) });
  }

  console.log('Starting to load recipes from data files...');

  // Получаем список всех файлов с рецептами
  const dataDir = path.join(__dirname, '../data');
  const recipeFiles = fs.readdirSync(dataDir)
    .filter(file => file.endsWith('.ts') && file !== 'index.ts');

  const seedRecipeNames = new Set<string>();

  // Загружаем и обрабатываем каждый файл
  for (const file of recipeFiles) {
    console.log(`Processing file: ${file}`);
    const filePath = path.join(dataDir, file);
    const { recipes } = require(filePath) as { recipes: Record<number, RecipeData> };

    // Преобразуем объект рецептов в массив
    const recipeArray = Object.values(recipes);

    for (const recipeData of recipeArray) {
      seedRecipeNames.add(recipeData.name);
      console.log(`Processing recipe: ${recipeData.title}`);
      const existingRecipe = await recipeRepository.findOne({ where: { name: recipeData.name } });

      if (!existingRecipe) {
        console.log(`Creating new recipe: ${recipeData.title}`);

        // Создаём рецепт с конкретным ID через raw query
        await recipeRepository.query(`
          INSERT INTO recipes (id, name, title, description, "cookTime", difficulty, nutrition, cuisine, servings, ingredients, steps, "imageMain", categories, rating, reviews, "createdAt", "updatedAt")
          VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, NOW(), NOW())
        `, [
          recipeData.id, recipeData.name, recipeData.title, recipeData.description,
          recipeData.cookTime, recipeData.difficulty, JSON.stringify(recipeData.nutrition),
          recipeData.cuisine, recipeData.servings, JSON.stringify(recipeData.ingredients),
          JSON.stringify(recipeData.steps), recipeData.imageMain, recipeData.categories.join(','),
          recipeData.rating, recipeData.reviews
        ]);
        console.log(`Recipe created with ID: ${recipeData.id}`);
      } else {
        console.log(`Recipe already exists: ${recipeData.title}, updating data`);
        await recipeRepository.update(existingRecipe.id, {
          title: recipeData.title,
          description: recipeData.description,
          cookTime: recipeData.cookTime,
          difficulty: recipeData.difficulty,
          nutrition: recipeData.nutrition,
          cuisine: recipeData.cuisine,
          servings: recipeData.servings,
          ingredients: recipeData.ingredients,
          steps: recipeData.steps,
          imageMain: recipeData.imageMain,
          categories: recipeData.categories,
          rating: recipeData.rating,
          reviews: recipeData.reviews
        });
      }
    }
  }

  // Удаляем рецепты, отсутствующие в актуальных данных (например, блюда еды)
  if (seedRecipeNames.size > 0) {
    const existingRecipes = await recipeRepository.find({ select: ['id', 'name'] });
    const obsoleteRecipes = existingRecipes.filter(recipe => !seedRecipeNames.has(recipe.name));
    if (obsoleteRecipes.length > 0) {
      const obsoleteIds = obsoleteRecipes.map(recipe => recipe.id);
      console.log(`Removing obsolete recipes: ${obsoleteIds.length} items`);
      await recipeRepository.delete({ id: In(obsoleteIds) });
    }
  } else {
    console.warn('No seed recipes loaded; skipping cleanup of obsolete recipes.');
  }

  console.log('Recipe seeding completed');
}
