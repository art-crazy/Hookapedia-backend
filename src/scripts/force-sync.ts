import { AppDataSource } from '../../data-source';

async function sync() {
    try {
        await AppDataSource.initialize();
        console.log('DataSource initialized');
        await AppDataSource.synchronize();
        console.log('Schema synchronized successfully');
        await AppDataSource.destroy();
    } catch (error) {
        console.error('Error synchronizing schema:', error);
    }
}

sync();
