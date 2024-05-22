import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserArticleViewDto } from './dto/create-user-article-view.dto';
import { PrismaService } from '@app/common';
import { UserArticleView } from '@prisma/client';
import { BaseQueryDto } from '@app/common/dto';
import { ResultList } from '@app/common/utils/result';

@Injectable()
export class UserArticleViewService {
  constructor(private prisma: PrismaService) {}

  async create(body: CreateUserArticleViewDto): Promise<UserArticleView> {
    const isSearch = await this.prisma.userArticleView.findFirst({
      where: {
        AND: { userId: body.userId, articleId: body.articleId },
      },
    });
    if (isSearch?.id) {
      // 如果用户之前搜索过这个词，就让number搜索次数+1
      const upRes = await this.prisma.userArticleView.update({
        where: { id: isSearch.id },
        data: {
          viewCount: {
            increment: 1,
          },
        },
      });
      if (!upRes?.id) {
        throw new HttpException('未知异常', HttpStatus.INTERNAL_SERVER_ERROR);
      }
    } else {
      const result = await this.prisma.userArticleView.create({
        data: body,
      });
      if (!result) {
        throw new HttpException('创建失败！', HttpStatus.BAD_REQUEST);
      }
      return result;
    }
  }

  async findAll(query?: BaseQueryDto): Promise<ResultList<UserArticleView[]>> {
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
    const result = await this.prisma.userArticleView.findMany({
      take: query.pageSize,
      skip: (query.pageNum - 1) * query.pageSize,
    });
    const total = await this.prisma.userArticleView.count();
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
    const result = await this.prisma.userArticleView.findUnique({
      where: { id },
    });
    if (!result) throw new NotFoundException(`Not Found a id:${id}`);
    return result;
  }

  async remove(id: number): Promise<UserArticleView> {
    try {
      const result = await this.prisma.userArticleView.delete({
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
