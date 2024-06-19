import { Module } from '@nestjs/common';
import { CommonService } from './common.service';
import { PrismaService } from './prisma/prisma.service';
import { RedisModule } from './redis/redis.module';
import { MinioModule } from './minio/minio.module';

@Module({
  providers: [CommonService, PrismaService],
  exports: [CommonService],
  imports: [RedisModule, MinioModule],
})
export class CommonModule {}
