import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  ParseArrayPipe,
  Query,
} from '@nestjs/common';
import { ConfigService } from './config.service';
import { CreateConfigDto } from './dto/create-config.dto';
import { UpdateConfigDto } from './dto/update-config.dto';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { ConfigEntity } from './entities/config.entity';
import { DeleteIdsDto } from '@app/common/dto';
import { BaseController } from '@app/common';
import { QueryConfigDto } from './dto/query-config.dto';

@ApiTags('系统管理/数据管理')
@Controller('system/dm/config')
export class ConfigController extends BaseController {
  constructor(private readonly configService: ConfigService) {
    super();
  }

  @Post()
  @ApiOperation({ summary: '新增参数分类' })
  @ApiCreatedResponse({ type: ConfigEntity })
  async create(@Body() createConfigDto: CreateConfigDto) {
    const result = await this.configService.create(createConfigDto);
    return this.success(result);
  }

  @Get()
  @ApiOperation({ summary: '获取参数分类' })
  @ApiOkResponse({ type: ConfigEntity, isArray: true })
  async findAll(@Query() query: QueryConfigDto) {
    const result = await this.configService.findAll(query);
    return this.success(result);
  }

  @Get(':id')
  @ApiOperation({ summary: '获取参数分类详情' })
  @ApiOkResponse({ type: ConfigEntity })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.configService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: '更新参数分类信息' })
  @ApiOkResponse({ type: ConfigEntity })
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateConfigDto: UpdateConfigDto,
  ) {
    const result = await this.configService.update(id, updateConfigDto);
    return this.success(result);
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除参数分类' })
  @ApiOkResponse({ type: ConfigEntity })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.configService.remove(id);
  }

  @Post('deleteMany')
  @ApiOperation({ summary: '批量删除' })
  @ApiBody({
    type: DeleteIdsDto,
  })
  async deleteMany(@Body('ids', ParseArrayPipe) ids: number[]) {
    const result = await this.configService.deleteMany(ids);
    return this.success(result);
  }
}
