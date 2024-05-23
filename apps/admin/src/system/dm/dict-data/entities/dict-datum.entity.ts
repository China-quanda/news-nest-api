import { BaseEntity } from '@app/common/entity';
import { ApiProperty } from '@nestjs/swagger';
import { SystemDmDictData } from '@prisma/client';
export class DictDatumEntity extends BaseEntity implements SystemDmDictData {
  @ApiProperty({ description: '字典标签' })
  label: string;
  @ApiProperty({ description: '字典键值' })
  value: string;
  @ApiProperty({ description: '样式属性' })
  class: string;
  @ApiProperty({ description: '排序' })
  sort: number;
  @ApiProperty({ description: '备注' })
  remark: string;
  @ApiProperty({ description: '状态' })
  status: boolean;
  @ApiProperty({ description: '颜色类型' })
  colorType: string;
  @ApiProperty({ description: '字典id' })
  dictId: number;
}
