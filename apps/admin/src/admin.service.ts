import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Redis } from 'ioredis';
@Injectable()
export class AdminService {
  constructor(
    private readonly configService: ConfigService,
    @Inject('REDIS_CLIENT') private readonly redisClient: Redis,
  ) {}
  async getHello() {
    this.redisClient.set('name', '刘强东');
    const value = await this.redisClient.get('name');
    console.log('aaavalue', value);

    // console.log('users', users);
    console.log('jwt', this.configService.get('jwt'));
    // return users;
  }

  // @Get('config')
  // getConfig() {
  //   const jwt = this.configService.get('jwt');
  //   const secret = this.configService.get('jwt.secret');
  //   const k = this.configService.get('jwt.k');
  //   const res = this.configService.get('WXM_URL');
  //   const resd = this.configService.get('TEST_DB_URL');
  //   const resdd = this.configService.get('TESTe');
  //   console.log(res, resd, resdd);
  //   return { res, resd, resdd, jwt, secret, k };
  // }
}
