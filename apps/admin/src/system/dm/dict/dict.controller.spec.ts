import { Test, TestingModule } from '@nestjs/testing';
import { SystemDmDictController } from './dict.controller';
import { SystemDmDictService } from './dict.service';

describe('SystemDmDictController', () => {
  let controller: SystemDmDictController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SystemDmDictController],
      providers: [SystemDmDictService],
    }).compile();

    controller = module.get<SystemDmDictController>(SystemDmDictController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
