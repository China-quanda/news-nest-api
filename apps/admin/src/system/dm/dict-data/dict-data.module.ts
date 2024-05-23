import { Module } from '@nestjs/common';
import { DictDataService } from './dict-data.service';
import { DictDataController } from './dict-data.controller';
import { PrismaService } from '@app/common';

@Module({
  controllers: [DictDataController],
  providers: [DictDataService, PrismaService],
})
export class DictDataModule {}
