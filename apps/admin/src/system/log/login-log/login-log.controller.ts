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
  ParseArrayPipe,
} from '@nestjs/common';
import { LoginLogService } from './login-log.service';
import { CreateLoginLogDto } from './dto/create-login-log.dto';
import { UpdateLoginLogDto } from './dto/update-login-log.dto';
import { BaseController } from '@app/common';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { LoginLogEntity } from './entities/login-log.entity';
import { QueryLoginLogDto } from './dto/query-dict-dayum.dto';
import { DeleteIdsDto } from '@app/common/dto';
@ApiTags('系统管理/日志管理/登录日志')
@Controller('system/log/loginLog')
export class LoginLogController extends BaseController {
  constructor(private readonly loginLogService: LoginLogService) {
    super();
  }

  @Post()
  @ApiOperation({ summary: '新增登录日志' })
  @ApiCreatedResponse({ type: LoginLogEntity })
  async create(@Body() createLoginLogDto: CreateLoginLogDto) {
    const result = await this.loginLogService.create(createLoginLogDto);
    return this.success(result);
  }

  @Get()
  @ApiOperation({ summary: '获取登录日志' })
  @ApiOkResponse({ type: LoginLogEntity, isArray: true })
  async findAll(@Query() query: QueryLoginLogDto) {
    const result = await this.loginLogService.findAll(query);
    return this.success(result);
  }

  @Get(':id')
  @ApiOperation({ summary: '获取登录日志详情' })
  @ApiOkResponse({ type: LoginLogEntity })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.loginLogService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: '更新登录日志信息' })
  @ApiOkResponse({ type: LoginLogEntity })
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateConfigDto: UpdateLoginLogDto,
  ) {
    const result = await this.loginLogService.update(id, updateConfigDto);
    return this.success(result);
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除登录日志' })
  @ApiOkResponse({ type: LoginLogEntity })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.loginLogService.remove(id);
  }

  @Post('deleteMany')
  @ApiOperation({ summary: '批量删除' })
  @ApiBody({
    type: DeleteIdsDto,
  })
  async deleteMany(@Body('ids', ParseArrayPipe) ids: number[]) {
    const result = await this.loginLogService.deleteMany(ids);
    return this.success(result);
  }
}
