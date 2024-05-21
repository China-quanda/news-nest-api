import { Test, TestingModule } from '@nestjs/testing';
import { UserArticleLikeController } from './user-article-like.controller';
import { UserArticleLikeService } from './user-article-like.service';

describe('UserArticleLikeController', () => {
  let controller: UserArticleLikeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserArticleLikeController],
      providers: [UserArticleLikeService],
    }).compile();

    controller = module.get<UserArticleLikeController>(UserArticleLikeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
