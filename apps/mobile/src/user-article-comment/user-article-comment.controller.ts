import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Query,
  ParseIntPipe,
} from '@nestjs/common';
import { UserArticleCommentService } from './user-article-comment.service';
import { CreateUserArticleCommentDto } from './dto/create-user-article-comment.dto';
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { UserArticleCommentEntity } from './entities/user-article-comment.entity';
import { QueryUserArticleCommentDto } from './dto/query-user-article-comment.dto';

@ApiTags('用户文章评论')
@Controller('user-article-comment')
export class UserArticleCommentController {
  constructor(
    private readonly userArticleCommentService: UserArticleCommentService,
  ) {}

  @Post()
  @ApiOperation({ summary: '新增文章评论' })
  @ApiCreatedResponse({ type: UserArticleCommentEntity })
  create(@Body() createUserArticleCommentDto: CreateUserArticleCommentDto) {
    return this.userArticleCommentService.create(createUserArticleCommentDto);
  }

  @Get()
  @ApiOperation({ summary: '获取所有用户文章评论' })
  @ApiOkResponse({ type: UserArticleCommentEntity, isArray: true })
  findAll(@Query() query: QueryUserArticleCommentDto) {
    return this.userArticleCommentService.findAll(query);
  }

  @Get(':id')
  @ApiOperation({ summary: '获取用户文章评论详情' })
  @ApiOkResponse({ type: UserArticleCommentEntity })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.userArticleCommentService.findOne(id);
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除用户文章评论详情' })
  @ApiOkResponse({ type: UserArticleCommentEntity })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.userArticleCommentService.remove(id);
  }
}
