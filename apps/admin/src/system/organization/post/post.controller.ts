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
  ParseArrayPipe,
} from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { PostEntity } from './entities/post.entity';
import { BaseController } from '@app/common';
import { QueryPostDto } from './dto/query-post.dto';
import { DeleteIdsDto } from '@app/common/dto';

@ApiTags('系统管理/组织架构/岗位管理')
@Controller('system/organization/post')
export class PostController extends BaseController {
  constructor(private readonly postService: PostService) {
    super();
  }

  @Post()
  @ApiOperation({ summary: '新增岗位' })
  @ApiCreatedResponse({ type: PostEntity })
  async create(@Body() createPostDto: CreatePostDto) {
    const result = await this.postService.create(createPostDto);
    return this.success(result);
  }

  @Get()
  @ApiOperation({ summary: '获取岗位列表' })
  @ApiOkResponse({ type: PostEntity })
  async findAll(@Query() query: QueryPostDto) {
    const result = await this.postService.findAll(query);
    return this.success(result);
  }

  @Get(':id')
  @ApiOperation({ summary: '获取岗位详情' })
  @ApiOkResponse({ type: PostEntity })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const result = await this.postService.findOne(id);
    return this.success(result);
  }

  @Patch(':id')
  @ApiOperation({ summary: '更新岗位信息' })
  @ApiOkResponse({ type: PostEntity })
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updatePostDto: UpdatePostDto,
  ) {
    const result = await this.postService.update(id, updatePostDto);
    return this.success(result);
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除岗位' })
  @ApiOkResponse({ type: PostEntity })
  async remove(@Param('id', ParseIntPipe) id: number) {
    const result = await this.postService.remove(id);
    return this.success(result);
  }

  @Post('deleteMany')
  @ApiOperation({ summary: '批量删除' })
  @ApiBody({
    type: DeleteIdsDto,
  })
  async deleteMany(@Body('ids', ParseArrayPipe) ids: number[]) {
    const result = await this.postService.deleteMany(ids);
    return this.success(result);
  }
}
