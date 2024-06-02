import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { PrismaService } from '@app/common';
import { Prisma, SystemDmCategory } from '@prisma/client';
import { ResultList } from '@app/common/utils/result';
import { QueryCategoryDto } from './dto/query-dict-dayum.dto';

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) {}
  async create(body: CreateCategoryDto): Promise<SystemDmCategory> {
    const result = await this.prisma.systemDmCategory.create({
      data: body,
    });
    if (!result) throw new HttpException('创建失败！', HttpStatus.BAD_REQUEST);
    return result;
  }

  async findAll(
    query?: QueryCategoryDto,
  ): Promise<ResultList<SystemDmCategory[]>> {
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
        {
          code: {
            contains: query.code,
          },
        },
      ],
    };
    const result = await this.prisma.systemDmCategory.findMany({
      where,
      take: query.pageSize,
      skip: (query.pageNum - 1) * query.pageSize,
    });
    const total = await this.prisma.systemDmCategory.count({
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

  async findOne(id: number): Promise<SystemDmCategory> {
    const result = await this.prisma.systemDmCategory.findUnique({
      where: { id },
    });
    if (!result) throw new NotFoundException(`Not Found a id:${id}`);
    return result;
  }

  async update(id: number, body: UpdateCategoryDto): Promise<SystemDmCategory> {
    try {
      const result = await this.prisma.systemDmCategory.update({
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

  async remove(id: number): Promise<SystemDmCategory> {
    try {
      const result = await this.prisma.systemDmCategory.delete({
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
    const result = await this.prisma.systemDmCategory.deleteMany({
      where: {
        id: {
          in: ids,
        },
      },
    });
    return result;
  }
}
