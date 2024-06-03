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
import { RegionService } from './region.service';
import { CreateRegionDto } from './dto/create-region.dto';
import { UpdateRegionDto } from './dto/update-region.dto';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { RegionEntity } from './entities/region.entity';
import { BaseController } from '@app/common';
import { BaseQueryDto, DeleteIdsDto } from '@app/common/dto';

@ApiTags('系统管理/数据管理')
@Controller('system/dm/region')
export class RegionController extends BaseController {
  constructor(private readonly regionService: RegionService) {
    super();
  }
  @Post()
  @ApiOperation({ summary: '新增行政区域' })
  @ApiCreatedResponse({ type: RegionEntity })
  async create(@Body() createRegionDto: CreateRegionDto) {
    const result = await this.regionService.create(createRegionDto);
    return this.success(result);
  }

  @Get()
  @ApiOperation({ summary: '获取行政区域列表' })
  @ApiOkResponse({ type: RegionEntity, isArray: true })
  async findAll(@Query() query: BaseQueryDto) {
    const result = await this.regionService.findAll(query);
    return this.success(result);
  }

  @Get('generateArea')
  @ApiOperation({ summary: '生成行政区域' })
  async generateArea() {
    const result = await this.regionService.generateArea();
    return result;
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
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateRegionDto: UpdateRegionDto,
  ) {
    const result = await this.regionService.update(id, updateRegionDto);
    return this.success(result);
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除行政区域' })
  @ApiOkResponse({ type: RegionEntity })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.regionService.remove(id);
  }

  @Post('deleteMany')
  @ApiOperation({ summary: '批量删除' })
  @ApiBody({
    type: DeleteIdsDto,
  })
  async deleteMany(@Body('ids', ParseArrayPipe) ids: number[]) {
    const result = await this.regionService.deleteMany(ids);
    return this.success(result);
  }
}
