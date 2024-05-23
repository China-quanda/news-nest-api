import { Module } from '@nestjs/common';
import { SystemDmDictService } from './dict.service';
import { SystemDmDictController } from './dict.controller';
import { PrismaService } from '@app/common';

@Module({
  controllers: [SystemDmDictController],
  providers: [SystemDmDictService, PrismaService],
})
export class SystemDmDictModule {}
