import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
export class CreateOrgDto
  implements Prisma.SystemOrganizationOrgUncheckedCreateInput
{
  @ApiProperty({ description: '上级机构', required: false, default: 0 })
  parentId?: number;
  @ApiProperty({ description: '机构名称', example: '总公司' })
  name: string;
  @ApiProperty({ description: '显示排序', required: false, default: 0 })
  sort?: number;
  @ApiProperty({ description: '负责人', required: false, example: '李世民' })
  leader?: string;
  @ApiProperty({
    description: '联系电话',
    required: false,
    example: '13888888888',
  })
  phone?: number;
  @ApiProperty({
    description: '负责人邮箱',
    required: false,
    example: '12345@qq.com',
  })
  email?: string;
  @ApiProperty({ default: true, required: false })
  status?: boolean;
}
