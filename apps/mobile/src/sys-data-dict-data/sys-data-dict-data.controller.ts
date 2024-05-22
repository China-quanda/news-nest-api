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
import { SysDataDictDataService } from './sys-data-dict-data.service';
import { CreateSysDataDictDatumDto } from './dto/create-sys-data-dict-datum.dto';
import { UpdateSysDataDictDatumDto } from './dto/update-sys-data-dict-datum.dto';
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { SysDataDictDatumEntity } from './entities/sys-data-dict-datum.entity';
@ApiTags('系统字典数据')
@Controller('sys-data-dict-data')
export class SysDataDictDataController {
  constructor(
    private readonly sysDataDictDataService: SysDataDictDataService,
  ) {}

  @Post()
  @ApiOperation({ summary: '新增字典数据' })
  @ApiCreatedResponse({ type: SysDataDictDatumEntity })
  create(@Body() createSysDataDictDatumDto: CreateSysDataDictDatumDto) {
    return this.sysDataDictDataService.create(createSysDataDictDatumDto);
  }

  @Get()
  @ApiOperation({ summary: '获取字典数据列表' })
  @ApiOkResponse({ type: SysDataDictDatumEntity, isArray: true })
  findAll() {
    return this.sysDataDictDataService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: '获取字典数据详情' })
  @ApiOkResponse({ type: SysDataDictDatumEntity })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.sysDataDictDataService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: '更新字典数据信息' })
  @ApiOkResponse({ type: SysDataDictDatumEntity })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateSysDataDictDatumDto: UpdateSysDataDictDatumDto,
  ) {
    return this.sysDataDictDataService.update(id, updateSysDataDictDatumDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除字典数据' })
  @ApiOkResponse({ type: SysDataDictDatumEntity })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.sysDataDictDataService.remove(id);
  }
}
