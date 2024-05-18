import { Module } from '@nestjs/common';
import { ArticleCategoryService } from './article-category.service';
import { ArticleCategoryController } from './article-category.controller';
import { PrismaService } from '@app/common';

@Module({
  controllers: [ArticleCategoryController],
  providers: [ArticleCategoryService, PrismaService],
})
export class ArticleCategoryModule {}
