import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database.module';
import { RecipeModule } from './modules/recipe.module';
import { CollectionModule } from './modules/collection.module';
import { UserModule } from './modules/user.module';
import { CategoryService } from './services/category.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DatabaseModule,
    RecipeModule,
    CollectionModule,
    UserModule,
    TypeOrmModule.forFeature([Category]),
  ],
  providers: [CategoryService],
})
export class AppModule {}
