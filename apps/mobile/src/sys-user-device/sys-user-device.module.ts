import { Module } from '@nestjs/common';
import { SysUserDeviceService } from './sys-user-device.service';
import { SysUserDeviceController } from './sys-user-device.controller';
import { PrismaService } from '@app/common';

@Module({
  controllers: [SysUserDeviceController],
  providers: [SysUserDeviceService, PrismaService],
})
export class SysUserDeviceModule {}
