import { Test, TestingModule } from '@nestjs/testing';
import { SysDataDictDataController } from './sys-data-dict-data.controller';
import { SysDataDictDataService } from './sys-data-dict-data.service';

describe('SysDataDictDataController', () => {
  let controller: SysDataDictDataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SysDataDictDataController],
      providers: [SysDataDictDataService],
    }).compile();

    controller = module.get<SysDataDictDataController>(SysDataDictDataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
