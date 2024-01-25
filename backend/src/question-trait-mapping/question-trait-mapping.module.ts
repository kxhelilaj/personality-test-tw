import { Module } from '@nestjs/common';
import { QuestionTraitMappingService } from './question-trait-mapping.service';
import { QuestionTraitMappingController } from './question-trait-mapping.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionTraitMapping } from './entities/question-trait-mapping.entity';

@Module({
  imports: [TypeOrmModule.forFeature([QuestionTraitMapping])],
  controllers: [QuestionTraitMappingController],
  providers: [QuestionTraitMappingService],
})
export class QuestionTraitMappingModule {}
