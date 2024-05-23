import { BaseEntity } from '@app/common/entity';
import { ApiProperty } from '@nestjs/swagger';
import { SystemOrganizationDept } from '@prisma/client';

export class DeptEntity extends BaseEntity implements SystemOrganizationDept {
  @ApiProperty({ description: '上级机构', required: false, default: 0 })
  parentId: number;
  @ApiProperty({ description: '部门名称' })
  name: string;
  @ApiProperty({ description: '显示排序', required: false, default: 0 })
  sort: number;
  @ApiProperty({ description: '负责人', required: false })
  leader: string;
  @ApiProperty({ description: '联系电话', required: false })
  phone: number;
  @ApiProperty({ description: '负责人邮箱', required: false })
  email: string;
  @ApiProperty({ description: '机构状态', required: false, default: true })
  status: boolean;
  @ApiProperty({ description: '机构id', required: true })
  orgId: number;
}
