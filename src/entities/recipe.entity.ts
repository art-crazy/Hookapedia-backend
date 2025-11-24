import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn, Index } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('recipes')
export class Recipe {
  @ApiProperty({ description: 'Unique identifier of the recipe' })
  @PrimaryColumn()
  id: string;

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
