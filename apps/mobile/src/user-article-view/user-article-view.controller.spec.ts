import { Test, TestingModule } from '@nestjs/testing';
import { UserArticleViewController } from './user-article-view.controller';
import { UserArticleViewService } from './user-article-view.service';

describe('UserArticleViewController', () => {
  let controller: UserArticleViewController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserArticleViewController],
      providers: [UserArticleViewService],
    }).compile();

    controller = module.get<UserArticleViewController>(UserArticleViewController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
