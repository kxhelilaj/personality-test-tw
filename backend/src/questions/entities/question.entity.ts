import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Question {
  @PrimaryGeneratedColumn()
  question_id: number;

  @Column({ type: 'varchar', length: 200 })
  question_text: string;
}
