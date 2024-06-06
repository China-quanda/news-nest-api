import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseArrayPipe,
  Query,
  ParseIntPipe,
} from '@nestjs/common';
import { MobileDeviceService } from './mobile-device.service';
import { CreateMobileDeviceDto } from './dto/create-mobile-device.dto';
import { UpdateMobileDeviceDto } from './dto/update-mobile-device.dto';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { MobileDeviceEntity } from './entities/mobile-device.entity';
import { DeleteIdsDto } from '@app/common/dto';
import { BaseController } from '@app/common';
import { QueryMobileDeviceDto } from './dto/query-mobile-device.dto';

@ApiTags('系统管理/权限管理')
@Controller('system/permission/mobileDevice')
export class MobileDeviceController extends BaseController {
  constructor(private readonly mobileDeviceService: MobileDeviceService) {
    super();
  }

  @Post()
  @ApiOperation({ summary: '新增用户设备' })
  @ApiCreatedResponse({ type: MobileDeviceEntity })
  async create(@Body() createMobileDeviceDto: CreateMobileDeviceDto) {
    const result = await this.mobileDeviceService.create(createMobileDeviceDto);
    return this.success(result);
  }

  @Get()
  @ApiOperation({ summary: '获取用户设备列表' })
  @ApiOkResponse({ type: MobileDeviceEntity, isArray: true })
  async findAll(@Query() query: QueryMobileDeviceDto) {
    const result = await this.mobileDeviceService.findAll(query);
    return this.success(result);
  }

  @Get(':id')
  @ApiOperation({ summary: '获取用户设备详情' })
  @ApiOkResponse({ type: MobileDeviceEntity })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const result = await this.mobileDeviceService.findOne(id);
    return this.success(result);
  }

  @Patch(':id')
  @ApiOperation({ summary: '修改用户设备' })
  @ApiOkResponse({ type: MobileDeviceEntity })
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateMobileDeviceDto: UpdateMobileDeviceDto,
  ) {
    const result = await this.mobileDeviceService.update(
      id,
      updateMobileDeviceDto,
    );
    return this.success(result);
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除用户设备' })
  @ApiOkResponse({ type: MobileDeviceEntity })
  async remove(@Param('id', ParseIntPipe) id: number) {
    const result = await this.mobileDeviceService.remove(id);
    return this.success(result);
  }

  @Post('deleteMany')
  @ApiOperation({ summary: '批量删除' })
  @ApiBody({
    type: DeleteIdsDto,
  })
  async deleteMany(@Body('ids', ParseArrayPipe) ids: number[]) {
    const result = await this.mobileDeviceService.deleteMany(ids);
    return this.success(result);
  }
}
