import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { RecipeService } from '@/services/recipe.service';
import { RecipeResponseDto } from './dto/recipe.dto';
import { Recipe } from '@/entities/recipe.entity';

@ApiTags('Рецепты')
@Controller('recipes')
export class RecipeController {
  constructor(private readonly recipeService: RecipeService) {}

  @Get()
  @ApiOperation({ summary: 'Получить все рецепты с возможностью фильтрации' })
  @ApiResponse({
    status: 200,
    description: 'Возвращает список рецептов с пагинацией',
    type: RecipeResponseDto
  })
  @ApiQuery({ name: 'page', required: false, type: Number, description: 'Номер страницы' })
  @ApiQuery({ name: 'limit', required: false, type: Number, description: 'Количество элементов на странице' })
  @ApiQuery({ name: 'search', required: false, type: String, description: 'Поиск по названию и описанию рецепта' })
  @ApiQuery({ name: 'dish_categories', required: false, type: String, description: 'ID категорий блюд через запятую' })
  @ApiQuery({ name: 'subcategories', required: false, type: String, description: 'ID подкатегорий через запятую' })
  @ApiQuery({ name: 'cuisine_categories', required: false, type: String, description: 'ID категорий кухонь через запятую' })
  @ApiQuery({ name: 'diet_categories', required: false, type: String, description: 'ID категорий диет через запятую' })
  async findAll(
    @Query('page') page?: string,
    @Query('limit') limit?: string,
    @Query('search') search?: string,
    @Query('dish_categories') dishCategories?: string,
    @Query('subcategories') subcategories?: string,
    @Query('cuisine_categories') cuisineCategories?: string,
    @Query('diet_categories') dietCategories?: string,
  ) {
    const filters = {
      search,
      dishCategories: dishCategories?.split(','),
      subcategories: subcategories?.split(','),
      cuisineCategories: cuisineCategories?.split(','),
      dietCategories: dietCategories?.split(','),
    };

    const pageNum = page ? parseInt(page) : 1;
    const limitNum = limit ? parseInt(limit) : 12;

    // Пытаемся найти рецепты по фильтрам
    const result = await this.recipeService.findAll(
      pageNum,
      limitNum,
      filters,
    );

    // Если ничего не найдено и есть поисковый запрос, возвращаем все рецепты
    if (result.recipes.length === 0 && search) {
      const allRecipes = await this.recipeService.findAll(
        pageNum,
        limitNum,
        {},
      );

      return {
        items: allRecipes.recipes,
        total: allRecipes.total,
        page: pageNum,
        limit: limitNum,
        fallbackTriggered: true,
      };
    }

    return {
      items: result.recipes,
      total: result.total,
      page: pageNum,
      limit: limitNum,
      fallbackTriggered: false,
    };
  }

  @Get(':id')
  @ApiOperation({ summary: 'Получить рецепт по ID' })
  @ApiResponse({
    status: 200,
    description: 'Возвращает рецепт по указанному ID',
    type: Recipe
  })
  @ApiResponse({
    status: 404,
    description: 'Рецепт не найден'
  })
  @ApiParam({ name: 'id', required: true, type: Number, description: 'ID рецепта' })
  async findOne(@Param('id') id: string) {
    return await this.recipeService.findOne(parseInt(id));
  }
}
