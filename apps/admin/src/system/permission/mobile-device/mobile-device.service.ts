import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateMobileDeviceDto } from './dto/create-mobile-device.dto';
import { UpdateMobileDeviceDto } from './dto/update-mobile-device.dto';
import { PrismaService } from '@app/common';
import { SystemPermissionMobileDevice } from '@prisma/client';
import { BaseQueryDto } from '@app/common/dto';
import { ResultList } from '@app/common/utils/result';

@Injectable()
export class MobileDeviceService {
  constructor(private prisma: PrismaService) {}

  async create(
    body: CreateMobileDeviceDto,
  ): Promise<SystemPermissionMobileDevice> {
    const result = await this.prisma.systemPermissionMobileDevice.create({
      data: body,
    });
    if (!result) throw new HttpException('创建失败！', HttpStatus.BAD_REQUEST);
    return result;
  }

  async findAll(
    query?: BaseQueryDto,
  ): Promise<ResultList<SystemPermissionMobileDevice[]>> {
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
    const result = await this.prisma.systemPermissionMobileDevice.findMany({
      take: query.pageSize,
      skip: (query.pageNum - 1) * query.pageSize,
    });
    const total = await this.prisma.systemPermissionMobileDevice.count();
    return {
      list: result,
      pagination: {
        total,
        pageNum: query.pageNum,
        pageSize: query.pageSize,
      },
    };
  }

  async findOne(id: number): Promise<SystemPermissionMobileDevice> {
    const result = await this.prisma.systemPermissionMobileDevice.findUnique({
      where: { id },
    });
    if (!result) throw new NotFoundException(`Not Found a id:${id}`);
    return result;
  }

  async update(
    id: number,
    body: UpdateMobileDeviceDto,
  ): Promise<SystemPermissionMobileDevice> {
    try {
      const result = await this.prisma.systemPermissionMobileDevice.update({
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

  async remove(id: number): Promise<SystemPermissionMobileDevice> {
    try {
      const result = await this.prisma.systemPermissionMobileDevice.delete({
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