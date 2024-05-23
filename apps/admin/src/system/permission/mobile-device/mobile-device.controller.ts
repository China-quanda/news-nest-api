import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MobileDeviceService } from './mobile-device.service';
import { CreateMobileDeviceDto } from './dto/create-mobile-device.dto';
import { UpdateMobileDeviceDto } from './dto/update-mobile-device.dto';
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { MobileDeviceEntity } from './entities/mobile-device.entity';

@ApiTags('系统管理/权限管理')
@Controller('mobile-device')
export class MobileDeviceController {
  constructor(private readonly mobileDeviceService: MobileDeviceService) {}

  @Post()
  @ApiOperation({ summary: '新增用户设备' })
  @ApiCreatedResponse({ type: MobileDeviceEntity })
  create(@Body() createMobileDeviceDto: CreateMobileDeviceDto) {
    return this.mobileDeviceService.create(createMobileDeviceDto);
  }

  @Get()
  @ApiOperation({ summary: '获取用户设备列表' })
  @ApiOkResponse({ type: MobileDeviceEntity, isArray: true })
  findAll() {
    return this.mobileDeviceService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: '获取用户设备详情' })
  @ApiOkResponse({ type: MobileDeviceEntity })
  findOne(@Param('id') id: string) {
    return this.mobileDeviceService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: '修改用户设备' })
  @ApiOkResponse({ type: MobileDeviceEntity })
  update(
    @Param('id') id: string,
    @Body() updateMobileDeviceDto: UpdateMobileDeviceDto,
  ) {
    return this.mobileDeviceService.update(+id, updateMobileDeviceDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除用户设备' })
  @ApiOkResponse({ type: MobileDeviceEntity })
  remove(@Param('id') id: string) {
    return this.mobileDeviceService.remove(+id);
  }
}
