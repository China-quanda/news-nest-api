import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  ParseIntPipe,
} from '@nestjs/common';
import { UserSearchService } from './user-search.service';
import { CreateUserSearchDto } from './dto/create-user-search.dto';
import { UpdateUserSearchDto } from './dto/update-user-search.dto';
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { UserSearchEntity } from './entities/user-search.entity';
@ApiTags('用户搜索')
@Controller('user-search')
export class UserSearchController {
  constructor(private readonly userSearchService: UserSearchService) {}
  @Post()
  @ApiOperation({ summary: '新增用户搜索' })
  @ApiCreatedResponse({ type: UserSearchEntity })
  create(@Body() createUserSearchDto: CreateUserSearchDto) {
    return this.userSearchService.create(createUserSearchDto);
  }

  @Get()
  @ApiOperation({ summary: '获取用户搜索列表' })
  @ApiOkResponse({ type: UserSearchEntity, isArray: true })
  findAll(@Query() query) {
    return this.userSearchService.findAll(query);
  }

  @Get(':id')
  @ApiOperation({ summary: '获取用户搜索详情' })
  @ApiOkResponse({ type: UserSearchEntity })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.userSearchService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: '更新用户搜索信息' })
  @ApiOkResponse({ type: UserSearchEntity })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserSearchDto: UpdateUserSearchDto,
  ) {
    return this.userSearchService.update(id, updateUserSearchDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除用户搜索' })
  @ApiOkResponse({ type: UserSearchEntity })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.userSearchService.remove(id);
  }
  // @Get('/getHotSearch', { description: '获取热门搜索' })
  // async getHotSearch(@Query() query) {
  //   const result = await this.service.getHotSearch(query);
  //   return this.success(result);
  // }

  // @Get('/getAdvicelist', { description: '获取搜索联想建议列表' })
  // async getAdvicelist(@Query('msg') msg: string) {
  //   const result = await this.service.getAdvicelist(msg);
  //   return this.success(result);
  // }
}
