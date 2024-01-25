import { Module } from '@nestjs/common';
import { TraitsService } from './traits.service';
import { TraitsController } from './traits.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Trait } from './entities/trait.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Trait])],
  controllers: [TraitsController],
  providers: [TraitsService],
})
export class TraitsModule {}
