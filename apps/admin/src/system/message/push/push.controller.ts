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
import { PushService } from './push.service';
import { CreatePushDto } from './dto/create-push.dto';
import { UpdatePushDto } from './dto/update-push.dto';
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { PushEntity } from './entities/push.entity';

@ApiTags('系统管理/消息管理')
@Controller('system/message/push')
export class PushController {
  constructor(private readonly pushService: PushService) {}

  @Post()
  @ApiOperation({ summary: '新增消息推送 ' })
  @ApiCreatedResponse({ type: PushEntity })
  create(@Body() createPushDto: CreatePushDto) {
    return this.pushService.create(createPushDto);
  }

  @Get()
  @ApiOperation({ summary: '获取消息推送 列表' })
  @ApiOkResponse({ type: PushEntity, isArray: true })
  findAll() {
    return this.pushService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: '获取消息推送 详情' })
  @ApiOkResponse({ type: PushEntity })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.pushService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: '更新消息推送 信息' })
  @ApiOkResponse({ type: PushEntity })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updatePushDto: UpdatePushDto,
  ) {
    return this.pushService.update(id, updatePushDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除消息推送 ' })
  @ApiOkResponse({ type: PushEntity })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.pushService.remove(id);
  }
}
