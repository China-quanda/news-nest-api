import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';

import { UserService } from './user.service';
import {
  ApiTags,
  ApiOperation,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { UserEntity } from './entities/user.entity';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { UserArticleFavoriteEntity } from './entities/user-article-favorite.entity';
import {
  CreateUserArticleFavoriteDto,
  UpdateUserArticleFavoriteDto,
} from './dto/user-article-favorite.dto';
import { UserArticleCollectEntity } from './entities/user-article-collect.entity';
import {
  UpdateUserArticleCollectDtoDto,
  UserArticleCollectDto,
} from './dto/user-article-collect.dto';
@ApiTags('用户')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ApiOperation({ summary: '新增用户' })
  @ApiCreatedResponse({ type: UserEntity })
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: '获取用户列表' })
  @ApiOkResponse({ type: UserEntity, isArray: true })
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: '获取用户详情' })
  @ApiOkResponse({ type: UserEntity })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.userService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: '更新用户资料' })
  @ApiCreatedResponse({ type: UserEntity })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.userService.update(id, updateUserDto);
  }

  @ApiOperation({ summary: '删除用户' })
  @ApiOkResponse({ type: UserEntity })
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.userService.remove(id);
  }

  @Post('articleFavorite/create')
  @ApiOperation({ summary: '新增用户文章收藏夹' })
  @ApiCreatedResponse({ type: UserArticleFavoriteEntity })
  createArticleFavorites(@Body() body: CreateUserArticleFavoriteDto) {
    return this.userService.createArticleFavorites(body);
  }

  @Get('articleFavorite/list')
  @ApiOperation({ summary: '获取用户文章收藏夹列表' })
  @ApiOkResponse({ type: UserArticleFavoriteEntity, isArray: true })
  findAllArticleFavorites() {
    return this.userService.findAllArticleFavorites();
  }

  @Get('articleFavorite/findOne:id')
  @ApiOperation({ summary: '获取用户文章收藏夹详情' })
  @ApiOkResponse({ type: UserArticleFavoriteEntity })
  findOneArticleFavorites(@Param('id', ParseIntPipe) id: number) {
    return this.userService.findOneArticleFavorites(id);
  }

  @Patch('articleFavorite/update:id')
  @ApiOperation({ summary: '更新用户文章收藏夹详情' })
  @ApiCreatedResponse({ type: UserArticleFavoriteEntity })
  updateArticleFavorites(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: UpdateUserArticleFavoriteDto,
  ) {
    return this.userService.updateArticleFavorites(id, body);
  }

  @ApiOperation({ summary: '删除用户文章收藏夹' })
  @ApiOkResponse({ type: UserArticleFavoriteEntity })
  @Delete('articleFavorite/remove:id')
  removeArticleFavorites(@Param('id', ParseIntPipe) id: number) {
    return this.userService.removeArticleFavorites(id);
  }

  @Post('articleCollect/create')
  @ApiOperation({ summary: '新增用户文章收藏' })
  @ApiCreatedResponse({ type: UserArticleCollectEntity })
  createArticleCollect(@Body() body: UserArticleCollectDto) {
    return this.userService.createArticleCollect(body);
  }

  @Patch('articleCollect/update:id')
  @ApiOperation({ summary: '更新用户文章收藏详情' })
  @ApiCreatedResponse({ type: UserArticleCollectEntity })
  updateArticleCollect(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: UpdateUserArticleCollectDtoDto,
  ) {
    return this.userService.updateArticleCollect(id, body);
  }

  @ApiOperation({ summary: '删除用户文章收藏' })
  @ApiOkResponse({ type: UserArticleCollectEntity })
  @Delete('articleCollect/remove:id')
  removeArticleCollect(@Param('id', ParseIntPipe) id: number) {
    return this.userService.removeArticleCollect(id);
  }

  // 根据文章id判断用户是否已收藏
  // isCollect

  // getUserCollectList
  // 获取用户收藏文章列表 根据用户id
}
