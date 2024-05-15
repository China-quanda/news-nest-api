import { Controller, Get, Render } from '@nestjs/common';
import { MobileService } from './mobile.service';
import { ConfigService } from '@nestjs/config';
@Controller()
export class MobileController {
  constructor(
    private readonly mobileService: MobileService,
    private readonly configService: ConfigService,
  ) {}

  @Get()
  @Render('welcome')
  getHello() {
    console.log('jwt-m', this.configService.get('jwt'));
    // return this.mobileService.getHello();
    return { text: 'HELLO MAYA-ADMIN 一个项目用MAYA就够了！！！' };
  }
}
