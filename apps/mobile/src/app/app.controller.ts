import { Controller, Get, Param, Res } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import type { Response } from 'express';
// import { AppService } from './app.service';
import * as path from 'node:path';
import { CheckForUpdateDto } from './dto/check-for-update.dto';


@ApiTags('application')
@Controller('app')
export class AppController {
  // constructor(private readonly appService: AppService) {}
  @ApiOperation({
    summary: '检查app是否需要更新',
    description:
      '检查app是否需要更新 应该根据app版本来做判断，客户端上传app版本来判断',
  })
  @ApiOkResponse({ type: CheckForUpdateDto })
  @Get('checkForUpdate/:version')
  async checkForUpdate(@Param('version') version: string) {
    const latestVersion = '1.0.3';
    console.log(
      '当前app版本为：',
      version,
      '最新版本为：',
      latestVersion,
      '是否需要更新：',
      latestVersion > version,
    );
    const obj = {
      msg: 'ok',
      code: 200,
      data: {},
    };
    let data = {
      version: '',
      url: '',
      update: true,
    };
    if (latestVersion > version) {
      data = {
        version: latestVersion,
        url: 'http://127.0.0.1:3002/api/app/downloadApp/' + latestVersion,
        update: true,
      };
    } else {
      data = {
        version: '',
        url: '',
        update: false,
      };
    }
    obj.data = data;
    return obj;
  }

  @Get('downloadApp/:version')
  @ApiOperation({ summary: '下载app', description: '根据app版本下载' })
  async downloadApp(@Param('version') version: string, @Res() res: Response) {
    const filePath = path.resolve('public/apps', `sqzls${version}.wgt`);
    res.setHeader('Content-Type', 'application/octet-stream');
    res.setHeader('Content-Disposition', `attachment; filename=App`);
    res.download(filePath);
  }
}
