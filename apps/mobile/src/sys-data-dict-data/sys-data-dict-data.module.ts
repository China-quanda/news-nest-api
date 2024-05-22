import { Module } from '@nestjs/common';
import { SysDataDictDataService } from './sys-data-dict-data.service';
import { SysDataDictDataController } from './sys-data-dict-data.controller';
import { PrismaService } from '@app/common';

@Module({
  controllers: [SysDataDictDataController],
  providers: [SysDataDictDataService, PrismaService],
})
export class SysDataDictDataModule {}
