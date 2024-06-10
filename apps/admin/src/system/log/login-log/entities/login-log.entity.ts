import { ApiProperty } from '@nestjs/swagger';
import { SystemLogLoginLog } from '@prisma/client';

export class LoginLogEntity implements SystemLogLoginLog {
  @ApiProperty({ description: 'id' })
  id: number;

  @ApiProperty({ description: '登录时间' })
  loginTime: Date;

  @ApiProperty({ description: '登录ip地址' })
  loginIp: string;

  @ApiProperty({ description: '登录城市' })
  loginCity: string;

  @ApiProperty({ description: '浏览器' })
  browser: string;

  @ApiProperty({ description: '操作系统' })
  os: string;

  @ApiProperty({
    description: '登录类型1账户密码登录 2扫码登录 3QQ登录 4微信登录。。',
  })
  loginType: number;

  @ApiProperty({
    description:
      '登录来源（0其它 1后台用户 2App用户 3小程序用户 4wap用户 5web端用户）。。。',
  })
  loginSource: number;

  @ApiProperty({ description: '登录信息（登录成功）（登录失败）（退出成功）' })
  message: string;

  @ApiProperty({ description: '登录状态' })
  status: number;

  @ApiProperty({ description: '登录用户id' })
  userId: number;
}
