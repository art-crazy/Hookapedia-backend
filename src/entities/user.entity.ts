import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('users')
export class User {
  @ApiProperty({ description: 'Unique identifier of the user' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ description: 'First name of the user', example: 'Ivan' })
  @Column()
  firstName: string;

  @ApiProperty({ description: 'Last name of the user', example: 'Ivanov' })
  @Column()
  lastName: string;

  @ApiProperty({ description: 'Age of the user', example: 25 })
  @Column()
  age: number;

  @ApiProperty({ description: 'City of the user', example: 'Moscow' })
  @Column()
  city: string;

  @ApiProperty({ description: 'Creation timestamp' })
  @CreateDateColumn()
  createdAt: Date;

  @ApiProperty({ description: 'Last update timestamp' })
  @UpdateDateColumn()
  updatedAt: Date;
}
