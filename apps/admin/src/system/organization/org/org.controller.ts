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
import { OrgService } from './org.service';
import { CreateOrgDto } from './dto/create-org.dto';
import { UpdateOrgDto } from './dto/update-org.dto';
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { OrgEntity } from './entities/org.entity';

@ApiTags('系统管理/组织架构')
@Controller('system/organization/org')
export class OrgController {
  constructor(private readonly orgService: OrgService) {}

  @Post()
  @ApiOperation({ summary: '新增机构' })
  @ApiCreatedResponse({ type: OrgEntity })
  create(@Body() createOrgDto: CreateOrgDto) {
    return this.orgService.create(createOrgDto);
  }

  @Get()
  @ApiOperation({ summary: '获取机构列表' })
  @ApiOkResponse({ type: OrgEntity })
  findAll() {
    return this.orgService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: '获取机构详情' })
  @ApiOkResponse({ type: OrgEntity })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.orgService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: '更新机构信息' })
  @ApiOkResponse({ type: OrgEntity })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateOrgDto: UpdateOrgDto,
  ) {
    return this.orgService.update(id, updateOrgDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除机构' })
  @ApiOkResponse({ type: OrgEntity })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.orgService.remove(id);
  }
}
