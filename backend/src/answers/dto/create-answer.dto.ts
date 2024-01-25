import { IsString, IsNotEmpty } from 'class-validator';
import { Question } from 'src/questions/entities/question.entity';

export class CreateAnswerDto {
  @IsString()
  @IsNotEmpty()
  answer_text: string;

  @IsNotEmpty()
  question_id: Question;
}
