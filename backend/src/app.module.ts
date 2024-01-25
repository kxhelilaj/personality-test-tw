import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { QuestionsModule } from './questions/questions.module';
import { Question } from './questions/entities/question.entity';
import { AnswersModule } from './answers/answers.module';
import { Answer } from './answers/entities/answer.entity';
import { TraitsModule } from './traits/traits.module';
import { Trait } from './traits/entities/trait.entity';
import { QuestionTraitMappingModule } from './question-trait-mapping/question-trait-mapping.module';
import { QuestionTraitMapping } from './question-trait-mapping/entities/question-trait-mapping.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      password: '',
      username: 'postgres',
      entities: [User, Question, Answer, Trait, QuestionTraitMapping],
      database: 'personality-test',
      synchronize: true,
      logging: true,
    }),
    UserModule,
    QuestionsModule,
    AnswersModule,
    TraitsModule,
    QuestionTraitMappingModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
