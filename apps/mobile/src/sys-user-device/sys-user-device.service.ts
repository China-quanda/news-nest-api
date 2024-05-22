import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateSysUserDeviceDto } from './dto/create-sys-user-device.dto';
import { UpdateSysUserDeviceDto } from './dto/update-sys-user-device.dto';
import { SysUserDevice } from '@prisma/client';
import { PrismaService } from '@app/common';
import { BaseQueryDto } from '@app/common/dto';
import { ResultList } from '@app/common/utils/result';

@Injectable()
export class SysUserDeviceService {
  constructor(private prisma: PrismaService) {}
  async create(body: CreateSysUserDeviceDto): Promise<SysUserDevice> {
    const result = await this.prisma.sysUserDevice.create({
      data: body,
    });
    if (!result) throw new HttpException('创建失败！', HttpStatus.BAD_REQUEST);
    return result;
  }

  async findAll(query?: BaseQueryDto): Promise<ResultList<SysUserDevice[]>> {
    query = Object.assign(
      {
        ...query,
        pageNum: 1,
        pageSize: 10,
      },
      query,
    );
    query.pageNum = Number(query.pageNum);
    query.pageSize = Number(query.pageSize);
    console.log('query', query);
    const result = await this.prisma.sysUserDevice.findMany({
      take: query.pageSize,
      skip: (query.pageNum - 1) * query.pageSize,
    });
    const total = await this.prisma.sysUserDevice.count();
    return {
      list: result,
      pagination: {
        total,
        pageNum: query.pageNum,
        pageSize: query.pageSize,
      },
    };
  }

  async findOne(id: number) {
    const result = await this.prisma.sysUserDevice.findUnique({
      where: { id },
    });
    if (!result) throw new NotFoundException(`Not Found a id:${id}`);
    return result;
  }

  async update(
    id: number,
    body: UpdateSysUserDeviceDto,
  ): Promise<SysUserDevice> {
    try {
      const result = await this.prisma.sysUserDevice.update({
        where: { id },
        data: body,
      });
      if (!result) throw new NotFoundException(`Not Found a id:${id}`);
      return result;
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException('要更新的目标不存在！');
      }
      throw new HttpException('未知异常', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async remove(id: number): Promise<SysUserDevice> {
    try {
      const result = await this.prisma.sysUserDevice.delete({
        where: { id },
      });
      if (!result) throw new NotFoundException(`Not Found a id:${id}`);

      return result;
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException('要删除的目标不存在！');
      }
      throw new HttpException('未知异常', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
