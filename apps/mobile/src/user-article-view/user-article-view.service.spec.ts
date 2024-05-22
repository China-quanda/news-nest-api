import { Test, TestingModule } from '@nestjs/testing';
import { UserArticleViewService } from './user-article-view.service';

describe('UserArticleViewService', () => {
  let service: UserArticleViewService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserArticleViewService],
    }).compile();

    service = module.get<UserArticleViewService>(UserArticleViewService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
