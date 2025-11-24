import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn, Index } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('recipes')
export class Recipe {
  @ApiProperty({ description: 'Unique identifier of the recipe' })
  @PrimaryColumn()
  id: string;

  @ApiProperty({ description: 'Slug/short name of the recipe', required: false })
  @Column({ nullable: true })
  name: string;

  @ApiProperty({ description: 'Title of the recipe' })
  @Column()
  @Index()
  title: string;

  @ApiProperty({ description: 'Detailed description of the recipe' })
  @Column('text')
  description: string;

  @ApiProperty({ description: 'URL of the recipe image' })
  @Column({ nullable: true }) // Allow null to fix migration issue
  imageUrl: string;

  @ApiProperty({
    description: 'List of ingredients',
    example: [
      { name: 'Манго', brand: 'Musthave', percentage: 40 },
      { name: 'Маракуйя', brand: 'Darkside', percentage: 40 },
    ]
  })
  @Column('jsonb', { nullable: true }) // Allow null to fix migration issue
  ingredients: string; // Stored as a JSON string

  @ApiProperty({ description: 'Strength of the hookah mix (1-10)' })
  @Column({ nullable: true }) // Allow null to fix migration issue
  strength: number;

  @ApiProperty({ description: 'List of tags for the recipe' })
  @Column('simple-array', { nullable: true }) // Allow null to fix migration issue
  @Index()
  tags: string[];

  @ApiProperty({ description: 'Author of the recipe' })
  @Column({ nullable: true }) // Allow null to fix migration issue
  author: string;

  @ApiProperty({ description: 'Main image for cards', required: false })
  @Column({ nullable: true })
  imageMain: string;

  @ApiProperty({ description: 'Average rating', required: false })
  @Column({ type: 'numeric', precision: 3, scale: 1, default: 0, nullable: true })
  rating: number;

  @ApiProperty({ description: 'Number of reviews', required: false })
  @Column({ default: 0 })
  reviews: number;

  @ApiProperty({ description: 'Flavor category', required: false })
  @Column({ nullable: true })
  flavorCategory: string;

  @ApiProperty({ description: 'Mint category', required: false })
  @Column({ nullable: true })
  mintCategory: string;

  @ApiProperty({ description: 'Cooling category', required: false })
  @Column({ nullable: true })
  coolingCategory: string;

  @ApiProperty({ description: 'Strength category', required: false })
  @Column({ nullable: true })
  strengthCategory: string;

  @ApiProperty({ description: 'Categories list', required: false, isArray: true })
  @Column({ type: 'text', nullable: true })
  categories: string;

  @ApiProperty({ description: 'Number of likes' })
  @Column({ default: 0 })
  likes: number;

  @ApiProperty({ description: 'Creation timestamp' })
  @CreateDateColumn()
  createdAt: Date;

  @ApiProperty({ description: 'Last update timestamp' })
  @UpdateDateColumn()
  updatedAt: Date;
}
