import { Test, TestingModule } from '@nestjs/testing';
import { TraitsController } from './traits.controller';
import { TraitsService } from './traits.service';

describe('TraitsController', () => {
  let controller: TraitsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TraitsController],
      providers: [TraitsService],
    }).compile();

    controller = module.get<TraitsController>(TraitsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
