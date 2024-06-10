import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';
export class CreateLoginLogDto
  implements Prisma.SystemLogLoginLogUncheckedCreateInput
{
  @ApiProperty({ description: '登录ip地址', example: '36.158.112.194' })
  @IsNotEmpty()
  @IsString()
  loginIp: string;

  @ApiProperty({ description: '登录城市' })
  @IsNotEmpty()
  @IsString()
  loginCity: string;

  @ApiProperty({ description: '浏览器' })
  @IsNotEmpty()
  @IsString()
  browser: string;

  @ApiProperty({ description: '操作系统' })
  @IsNotEmpty()
  @IsString()
  os: string;

  @ApiProperty({
    description: '登录类型1账户密码登录 2扫码登录 3QQ登录 4微信登录。。',
    example: 1,
    required: true,
  })
  @IsNotEmpty()
  @IsInt()
  loginType: number;

  @ApiProperty({
    description:
      '登录来源（0其它 1后台用户 2App用户 3小程序用户 4wap用户 5web端用户）。。。',
    example: 1,
    required: true,
  })
  @IsNotEmpty()
  @IsInt()
  loginSource: number;

  @ApiProperty({
    description: '登录信息（登录成功）（登录失败）（退出成功）',
    example: '登录成功',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  message: string;

  @ApiProperty({
    description: '登录状态',
    example: 1,
    required: false,
  })
  @IsOptional()
  @IsInt()
  status?: number;

  @ApiProperty({
    description: '登录用户id',
    example: 1,
    required: true,
  })
  @IsNotEmpty()
  @IsInt()
  userId: number;
}
