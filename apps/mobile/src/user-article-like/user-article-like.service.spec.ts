import { Test, TestingModule } from '@nestjs/testing';
import { UserArticleLikeService } from './user-article-like.service';

describe('UserArticleLikeService', () => {
  let service: UserArticleLikeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserArticleLikeService],
    }).compile();

    service = module.get<UserArticleLikeService>(UserArticleLikeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
