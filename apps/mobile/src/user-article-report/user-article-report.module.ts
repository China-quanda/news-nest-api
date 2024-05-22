import { Module } from '@nestjs/common';
import { UserArticleReportService } from './user-article-report.service';
import { UserArticleReportController } from './user-article-report.controller';
import { PrismaService } from '@app/common';

@Module({
  controllers: [UserArticleReportController],
  providers: [UserArticleReportService, PrismaService],
})
export class UserArticleReportModule {}
