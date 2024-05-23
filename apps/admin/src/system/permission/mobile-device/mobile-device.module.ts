import { Module } from '@nestjs/common';
import { MobileDeviceService } from './mobile-device.service';
import { MobileDeviceController } from './mobile-device.controller';
import { PrismaService } from '@app/common';

@Module({
  controllers: [MobileDeviceController],
  providers: [MobileDeviceService, PrismaService],
})
export class MobileDeviceModule {}
