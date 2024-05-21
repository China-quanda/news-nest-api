import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserArticleLikeDto } from './dto/create-user-article-like.dto';
import { UpdateUserArticleLikeDto } from './dto/update-user-article-like.dto';
import { UserArticleLike } from '@prisma/client';
import { PrismaService } from '@app/common';
import { BaseQueryDto } from '@app/common/dto';
import { ResultList } from '@app/common/utils/result';

@Injectable()
export class UserArticleLikeService {
  constructor(private prisma: PrismaService) {}

  async create(body: CreateUserArticleLikeDto): Promise<UserArticleLike> {
    const result = await this.prisma.userArticleLike.create({
      data: body,
    });
    if (!result) throw new HttpException('创建失败！', HttpStatus.BAD_REQUEST);
    return result;
  }

  async findAll(query?: BaseQueryDto): Promise<ResultList<UserArticleLike[]>> {
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
    const result = await this.prisma.userArticleLike.findMany({
      take: query.pageSize,
      skip: (query.pageNum - 1) * query.pageSize,
    });
    const total = await this.prisma.userArticleLike.count();
    return {
      list: result,
      pagination: {
        total,
        pageNum: query.pageNum,
        pageSize: query.pageSize,
      },
    };
  }

  async findOne(id: number) {
    const result = await this.prisma.userArticleLike.findUnique({
      where: { id },
    });
    if (!result) throw new NotFoundException(`Not Found a id:${id}`);
    return result;
  }

  async update(
    id: number,
    updateUserArticleLikeDto: UpdateUserArticleLikeDto,
  ): Promise<UserArticleLike> {
    try {
      const result = await this.prisma.userArticleLike.update({
        where: { id },
        data: updateUserArticleLikeDto,
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

  async remove(id: number): Promise<UserArticleLike> {
    try {
      const result = await this.prisma.userArticleLike.delete({
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
