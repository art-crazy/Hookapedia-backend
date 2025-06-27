import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { CollectionService } from '../services/collection.service';
import { Collection } from '../entities/collection.entity';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CollectionDto, CollectionResponseDto } from './dto/collection.dto';

@ApiTags('Коллекции')
@Controller('api/collections')
export class CollectionController {
  constructor(private readonly collectionService: CollectionService) {}

  @Get()
  @ApiOperation({ summary: 'Получить все коллекции' })
  @ApiResponse({ 
    status: 200, 
    description: 'Возвращает список всех активных коллекций',
    type: CollectionResponseDto
  })
  async findAll(): Promise<Collection[]> {
    return this.collectionService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Получить коллекцию по ID' })
  @ApiResponse({ 
    status: 200, 
    description: 'Возвращает коллекцию по указанному ID',
    type: CollectionDto
  })
  @ApiResponse({ status: 404, description: 'Коллекция не найдена' })
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<Collection> {
    return this.collectionService.findOne(id);
  }
} 