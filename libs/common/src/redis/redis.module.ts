import { Global, Module } from '@nestjs/common';
// import { ConfigService } from '@nestjs/config';
// import { RedisConfig } from '../config';
// import { Redis } from 'ioredis';
import { RedisService } from './redis.service';
@Global()
@Module({
  providers: [
    RedisService,
    // redis
    // {
    //   provide: 'REDIS_CLIENT',
    //   inject: [ConfigService],
    //   useFactory: async (configService: ConfigService) => {
    //     const redisConfig = configService.get<RedisConfig>('redis');
    //     return await new Redis({
    //       // Redis服务器配置
    //       host: redisConfig.host,
    //       port: redisConfig.port,
    //       // 其他选项...
    //     });
    //   },
    // },
  ],
  exports: [RedisService],
})
export class RedisModule {}
