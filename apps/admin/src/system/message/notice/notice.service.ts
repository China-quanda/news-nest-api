import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateNoticeDto } from './dto/create-notice.dto';
import { UpdateNoticeDto } from './dto/update-notice.dto';
import { PrismaService } from '@app/common';
import { ResultList } from '@app/common/utils/result';
import { Prisma, SystemMessageNotice } from '@prisma/client';
import { QueryNoticeDto } from './dto/query-notice.dto';

@Injectable()
export class NoticeService {
  constructor(private prisma: PrismaService) {}

  async create(body: CreateNoticeDto): Promise<SystemMessageNotice> {
    const result = await this.prisma.systemMessageNotice.create({
      data: body,
    });
    if (!result) throw new HttpException('创建失败！', HttpStatus.BAD_REQUEST);
    return result;
  }

  async findAll(
    query?: QueryNoticeDto,
  ): Promise<ResultList<SystemMessageNotice[]>> {
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
    const where = {
      AND: [
        {
          title: {
            contains: query.title,
          },
        },
        {
          status: {
            equals: query.status,
          },
        },
        {
          type: {
            equals: query.type,
          },
        },
      ],
    };
    const result = await this.prisma.systemMessageNotice.findMany({
      where,
      take: query.pageSize,
      skip: (query.pageNum - 1) * query.pageSize,
    });
    const total = await this.prisma.systemMessageNotice.count({
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

  async findOne(id: number): Promise<SystemMessageNotice> {
    const result = await this.prisma.systemMessageNotice.findUnique({
      where: { id },
    });
    if (!result) throw new NotFoundException(`Not Found a id:${id}`);
    return result;
  }

  async update(
    id: number,
    body: UpdateNoticeDto,
  ): Promise<SystemMessageNotice> {
    try {
      const result = await this.prisma.systemMessageNotice.update({
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

  async remove(id: number): Promise<SystemMessageNotice> {
    try {
      const result = await this.prisma.systemMessageNotice.delete({
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
    const result = await this.prisma.systemMessageNotice.deleteMany({
      where: {
        id: {
          in: ids,
        },
      },
    });
    return result;
  }
}
