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
import { SysDataDictService } from './sys-data-dict.service';
import { CreateSysDataDictDto } from './dto/create-sys-data-dict.dto';
import { UpdateSysDataDictDto } from './dto/update-sys-data-dict.dto';
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { SysDataDictEntity } from './entities/sys-data-dict.entity';

@ApiTags('系统数据字典')
@Controller('sys-data-dict')
export class SysDataDictController {
  constructor(private readonly sysDataDictService: SysDataDictService) {}

  @Post()
  @ApiOperation({ summary: '新增数据字典' })
  @ApiCreatedResponse({ type: SysDataDictEntity })
  create(@Body() createSysDataDictDto: CreateSysDataDictDto) {
    return this.sysDataDictService.create(createSysDataDictDto);
  }

  @Get()
  @ApiOperation({ summary: '获取数据字典列表' })
  @ApiOkResponse({ type: SysDataDictEntity, isArray: true })
  findAll() {
    return this.sysDataDictService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: '获取数据字典详情' })
  @ApiOkResponse({ type: SysDataDictEntity })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.sysDataDictService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: '更新数据字典信息' })
  @ApiOkResponse({ type: SysDataDictEntity })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateSysDataDictDto: UpdateSysDataDictDto,
  ) {
    return this.sysDataDictService.update(id, updateSysDataDictDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除数据字典' })
  @ApiOkResponse({ type: SysDataDictEntity })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.sysDataDictService.remove(id);
  }
}
