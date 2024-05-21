import { Test, TestingModule } from '@nestjs/testing';
import { UserArticleCommentController } from './user-article-comment.controller';
import { UserArticleCommentService } from './user-article-comment.service';

describe('UserArticleCommentController', () => {
  let controller: UserArticleCommentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserArticleCommentController],
      providers: [UserArticleCommentService],
    }).compile();

    controller = module.get<UserArticleCommentController>(UserArticleCommentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
