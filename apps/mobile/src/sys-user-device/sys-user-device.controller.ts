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
import { SysUserDeviceService } from './sys-user-device.service';
import { CreateSysUserDeviceDto } from './dto/create-sys-user-device.dto';
import { UpdateSysUserDeviceDto } from './dto/update-sys-user-device.dto';
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { SysUserDeviceEntity } from './entities/sys-user-device.entity';

@ApiTags('用户设备')
@Controller('sys-user-device')
export class SysUserDeviceController {
  constructor(private readonly sysUserDeviceService: SysUserDeviceService) {}

  @Post()
  @ApiOperation({ summary: '新增用户设备' })
  @ApiCreatedResponse({ type: SysUserDeviceEntity })
  create(@Body() body: CreateSysUserDeviceDto) {
    return this.sysUserDeviceService.create(body);
  }

  @Get()
  @ApiOperation({ summary: '获取用户设备列表' })
  @ApiOkResponse({ type: SysUserDeviceEntity, isArray: true })
  findAll() {
    return this.sysUserDeviceService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: '获取用户设备详情' })
  @ApiOkResponse({ type: SysUserDeviceEntity })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.sysUserDeviceService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: '修改用户设备' })
  @ApiOkResponse({ type: SysUserDeviceEntity })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateSysUserDeviceDto: UpdateSysUserDeviceDto,
  ) {
    return this.sysUserDeviceService.update(id, updateSysUserDeviceDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除用户设备' })
  @ApiOkResponse({ type: SysUserDeviceEntity })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.sysUserDeviceService.remove(id);
  }
}
