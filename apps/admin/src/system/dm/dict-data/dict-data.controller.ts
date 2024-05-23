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
import { DictDataService } from './dict-data.service';
import { CreateDictDatumDto } from './dto/create-dict-datum.dto';
import { UpdateDictDatumDto } from './dto/update-dict-datum.dto';
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { DictDatumEntity } from './entities/dict-datum.entity';

@ApiTags('系统管理/数据管理')
@Controller('system/dm/dictData')
export class DictDataController {
  constructor(private readonly dictDataService: DictDataService) {}

  @Post()
  @ApiOperation({ summary: '新增字典数据' })
  @ApiCreatedResponse({ type: DictDatumEntity })
  create(@Body() createDictDatumDto: CreateDictDatumDto) {
    return this.dictDataService.create(createDictDatumDto);
  }

  @Get()
  @ApiOperation({ summary: '获取字典数据列表' })
  @ApiOkResponse({ type: DictDatumEntity, isArray: true })
  findAll() {
    return this.dictDataService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: '获取字典数据详情' })
  @ApiOkResponse({ type: DictDatumEntity })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.dictDataService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: '更新字典数据信息' })
  @ApiOkResponse({ type: DictDatumEntity })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateDictDatumDto: UpdateDictDatumDto,
  ) {
    return this.dictDataService.update(id, updateDictDatumDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除字典数据' })
  @ApiOkResponse({ type: DictDatumEntity })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.dictDataService.remove(id);
  }
}
