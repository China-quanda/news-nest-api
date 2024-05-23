import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';

export class CreateCategoryDto
  implements Prisma.SystemDmCategoryUncheckedCreateInput
{
  @ApiProperty({
    description: '父id',
  })
  parentId?: number;
  @ApiProperty({
    description: '分类名称',
  })
  name: string;
  @ApiProperty({
    description: '分类编码',
    required: false,
  })
  code?: string;
  @ApiProperty({
    description: '层级',
    default: 1,
    required: false,
  })
  level?: number;
  @ApiProperty({
    description: '排序',
    default: 0,
    required: false,
  })
  sort?: number;
  @ApiProperty({
    description: '状态',
    default: true,
    required: false,
  })
  status?: boolean;
  @ApiProperty({
    description: '备注',
    default: 0,
    required: false,
  })
  remark?: string;
}
