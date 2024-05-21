import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { ArticleService } from './article.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import {
  ApiTags,
  ApiCreatedResponse,
  ApiOperation,
  ApiOkResponse,
} from '@nestjs/swagger';
import { ArticleEntity } from './entities/article.entity';

@ApiTags('文章')
@Controller('article')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Post()
  @ApiOperation({ summary: '新增文章类别' })
  @ApiCreatedResponse({ type: ArticleEntity })
  create(@Body() createArticleDto: CreateArticleDto) {
    return this.articleService.create(createArticleDto);
  }

  @Get()
  @ApiOperation({ summary: '获取文章列表' })
  @ApiOkResponse({ type: ArticleEntity, isArray: true })
  findAll() {
    return this.articleService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: '获取文章详情' })
  @ApiOkResponse({ type: ArticleEntity })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.articleService.findOne(+id);
  }

  @Get('getHotArticle')
  @ApiOperation({ summary: '获取热门文章' })
  @ApiOkResponse({ type: ArticleEntity })
  getHotArticle(@Query() query: any) {
    return this.articleService.getHotArticle(query);
  }

  @Patch(':id')
  @ApiOperation({ summary: '更新文章' })
  @ApiOkResponse({ type: ArticleEntity })
  update(@Param('id') id: string, @Body() updateArticleDto: UpdateArticleDto) {
    return this.articleService.update(+id, updateArticleDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除文章' })
  @ApiOkResponse({ type: ArticleEntity })
  remove(@Param('id') id: string) {
    return this.articleService.remove(+id);
  }
}
