import { Test, TestingModule } from '@nestjs/testing';
import { SysDataDictController } from './sys-data-dict.controller';
import { SysDataDictService } from './sys-data-dict.service';

describe('SysDataDictController', () => {
  let controller: SysDataDictController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SysDataDictController],
      providers: [SysDataDictService],
    }).compile();

    controller = module.get<SysDataDictController>(SysDataDictController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
