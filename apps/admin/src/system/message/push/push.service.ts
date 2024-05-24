import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreatePushDto } from './dto/create-push.dto';
import { UpdatePushDto } from './dto/update-push.dto';
import { SystemMessagePush } from '@prisma/client';
import { PrismaService } from '@app/common';
import { BaseQueryDto } from '@app/common/dto';
import { ResultList } from '@app/common/utils/result';

@Injectable()
export class PushService {
  constructor(private prisma: PrismaService) {}

  async create(body: CreatePushDto): Promise<SystemMessagePush> {
    const result = await this.prisma.systemMessagePush.create({
      data: body,
    });
    if (!result) throw new HttpException('创建失败！', HttpStatus.BAD_REQUEST);
    return result;
  }

  async findAll(
    query?: BaseQueryDto,
  ): Promise<ResultList<SystemMessagePush[]>> {
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
    const result = await this.prisma.systemMessagePush.findMany({
      take: query.pageSize,
      skip: (query.pageNum - 1) * query.pageSize,
    });
    const total = await this.prisma.systemMessagePush.count();
    return {
      list: result,
      pagination: {
        total,
        pageNum: query.pageNum,
        pageSize: query.pageSize,
      },
    };
  }

  async findOne(id: number): Promise<SystemMessagePush> {
    const result = await this.prisma.systemMessagePush.findUnique({
      where: { id },
    });
    if (!result) throw new NotFoundException(`Not Found a id:${id}`);
    return result;
  }
  async update(id: number, body: UpdatePushDto): Promise<SystemMessagePush> {
    try {
      const result = await this.prisma.systemMessagePush.update({
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

  async remove(id: number): Promise<SystemMessagePush> {
    try {
      const result = await this.prisma.systemMessagePush.delete({
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
