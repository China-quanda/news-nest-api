import { BaseEntity } from '@app/common/entity';
import { ApiProperty } from '@nestjs/swagger';
import { SystemDmConfig } from '@prisma/client';

export class ConfigEntity extends BaseEntity implements SystemDmConfig {
  @ApiProperty({ description: '参数名称' })
  name: string;
  @ApiProperty({ description: '参数键名' })
  key: string;
  @ApiProperty({ description: '参数键值' })
  value: string;
  @ApiProperty({ description: '系统内置？' })
  type: boolean;
  @ApiProperty({ description: '备注' })
  remark: string;
}
