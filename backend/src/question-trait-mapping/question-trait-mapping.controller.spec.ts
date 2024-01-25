import { Test, TestingModule } from '@nestjs/testing';
import { QuestionTraitMappingController } from './question-trait-mapping.controller';
import { QuestionTraitMappingService } from './question-trait-mapping.service';
import { Question } from 'src/questions/entities/question.entity';
import { Answer } from '../answers/entities/answer.entity';
import { Trait } from 'src/traits/entities/trait.entity';

describe('QuestionTraitMappingController', () => {
  let controller: QuestionTraitMappingController;
  let service: QuestionTraitMappingService;

  beforeEach(async () => {
    // Mock QuestionTraitMappingService
    const mockService = {
      create: jest.fn(),
      findAll: jest.fn(),
      calculatePersonalityType: jest.fn(),
      findOne: jest.fn(),
      update: jest.fn(),
      remove: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [QuestionTraitMappingController],
      providers: [
        { provide: QuestionTraitMappingService, useValue: mockService },
      ],
    }).compile();

    controller = module.get<QuestionTraitMappingController>(
      QuestionTraitMappingController,
    );
    service = module.get<QuestionTraitMappingService>(
      QuestionTraitMappingService,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create a new mapping', async () => {
    const question: Question = new Question();
    question.question_id = 1;
    const answer: Answer = new Answer();
    answer.answer_id = 1;
    const trait: Trait = new Trait();
    trait.trait_id = 1;
    const dto = {
      /*...dto properties*/
      question_id: question,
      answer_id: answer,
      trait_id: trait,
      influence_score: 1,
    };
    await controller.create(dto);
    expect(service.create).toHaveBeenCalledWith(dto);
  });

  it('should find all mappings', async () => {
    await controller.findAll();
    expect(service.findAll).toHaveBeenCalled();
  });

  it('should calculate personality type', async () => {
    const userResponses = [
      /*...user responses*/
    ];
    await controller.calculatePersonalityType(userResponses);
    expect(service.calculatePersonalityType).toHaveBeenCalledWith(
      userResponses,
    );
  });

  it('should find one mapping', async () => {
    const id = 1;
    await controller.findOne(id.toString());
    expect(service.findOne).toHaveBeenCalledWith(id);
  });

  it('should update a mapping', async () => {
    const id = 1;
    const dto = {
      /*...dto properties*/
    };
    await controller.update(id.toString(), dto);
    expect(service.update).toHaveBeenCalledWith(id, dto);
  });

  it('should remove a mapping', async () => {
    const id = 1;
    await controller.remove(id.toString());
    expect(service.remove).toHaveBeenCalledWith(id);
  });
});
