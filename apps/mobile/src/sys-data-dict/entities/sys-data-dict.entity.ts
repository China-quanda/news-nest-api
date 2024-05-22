import { BaseEntity } from '@app/common/entity';
import { ApiProperty } from '@nestjs/swagger';
import { SysDataDict } from '@prisma/client';

export class SysDataDictEntity extends BaseEntity implements SysDataDict {
  @ApiProperty({ description: '字典名称' })
  name: string;
  @ApiProperty({ description: '字典类型' })
  type: string;
  @ApiProperty({ description: '备注' })
  remark: string;
  @ApiProperty({ description: '状态' })
  status: boolean;
}
