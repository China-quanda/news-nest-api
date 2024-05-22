import { PartialType } from '@nestjs/swagger';
import { CreateSysUserDeviceDto } from './create-sys-user-device.dto';

export class UpdateSysUserDeviceDto extends PartialType(CreateSysUserDeviceDto) {}
