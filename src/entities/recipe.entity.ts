import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, CreateDateColumn, UpdateDateColumn, Index } from 'typeorm';
import { Category } from './category.entity';
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

  @ApiProperty({ description: 'Cooking time' })
  @Column()
  cookTime: string;

  @ApiProperty({ description: 'Difficulty level of the recipe' })
  @Column()
  difficulty: string;

  @ApiProperty({
    description: 'Nutritional information',
    example: {
      calories: { value: 282.5, unit: 'g' },
      protein: { value: 15.8, unit: 'g' },
      fat: { value: 12.3, unit: 'g' },
      carbs: { value: 29.4, unit: 'g' }
    }
  })
  @Column('jsonb')
  nutrition: {
    calories: { value: number; unit: string };
    protein: { value: number; unit: string };
    fat: { value: number; unit: string };
    carbs: { value: number; unit: string };
  };

  @ApiProperty({ description: 'Cuisine type' })
  @Column()
  cuisine: string;

  @ApiProperty({ description: 'Number of servings' })
  @Column()
  servings: number;

  @ApiProperty({
    description: 'List of ingredients',
    example: [
      { name: 'Flour', amount: 500, unit: 'g' },
      { name: 'Eggs', amount: 2, unit: 'pcs' }
    ]
  })
  @Column('jsonb')
  ingredients: Array<{
    name: string;
    amount: number;
    unit: string;
  }>;

  @ApiProperty({
    description: 'Cooking steps',
    example: [
      {
        image: '/path/to/image.jpg',
        title: 'Step 1',
        text: 'Mix ingredients'
      }
    ]
  })
  @Column('jsonb')
  steps: Array<{
    image: string;
    title: string;
    text: string;
  }>;

  @ApiProperty({ description: 'Main image URL of the recipe' })
  @Column()
  imageMain: string;

  @ApiProperty({ description: 'List of category tags' })
  @Column('simple-array')
  @Index()
  categories: string[];

  @ApiProperty({ description: 'Recipe rating (0-5)' })
  @Column('decimal', { precision: 3, scale: 1 })
  rating: number;

  @ApiProperty({ description: 'Number of reviews' })
  @Column()
  reviews: number;

  @ApiProperty({ type: () => [Category], description: 'Dish categories' })
  @ManyToMany(() => Category)
  @JoinTable({
    name: 'recipe_categories',
    joinColumn: { name: 'recipe_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'category_id', referencedColumnName: 'id' }
  })
  dishCategories: Category[];

  @ApiProperty({ type: () => [Category], description: 'Subcategories' })
  @ManyToMany(() => Category)
  @JoinTable({
    name: 'recipe_subcategories',
    joinColumn: { name: 'recipe_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'category_id', referencedColumnName: 'id' }
  })
  subcategories: Category[];

  @ApiProperty({ type: () => [Category], description: 'Cuisine categories' })
  @ManyToMany(() => Category)
  @JoinTable({
    name: 'recipe_cuisine_categories',
    joinColumn: { name: 'recipe_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'category_id', referencedColumnName: 'id' }
  })
  cuisineCategories: Category[];

  @ApiProperty({ type: () => [Category], description: 'Diet categories' })
  @ManyToMany(() => Category)
  @JoinTable({
    name: 'recipe_diet_categories',
    joinColumn: { name: 'recipe_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'category_id', referencedColumnName: 'id' }
  })
  dietCategories: Category[];

  @ApiProperty({ description: 'Creation timestamp' })
  @CreateDateColumn()
  createdAt: Date;

  @ApiProperty({ description: 'Last update timestamp' })
  @UpdateDateColumn()
  updatedAt: Date;
}
