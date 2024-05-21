import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { UserArticleLikeService } from './user-article-like.service';
import { CreateUserArticleLikeDto } from './dto/create-user-article-like.dto';
import { UserArticleLikeEntity } from './entities/user-article-like.entity';
import {
  ApiTags,
  ApiOperation,
  ApiCreatedResponse,
  ApiOkResponse,
} from '@nestjs/swagger';

@ApiTags('用户文章点赞')
@Controller('user-article-like')
export class UserArticleLikeController {
  constructor(
    private readonly userArticleLikeService: UserArticleLikeService,
  ) {}

  @Post()
  @ApiOperation({ summary: '新增用户文章点赞' })
  @ApiCreatedResponse({ type: UserArticleLikeEntity })
  create(@Body() body: CreateUserArticleLikeDto) {
    return this.userArticleLikeService.create(body);
  }

  @Get()
  @ApiOperation({ summary: '获取用户文章点赞列表' })
  @ApiOkResponse({ type: UserArticleLikeEntity, isArray: true })
  findAll() {
    return this.userArticleLikeService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: '获取用户文章点赞详情' })
  @ApiOkResponse({ type: UserArticleLikeEntity })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.userArticleLikeService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: '更新用户文章点赞信息' })
  @ApiOkResponse({ type: UserArticleLikeEntity })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: CreateUserArticleLikeDto,
  ) {
    return this.userArticleLikeService.update(id, body);
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除用户文章点赞' })
  @ApiOkResponse({ type: UserArticleLikeEntity })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.userArticleLikeService.remove(id);
  }
}
