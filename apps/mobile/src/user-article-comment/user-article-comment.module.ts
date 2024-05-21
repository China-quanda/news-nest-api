import { Module } from '@nestjs/common';
import { UserArticleCommentService } from './user-article-comment.service';
import { UserArticleCommentController } from './user-article-comment.controller';
import { PrismaService } from '@app/common';

@Module({
  controllers: [UserArticleCommentController],
  providers: [UserArticleCommentService, PrismaService],
})
export class UserArticleCommentModule {}
