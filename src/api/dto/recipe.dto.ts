import { ApiProperty } from '@nestjs/swagger';

export class RecipeDto {
  @ApiProperty({
    description: 'ID рецепта',
    example: 1
  })
  id: number;

  @ApiProperty({
    description: 'Название рецепта',
    example: 'Паста Карбонара'
  })
  name: string;

  @ApiProperty({
    description: 'Описание рецепта',
    example: 'Классическая итальянская паста с беконом и сливочным соусом'
  })
  description: string;

  @ApiProperty({
    description: 'ID категории блюда',
    example: 1
  })
  dishCategoryId: number;

  @ApiProperty({
    description: 'ID подкатегории',
    example: 2
  })
  subcategoryId: number;

  @ApiProperty({
    description: 'ID категории кухни',
    example: 3
  })
  cuisineCategoryId: number;

  @ApiProperty({
    description: 'ID категории диеты',
    example: 4
  })
  dietCategoryId: number;
}

export class RecipeResponseDto {
  @ApiProperty({
    description: 'Список рецептов',
    type: [RecipeDto]
  })
  items: RecipeDto[];

  @ApiProperty({
    description: 'Общее количество рецептов',
    example: 100
  })
  total: number;

  @ApiProperty({
    description: 'Текущая страница',
    example: 1
  })
  page: number;

  @ApiProperty({
    description: 'Количество элементов на странице',
    example: 12
  })
  limit: number;

  @ApiProperty({
    description: 'Флаг, указывающий что был использован fallback (возвращены все рецепты)',
    example: false
  })
  fallbackTriggered: boolean;
} 