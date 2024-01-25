import { Test, TestingModule } from '@nestjs/testing';
import { QuestionTraitMappingService } from './question-trait-mapping.service';

describe('QuestionTraitMappingService', () => {
  let service: QuestionTraitMappingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QuestionTraitMappingService],
    }).compile();

    service = module.get<QuestionTraitMappingService>(
      QuestionTraitMappingService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
