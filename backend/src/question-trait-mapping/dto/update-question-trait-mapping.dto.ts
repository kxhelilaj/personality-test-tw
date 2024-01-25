import { PartialType } from '@nestjs/mapped-types';
import { CreateQuestionTraitMappingDto } from './create-question-trait-mapping.dto';

export class UpdateQuestionTraitMappingDto extends PartialType(CreateQuestionTraitMappingDto) {}
