import { ApiProperty, PartialType } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ description: 'First name of the user', example: 'Ivan' })
  firstName: string;

  @ApiProperty({ description: 'Last name of the user', example: 'Ivanov' })
  lastName: string;

  @ApiProperty({ description: 'Age of the user', example: 25 })
  age: number;

  @ApiProperty({ description: 'City of the user', example: 'Moscow' })
  city: string;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}
