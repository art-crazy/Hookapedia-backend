import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Collection } from '../entities/collection.entity';

@Injectable()
export class CollectionService {
  constructor(
    @InjectRepository(Collection)
    private collectionRepository: Repository<Collection>,
  ) {}

  async findAll(): Promise<Collection[]> {
    return this.collectionRepository.find({
      where: { isActive: true },
      relations: ['recipes'],
    });
  }

  async findOne(id: number): Promise<Collection> {
    const collection = await this.collectionRepository.findOne({
      where: { id, isActive: true },
      relations: ['recipes'],
    });

    if (!collection) {
      throw new NotFoundException(`Collection with ID ${id} not found`);
    }

    return collection;
  }
} 