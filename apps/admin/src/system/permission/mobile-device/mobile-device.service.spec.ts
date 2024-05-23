import { Test, TestingModule } from '@nestjs/testing';
import { MobileDeviceService } from './mobile-device.service';

describe('MobileDeviceService', () => {
  let service: MobileDeviceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MobileDeviceService],
    }).compile();

    service = module.get<MobileDeviceService>(MobileDeviceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
