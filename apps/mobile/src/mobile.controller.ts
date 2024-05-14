import { Controller, Get } from '@nestjs/common';
import { MobileService } from './mobile.service';
import { ConfigService } from '@nestjs/config';
@Controller()
export class MobileController {
  constructor(
    private readonly mobileService: MobileService,
    private readonly configService: ConfigService,
  ) {}

  @Get()
  getHello(): string {
    console.log('jwt-m', this.configService.get('jwt'));
    return this.mobileService.getHello();
  }
}
