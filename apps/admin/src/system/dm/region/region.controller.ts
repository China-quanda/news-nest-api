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
import { RegionService } from './region.service';
import { CreateRegionDto } from './dto/create-region.dto';
import { UpdateRegionDto } from './dto/update-region.dto';
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { RegionEntity } from './entities/region.entity';

@ApiTags('系统管理/数据管理')
@Controller('system/dm/region')
export class RegionController {
  constructor(private readonly regionService: RegionService) {}

  @Post()
  @ApiOperation({ summary: '新增行政区域' })
  @ApiCreatedResponse({ type: RegionEntity })
  create(@Body() createRegionDto: CreateRegionDto) {
    return this.regionService.create(createRegionDto);
  }

  @Get()
  @ApiOperation({ summary: '获取行政区域列表' })
  @ApiOkResponse({ type: RegionEntity, isArray: true })
  findAll() {
    return this.regionService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: '获取行政区域详情' })
  @ApiOkResponse({ type: RegionEntity })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.regionService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: '更新行政区域信息' })
  @ApiOkResponse({ type: RegionEntity })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateRegionDto: UpdateRegionDto,
  ) {
    return this.regionService.update(id, updateRegionDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除行政区域' })
  @ApiOkResponse({ type: RegionEntity })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.regionService.remove(id);
  }
}
