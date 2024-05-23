import { BaseEntity } from '@app/common/entity';
import { ApiProperty } from '@nestjs/swagger';
import { SystemDmCategory } from '@prisma/client';

export class CategoryEntity extends BaseEntity implements SystemDmCategory {
  @ApiProperty({ description: '父id' })
  parentId: number;
  @ApiProperty({ description: '分类名称' })
  name: string;
  @ApiProperty({ description: '分类编码' })
  code: string;
  @ApiProperty({ description: '层级' })
  level: number;
  @ApiProperty({ description: '顺序' })
  sort: number;
  @ApiProperty({ description: '状态' })
  status: boolean;
  @ApiProperty({ description: '备注' })
  remark: string;
}
