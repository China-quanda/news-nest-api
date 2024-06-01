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
import { DictDataService } from './dict-data.service';
import { CreateDictDatumDto } from './dto/create-dict-datum.dto';
import { UpdateDictDatumDto } from './dto/update-dict-datum.dto';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { DictDatumEntity } from './entities/dict-datum.entity';
import { BaseController } from '@app/common';
import { QueryDictDataDto } from './dto/query-dict-dayum.dto';
import { DeleteIdsDto } from '@app/common/dto';

@ApiTags('系统管理/数据管理')
@Controller('system/dm/dictData')
export class DictDataController extends BaseController {
  constructor(private readonly dictDataService: DictDataService) {
    super();
  }

  @Post()
  @ApiOperation({ summary: '新增字典数据' })
  @ApiCreatedResponse({ type: DictDatumEntity })
  async create(@Body() createDictDatumDto: CreateDictDatumDto) {
    const result = await this.dictDataService.create(createDictDatumDto);
    return this.success(result);
  }

  @Get()
  @ApiOperation({ summary: '获取字典数据列表' })
  @ApiOkResponse({ type: DictDatumEntity, isArray: true })
  async findAll(@Query() query: QueryDictDataDto) {
    const result = await this.dictDataService.findAll(query);
    return this.success(result);
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
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateDictDatumDto: UpdateDictDatumDto,
  ) {
    const result = await this.dictDataService.update(id, updateDictDatumDto);
    return this.success(result);
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除字典数据' })
  @ApiOkResponse({ type: DictDatumEntity })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.dictDataService.remove(id);
  }

  @Post('deleteMany')
  @ApiOperation({ summary: '批量删除' })
  @ApiBody({
    type: DeleteIdsDto,
  })
  async deleteMany(@Body('ids', ParseArrayPipe) ids: number[]) {
    const result = await this.dictDataService.deleteMany(ids);
    return this.success(result);
  }
}
