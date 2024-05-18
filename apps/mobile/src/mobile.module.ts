import { Module } from '@nestjs/common';
import { MobileController } from './mobile.controller';
import { MobileService } from './mobile.service';
import { ConfigModule } from '@app/common';
import { AppModule } from './app/app.module';
import { ArticleCategoryModule } from './article-category/article-category.module';

@Module({
  imports: [ConfigModule, AppModule, ArticleCategoryModule],
  controllers: [MobileController],
  providers: [MobileService],
})
export class MobileModule {}
