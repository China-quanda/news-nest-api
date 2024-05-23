import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';

export class CreateRegionDto
  implements Prisma.SystemDmRegionUncheckedCreateInput
{
  @ApiProperty({ description: '上级行政区域id' })
  parentId: number;
  @ApiProperty({ description: '行政区域名称' })
  name: string;
  @ApiProperty({ description: '显示排序' })
  sort: number;
}
