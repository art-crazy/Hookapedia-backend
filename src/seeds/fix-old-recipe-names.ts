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

async function fixOldRecipeNames() {
  try {
    await AppDataSource.initialize();
    console.log('Database connected!');

    // Remove digit suffixes from recipe names (IDs 500-583)
    const result = await AppDataSource.query(`
      UPDATE recipes
      SET name = REGEXP_REPLACE(name, '-\\d{3,}$', ''),
          "updatedAt" = NOW()
      WHERE id >= 500 AND id <= 583
      AND name ~ '-\\d{3,}$'
    `);

    console.log(`Fixed ${result[1]} old recipe names (IDs 500-583)`);

    await AppDataSource.destroy();
    console.log('Database connection closed');
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

fixOldRecipeNames();
