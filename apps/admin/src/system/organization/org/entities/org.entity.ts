import { BaseEntity } from '@app/common/entity';
import { ApiProperty } from '@nestjs/swagger';
import { SystemOrganizationOrg } from '@prisma/client';

export class OrgEntity extends BaseEntity implements SystemOrganizationOrg {
  @ApiProperty({ description: '上级机构', required: false, default: 0 })
  parentId: number;
  @ApiProperty({ description: '机构名称' })
  name: string;
  @ApiProperty({ description: '显示排序', required: false, default: 0 })
  sort: number;
  @ApiProperty({ description: '负责人', required: false })
  leader: string;
  @ApiProperty({ description: '联系电话', required: false })
  phone: string;
  @ApiProperty({ description: '负责人邮箱', required: false })
  email: string;
  @ApiProperty({ description: '机构状态', required: false, default: true })
  status: boolean;
}
