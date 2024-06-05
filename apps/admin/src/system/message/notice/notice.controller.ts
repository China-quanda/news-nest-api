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
import { NoticeService } from './notice.service';
import { CreateNoticeDto } from './dto/create-notice.dto';
import { UpdateNoticeDto } from './dto/update-notice.dto';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { NoticeEntity } from './entities/notice.entity';
import { BaseController } from '@app/common';
import { QueryNoticeDto } from './dto/query-notice.dto';
import { DeleteIdsDto } from '@app/common/dto';

@ApiTags('系统管理/消息管理')
@Controller('system/message/notice')
export class NoticeController extends BaseController {
  constructor(private readonly noticeService: NoticeService) {
    super();
  }

  @Post()
  @ApiOperation({ summary: '新增通知公告 ' })
  @ApiCreatedResponse({ type: NoticeEntity })
  async create(@Body() createNoticeDto: CreateNoticeDto) {
    const result = await this.noticeService.create(createNoticeDto);
    return this.success(result);
  }

  @Get()
  @ApiOperation({ summary: '获取通知公告 列表' })
  @ApiOkResponse({ type: NoticeEntity, isArray: true })
  async findAll(@Query() query: QueryNoticeDto) {
    const result = await this.noticeService.findAll(query);
    return this.success(result);
  }

  @Get(':id')
  @ApiOperation({ summary: '获取通知公告 详情' })
  @ApiOkResponse({ type: NoticeEntity })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const result = await this.noticeService.findOne(id);
    return this.success(result);
  }

  @Patch(':id')
  @ApiOperation({ summary: '更新通知公告 信息' })
  @ApiOkResponse({ type: NoticeEntity })
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateNoticeDto: UpdateNoticeDto,
  ) {
    const result = await this.noticeService.update(id, updateNoticeDto);
    return this.success(result);
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除通知公告 ' })
  @ApiOkResponse({ type: NoticeEntity })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.noticeService.remove(id);
  }

  @Post('deleteMany')
  @ApiOperation({ summary: '批量删除' })
  @ApiBody({
    type: DeleteIdsDto,
  })
  async deleteMany(@Body('ids', ParseArrayPipe) ids: number[]) {
    const result = await this.noticeService.deleteMany(ids);
    return this.success(result);
  }
}
