// redis.service.ts
import { Injectable } from '@nestjs/common';
import Redis from 'ioredis';
import { ConfigService } from '@nestjs/config';
import { RedisConfig } from '../config';

@Injectable()
export class RedisService {
  private readonly redisClient: Redis;
  constructor(private readonly configService: ConfigService) {
    const redisConfig = this.configService.get<RedisConfig>('redis');
    this.redisClient = new Redis({
      host: redisConfig.host, // Redis 服务器的主机名
      port: redisConfig.port, // Redis 服务器的端口
    });
  }

  setValue(key: string, value: string) {
    return this.redisClient.set(key, value);
  }

  getValue(key: string) {
    return this.redisClient.get(key);
  }
}
