import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { UserArticleViewService } from './user-article-view.service';
import { CreateUserArticleViewDto } from './dto/create-user-article-view.dto';
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { UserArticleViewEntity } from './entities/user-article-view.entity';

@ApiTags('用户文章浏览')
@Controller('user-article-view')
export class UserArticleViewController {
  constructor(
    private readonly userArticleViewService: UserArticleViewService,
  ) {}

  @Post()
  @ApiOperation({ summary: '创建用户文章浏览' })
  @ApiCreatedResponse({ type: UserArticleViewEntity })
  create(@Body() body: CreateUserArticleViewDto) {
    return this.userArticleViewService.create(body);
  }

  @Get()
  @ApiOperation({ summary: '获取用户文章浏览列表' })
  @ApiOkResponse({ type: UserArticleViewEntity, isArray: true })
  findAll() {
    return this.userArticleViewService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: '获取用户文章浏览详情' })
  @ApiOkResponse({ type: UserArticleViewEntity })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.userArticleViewService.findOne(id);
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除用户文章浏览' })
  @ApiOkResponse({ type: UserArticleViewEntity })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.userArticleViewService.remove(id);
  }
}
