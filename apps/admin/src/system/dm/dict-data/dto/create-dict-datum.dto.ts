import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { IsBoolean, IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateDictDatumDto
  implements Prisma.SystemDmDictDataUncheckedCreateInput
{
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: '数据标签',
    example: '男',
  })
  label: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: '数据键值',
    example: 0,
  })
  value: string;

  @IsString()
  @ApiProperty({
    description: '样式属性',
    required: false,
  })
  class?: string;

  @IsInt()
  @ApiProperty({
    description: '排序',
    default: 0,
    required: false,
  })
  sort?: number;

  @IsString()
  @ApiProperty({
    description: '备注',
    default: 0,
    required: false,
  })
  remark?: string;

  @IsBoolean()
  @ApiProperty({
    description: '状态',
    default: true,
    required: false,
  })
  status?: boolean;

  @IsString()
  @ApiProperty({
    description: '颜色类型',
    default: 'default',
    required: false,
  })
  colorType?: string;

  @IsNotEmpty()
  @IsInt()
  @ApiProperty({
    description: '字典id',
  })
  dictId: number;
}
