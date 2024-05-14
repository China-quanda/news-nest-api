import { AuthService } from '@app/common';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
@Injectable()
export class AdminService {
  constructor(
    private readonly authService: AuthService,
    private readonly configService: ConfigService,
  ) {}
  getHello(): string {
    console.log('jwt', this.configService.get('jwt'));
    console.log('commonService', this.authService.getAuthService());
    return 'Hello World! - admin';
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
