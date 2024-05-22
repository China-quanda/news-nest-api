import { Module } from '@nestjs/common';
import { SysDataDictService } from './sys-data-dict.service';
import { SysDataDictController } from './sys-data-dict.controller';
import { PrismaService } from '@app/common';

@Module({
  controllers: [SysDataDictController],
  providers: [SysDataDictService, PrismaService],
})
export class SysDataDictModule {}
