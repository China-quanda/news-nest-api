import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateCategoryDto
  implements Prisma.SystemDmCategoryUncheckedCreateInput
{
  @IsInt()
  @Type(() => Number)
  @IsOptional()
  @ApiProperty({
    description: '父id',
  })
  parentId?: number;

  @Type(() => String)
  @IsString()
  @ApiProperty({
    description: '分类名称',
  })
  name: string;

  @Type(() => String)
  @IsString()
  @IsOptional()
  @ApiProperty({
    description: '分类编码',
    required: false,
  })
  code?: string;

  @IsNumber()
  @Type(() => Number)
  @IsOptional()
  @ApiProperty({
    description: '层级',
    default: 1,
    required: false,
  })
  level?: number;

  @IsNumber()
  @Type(() => Number)
  @IsOptional()
  @ApiProperty({
    description: '排序',
    default: 0,
    required: false,
  })
  sort?: number;

  @IsOptional()
  @IsBoolean()
  @ApiProperty({
    description: '状态',
    default: true,
    required: false,
  })
  status?: boolean;

  @Type(() => String)
  @IsString()
  @IsOptional()
  @ApiProperty({
    description: '备注',
    default: 0,
    required: false,
  })
  remark?: string;
}
