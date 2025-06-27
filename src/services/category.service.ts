import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from '../entities/category.entity';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}

  async create(data: { id: string; title: string; type: 'dish' | 'subcategory' | 'cuisine' | 'diet' }): Promise<Category> {
    const category = this.categoryRepository.create({
      slug: data.id,
      title: data.title,
      type: data.type
    });
    return this.categoryRepository.save(category);
  }

  async findBySlug(slug: string): Promise<Category | null> {
    return this.categoryRepository.findOne({ where: { slug } });
  }

  async findAll(): Promise<Category[]> {
    return this.categoryRepository.find();
  }
} 