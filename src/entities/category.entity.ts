import { Entity, PrimaryGeneratedColumn, Column, Index } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('categories')
export class Category {
  @ApiProperty({ description: 'Unique identifier of the category' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ description: 'Unique slug of the category' })
  @Column({ unique: true })
  @Index()
  slug: string;

  @ApiProperty({ description: 'Title of the category' })
  @Column()
  title: string;

  @ApiProperty({
    description: 'Type of the category',
    enum: ['dish', 'subcategory', 'cuisine', 'diet']
  })
  @Column()
  type: 'dish' | 'subcategory' | 'cuisine' | 'diet';

  @ApiProperty({ description: 'Parent category ID (if this is a subcategory)', required: false })
  @Column({ nullable: true })
  parentId: number;
} 