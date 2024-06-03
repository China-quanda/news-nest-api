import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateRegionDto
  implements Prisma.SystemDmRegionUncheckedCreateInput
{
  @IsNumber()
  @Type(() => Number)
  @ApiProperty({
    description: 'code 为行政区域编号',
    example: 110000,
    required: true,
  })
  code: number;

  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  @ApiProperty({ description: '上级行政区域code', default: 0, required: false })
  parentCode?: number;

  @IsString()
  @Type(() => String)
  @ApiProperty({ description: '行政区域名称', example: '北京', required: true })
  name: string;

  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  @ApiProperty({ description: '显示排序', example: 0, required: false })
  sort?: number;
}
