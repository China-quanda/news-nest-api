import { Module } from '@nestjs/common';
import { RegionService } from './region.service';
import { RegionController } from './region.controller';
import { PrismaService } from '@app/common';

@Module({
  controllers: [RegionController],
  providers: [RegionService, PrismaService],
})
export class RegionModule {}
