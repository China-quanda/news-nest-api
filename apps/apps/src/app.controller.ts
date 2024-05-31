import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @HttpCode(200)
  @Post('/api/market/meterTrack/addBatch')
  addBatch(@Body() body) {
    console.log(`批量上传了位置addBatch===> ${body.length} 条记录}`);
    return this.success({ data: body });
  }

  @HttpCode(200)
  @Post('/api/market/meterTrack/connect')
  connect(@Body() body) {
    console.log('connect-body===>', body.locationTime);
    return this.success({ data: body });
  }

  @HttpCode(200)
  @Post('/api/market/meterTrack/addLocation')
  addLocation(@Body() body) {
    console.log('每行数据-addLocation-body===>', body.createTime);
    return this.success({ data: body });
  }

  private success(payload) {
    const data = {
      code: payload.code || 200,
      msg: payload.msg || 'success',
      data: payload.data || {},
    };
    return data;
  }
}
