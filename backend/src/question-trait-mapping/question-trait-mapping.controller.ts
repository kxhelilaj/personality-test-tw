import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { QuestionTraitMappingService } from './question-trait-mapping.service';
import { CreateQuestionTraitMappingDto } from './dto/create-question-trait-mapping.dto';
import { UpdateQuestionTraitMappingDto } from './dto/update-question-trait-mapping.dto';

@Controller('question-trait-mapping')
export class QuestionTraitMappingController {
  constructor(
    private readonly questionTraitMappingService: QuestionTraitMappingService,
  ) {}

  @Post()
  create(@Body() createQuestionTraitMappingDto: CreateQuestionTraitMappingDto) {
    return this.questionTraitMappingService.create(
      createQuestionTraitMappingDto,
    );
  }

  @Get()
  findAll() {
    return this.questionTraitMappingService.findAll();
  }

  @Post('calculate-personality-type')
  calculatePersonalityType(@Body() userResponses: any[]) {
    return this.questionTraitMappingService.calculatePersonalityType(
      userResponses,
    );
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.questionTraitMappingService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateQuestionTraitMappingDto: UpdateQuestionTraitMappingDto,
  ) {
    return this.questionTraitMappingService.update(
      +id,
      updateQuestionTraitMappingDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.questionTraitMappingService.remove(+id);
  }
}
