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
import { ConfigService } from './config.service';
import { CreateConfigDto } from './dto/create-config.dto';
import { UpdateConfigDto } from './dto/update-config.dto';
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { ConfigEntity } from './entities/config.entity';

@ApiTags('系统管理/数据管理')
@Controller('system/dm/config')
export class ConfigController {
  constructor(private readonly configService: ConfigService) {}

  @Post()
  @ApiOperation({ summary: '新增参数分类' })
  @ApiCreatedResponse({ type: ConfigEntity })
  create(@Body() createConfigDto: CreateConfigDto) {
    return this.configService.create(createConfigDto);
  }

  @Get()
  @ApiOperation({ summary: '获取参数分类' })
  @ApiOkResponse({ type: ConfigEntity, isArray: true })
  findAll() {
    return this.configService.findAll();
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
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateConfigDto: UpdateConfigDto,
  ) {
    return this.configService.update(id, updateConfigDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除参数分类' })
  @ApiOkResponse({ type: ConfigEntity })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.configService.remove(id);
  }
}
