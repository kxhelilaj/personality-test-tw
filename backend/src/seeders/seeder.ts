import { DataSource } from 'typeorm';
import { User } from '../user/entities/user.entity';
import { Question } from '../questions/entities/question.entity';
import { Answer } from '../answers/entities/answer.entity';
import { Trait } from '../traits/entities/trait.entity';
import { QuestionTraitMapping } from '../question-trait-mapping/entities/question-trait-mapping.entity';

// Define your DataSource
const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '',
  database: 'personality-test',
  entities: [User, Question, Answer, Trait, QuestionTraitMapping],
  synchronize: true,
  logging: true,
});

async function seedDatabase() {
  await AppDataSource.initialize();

  const traitRepository = AppDataSource.getRepository(Trait);
  const questionRepository = AppDataSource.getRepository(Question);
  const answerRepository = AppDataSource.getRepository(Answer);
  const mappingRepository = AppDataSource.getRepository(QuestionTraitMapping);

  // Seed Traits
  const traits = [{ trait_name: 'Extrovert' }, { trait_name: 'Introvert' }];

  await traitRepository.save(traits);

  // Seed Questions
  const questions = [
    {
      question_text:
        'Do you prefer large social gatherings or small intimate groups?',
    },
    {
      question_text:
        'Do you often speak up in meetings or prefer to listen and observe?',
    },
    {
      question_text:
        'Do you find it easier to express your feelings or keep them to yourself?',
    },
    {
      question_text:
        'Do you get energized by being around people or by spending time alone?',
    },
  ];

  const savedQuestions = await questionRepository.save(questions);

  // Seed Answers with Correct Relations
  const answers = [
    { question_id: savedQuestions[0], answer_text: 'Large social gatherings' },
    { question_id: savedQuestions[0], answer_text: 'Small intimate groups' },
    { question_id: savedQuestions[1], answer_text: 'Often speak up' },
    {
      question_id: savedQuestions[1],
      answer_text: 'Prefer to listen and observe',
    },
    {
      question_id: savedQuestions[2],
      answer_text: 'Find it easy to express feelings',
    },
    { question_id: savedQuestions[2], answer_text: 'Keep them to myself' },
    { question_id: savedQuestions[3], answer_text: 'Being around people' },
    { question_id: savedQuestions[3], answer_text: 'Spending time alone' },
  ];

  const savedAnswers = await answerRepository.save(answers);

  // Seed QuestionTraitMappings
  const savedTraits = await traitRepository.find();

  const mappings = [
    {
      question_id: savedQuestions[0],
      answer_id: savedAnswers[0],
      trait_id: savedTraits[0],
      influence_score: 10,
    },
    {
      question_id: savedQuestions[0],
      answer_id: savedAnswers[1],
      trait_id: savedTraits[1],
      influence_score: 10,
    },
    {
      question_id: savedQuestions[1],
      answer_id: savedAnswers[2],
      trait_id: savedTraits[0],
      influence_score: 8,
    },
    {
      question_id: savedQuestions[1],
      answer_id: savedAnswers[3],
      trait_id: savedTraits[1],
      influence_score: 8,
    },
    // Add more mappings as needed
  ];

  await mappingRepository.save(mappings);

  console.log('Database seeding completed!');
  process.exit(0); // Exit the process after seeding
}

seedDatabase().catch((error) => {
  console.error('Error seeding database:', error);
  process.exit(1);
});
