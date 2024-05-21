import { Test, TestingModule } from '@nestjs/testing';
import { UserSearchController } from './user-search.controller';
import { UserSearchService } from './user-search.service';

describe('UserSearchController', () => {
  let controller: UserSearchController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserSearchController],
      providers: [UserSearchService],
    }).compile();

    controller = module.get<UserSearchController>(UserSearchController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
