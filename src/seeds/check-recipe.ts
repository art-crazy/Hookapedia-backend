import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Recipe } from '@/entities/recipe.entity';
import * as dotenv from 'dotenv';

dotenv.config();

const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432'),
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
  database: process.env.DB_DATABASE || 'hookapedia',
  entities: ['src/entities/**/*.entity.ts'],
  synchronize: false,
});

async function checkRecipe() {
  try {
    await AppDataSource.initialize();
    const recipeRepository = AppDataSource.getRepository(Recipe);

    const recipe686 = await recipeRepository.findOne({ where: { id: 686 } });
    console.log('Recipe 686:', recipe686 ? `Found - ${recipe686.title}` : 'NOT FOUND');

    const allRecipes = await recipeRepository.find({
      order: { id: 'ASC' },
    });
    console.log(`Total recipes in DB: ${allRecipes.length}`);
    console.log('Recipe IDs:', allRecipes.map(r => r.id).join(', '));

    await AppDataSource.destroy();
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

checkRecipe();
