import { Module } from '@nestjs/common';
import { ArticleService } from './article.service';
import { ArticleController } from './article.controller';
import { PrismaService } from '@app/common';
import { UserSearchModule } from '../user-search/user-search.module';
import { UserArticleViewModule } from '../user-article-view/user-article-view.module';

@Module({
  imports: [UserSearchModule, UserArticleViewModule],
  controllers: [ArticleController],
  providers: [ArticleService, PrismaService],
})
export class ArticleModule {}
