import { Module } from '@nestjs/common';
import { NoticeService } from './notice.service';
import { NoticeController } from './notice.controller';
import { PrismaService } from '@app/common';

@Module({
  controllers: [NoticeController],
  providers: [NoticeService, PrismaService],
})
export class NoticeModule {}
