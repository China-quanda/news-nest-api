import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PrismaService } from '@app/common';
import { Prisma, SystemOrganizationPost } from '@prisma/client';
import { ResultList } from '@app/common/utils/result';
import { QueryPostDto } from './dto/query-post.dto';

@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}

  async create(body: CreatePostDto): Promise<SystemOrganizationPost> {
    const result = await this.prisma.systemOrganizationPost.create({
      data: body,
    });
    if (!result) throw new HttpException('创建失败！', HttpStatus.BAD_REQUEST);
    return result;
  }

  async findAll(
    query?: QueryPostDto,
  ): Promise<ResultList<SystemOrganizationPost[]>> {
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
          org: {},
        },
        {
          dept: {},
        },
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
    if (query.orgId) {
      where.AND[0].org = { id: query.orgId };
    }
    if (query.deptId) {
      where.AND[1].dept = { id: query.deptId };
    }
    const result = await this.prisma.systemOrganizationPost.findMany({
      where,
      take: query.pageSize,
      skip: (query.pageNum - 1) * query.pageSize,
    });
    const total = await this.prisma.systemOrganizationPost.count({ where });
    return {
      list: result,
      pagination: {
        total,
        pageNum: query.pageNum,
        pageSize: query.pageSize,
      },
    };
  }

  async findOne(id: number): Promise<SystemOrganizationPost> {
    const result = await this.prisma.systemOrganizationPost.findUnique({
      where: { id },
    });
    if (!result) throw new NotFoundException(`Not Found a id:${id}`);
    return result;
  }

  async update(
    id: number,
    body: UpdatePostDto,
  ): Promise<SystemOrganizationPost> {
    try {
      const result = await this.prisma.systemOrganizationPost.update({
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

  async remove(id: number): Promise<SystemOrganizationPost> {
    try {
      const result = await this.prisma.systemOrganizationPost.delete({
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
    const result = await this.prisma.systemOrganizationPost.deleteMany({
      where: {
        id: {
          in: ids,
        },
      },
    });
    return result;
  }
}
