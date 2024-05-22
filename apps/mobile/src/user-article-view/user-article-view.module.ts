import { Module } from '@nestjs/common';
import { UserArticleViewService } from './user-article-view.service';
import { UserArticleViewController } from './user-article-view.controller';
import { PrismaService } from '@app/common';

@Module({
  controllers: [UserArticleViewController],
  providers: [UserArticleViewService, PrismaService],
  exports: [UserArticleViewService],
})
export class UserArticleViewModule {}
