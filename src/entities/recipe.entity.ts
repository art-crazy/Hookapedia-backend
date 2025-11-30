import { Entity, PrimaryGeneratedColumn, Column, UpdateDateColumn, Index } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('recipes')
export class Recipe {
  @ApiProperty({ description: 'Unique identifier of the recipe' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ description: 'Unique name/slug of the recipe' })
  @Column({ unique: true })
  @Index()
  name: string;

  @ApiProperty({ description: 'Title of the recipe' })
  @Column()
  @Index()
  title: string;

  @ApiProperty({ description: 'Detailed description of the recipe' })
  @Column('text')
  description: string;

  @ApiProperty({ description: 'Preparation time (e.g., "10-15 минут")' })
  @Column()
  preparationTime: string;

  @ApiProperty({ description: 'Smoking duration (e.g., "45-60 минут")' })
  @Column()
  smokingDuration: string;

  @ApiProperty({ description: 'Difficulty level (Легко, Средне, Сложно)' })
  @Column()
  difficulty: string;

  @ApiProperty({ description: 'Recipe type (Фруктовый, Десертный, Экзотический и т.д.)' })
  @Column()
  recipeType: string;

  @ApiProperty({ description: 'Number of people (1-3 человека)' })
  @Column({ default: 1 })
  persons: number;

  @ApiProperty({
    description: 'List of tobacco ingredients',
    example: [
      {
        name: 'Vanilla Ice Cream',
        brand: 'Darkside',
        percentage: 40,
        tobaccoType: 'Dark Blend',
        amount: 12,
        unit: 'г'
      }
    ]
  })
  @Column('jsonb')
  ingredients: Array<{
    name: string;
    brand: string;
    percentage: number;
    tobaccoType?: string;
    amount?: number;
    unit?: string;
    alternatives?: string[];
  }>;

  @ApiProperty({
    description: 'Preparation steps',
    example: [
      {
        title: 'Step 1',
        text: 'Mix ingredients',
        image: '/path/to/image.jpg'
      }
    ]
  })
  @Column('jsonb')
  steps: Array<{
    title: string;
    text: string;
    image?: string;
  }>;

  @ApiProperty({ description: 'Main image URL of the recipe' })
  @Column()
  imageMain: string;

  @ApiProperty({ description: 'Bowl type (Phunnel, Funnel, Egyptian и т.д.)' })
  @Column()
  bowlType: string;

  @ApiProperty({ description: 'Packing method (Воздушная, Плотная, Оверпак)' })
  @Column()
  packingMethod: string;

  @ApiProperty({
    description: 'Charcoal configuration',
    example: {
      type: 'Кокосовый',
      brand: 'Cocobrico',
      pieces: 3,
      size: '25мм куб'
    }
  })
  @Column('jsonb')
  charcoal: {
    type: string;
    brand?: string;
    pieces: number;
    size: string;
  };

  @ApiProperty({ description: 'Smoke level (Низкий, Средний, Высокий)' })
  @Column()
  smokeLevel: string;

  @ApiProperty({ description: 'Search and filter tags', type: [String] })
  @Column('simple-array')
  @Index()
  tags: string[];

  @ApiProperty({ description: 'Smoking tips', type: [String], required: false })
  @Column('simple-array', { nullable: true })
  tips: string[];

  @ApiProperty({ description: 'Flavor category (frukty, yagody, tsitrusovye, deserty, pryanosti-travy, ekzotika)', required: false })
  @Column({ nullable: true })
  @Index()
  flavorCategory: string;

  @ApiProperty({ description: 'Mint category (s-myatoy, bez-myaty)', required: false })
  @Column({ nullable: true })
  @Index()
  mintCategory: string;

  @ApiProperty({ description: 'Cooling category (bez-kholoda, legkiy-kholod, silnyy-kholod)', required: false })
  @Column({ nullable: true })
  @Index()
  coolingCategory: string;

  @ApiProperty({ description: 'Strength category (legkaya-krepost, srednyaya-krepost, krepkaya-krepost)', required: false })
  @Column({ nullable: true })
  @Index()
  strengthCategory: string;

  @ApiProperty({ description: 'Recipe rating (0-5)' })
  @Column('decimal', { precision: 3, scale: 1, default: 0 })
  rating: number;

  @ApiProperty({ description: 'Number of reviews' })
  @Column({ default: 0 })
  reviews: number;

  @ApiProperty({ description: 'Number of likes' })
  @Column({ default: 0 })
  likes: number;

  @ApiProperty({ description: 'Last update timestamp' })
  @UpdateDateColumn()
  updatedAt: Date;
}
