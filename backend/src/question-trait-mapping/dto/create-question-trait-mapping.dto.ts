import { IsNotEmpty, IsNumber } from 'class-validator';
import { Answer } from 'src/answers/entities/answer.entity';
import { Question } from 'src/questions/entities/question.entity';
import { Trait } from 'src/traits/entities/trait.entity';

export class CreateQuestionTraitMappingDto {
  @IsNotEmpty()
  question_id: Question;

  @IsNotEmpty()
  answer_id: Answer;

  @IsNotEmpty()
  trait_id: Trait;

  @IsNumber()
  @IsNotEmpty()
  influence_score: number;
}
