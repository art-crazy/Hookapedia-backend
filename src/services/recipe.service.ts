import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Recipe } from '@/entities/recipe.entity';

interface RecipeFilters {
  search?: string;
  flavorCategory?: string;
  mintCategory?: string;
  coolingCategory?: string;
  strengthCategory?: string;
}

@Injectable()
export class RecipeService {
  constructor(
    @InjectRepository(Recipe)
    private recipeRepository: Repository<Recipe>,
  ) {}

  async findAll(
    page: number = 1,
    limit: number = 12,
    filters?: RecipeFilters,
  ): Promise<{ recipes: Recipe[]; total: number; totalPages: number }> {
    const queryBuilder = this.recipeRepository.createQueryBuilder('recipe');

    if (filters) {
      if (filters.search) {
        queryBuilder.andWhere(
          '(LOWER(recipe.name) LIKE LOWER(:search) OR LOWER(recipe.title) LIKE LOWER(:search) OR LOWER(recipe.description) LIKE LOWER(:search))',
          { search: `%${filters.search}%` }
        );
      }

      if (filters.flavorCategory) {
        queryBuilder.andWhere('recipe.flavorCategory = :flavorCategory', {
          flavorCategory: filters.flavorCategory,
        });
      }

      if (filters.mintCategory) {
        queryBuilder.andWhere('recipe.mintCategory = :mintCategory', {
          mintCategory: filters.mintCategory,
        });
      }

      if (filters.coolingCategory) {
        queryBuilder.andWhere('recipe.coolingCategory = :coolingCategory', {
          coolingCategory: filters.coolingCategory,
        });
      }

      if (filters.strengthCategory) {
        queryBuilder.andWhere('recipe.strengthCategory = :strengthCategory', {
          strengthCategory: filters.strengthCategory,
        });
      }
    }

    const [recipes, total] = await queryBuilder
      .orderBy('recipe.id', 'DESC')
      .skip((page - 1) * limit)
      .take(limit)
      .getManyAndCount();

    const totalPages = Math.ceil(total / limit);

    return { recipes, total, totalPages };
  }

  async findOne(id: number): Promise<Recipe> {
    const recipe = await this.recipeRepository.findOne({
      where: { id },
    });

    if (!recipe) {
      throw new NotFoundException(`Recipe with ID ${id} not found`);
    }

    return recipe;
  }

  async findForHomePage() {
    return this.recipeRepository.find({
      select: ['id', 'name', 'title', 'description', 'imageMain', 'rating', 'reviews'],
      order: { rating: 'DESC' },
      take: 12
    });
  }
}
