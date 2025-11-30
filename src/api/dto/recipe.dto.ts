import { ApiProperty } from '@nestjs/swagger';

// Hookah ingredient DTO
export class HookahIngredientDto {
  @ApiProperty({
    description: 'Tobacco flavor name',
    example: 'Vanilla Sky'
  })
  name: string;

  @ApiProperty({
    description: 'Tobacco brand',
    example: 'Darkside'
  })
  brand: string;

  @ApiProperty({
    description: 'Percentage in the mix',
    example: 40
  })
  percentage: number;

  @ApiProperty({
    description: 'Tobacco type (optional)',
    example: 'Dark Blend',
    required: false
  })
  tobaccoType?: string;

  @ApiProperty({
    description: 'Amount in grams (optional)',
    example: 12,
    required: false
  })
  amount?: number;

  @ApiProperty({
    description: 'Unit of measurement (optional)',
    example: 'г',
    required: false
  })
  unit?: string;

  @ApiProperty({
    description: 'Alternative flavors if not available (optional)',
    example: ['Adalya Vanilla', 'Fumari Vanilla'],
    required: false
  })
  alternatives?: string[];
}

// Charcoal setup DTO
export class CharcoalSetupDto {
  @ApiProperty({
    description: 'Charcoal type',
    example: 'Кокосовый'
  })
  type: string;

  @ApiProperty({
    description: 'Charcoal brand (optional)',
    example: 'Cocobrico',
    required: false
  })
  brand?: string;

  @ApiProperty({
    description: 'Number of coal pieces',
    example: 3
  })
  pieces: number;

  @ApiProperty({
    description: 'Coal size',
    example: '25мм куб'
  })
  size: string;
}

// Recipe step DTO
export class RecipeStepDto {
  @ApiProperty({
    description: 'Step title',
    example: 'Шаг 1'
  })
  title: string;

  @ApiProperty({
    description: 'Step description',
    example: 'Подготовьте чашу Phunnel'
  })
  text: string;

  @ApiProperty({
    description: 'Step image (optional)',
    example: '/images/step1.jpg',
    required: false
  })
  image?: string;
}

// Main Recipe DTO
export class RecipeDto {
  @ApiProperty({
    description: 'Recipe ID',
    example: 740
  })
  id: number;

  @ApiProperty({
    description: 'Recipe slug/name',
    example: 'vanil-karamel-s-myatoy-krepkaya'
  })
  name: string;

  @ApiProperty({
    description: 'Recipe title',
    example: 'Ваниль-карамель с мятой (крепкая)'
  })
  title: string;

  @ApiProperty({
    description: 'Recipe description',
    example: 'Насыщенный десертный микс с ванилью, карамелью и освежающей мятой'
  })
  description: string;

  @ApiProperty({
    description: 'Preparation time',
    example: '10-15 минут'
  })
  preparationTime: string;

  @ApiProperty({
    description: 'Smoking duration',
    example: '60-75 минут'
  })
  smokingDuration: string;

  @ApiProperty({
    description: 'Difficulty level',
    example: 'Средне'
  })
  difficulty: string;

  @ApiProperty({
    description: 'Recipe type',
    example: 'Десертный'
  })
  recipeType: string;

  @ApiProperty({
    description: 'Number of people',
    example: 2
  })
  persons: number;

  @ApiProperty({
    description: 'Numeric strength level (1-10)',
    example: 6
  })
  strength: number;

  @ApiProperty({
    description: 'Tobacco ingredients',
    type: [HookahIngredientDto]
  })
  ingredients: HookahIngredientDto[];

  @ApiProperty({
    description: 'Bowl type',
    example: 'Phunnel'
  })
  bowlType: string;

  @ApiProperty({
    description: 'Packing method',
    example: 'Плотная'
  })
  packingMethod: string;

  @ApiProperty({
    description: 'Charcoal setup',
    type: CharcoalSetupDto
  })
  charcoal: CharcoalSetupDto;

  @ApiProperty({
    description: 'Smoke level',
    example: 'Высокий'
  })
  smokeLevel: string;

  @ApiProperty({
    description: 'Preparation steps',
    type: [RecipeStepDto]
  })
  steps: RecipeStepDto[];

  @ApiProperty({
    description: 'Smoking tips (optional)',
    example: ['Не перегревайте первые 5 минут', 'Добавьте лёд в колбу'],
    required: false
  })
  tips?: string[];

  @ApiProperty({
    description: 'Main image URL',
    example: '/images/recipe.jpg'
  })
  imageMain: string;

  @ApiProperty({
    description: 'Search and filter tags',
    example: ['десерт', 'ваниль', 'крепкая']
  })
  tags: string[];

  @ApiProperty({
    description: 'Recipe rating (0-5)',
    example: 4.7
  })
  rating: number;

  @ApiProperty({
    description: 'Number of reviews',
    example: 89
  })
  reviews: number;

  @ApiProperty({
    description: 'Number of likes',
    example: 234
  })
  likes: number;

  @ApiProperty({
    description: 'Flavor category slug',
    example: 'deserty',
    required: false
  })
  flavorCategory?: string;

  @ApiProperty({
    description: 'Mint category slug',
    example: 's-myatoy',
    required: false
  })
  mintCategory?: string;

  @ApiProperty({
    description: 'Cooling category slug',
    example: 'bez-kholoda',
    required: false
  })
  coolingCategory?: string;

  @ApiProperty({
    description: 'Strength category slug',
    example: 'krepkaya-krepost',
    required: false
  })
  strengthCategory?: string;

  @ApiProperty({
    description: 'Last update timestamp',
    example: '2024-11-25T10:30:00Z'
  })
  updatedAt: Date;
}

// Recipe list response DTO
export class RecipeResponseDto {
  @ApiProperty({
    description: 'List of recipes',
    type: [RecipeDto]
  })
  recipes: RecipeDto[];

  @ApiProperty({
    description: 'Total number of recipes',
    example: 108
  })
  total: number;

  @ApiProperty({
    description: 'Current page',
    example: 1
  })
  page: number;

  @ApiProperty({
    description: 'Items per page',
    example: 20
  })
  limit: number;

  @ApiProperty({
    description: 'Flag indicating fallback was used (all recipes returned)',
    example: false
  })
  fallbackTriggered: boolean;
}

// Query parameters DTO for filtering
export class RecipeQueryDto {
  @ApiProperty({
    description: 'Page number',
    example: 1,
    required: false
  })
  page?: number;

  @ApiProperty({
    description: 'Items per page',
    example: 20,
    required: false
  })
  limit?: number;

  @ApiProperty({
    description: 'Search query',
    example: 'ваниль',
    required: false
  })
  search?: string;

  @ApiProperty({
    description: 'Flavor category filter',
    example: 'deserty',
    required: false
  })
  flavor_category?: string;

  @ApiProperty({
    description: 'Mint category filter',
    example: 's-myatoy',
    required: false
  })
  mint_category?: string;

  @ApiProperty({
    description: 'Cooling category filter',
    example: 'bez-kholoda',
    required: false
  })
  cooling_category?: string;

  @ApiProperty({
    description: 'Strength category filter',
    example: 'krepkaya-krepost',
    required: false
  })
  strength_category?: string;
}
