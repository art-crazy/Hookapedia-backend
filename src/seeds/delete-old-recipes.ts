import 'reflect-metadata';
import { DataSource } from 'typeorm';
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

async function deleteOldRecipes() {
  try {
    await AppDataSource.initialize();
    console.log('Database connected!');

    // Delete old recipes with IDs 500-583 (they have wrong names)
    const result = await AppDataSource.query(`
      DELETE FROM recipes
      WHERE id >= 500 AND id <= 583
    `);

    console.log(`Deleted ${result[1]} old recipes (IDs 500-583)`);

    await AppDataSource.destroy();
    console.log('Database connection closed');
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

deleteOldRecipes();
