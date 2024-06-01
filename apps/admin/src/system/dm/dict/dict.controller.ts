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
import { SystemDmDictService } from './dict.service';
import { CreateSysDataDictDto } from './dto/create-dict.dto';
import { UpdateSysDataDictDto } from './dto/update-dict.dto';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { SystemDmDictEntity } from './entities/dict.entity';
import { BaseController } from '@app/common';
import { QueryDataDictDto } from './dto/query-dict.dto';
import { DeleteIdsDto } from '@app/common/dto';

@ApiTags('系统管理/数据管理')
@Controller('system/dm/dict')
export class SystemDmDictController extends BaseController {
  constructor(private readonly sysDataDictService: SystemDmDictService) {
    super();
  }

  @Post()
  @ApiOperation({ summary: '新增数据字典' })
  @ApiCreatedResponse({ type: SystemDmDictEntity })
  async create(@Body() createSysDataDictDto: CreateSysDataDictDto) {
    const result = await this.sysDataDictService.create(createSysDataDictDto);
    return this.success(result);
  }

  @Get()
  @ApiOperation({ summary: '获取数据字典列表' })
  @ApiOkResponse({ type: SystemDmDictEntity, isArray: true })
  async findAll(@Query() query: QueryDataDictDto) {
    const result = await this.sysDataDictService.findAll(query);
    return this.success(result);
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
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateSysDataDictDto: UpdateSysDataDictDto,
  ) {
    const result = await this.sysDataDictService.update(
      id,
      updateSysDataDictDto,
    );
    return this.success(result);
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除数据字典' })
  @ApiOkResponse({ type: SystemDmDictEntity })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.sysDataDictService.remove(id);
  }

  @Post('deleteMany')
  @ApiOperation({ summary: '批量删除' })
  @ApiBody({
    type: DeleteIdsDto,
  })
  async deleteMany(@Body('ids', ParseArrayPipe) ids: number[]) {
    const result = await this.sysDataDictService.deleteMany(ids);
    return this.success(result);
  }
}
