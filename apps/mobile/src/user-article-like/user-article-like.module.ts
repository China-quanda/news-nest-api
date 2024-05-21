import { Module } from '@nestjs/common';
import { UserArticleLikeService } from './user-article-like.service';
import { UserArticleLikeController } from './user-article-like.controller';
import { PrismaService } from '@app/common';

@Module({
  controllers: [UserArticleLikeController],
  providers: [UserArticleLikeService, PrismaService],
})
export class UserArticleLikeModule {}
