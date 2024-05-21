import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserArticleCommentDto } from './dto/create-user-article-comment.dto';
import { PrismaService } from '@app/common';
import { UserArticleComment } from '@prisma/client';
import { QueryUserArticleCommentDto } from './dto/query-user-article-comment.dto';
import { ResultList } from '@app/common/utils/result';

@Injectable()
export class UserArticleCommentService {
  constructor(private prisma: PrismaService) {}

  async create(
    createUserArticleCommentDto: CreateUserArticleCommentDto,
  ): Promise<UserArticleComment> {
    const result = await this.prisma.userArticleComment.create({
      data: createUserArticleCommentDto,
    });
    if (!result) throw new HttpException('创建失败！', HttpStatus.BAD_REQUEST);
    return result;
  }

  async findAll(
    query?: QueryUserArticleCommentDto,
  ): Promise<ResultList<UserArticleComment[]>> {
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
    const result = await this.prisma.userArticleComment.findMany({
      take: query.pageSize,
      skip: (query.pageNum - 1) * query.pageSize,
    });
    const total = await this.prisma.userArticleComment.count();
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
    const result = await this.prisma.userArticleComment.findUnique({
      where: { id },
    });
    if (!result) throw new NotFoundException(`Not Found a id:${id}`);
    return result;
  }

  async remove(id: number): Promise<UserArticleComment> {
    try {
      const result = await this.prisma.userArticleComment.delete({
        where: { id },
      });
      if (!result) throw new NotFoundException(`Not Found a id:${id}`);

      return result;
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException('要删除的用户不存在！');
      }
      throw new HttpException('未知异常', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
