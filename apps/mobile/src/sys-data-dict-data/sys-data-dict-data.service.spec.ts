import { Test, TestingModule } from '@nestjs/testing';
import { SysDataDictDataService } from './sys-data-dict-data.service';

describe('SysDataDictDataService', () => {
  let service: SysDataDictDataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SysDataDictDataService],
    }).compile();

    service = module.get<SysDataDictDataService>(SysDataDictDataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
