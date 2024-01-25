import { Answer } from 'src/answers/entities/answer.entity';
import { Question } from 'src/questions/entities/question.entity';
import { Trait } from 'src/traits/entities/trait.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class QuestionTraitMapping {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Question, (question) => question.question_id)
  question_id: Question;

  @ManyToOne(() => Answer, (answer) => answer.answer_id)
  answer_id: Answer;

  @ManyToOne(() => Trait, (trait) => trait.trait_id)
  trait_id: Trait;

  @Column('int')
  influence_score: number;
}
