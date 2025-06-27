import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSourceOptions } from 'typeorm';

const dbConfig: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '5432', 10),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  synchronize: false,
  migrations: ['src/migrations/*.js'],
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
};

console.log('Database configuration:', {
  ...dbConfig,
  password: '***' // Скрываем пароль в логах
});

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...dbConfig,
      autoLoadEntities: true,
      logging: true,
      logger: 'advanced-console'
    }),
  ],
})
export class DatabaseModule {}
