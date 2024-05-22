import { Test, TestingModule } from '@nestjs/testing';
import { SysUserDeviceController } from './sys-user-device.controller';
import { SysUserDeviceService } from './sys-user-device.service';

describe('SysUserDeviceController', () => {
  let controller: SysUserDeviceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SysUserDeviceController],
      providers: [SysUserDeviceService],
    }).compile();

    controller = module.get<SysUserDeviceController>(SysUserDeviceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
