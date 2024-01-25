import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Trait {
  @PrimaryGeneratedColumn()
  trait_id: number;

  @Column()
  trait_name: string;
}
