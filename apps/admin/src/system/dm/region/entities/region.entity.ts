import { BaseEntity } from '@app/common/entity';
import { ApiProperty } from '@nestjs/swagger';
import { SystemDmRegion } from '@prisma/client';

export class RegionEntity extends BaseEntity implements SystemDmRegion {
  @ApiProperty({ description: '上级行政区域id' })
  parentId: number;
  @ApiProperty({ description: '行政区域名称' })
  name: string;
  @ApiProperty({ description: '显示排序' })
  sort: number;
}
