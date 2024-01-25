import { Injectable } from '@nestjs/common';
import { CreateQuestionTraitMappingDto } from './dto/create-question-trait-mapping.dto';
import { UpdateQuestionTraitMappingDto } from './dto/update-question-trait-mapping.dto';
import { QuestionTraitMapping } from './entities/question-trait-mapping.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class QuestionTraitMappingService {
  constructor(
    @InjectRepository(QuestionTraitMapping)
    private readonly questionTraitMappingRepository: Repository<QuestionTraitMapping>,
  ) {}
  create(createQuestionTraitMappingDto: CreateQuestionTraitMappingDto) {
    const questionTraitMapping: QuestionTraitMapping =
      new QuestionTraitMapping();
    questionTraitMapping.question_id =
      createQuestionTraitMappingDto.question_id;
    questionTraitMapping.answer_id = createQuestionTraitMappingDto.answer_id;
    questionTraitMapping.trait_id = createQuestionTraitMappingDto.trait_id;
    questionTraitMapping.influence_score =
      createQuestionTraitMappingDto.influence_score;
    return this.questionTraitMappingRepository.save(questionTraitMapping);
  }

  findAll() {
    return `This action returns all questionTraitMapping`;
  }

  findOne(id: number) {
    return `This action returns a #${id} questionTraitMapping`;
  }

  update(
    id: number,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    updateQuestionTraitMappingDto: UpdateQuestionTraitMappingDto,
  ) {
    return `This action updates a #${id} questionTraitMapping`;
  }

  async calculatePersonalityType(userResponses: any[]): Promise<string> {
    console.log(userResponses);
    let introvertScore = 0;
    let extrovertScore = 0;

    for (const response of userResponses) {
      const mappings = await this.questionTraitMappingRepository.find({
        where: {
          question_id: response.question_id,
          answer_id: response.answer_id,
        },
        relations: ['trait_id'],
      });
      console.log('MAPPINGS', mappings);

      for (const mapping of mappings) {
        if (mapping.trait_id.trait_id == 1) {
          introvertScore += mapping.influence_score;
        } else if (mapping.trait_id.trait_id == 2) {
          extrovertScore += mapping.influence_score;
        }
      }
    }

    if (introvertScore > extrovertScore) {
      return 'Introvert';
    } else if (extrovertScore > introvertScore) {
      return 'Extrovert';
    } else {
      return 'Balanced';
    }
  }

  remove(id: number) {
    return `This action removes a #${id} questionTraitMapping`;
  }
}
