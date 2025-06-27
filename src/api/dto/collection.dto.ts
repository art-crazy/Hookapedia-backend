import { ApiProperty } from '@nestjs/swagger';

export class CollectionDto {
  @ApiProperty({
    description: 'ID коллекции',
    example: 1
  })
  id: number;

  @ApiProperty({
    description: 'Название коллекции',
    example: 'Летние рецепты'
  })
  name: string;

  @ApiProperty({
    description: 'Описание коллекции',
    example: 'Самые вкусные рецепты для летнего сезона'
  })
  description: string;

  @ApiProperty({
    description: 'ID изображения коллекции',
    example: 'collection-summer.jpg'
  })
  imageId: string;
}

export class CollectionResponseDto {
  @ApiProperty({
    description: 'Список коллекций',
    type: [CollectionDto]
  })
  items: CollectionDto[];

  @ApiProperty({
    description: 'Общее количество коллекций',
    example: 10
  })
  total: number;
} 