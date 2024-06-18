// redis.service.ts
import { Injectable } from '@nestjs/common';
// https://github.com/redis/ioredis
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

  // 存入值，且设置过期时间：
  setWithExpiry(key: string, value: string, time: number) {
    return this.redisClient.setex(key, time, value);
  }

  // 删除数据
  deleteKey(key: string) {
    return this.redisClient.del(key);
  }

  // 使用哈希表（Hash）
  // 在哈希表（Hash）相关的方法中，field这是哈希表中的字段名称。

  //设置key中filed字段的数据value
  setHashField(key: string, field: string, value: string) {
    return this.redisClient.hset(key, field, value);
  }

  //获取key中的field字段数据
  getHashField(key: string, field: string) {
    return this.redisClient.hget(key, field);
  }

  //获取key中所有数据
  getAllHashFields(key: string) {
    return this.redisClient.hgetall(key);
  }
}
