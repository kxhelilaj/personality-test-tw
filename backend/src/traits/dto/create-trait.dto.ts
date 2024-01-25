import { IsString, IsNotEmpty } from 'class-validator';
export class CreateTraitDto {
  @IsString()
  @IsNotEmpty()
  trait_name: string;
}
