import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  ParseArrayPipe,
  ParseIntPipe,
} from '@nestjs/common';
import { LinkService } from './link.service';
import { CreateLinkDto } from './dto/create-link.dto';
import { UpdateLinkDto } from './dto/update-link.dto';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { BaseController } from '@app/common';
import { LinkEntity } from './entities/link.entity';
import { QueryLinkDto } from './dto/query-link.dto';
import { DeleteIdsDto } from '@app/common/dto';

@ApiTags('友情链接')
@Controller('link')
export class LinkController extends BaseController {
  constructor(private readonly linkService: LinkService) {
    super();
  }

  @Post()
  @ApiOperation({ summary: '新增友情链接' })
  @ApiCreatedResponse({ type: LinkEntity })
  async create(@Body() createLinkDto: CreateLinkDto) {
    const result = await this.linkService.create(createLinkDto);
    return this.success(result);
  }

  @Get()
  @ApiOperation({ summary: '获取友情链接列表' })
  @ApiOkResponse({ type: LinkEntity, isArray: true })
  async findAll(@Query() query: QueryLinkDto) {
    const result = await this.linkService.findAll(query);
    return this.success(result);
  }

  @Get(':id')
  @ApiOperation({ summary: '获取友情链接详情' })
  @ApiOkResponse({ type: LinkEntity })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const result = await this.linkService.findOne(id);
    return this.success(result);
  }

  @Patch(':id')
  @ApiOperation({ summary: '更新友情链接信息' })
  @ApiOkResponse({ type: LinkEntity })
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateLinkDto: UpdateLinkDto,
  ) {
    const result = await this.linkService.update(id, updateLinkDto);
    return this.success(result);
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除友情链接' })
  @ApiOkResponse({ type: LinkEntity })
  async remove(@Param('id', ParseIntPipe) id: number) {
    const result = await this.linkService.remove(id);
    return this.success(result);
  }

  @Post('deleteMany')
  @ApiOperation({ summary: '批量删除' })
  @ApiBody({
    type: DeleteIdsDto,
  })
  async deleteMany(@Body('ids', ParseArrayPipe) ids: number[]) {
    const result = await this.linkService.deleteMany(ids);
    return this.success(result);
  }
}
