import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from '@/app.module';
import { CategoryService } from '@/services/category.service';
import { recipes as recipes1 } from '../data/recipes';
import { recipes as recipes2 } from '../data/ID101-200';
import { recipes as recipes3 } from '../data/ID201-300';
import { Recipe } from '@/entities/recipe.entity';
import { Category } from '@/entities/category.entity';
import { Recipe as RecipeType } from '../types/recipe';
import { Repository } from 'typeorm';


type RecipeData = RecipeType;

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const categoryService = app.get(CategoryService);
  const recipeRepository = app.get(Repository<Recipe>);

  try {
    // Объединяем все рецепты
    const allRecipes = {
      ...recipes1,
      ...recipes2,
      ...recipes3
    } as Record<number, RecipeData>;

    console.log(`Начинаем импорт ${Object.keys(allRecipes).length} рецептов...`);

    // Создаем уникальные категории
    const categories = new Map<string, Category>();

    for (const recipe of Object.values(allRecipes)) {
      // Обрабатываем dishCategoriesList
      for (const [slug, category] of Object.entries(recipe.dishCategoriesList)) {
        if (!categories.has(slug)) {
          const existingCategory = await categoryService.findBySlug(category.id);
          if (!existingCategory) {
            const newCategory = await categoryService.create({
              id: category.id,
              title: category.title,
              type: 'dish'
            });
            categories.set(slug, newCategory);
          } else {
            categories.set(slug, existingCategory);
          }
        }
      }

      // Обрабатываем dishCategoriesSubList
      for (const [slug, category] of Object.entries(recipe.dishCategoriesSubList)) {
        if (!categories.has(slug)) {
          const existingCategory = await categoryService.findBySlug(category.id);
          if (!existingCategory) {
            const newCategory = await categoryService.create({
              id: category.id,
              title: category.title,
              type: 'subcategory'
            });
            categories.set(slug, newCategory);
          } else {
            categories.set(slug, existingCategory);
          }
        }
      }

      // Обрабатываем cuisineCategoriesList
      for (const [slug, category] of Object.entries(recipe.cuisineCategoriesList)) {
        if (!categories.has(slug)) {
          const existingCategory = await categoryService.findBySlug(category.id);
          if (!existingCategory) {
            const newCategory = await categoryService.create({
              id: category.id,
              title: category.title,
              type: 'cuisine'
            });
            categories.set(slug, newCategory);
          } else {
            categories.set(slug, existingCategory);
          }
        }
      }

      // Обрабатываем dietCategoriesList
      for (const [slug, category] of Object.entries(recipe.dietCategoriesList)) {
        if (!categories.has(slug)) {
          const existingCategory = await categoryService.findBySlug(category.id);
          if (!existingCategory) {
            const newCategory = await categoryService.create({
              id: category.id,
              title: category.title,
              type: 'diet'
            });
            categories.set(slug, newCategory);
          } else {
            categories.set(slug, existingCategory);
          }
        }
      }
    }

    // Импортируем рецепты
    for (const recipe of Object.values(allRecipes)) {
      try {
        // Проверяем, существует ли уже рецепт с таким именем
        const existingRecipe = await recipeRepository.findOne({ where: { name: recipe.name } });
        if (existingRecipe) {
          console.log(`Пропускаем рецепт "${recipe.title}" - уже существует`);
          continue;
        }

        const recipeEntity = new Recipe();
        recipeEntity.id = recipe.id;
        recipeEntity.name = recipe.name;
        recipeEntity.title = recipe.title;
        recipeEntity.description = recipe.description;
        recipeEntity.cookTime = recipe.cookTime;
        recipeEntity.difficulty = recipe.difficulty;
        recipeEntity.nutrition = recipe.nutrition;
        recipeEntity.cuisine = recipe.cuisine;
        recipeEntity.servings = recipe.servings;
        recipeEntity.ingredients = recipe.ingredients;
        recipeEntity.steps = recipe.steps.map(step => ({
          ...step,
          image: step.image || '/default-step-image.webp'
        }));
        recipeEntity.imageMain = recipe.imageMain || (recipe.steps[0]?.image || '/default-recipe-image.webp');
        recipeEntity.categories = recipe.categories;
        recipeEntity.rating = recipe.rating;
        recipeEntity.reviews = recipe.reviews;

        // Добавляем связи с категориями
        recipeEntity.dishCategories = Object.values(recipe.dishCategoriesList)
          .map(cat => categories.get(cat.id))
          .filter(Boolean) as Category[];

        recipeEntity.subcategories = Object.values(recipe.dishCategoriesSubList)
          .map(cat => categories.get(cat.id))
          .filter(Boolean) as Category[];

        recipeEntity.cuisineCategories = Object.values(recipe.cuisineCategoriesList)
          .map(cat => categories.get(cat.id))
          .filter(Boolean) as Category[];

        recipeEntity.dietCategories = Object.values(recipe.dietCategoriesList)
          .map(cat => categories.get(cat.id))
          .filter(Boolean) as Category[];

        await recipeRepository.save(recipeEntity);
        console.log(`Импортирован рецепт: ${recipe.title}`);
      } catch (error) {
        console.error(`Ошибка при импорте рецепта "${recipe.title}":`, error.message);
      }
    }

    console.log('Импорт завершен успешно!');
  } catch (error) {
    console.error('Ошибка при импорте:', error);
  } finally {
    await app.close();
  }
}

bootstrap();
