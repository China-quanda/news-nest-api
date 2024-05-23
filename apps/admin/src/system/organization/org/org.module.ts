import { Module } from '@nestjs/common';
import { OrgService } from './org.service';
import { OrgController } from './org.controller';
import { PrismaService } from '@app/common';

@Module({
  controllers: [OrgController],
  providers: [OrgService, PrismaService],
})
export class OrgModule {}
