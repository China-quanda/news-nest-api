import { Test, TestingModule } from '@nestjs/testing';
import { UserArticleReportService } from './user-article-report.service';

describe('UserArticleReportService', () => {
  let service: UserArticleReportService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserArticleReportService],
    }).compile();

    service = module.get<UserArticleReportService>(UserArticleReportService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
