import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import { Recipe } from './recipe.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Collection {
  @ApiProperty({ description: 'Unique identifier of the collection' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ description: 'Title of the collection' })
  @Column()
  title: string;

  @ApiProperty({ description: 'Description of the collection', required: false })
  @Column({ nullable: true })
  description: string;

  @ApiProperty({ description: 'Image URL of the collection', required: false })
  @Column({ nullable: true })
  image: string;

  @ApiProperty({ description: 'Whether the collection is active' })
  @Column({ default: true })
  isActive: boolean;

  @ApiProperty({ type: () => [Recipe], description: 'Recipes in the collection' })
  @ManyToMany(() => Recipe)
  @JoinTable()
  recipes: Recipe[];
} 