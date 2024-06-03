import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateRegionDto } from './dto/create-region.dto';
import { UpdateRegionDto } from './dto/update-region.dto';
import { PrismaService } from '@app/common';
import { Prisma, SystemDmRegion } from '@prisma/client';
import { ResultList } from '@app/common/utils/result';
import { BaseQueryDto } from '@app/common/dto';
import areaList from '@app/common/utils/area';
import { flattenTree, handleTree } from '@app/common/utils';
@Injectable()
export class RegionService {
  constructor(private prisma: PrismaService) {}

  async generateArea() {
    const count = await this.prisma.systemDmRegion.count();
    if (count === 0) {
      const list = flattenTree(areaList);
      const newList: any[] = list.map((item) => {
        return {
          code: item.id,
          name: item.name,
          parentCode: item.parentId,
        };
      });

      const result = await this.prisma.systemDmRegion.createMany({
        data: newList,
      });
      return result;
    } else {
      throw new HttpException(
        '数据库中已存在行政区域！',
        HttpStatus.NOT_ACCEPTABLE,
      );
    }
  }

  async create(body: CreateRegionDto): Promise<SystemDmRegion> {
    const result = await this.prisma.systemDmRegion.create({
      data: body,
    });
    if (!result) throw new HttpException('创建失败！', HttpStatus.BAD_REQUEST);
    return result;
  }

  async findAll(query?: BaseQueryDto): Promise<ResultList<SystemDmRegion[]>> {
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

    // 是否只要一级数据   （默认写死的，要灵活可以从 query 里传值来判断）
    const isok = false;

    const result = await this.prisma.systemDmRegion.findMany({
      take: query.pageSize,
      skip: (query.pageNum - 1) * query.pageSize,
    });
    const total = await this.prisma.systemDmRegion.count();

    // 转换为树结构
    const tree = handleTree(result, 'code', 'parentCode');
    // 只要树结构里的第一个数据，也就是一级数据
    const list = tree.map((item) => {
      return {
        ...item,
        children: [],
      };
    });

    return {
      list: isok ? list : result,
      pagination: {
        total: isok ? list.length : total,
        pageNum: query.pageNum,
        pageSize: query.pageSize,
      },
    };
  }

  async findOne(id: number): Promise<SystemDmRegion> {
    const result = await this.prisma.systemDmRegion.findUnique({
      where: { id },
    });
    if (!result) throw new NotFoundException(`Not Found a id:${id}`);
    return result;
  }

  async update(id: number, body: UpdateRegionDto): Promise<SystemDmRegion> {
    try {
      const result = await this.prisma.systemDmRegion.update({
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

  // 删除的时候应该判断下是否有下级，如果有下级要么不能删除，要么一起删除
  async remove(id: number): Promise<SystemDmRegion> {
    try {
      const result = await this.prisma.systemDmRegion.delete({
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

  // 删除的时候应该判断下是否有下级，如果有下级要么不能删除，要么一起删除
  async deleteMany(ids: number[]): Promise<Prisma.BatchPayload> {
    if (!ids.length) {
      throw new HttpException(`ids不能为空`, HttpStatus.BAD_REQUEST);
    }
    const result = await this.prisma.systemDmRegion.deleteMany({
      where: {
        id: {
          in: ids,
        },
      },
    });
    return result;
  }
}
