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
import { NoticeService } from './notice.service';
import { CreateNoticeDto } from './dto/create-notice.dto';
import { UpdateNoticeDto } from './dto/update-notice.dto';
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { NoticeEntity } from './entities/notice.entity';

@ApiTags('系统管理/消息管理')
@Controller('system/message/notice')
export class NoticeController {
  constructor(private readonly noticeService: NoticeService) {}

  @Post()
  @ApiOperation({ summary: '新增通知公告 ' })
  @ApiCreatedResponse({ type: NoticeEntity })
  create(@Body() createNoticeDto: CreateNoticeDto) {
    return this.noticeService.create(createNoticeDto);
  }

  @Get()
  @ApiOperation({ summary: '获取通知公告 列表' })
  @ApiOkResponse({ type: NoticeEntity, isArray: true })
  findAll() {
    return this.noticeService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: '获取通知公告 详情' })
  @ApiOkResponse({ type: NoticeEntity })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.noticeService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: '更新通知公告 信息' })
  @ApiOkResponse({ type: NoticeEntity })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateNoticeDto: UpdateNoticeDto,
  ) {
    return this.noticeService.update(id, updateNoticeDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除通知公告 ' })
  @ApiOkResponse({ type: NoticeEntity })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.noticeService.remove(id);
  }
}
