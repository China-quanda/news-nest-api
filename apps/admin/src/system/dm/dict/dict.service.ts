import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateSysDataDictDto } from './dto/create-dict.dto';
import { UpdateSysDataDictDto } from './dto/update-dict.dto';
import { PrismaService } from '@app/common';
import { Prisma, SystemDmDict } from '@prisma/client';
import { ResultList } from '@app/common/utils/result';
import { QueryDataDictDto } from './dto/query-dict.dto';

@Injectable()
export class SystemDmDictService {
  constructor(private prisma: PrismaService) {}

  async create(body: CreateSysDataDictDto): Promise<SystemDmDict> {
    const result = await this.prisma.systemDmDict.create({
      data: body,
    });
    if (!result) throw new HttpException('创建失败！', HttpStatus.BAD_REQUEST);
    return result;
  }

  async findAll(query?: QueryDataDictDto): Promise<ResultList<SystemDmDict[]>> {
    query = Object.assign(
      {
        ...query,
        pageNum: 1,
        pageSize: 10,
      },
      query,
    );
    const result = await this.prisma.systemDmDict.findMany({
      where: {
        AND: [
          {
            name: {
              contains: query.name,
            },
          },
          {
            status: {
              equals: query.status,
            },
          },
          {
            type: {
              contains: query.type,
            },
          },
        ],
      },
      orderBy: {
        createTime: 'desc',
      },
      take: query.pageSize,
      skip: (query.pageNum - 1) * query.pageSize,
    });
    const total = await this.prisma.systemDmDict.count({
      where: {
        AND: [
          {
            name: {
              contains: query.name,
            },
          },
          {
            status: {
              equals: query.status,
            },
          },
          {
            type: {
              contains: query.type,
            },
          },
        ],
      },
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

  async findOne(id: number): Promise<SystemDmDict> {
    const result = await this.prisma.systemDmDict.findUnique({
      where: { id },
    });
    if (!result) throw new NotFoundException(`Not Found a id:${id}`);
    return result;
  }

  async update(id: number, body: UpdateSysDataDictDto): Promise<SystemDmDict> {
    try {
      const result = await this.prisma.systemDmDict.update({
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

  async remove(id: number): Promise<SystemDmDict> {
    try {
      const result = await this.prisma.systemDmDict.delete({
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
    const result = await this.prisma.systemDmDict.deleteMany({
      where: {
        id: {
          in: ids,
        },
      },
    });
    return result;
  }
}
