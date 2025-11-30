import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../../.env') });

async function checkMigrations() {
    const dataSource = new DataSource({
        type: 'postgres',
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT || '5432', 10),
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        ssl: { rejectUnauthorized: false }
    });

    try {
        await dataSource.initialize();
        const result = await dataSource.query(`SELECT * FROM migrations ORDER BY timestamp DESC`);
        console.log('Executed migrations:', result);
        await dataSource.destroy();
    } catch (error) {
        console.error('Error checking migrations:', error);
    }
}

checkMigrations();
