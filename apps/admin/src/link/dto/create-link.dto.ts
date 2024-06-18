import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateLinkDto implements Prisma.LinkUncheckedCreateInput {
  @ApiProperty({
    description: '友情链接地址',
    example: 'https://www.baidu.com',
    required: true,
  })
  @Type(() => String)
  @IsNotEmpty()
  @IsString()
  url: string;

  @ApiProperty({
    description: '友情链接名称',
    example: '百度',
    required: true,
  })
  @Type(() => String)
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    description: '站长EMAIL',
    example: '877880098@qq.com',
    required: true,
  })
  @Type(() => String)
  @IsNotEmpty()
  @IsString()
  email: string;

  @ApiProperty({
    description: '友情链接logo',
    example: 'https://www.baidu.com/img/logo.png',
    required: true,
  })
  @Type(() => String)
  @IsNotEmpty()
  @IsString()
  logo: string;

  @ApiProperty({ description: '状态', default: true, required: false })
  @IsOptional()
  @IsBoolean()
  status?: boolean;
}
