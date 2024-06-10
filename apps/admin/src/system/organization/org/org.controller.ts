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
import { OrgService } from './org.service';
import { CreateOrgDto } from './dto/create-org.dto';
import { UpdateOrgDto } from './dto/update-org.dto';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { OrgEntity } from './entities/org.entity';
import { BaseController } from '@app/common';
import { QueryOrgDto } from './dto/query-org.dto';
import { DeleteIdsDto } from '@app/common/dto';

@ApiTags('系统管理/组织架构/机构管理')
@Controller('system/organization/org')
export class OrgController extends BaseController {
  constructor(private readonly orgService: OrgService) {
    super();
  }

  @Post()
  @ApiOperation({ summary: '新增机构' })
  @ApiCreatedResponse({ type: OrgEntity })
  async create(@Body() createOrgDto: CreateOrgDto) {
    console.log('createOrgDto===', createOrgDto);
    const result = await this.orgService.create(createOrgDto);
    return this.success(result);
  }

  @Get()
  @ApiOperation({ summary: '获取机构列表' })
  @ApiOkResponse({ type: OrgEntity })
  async findAll(@Query() query: QueryOrgDto) {
    const result = await this.orgService.findAll(query);
    return this.success(result);
  }

  @Get(':id')
  @ApiOperation({ summary: '获取机构详情' })
  @ApiOkResponse({ type: OrgEntity })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const result = await this.orgService.findOne(id);
    return this.success(result);
  }

  @Patch(':id')
  @ApiOperation({ summary: '更新机构信息' })
  @ApiOkResponse({ type: OrgEntity })
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateOrgDto: UpdateOrgDto,
  ) {
    const result = await this.orgService.update(id, updateOrgDto);
    return this.success(result);
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除机构' })
  @ApiOkResponse({ type: OrgEntity })
  async remove(@Param('id', ParseIntPipe) id: number) {
    const result = await this.orgService.remove(id);
    return this.success(result);
  }

  @Post('deleteMany')
  @ApiOperation({ summary: '批量删除' })
  @ApiBody({
    type: DeleteIdsDto,
  })
  async deleteMany(@Body('ids', ParseArrayPipe) ids: number[]) {
    const result = await this.orgService.deleteMany(ids);
    return this.success(result);
  }
}
