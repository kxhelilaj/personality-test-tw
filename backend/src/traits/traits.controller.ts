import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TraitsService } from './traits.service';
import { CreateTraitDto } from './dto/create-trait.dto';
import { UpdateTraitDto } from './dto/update-trait.dto';

@Controller('traits')
export class TraitsController {
  constructor(private readonly traitsService: TraitsService) {}

  @Post()
  create(@Body() createTraitDto: CreateTraitDto) {
    return this.traitsService.create(createTraitDto);
  }

  @Get()
  findAll() {
    return this.traitsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.traitsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTraitDto: UpdateTraitDto) {
    return this.traitsService.update(+id, updateTraitDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.traitsService.remove(+id);
  }
}
