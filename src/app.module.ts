import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database.module';
import { RecipeModule } from './modules/recipe.module';
import { CollectionModule } from './modules/collection.module';
import { CategoryService } from './services/category.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { AppController } from './app.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DatabaseModule,
    RecipeModule,
    CollectionModule,
    TypeOrmModule.forFeature([Category]),
  ],
  controllers: [AppController],
  providers: [CategoryService],
})
export class AppModule {} 