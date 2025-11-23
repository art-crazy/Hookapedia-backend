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
  @ApiQuery({ name: 'flavor_category', required: false, type: String, description: 'Категория вкуса (frukty, yagody, tsitrusovye, deserty, pryanosti-travy, ekzotika)' })
  @ApiQuery({ name: 'mint_category', required: false, type: String, description: 'Категория мяты (s-myatoy, bez-myaty)' })
  @ApiQuery({ name: 'cooling_category', required: false, type: String, description: 'Категория холодка (bez-kholoda, legkiy-kholod, silnyy-kholod)' })
  @ApiQuery({ name: 'strength_category', required: false, type: String, description: 'Категория крепости (legkaya-krepost, srednyaya-krepost, krepkaya-krepost)' })
  async findAll(
    @Query('page') page?: string,
    @Query('limit') limit?: string,
    @Query('search') search?: string,
    @Query('flavor_category') flavorCategory?: string,
    @Query('mint_category') mintCategory?: string,
    @Query('cooling_category') coolingCategory?: string,
    @Query('strength_category') strengthCategory?: string,
  ) {
    const filters = {
      search,
      flavorCategory,
      mintCategory,
      coolingCategory,
      strengthCategory,
    };

    const pageNum = page ? parseInt(page) : 1;
    const limitNum = limit ? parseInt(limit) : 1000;

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
