import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateDictDatumDto } from './dto/create-dict-datum.dto';
import { UpdateDictDatumDto } from './dto/update-dict-datum.dto';
import { PrismaService } from '@app/common';
import { Prisma, SystemDmDictData } from '@prisma/client';
import { ResultList } from '@app/common/utils/result';
import { QueryDictDataDto } from './dto/query-dict-dayum.dto';

@Injectable()
export class DictDataService {
  constructor(private prisma: PrismaService) {}
  async create(body: CreateDictDatumDto): Promise<SystemDmDictData> {
    const result = await this.prisma.systemDmDictData.create({
      data: body,
    });
    if (!result) throw new HttpException('创建失败！', HttpStatus.BAD_REQUEST);
    return result;
  }

  async findAll(
    query?: QueryDictDataDto,
  ): Promise<ResultList<SystemDmDictData[]>> {
    query = Object.assign(
      {
        ...query,
        pageNum: 1,
        pageSize: 10,
      },
      query,
    );
    const where = {
      dict: {
        id: query.dictId,
      },
      AND: [
        {
          label: {
            contains: query.label,
          },
        },
        {
          status: {
            equals: query.status,
          },
        },
      ],
    };
    const result = await this.prisma.systemDmDictData.findMany({
      where,
      orderBy: {
        sort: 'desc',
      },
      take: query.pageSize,
      skip: (query.pageNum - 1) * query.pageSize,
    });
    const total = await this.prisma.systemDmDictData.count({
      where,
    });
    return {
      list: result,
      pagination: {
        total,
        pageNum: query.pageNum,
        pageSize: query.pageSize,
      },
    };
  }

  async findOne(id: number): Promise<SystemDmDictData> {
    const result = await this.prisma.systemDmDictData.findUnique({
      where: { id },
    });
    if (!result) throw new NotFoundException(`Not Found a id:${id}`);
    return result;
  }

  async update(
    id: number,
    body: UpdateDictDatumDto,
  ): Promise<SystemDmDictData> {
    try {
      const result = await this.prisma.systemDmDictData.update({
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

  async remove(id: number): Promise<SystemDmDictData> {
    try {
      const result = await this.prisma.systemDmDictData.delete({
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
  async deleteMany(ids: number[]): Promise<Prisma.BatchPayload> {
    if (!ids.length) {
      throw new HttpException(`ids不能为空`, HttpStatus.BAD_REQUEST);
    }
    const result = await this.prisma.systemDmDictData.deleteMany({
      where: {
        id: {
          in: ids,
        },
      },
    });
    return result;
  }
}
