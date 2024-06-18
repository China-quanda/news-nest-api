import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateLinkDto } from './dto/create-link.dto';
import { UpdateLinkDto } from './dto/update-link.dto';
import { Link, Prisma } from '@prisma/client';
import { PrismaService } from '@app/common';
import { QueryLinkDto } from './dto/query-link.dto';
import { ResultList } from '@app/common/utils/result';

@Injectable()
export class LinkService {
  constructor(private prisma: PrismaService) {}

  async create(body: CreateLinkDto): Promise<Link> {
    const result = await this.prisma.link.create({
      data: body,
    });
    if (!result) throw new HttpException('创建失败！', HttpStatus.BAD_REQUEST);
    return result;
  }

  async findAll(query?: QueryLinkDto): Promise<ResultList<Link[]>> {
    query = Object.assign(
      {
        ...query,
        pageNum: 1,
        pageSize: 10,
      },
      query,
    );
    console.log('query', query);
    const where = {
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
      ],
    };
    const result = await this.prisma.link.findMany({
      where,
      take: query.pageSize,
      skip: (query.pageNum - 1) * query.pageSize,
    });
    const total = await this.prisma.link.count({
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

  async findOne(id: number): Promise<Link> {
    const result = await this.prisma.link.findUnique({
      where: { id },
    });
    if (!result) throw new NotFoundException(`Not Found a id:${id}`);
    return result;
  }

  async update(id: number, body: UpdateLinkDto): Promise<Link> {
    try {
      const result = await this.prisma.link.update({
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

  async remove(id: number): Promise<Link> {
    try {
      const result = await this.prisma.link.delete({
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
    const result = await this.prisma.link.deleteMany({
      where: {
        id: {
          in: ids,
        },
      },
    });
    return result;
  }
}
