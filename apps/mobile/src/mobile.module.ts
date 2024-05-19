import { Module } from '@nestjs/common';
import { MobileController } from './mobile.controller';
import { MobileService } from './mobile.service';
import { ConfigModule } from '@app/common';
import { AppModule } from './app/app.module';
import { ArticleCategoryModule } from './article-category/article-category.module';
import { ArticleModule } from './article/article.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule,
    AppModule,
    ArticleCategoryModule,
    ArticleModule,
    UserModule,
  ],
  controllers: [MobileController],
  providers: [MobileService],
})
export class MobileModule {}
