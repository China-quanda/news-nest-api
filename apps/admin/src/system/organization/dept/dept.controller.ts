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
import { DeptService } from './dept.service';
import { CreateDeptDto } from './dto/create-dept.dto';
import { UpdateDeptDto } from './dto/update-dept.dto';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { DeptEntity } from './entities/dept.entity';
import { BaseController } from '@app/common';
import { QueryDeptDto } from './dto/query-dept.dto';
import { DeleteIdsDto } from '@app/common/dto';

@ApiTags('系统管理/组织架构/部门管理')
@Controller('system/organization/dept')
export class DeptController extends BaseController {
  constructor(private readonly deptService: DeptService) {
    super();
  }

  @Post()
  @ApiOperation({ summary: '新增部门' })
  @ApiCreatedResponse({ type: DeptEntity })
  async create(@Body() createDeptDto: CreateDeptDto) {
    const result = await this.deptService.create(createDeptDto);
    return this.success(result);
  }

  @Get()
  @ApiOperation({ summary: '获取部门列表' })
  @ApiOkResponse({ type: DeptEntity })
  async findAll(@Query() query: QueryDeptDto) {
    const result = await this.deptService.findAll(query);
    return this.success(result);
  }

  @Get(':id')
  @ApiOperation({ summary: '获取部门详情' })
  @ApiOkResponse({ type: DeptEntity })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const result = await this.deptService.findOne(id);
    return this.success(result);
  }

  @Patch(':id')
  @ApiOperation({ summary: '更新部门信息' })
  @ApiOkResponse({ type: DeptEntity })
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateDeptDto: UpdateDeptDto,
  ) {
    const result = await this.deptService.update(id, updateDeptDto);
    return this.success(result);
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除部门' })
  @ApiOkResponse({ type: DeptEntity })
  async remove(@Param('id', ParseIntPipe) id: number) {
    const result = await this.deptService.remove(id);
    return this.success(result);
  }

  @Post('deleteMany')
  @ApiOperation({ summary: '批量删除' })
  @ApiBody({
    type: DeleteIdsDto,
  })
  async deleteMany(@Body('ids', ParseArrayPipe) ids: number[]) {
    const result = await this.deptService.deleteMany(ids);
    return this.success(result);
  }
}
