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
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { PostEntity } from './entities/post.entity';

@ApiTags('系统管理/组织架构')
@Controller('system/organization/post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post()
  @ApiOperation({ summary: '新增岗位' })
  @ApiCreatedResponse({ type: PostEntity })
  create(@Body() createPostDto: CreatePostDto) {
    return this.postService.create(createPostDto);
  }

  @Get()
  @ApiOperation({ summary: '获取岗位列表' })
  @ApiOkResponse({ type: PostEntity })
  findAll() {
    return this.postService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: '获取岗位详情' })
  @ApiOkResponse({ type: PostEntity })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.postService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: '更新岗位信息' })
  @ApiOkResponse({ type: PostEntity })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updatePostDto: UpdatePostDto,
  ) {
    return this.postService.update(id, updatePostDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除岗位' })
  @ApiOkResponse({ type: PostEntity })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.postService.remove(id);
  }
}
