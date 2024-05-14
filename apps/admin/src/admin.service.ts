import { AuthService, PrismaService } from '@app/common';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { User } from '@prisma/client';
@Injectable()
export class AdminService {
  constructor(
    private readonly authService: AuthService,
    private readonly configService: ConfigService,
    private prisma: PrismaService,
  ) {}
  async getHello(): Promise<User[]> {
    const users = await this.prisma.user.findMany();
    console.log('users', users);
    console.log('jwt', this.configService.get('jwt'));
    console.log('commonService', this.authService.getAuthService());
    return users;
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
