import { BaseEntity } from '@app/common/entity';
import { ApiProperty } from '@nestjs/swagger';
import { SysUserDevice } from '@prisma/client';

export class SysUserDeviceEntity extends BaseEntity implements SysUserDevice {
  @ApiProperty({ description: '设备系统' })
  deviceOs: string;
  @ApiProperty({ description: '设备编号' })
  deviceNo: string;
  @ApiProperty({ description: '设备品牌' })
  deviceBrand: string;
  @ApiProperty({ description: '准入状态 true 准入 false不准入' })
  status: boolean;
  @ApiProperty({ description: '用户id' })
  userId: number;
}
