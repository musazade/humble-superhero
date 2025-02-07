import { Type } from 'class-transformer';
import { IsString, IsInt, Min, Max } from 'class-validator';

export class CreateSuperheroDto {
  @IsString()
  name: string;

  @IsString()
  superpower: string;

  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(10)
  humilityScore: number;
}
