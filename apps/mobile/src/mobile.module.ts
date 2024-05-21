import { Module } from '@nestjs/common';
import { MobileController } from './mobile.controller';
import { MobileService } from './mobile.service';
import { ConfigModule } from '@app/common';
import { AppModule } from './app/app.module';
import { ArticleCategoryModule } from './article-category/article-category.module';
import { ArticleModule } from './article/article.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { UserArticleCommentModule } from './user-article-comment/user-article-comment.module';

@Module({
  imports: [
    ConfigModule,
    AppModule,
    ArticleCategoryModule,
    ArticleModule,
    UserModule,
    AuthModule,
    UserArticleCommentModule,
  ],
  controllers: [MobileController],
  providers: [MobileService],
})
export class MobileModule {}
