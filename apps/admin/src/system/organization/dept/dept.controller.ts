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
import { DeptService } from './dept.service';
import { CreateDeptDto } from './dto/create-dept.dto';
import { UpdateDeptDto } from './dto/update-dept.dto';
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { DeptEntity } from './entities/dept.entity';

@ApiTags('系统管理/组织架构')
@Controller('system/organization/dept')
export class DeptController {
  constructor(private readonly deptService: DeptService) {}

  @Post()
  @ApiOperation({ summary: '新增部门' })
  @ApiCreatedResponse({ type: DeptEntity })
  create(@Body() createDeptDto: CreateDeptDto) {
    return this.deptService.create(createDeptDto);
  }

  @Get()
  @ApiOperation({ summary: '获取部门列表' })
  @ApiOkResponse({ type: DeptEntity })
  findAll() {
    return this.deptService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: '获取部门详情' })
  @ApiOkResponse({ type: DeptEntity })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.deptService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: '更新部门信息' })
  @ApiOkResponse({ type: DeptEntity })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateDeptDto: UpdateDeptDto,
  ) {
    return this.deptService.update(id, updateDeptDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除部门' })
  @ApiOkResponse({ type: DeptEntity })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.deptService.remove(id);
  }
}
