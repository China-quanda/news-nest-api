import { Test, TestingModule } from '@nestjs/testing';
import { UserArticleCommentService } from './user-article-comment.service';

describe('UserArticleCommentService', () => {
  let service: UserArticleCommentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserArticleCommentService],
    }).compile();

    service = module.get<UserArticleCommentService>(UserArticleCommentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
