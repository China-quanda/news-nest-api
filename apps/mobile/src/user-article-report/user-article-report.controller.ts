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
import { UserArticleReportService } from './user-article-report.service';
import { CreateUserArticleReportDto } from './dto/create-user-article-report.dto';
import { UpdateUserArticleReportDto } from './dto/update-user-article-report.dto';
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { UserArticleReportEntity } from './entities/user-article-report.entity';

@ApiTags('用户文章举报')
@Controller('user-article-report')
export class UserArticleReportController {
  constructor(
    private readonly userArticleReportService: UserArticleReportService,
  ) {}

  @Post()
  @ApiOperation({ summary: '新增用户文章举报' })
  @ApiCreatedResponse({ type: UserArticleReportEntity })
  create(@Body() createUserArticleReportDto: CreateUserArticleReportDto) {
    return this.userArticleReportService.create(createUserArticleReportDto);
  }

  @Get()
  @ApiOperation({ summary: '获取用户文章举报列表' })
  @ApiOkResponse({ type: UserArticleReportEntity, isArray: true })
  findAll() {
    return this.userArticleReportService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: '获取用户文章举报详情' })
  @ApiOkResponse({ type: UserArticleReportEntity })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.userArticleReportService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: '更新用户文章举报信息' })
  @ApiOkResponse({ type: UserArticleReportEntity })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserArticleReportDto: UpdateUserArticleReportDto,
  ) {
    return this.userArticleReportService.update(id, updateUserArticleReportDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除用户文章举报' })
  @ApiOkResponse({ type: UserArticleReportEntity })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.userArticleReportService.remove(id);
  }
}
