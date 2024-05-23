import { Test, TestingModule } from '@nestjs/testing';
import { MobileDeviceController } from './mobile-device.controller';
import { MobileDeviceService } from './mobile-device.service';

describe('MobileDeviceController', () => {
  let controller: MobileDeviceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MobileDeviceController],
      providers: [MobileDeviceService],
    }).compile();

    controller = module.get<MobileDeviceController>(MobileDeviceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
