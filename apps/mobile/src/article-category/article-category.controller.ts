import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseArrayPipe,
} from '@nestjs/common';
import { ArticleCategoryService } from './article-category.service';
import { CreateArticleCategoryDto } from './dto/create-article-category.dto';
import { UpdateArticleCategoryDto } from './dto/update-article-category.dto';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { ArticleCategoryEntity } from './entities/article-category.entity';
import { DeleteArticleCategoryDto } from './dto/delete-article-category.dto';

@ApiTags('文章类别')
@Controller('article-category')
export class ArticleCategoryController {
  constructor(
    private readonly articleCategoryService: ArticleCategoryService,
  ) {}

  @Post()
  @ApiOperation({ summary: '新增文章类别' })
  // @ApiResponse({ type: ArticleCategoryEntity })
  @ApiCreatedResponse({ type: ArticleCategoryEntity })
  create(@Body() createArticleCategoryDto: CreateArticleCategoryDto) {
    return this.articleCategoryService.create(createArticleCategoryDto);
  }

  @Get()
  @ApiOperation({ summary: '获取文章类别列表' })
  @ApiOkResponse({ type: ArticleCategoryEntity, isArray: true })
  findAll() {
    return this.articleCategoryService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: '获取文章类别详情' })
  @ApiResponse({ type: ArticleCategoryEntity })
  findOne(@Param('id') id: number) {
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

  @Post('deleteMany')
  @ApiOperation({ summary: '批量删除文章类别' })
  @ApiBody({
    type: DeleteArticleCategoryDto,
  })
  deleteMany(@Body('ids', ParseArrayPipe) ids: number[]) {
    return this.articleCategoryService.deleteMany(ids);
  }
}
