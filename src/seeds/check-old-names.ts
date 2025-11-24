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

async function checkOldNames() {
  try {
    await AppDataSource.initialize();
    const recipeRepository = AppDataSource.getRepository(Recipe);

    const allRecipes = await recipeRepository.find({
      where: {},
      order: { id: 'ASC' },
    });

    console.log(`Total recipes: ${allRecipes.length}`);

    const recipesWithDigits = allRecipes.filter(r => r.id >= 500 && /\d{3,}/.test(r.name));

    console.log(`\nRecipes with digit IDs in name (500+):`);
    recipesWithDigits.slice(0, 10).forEach(r => {
      console.log(`  ID: ${r.id}, name: "${r.name}"`);
    });

    if (recipesWithDigits.length > 10) {
      console.log(`  ... and ${recipesWithDigits.length - 10} more`);
    }

    await AppDataSource.destroy();
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

checkOldNames();
