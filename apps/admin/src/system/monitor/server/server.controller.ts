import { Controller, Get } from '@nestjs/common';
import { ServerService } from './server.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { BaseController } from '@app/common';

@ApiTags('系统管理/系统监控/服务监控')
@Controller('system/monitor/server')
export class ServerController extends BaseController {
  constructor(private readonly serverService: ServerService) {
    super();
  }

  @Get()
  @ApiOperation({ summary: '获取服务监控信息(会报错/未解决)' })
  // @ApiOkResponse({ type: LoginLogEntity })
  async getInfo() {
    // const result = await this.serverService.getInfo();
    // console.log('result', result);
    const result2 = {
      cpu: {
        cpuNum: 8,
        total: 434429183100,
        sys: '1.74',
        used: '1.53',
        wait: 0,
        free: '96.73',
      },
      mem: {
        total: '15.17',
        used: '6.30',
        free: '8.87',
        usage: '41.50',
      },
      sys: {
        computerName: 'VM-4-14-centos',
        computerIp: '10.0.4.14',
        userDir: '/root/nest-admin-server',
        osName: 'linux',
        osArch: 'x64',
      },
      sysFiles: [
        {
          dirName: '/dev',
          typeName: 'devtmpfs',
          total: '0.01GB',
          used: '0.00GB',
          free: '0.01GB',
          usage: '0.00',
        },
        {
          dirName: '/dev/shm',
          typeName: 'tmpfs',
          total: '0.01GB',
          used: '0.00GB',
          free: '0.01GB',
          usage: '0.00',
        },
        {
          dirName: '/run',
          typeName: 'tmpfs',
          total: '0.01GB',
          used: '0.00GB',
          free: '0.01GB',
          usage: '0.01',
        },
        {
          dirName: '/sys/fs/cgroup',
          typeName: 'tmpfs',
          total: '0.01GB',
          used: '0.00GB',
          free: '0.01GB',
          usage: '0.00',
        },
        {
          dirName: '/',
          typeName: '/dev/vda1',
          total: '0.15GB',
          used: '0.04GB',
          free: '0.11GB',
          usage: '24.35',
        },
        {
          dirName: '/run/user/0',
          typeName: 'tmpfs',
          total: '0.00GB',
          used: '0.00GB',
          free: '0.00GB',
          usage: '0.00',
        },
        {
          dirName:
            '/var/lib/docker/overlay2/07924582e17e20bd01fb78782a3cc1a6ec241fd35fee0dc0042ce57c271fa923/merged',
          typeName: 'overlay',
          total: '0.15GB',
          used: '0.04GB',
          free: '0.11GB',
          usage: '24.35',
        },
        {
          dirName:
            '/var/lib/docker/overlay2/0811eee3992f584c85071fccadeee87743c26fb8869707af0490204475e7b59b/merged',
          typeName: 'overlay',
          total: '0.15GB',
          used: '0.04GB',
          free: '0.11GB',
          usage: '24.35',
        },
        {
          dirName:
            '/var/lib/docker/overlay2/d0ca1faf018ea0ca6fd244769a3416f8570d14f520b2da6c446b78a3d5e5e3b5/merged',
          typeName: 'overlay',
          total: '0.15GB',
          used: '0.04GB',
          free: '0.11GB',
          usage: '24.35',
        },
      ],
    };
    return this.success(result2);
  }
}
