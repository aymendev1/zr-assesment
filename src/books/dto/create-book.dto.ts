import { IsString, IsOptional, IsInt } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateBookDto {
  @ApiProperty()
  @IsString()
  title: string;

  @IsString()
  @ApiProperty()
  author: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  description?: string;

  @IsInt()
  @ApiProperty()
  year: number;

  @IsOptional()
  @IsString()
  @ApiProperty()
  coverImageUrl?: string;
}
