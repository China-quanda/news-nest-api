import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateLoginLogDto } from './dto/create-login-log.dto';
import { UpdateLoginLogDto } from './dto/update-login-log.dto';
import { Prisma, SystemLogLoginLog } from '@prisma/client';
import { PrismaService } from '@app/common';
import { QueryLoginLogDto } from './dto/query-dict-dayum.dto';
import { ResultList } from '@app/common/utils/result';

@Injectable()
export class LoginLogService {
  constructor(private prisma: PrismaService) {}
  async create(body: CreateLoginLogDto): Promise<SystemLogLoginLog> {
    const result = await this.prisma.systemLogLoginLog.create({
      data: body,
    });
    if (!result) throw new HttpException('创建失败！', HttpStatus.BAD_REQUEST);
    return result;
  }

  async findAll(
    query?: QueryLoginLogDto,
  ): Promise<ResultList<SystemLogLoginLog[]>> {
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
          User: {
            username: {
              contains: query.username,
            },
          },
        },
        {
          loginIp: {
            contains: query.loginIp,
          },
        },
        {
          loginCity: {
            contains: query.loginCity,
          },
        },
        {
          loginTime: {},
        },
      ],
    };
    if (query.startTime && query.endTime) {
      where.AND[2].loginTime = {
        gte: new Date(query.startTime),
        lte: new Date(query.endTime),
      };
    }
    const result = await this.prisma.systemLogLoginLog.findMany({
      where,
      take: query.pageSize,
      skip: (query.pageNum - 1) * query.pageSize,
    });
    const total = await this.prisma.systemLogLoginLog.count({
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

  async findOne(id: number): Promise<SystemLogLoginLog> {
    const result = await this.prisma.systemLogLoginLog.findUnique({
      where: { id },
    });
    if (!result) throw new NotFoundException(`Not Found a id:${id}`);
    return result;
  }

  async update(
    id: number,
    body: UpdateLoginLogDto,
  ): Promise<SystemLogLoginLog> {
    try {
      const result = await this.prisma.systemLogLoginLog.update({
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

  async remove(id: number): Promise<SystemLogLoginLog> {
    try {
      const result = await this.prisma.systemLogLoginLog.delete({
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
    const result = await this.prisma.systemLogLoginLog.deleteMany({
      where: {
        id: {
          in: ids,
        },
      },
    });
    return result;
  }
}
