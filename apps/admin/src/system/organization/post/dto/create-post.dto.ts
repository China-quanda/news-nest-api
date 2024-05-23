import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';

export class CreatePostDto
  implements Prisma.SystemOrganizationPostUncheckedCreateInput
{
  @ApiProperty({ description: '岗位名称', example: '综合部长' })
  name: string;
  @ApiProperty({ description: '岗位编码', example: 'G1' })
  code: string;
  @ApiProperty({ description: '显示排序', required: false, default: 0 })
  sort?: number;
  @ApiProperty({ description: ' 备注', required: false })
  remark?: string;
  @ApiProperty({ description: '状态', required: false, default: true })
  status?: boolean;
  @ApiProperty({ description: '机构id' })
  orgId: number;
  @ApiProperty({ description: '部门id' })
  deptId: number;
}
