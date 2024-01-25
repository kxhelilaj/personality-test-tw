import { Question } from 'src/questions/entities/question.entity';
import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from 'typeorm';

@Entity()
export class Answer {
  @PrimaryGeneratedColumn()
  answer_id: number;

  @ManyToOne(() => Question, (question) => question.question_id)
  question_id: Question;

  @Column({ type: 'varchar', length: 100 })
  answer_text: string;
}
