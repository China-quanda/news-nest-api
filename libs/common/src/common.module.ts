import { Module } from '@nestjs/common';
import { CommonService } from './common.service';
import { PrismaService } from './prisma/prisma.service';
import { RedisModule } from './redis/redis.module';

@Module({
  providers: [CommonService, PrismaService],
  exports: [CommonService],
  imports: [RedisModule],
})
export class CommonModule {}
