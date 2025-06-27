import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Recipe } from './recipe.entity';

@Entity()
export class Step {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  order: number;

  @Column('text')
  description: string;

  @Column({ nullable: true })
  image: string;

  @ManyToOne(() => Recipe, (recipe) => recipe.steps)
  recipe: Recipe;
} 