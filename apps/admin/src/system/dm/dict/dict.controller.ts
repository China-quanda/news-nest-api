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
import { SystemDmDictService } from './dict.service';
import { CreateSysDataDictDto } from './dto/create-dict.dto';
import { UpdateSysDataDictDto } from './dto/update-dict.dto';
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { SystemDmDictEntity } from './entities/dict.entity';

@ApiTags('系统管理/数据管理')
@Controller('system/dm/dict')
export class SystemDmDictController {
  constructor(private readonly sysDataDictService: SystemDmDictService) {}

  @Post()
  @ApiOperation({ summary: '新增数据字典' })
  @ApiCreatedResponse({ type: SystemDmDictEntity })
  create(@Body() createSysDataDictDto: CreateSysDataDictDto) {
    return this.sysDataDictService.create(createSysDataDictDto);
  }

  @Get()
  @ApiOperation({ summary: '获取数据字典列表' })
  @ApiOkResponse({ type: SystemDmDictEntity, isArray: true })
  findAll() {
    return this.sysDataDictService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: '获取数据字典详情' })
  @ApiOkResponse({ type: SystemDmDictEntity })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.sysDataDictService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: '更新数据字典信息' })
  @ApiOkResponse({ type: SystemDmDictEntity })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateSysDataDictDto: UpdateSysDataDictDto,
  ) {
    return this.sysDataDictService.update(id, updateSysDataDictDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除数据字典' })
  @ApiOkResponse({ type: SystemDmDictEntity })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.sysDataDictService.remove(id);
  }
}
