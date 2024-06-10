import { BaseQueryDto } from '@app/common/dto';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsOptional, IsString } from 'class-validator';

export class QueryLoginLogDto extends BaseQueryDto {
  @IsString()
  @Type(() => String)
  @IsOptional()
  @ApiProperty({
    description: '用户名称',
    example: 'admin',
    required: false,
  })
  username?: string;

  @IsString()
  @Type(() => String)
  @IsOptional()
  @ApiProperty({
    description: '登录ip地址',
    example: '36.158.112.194',
    required: false,
  })
  loginIp?: string;

  @IsString()
  @Type(() => String)
  @IsOptional()
  @ApiProperty({
    description: '登录城市',
    example: '湖南省',
    required: false,
  })
  loginCity?: string;

  @IsString()
  @Type(() => String)
  @IsOptional()
  @ApiProperty({ description: '开始时间', example: '', required: false })
  startTime?: string;

  @IsString()
  @Type(() => String)
  @IsOptional()
  @ApiProperty({ description: '结束时间', example: '', required: false })
  endTime?: string;
}
