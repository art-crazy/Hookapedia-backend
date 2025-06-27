import { DataSource } from 'typeorm';
import { seedRecipes } from './recipe.seed';
import { Recipe } from '../entities/recipe.entity';
import { Category } from '../entities/category.entity';
import * as dotenv from 'dotenv';
import * as path from 'path';

// Загружаем переменные окружения из .env файла
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

async function runSeed() {
  console.log('Starting seed process...');
  console.log('Database configuration:', {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    database: process.env.DB_DATABASE
  });

  const dataSource = new DataSource({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || '5432', 10),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: [Recipe, Category],
    synchronize: false,
    migrations: ['src/migrations/*.ts'],
    migrationsRun: true,
    ssl: {
      rejectUnauthorized: false
    },
    extra: {
      connectionTimeoutMillis: 5000,
      query_timeout: 10000,
      statement_timeout: 10000,
      connectTimeoutMS: 10000
    }
  });

  try {
    console.log('Attempting to connect to database...');
    await dataSource.initialize();
    console.log('Database connection established');

    console.log('Starting to seed recipes...');
    await seedRecipes(dataSource);
    console.log('Seeding completed successfully');

    await dataSource.destroy();
    console.log('Database connection closed');
  } catch (error) {
    console.error('Error during seeding:', error);
    if (error.code === 'ECONNREFUSED') {
      console.error('Connection refused. Please check if the database is running and accessible.');
    }
    process.exit(1);
  }
}

runSeed();
