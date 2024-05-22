import { Test, TestingModule } from '@nestjs/testing';
import { SysDataDictService } from './sys-data-dict.service';

describe('SysDataDictService', () => {
  let service: SysDataDictService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SysDataDictService],
    }).compile();

    service = module.get<SysDataDictService>(SysDataDictService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
