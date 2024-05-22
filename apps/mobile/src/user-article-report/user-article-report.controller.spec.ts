import { Test, TestingModule } from '@nestjs/testing';
import { UserArticleReportController } from './user-article-report.controller';
import { UserArticleReportService } from './user-article-report.service';

describe('UserArticleReportController', () => {
  let controller: UserArticleReportController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserArticleReportController],
      providers: [UserArticleReportService],
    }).compile();

    controller = module.get<UserArticleReportController>(UserArticleReportController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
