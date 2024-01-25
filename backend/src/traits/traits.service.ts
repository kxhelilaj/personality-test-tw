import { Injectable } from '@nestjs/common';
import { CreateTraitDto } from './dto/create-trait.dto';
import { UpdateTraitDto } from './dto/update-trait.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Trait } from './entities/trait.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TraitsService {
  constructor(
    @InjectRepository(Trait)
    private readonly traitRepository: Repository<Trait>,
  ) {}
  create(createTraitDto: CreateTraitDto) {
    const trait: Trait = new Trait();
    trait.trait_name = createTraitDto.trait_name;
    return this.traitRepository.save(trait);
  }

  findAll() {
    return `This action returns all traits`;
  }

  findOne(id: number) {
    return `This action returns a #${id} trait`;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  update(id: number, updateTraitDto: UpdateTraitDto) {
    return `This action updates a #${id} trait`;
  }

  remove(id: number) {
    return `This action removes a #${id} trait`;
  }
}
