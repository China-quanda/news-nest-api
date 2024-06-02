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
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { CategoryEntity } from './entities/category.entity';
import { BaseController } from '@app/common';
import { QueryCategoryDto } from './dto/query-dict-dayum.dto';
import { DeleteIdsDto } from '@app/common/dto';

@ApiTags('系统管理/数据管理')
@Controller('system/dm/category')
export class CategoryController extends BaseController {
  constructor(private readonly categoryService: CategoryService) {
    super();
  }

  @Post()
  @ApiOperation({ summary: '新增数据分类' })
  @ApiCreatedResponse({ type: CategoryEntity })
  async create(@Body() createCategoryDto: CreateCategoryDto) {
    const result = await this.categoryService.create(createCategoryDto);
    return this.success(result);
  }

  @Get()
  @ApiOperation({ summary: '获取数据分类列表' })
  @ApiOkResponse({ type: CategoryEntity, isArray: true })
  async findAll(@Query() query: QueryCategoryDto) {
    const result = await this.categoryService.findAll(query);
    return this.success(result);
  }

  @Get(':id')
  @ApiOperation({ summary: '获取数据分类详情' })
  @ApiOkResponse({ type: CategoryEntity })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.categoryService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: '更新数据分类信息' })
  @ApiOkResponse({ type: CategoryEntity })
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ) {
    const result = await this.categoryService.update(id, updateCategoryDto);
    return this.success(result);
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除数据分类' })
  @ApiOkResponse({ type: CategoryEntity })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.categoryService.remove(id);
  }

  @Post('deleteMany')
  @ApiOperation({ summary: '批量删除' })
  @ApiBody({
    type: DeleteIdsDto,
  })
  async deleteMany(@Body('ids', ParseArrayPipe) ids: number[]) {
    const result = await this.categoryService.deleteMany(ids);
    return this.success(result);
  }
}
