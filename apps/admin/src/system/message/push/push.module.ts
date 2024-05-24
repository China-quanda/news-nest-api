import { Module } from '@nestjs/common';
import { PushService } from './push.service';
import { PushController } from './push.controller';
import { PrismaService } from '@app/common';

@Module({
  controllers: [PushController],
  providers: [PushService, PrismaService],
})
export class PushModule {}
