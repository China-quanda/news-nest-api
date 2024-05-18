import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ArticleCategoryService } from './article-category.service';
import { CreateArticleCategoryDto } from './dto/create-article-category.dto';
import { UpdateArticleCategoryDto } from './dto/update-article-category.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ArticleCategory } from '@prisma/client';
import { ArticleCategoryEntity } from './entities/article-category.entity';

@ApiTags('文章类别')
@Controller('article-category')
export class ArticleCategoryController {
  constructor(
    private readonly articleCategoryService: ArticleCategoryService,
  ) {}

  @Post()
  @ApiOperation({ summary: '新增文章类别' })
  @ApiResponse({ type: [ArticleCategoryEntity] })
  create(@Body() createArticleCategoryDto: CreateArticleCategoryDto) {
    return this.articleCategoryService.create(createArticleCategoryDto);
  }

  @Get()
  @ApiOperation({ summary: '获取文章类别列表' })
  @ApiResponse({ type: [ArticleCategoryEntity] })
  async findAll(): Promise<ArticleCategory[]> {
    return await this.articleCategoryService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: '获取文章类别详情' })
  @ApiResponse({ type: ArticleCategoryEntity })
  findOne(@Param('id') id: number): Promise<ArticleCategory> {
    return this.articleCategoryService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: '修改文章类别详情' })
  @ApiResponse({ type: ArticleCategoryEntity })
  update(
    @Param('id') id: string,
    @Body() updateArticleCategoryDto: UpdateArticleCategoryDto,
  ) {
    return this.articleCategoryService.update(+id, updateArticleCategoryDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除文章类别' })
  remove(@Param('id') id: number) {
    return this.articleCategoryService.remove(+id);
  }
}
