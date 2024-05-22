import { Test, TestingModule } from '@nestjs/testing';
import { SysUserDeviceService } from './sys-user-device.service';

describe('SysUserDeviceService', () => {
  let service: SysUserDeviceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SysUserDeviceService],
    }).compile();

    service = module.get<SysUserDeviceService>(SysUserDeviceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
