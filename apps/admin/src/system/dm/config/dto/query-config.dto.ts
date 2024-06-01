import { BaseQueryDto } from '@app/common/dto';
import { ApiProperty } from '@nestjs/swagger';
import { Transform, Type } from 'class-transformer';
import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class QueryConfigDto extends BaseQueryDto {
  @Transform((value) => (value.value == 'true' ? true : false), {
    toClassOnly: true,
  })
  // @Type(() => Boolean)
  @IsBoolean()
  @IsOptional()
  @ApiProperty({ description: '系统内置？', default: true, required: false })
  type?: boolean;

  @IsString()
  @Type(() => String)
  @IsOptional()
  @ApiProperty({
    description: '参数名称',
    example: '主框架页-默认皮肤样式名称',
    required: false,
  })
  name?: string;

  @IsString()
  @Type(() => String)
  @IsOptional()
  @ApiProperty({
    description: '参数键名',
    example: 'sys.index.skinName',
    required: false,
  })
  key?: string;

  @IsString()
  @Type(() => String)
  @IsOptional()
  @ApiProperty({
    description: '参数键值',
    example: 'skin-blue',
    required: false,
  })
  value?: string;

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
