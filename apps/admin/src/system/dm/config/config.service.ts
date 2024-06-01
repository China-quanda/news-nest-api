import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateConfigDto } from './dto/create-config.dto';
import { UpdateConfigDto } from './dto/update-config.dto';
import { Prisma, SystemDmConfig } from '@prisma/client';
import { PrismaService } from '@app/common';
import { ResultList } from '@app/common/utils/result';
import { QueryConfigDto } from './dto/query-config.dto';

@Injectable()
export class ConfigService {
  constructor(private prisma: PrismaService) {}

  async create(body: CreateConfigDto): Promise<SystemDmConfig> {
    console.log('body', body);
    const result = await this.prisma.systemDmConfig.create({
      data: body,
    });
    if (!result) throw new HttpException('创建失败！', HttpStatus.BAD_REQUEST);
    return result;
  }

  async findAll(query?: QueryConfigDto): Promise<ResultList<SystemDmConfig[]>> {
    query = Object.assign(
      {
        ...query,
        pageNum: 1,
        pageSize: 10,
      },
      query,
    );
    const where = {
      AND: [
        {
          name: {
            contains: query.name,
          },
        },
        {
          key: {
            contains: query.key,
          },
        },
        {
          type: {
            equals: query.type,
          },
        },
        {
          createdTime: {},
        },
      ],
    };
    if (query.startTime && query.endTime) {
      where.AND[3].createdTime = {
        gte: new Date(query.startTime),
        lte: new Date(query.endTime),
      };
    }
    const result = await this.prisma.systemDmConfig.findMany({
      where,
      take: query.pageSize,
      skip: (query.pageNum - 1) * query.pageSize,
    });
    const total = await this.prisma.systemDmConfig.count({
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

  async findOne(id: number): Promise<SystemDmConfig> {
    const result = await this.prisma.systemDmConfig.findUnique({
      where: { id },
    });
    if (!result) throw new NotFoundException(`Not Found a id:${id}`);
    return result;
  }

  async update(id: number, body: UpdateConfigDto): Promise<SystemDmConfig> {
    try {
      const result = await this.prisma.systemDmConfig.update({
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

  async remove(id: number): Promise<SystemDmConfig> {
    try {
      const result = await this.prisma.systemDmConfig.delete({
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
    const result = await this.prisma.systemDmConfig.deleteMany({
      where: {
        id: {
          in: ids,
        },
      },
    });
    return result;
  }
}
