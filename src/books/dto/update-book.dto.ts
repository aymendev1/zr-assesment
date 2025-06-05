import { IsString, IsOptional, IsInt } from 'class-validator';

export class UpdateBookDto {
  @IsString()
  @IsOptional()
  title: string;

  @IsString()
  @IsOptional()
  author: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsInt()
  @IsOptional()
  year: number;

  @IsOptional()
  @IsString()
  coverImageUrl?: string;
}
