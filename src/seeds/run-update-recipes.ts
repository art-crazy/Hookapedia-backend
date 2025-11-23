import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { updateRecipes } from './update-recipes.seed';
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

async function run() {
  try {
    console.log('Connecting to database...');
    await AppDataSource.initialize();
    console.log('Database connected!');

    await updateRecipes(AppDataSource);

    console.log('Update completed successfully');
    await AppDataSource.destroy();
    console.log('Database connection closed');
  } catch (error) {
    console.error('Error during update:', error);
    process.exit(1);
  }
}

run();
