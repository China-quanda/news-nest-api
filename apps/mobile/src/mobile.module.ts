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
import { UserArticleLikeModule } from './user-article-like/user-article-like.module';
import { UserSearchModule } from './user-search/user-search.module';
import { UserArticleViewModule } from './user-article-view/user-article-view.module';
import { UserArticleReportModule } from './user-article-report/user-article-report.module';
import { SysUserDeviceModule } from './sys-user-device/sys-user-device.module';
import { SysDataDictModule } from './sys-data-dict/sys-data-dict.module';
import { SysDataDictDataModule } from './sys-data-dict-data/sys-data-dict-data.module';

@Module({
  imports: [
    ConfigModule,
    AppModule,
    ArticleCategoryModule,
    ArticleModule,
    UserModule,
    AuthModule,
    UserArticleCommentModule,
    UserArticleLikeModule,
    UserSearchModule,
    UserArticleViewModule,
    UserArticleReportModule,
    SysUserDeviceModule,
    SysDataDictModule,
    SysDataDictDataModule,
  ],
  controllers: [MobileController],
  providers: [MobileService],
})
export class MobileModule {}
