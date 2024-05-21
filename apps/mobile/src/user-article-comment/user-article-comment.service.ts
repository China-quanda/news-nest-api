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

    // 如果评论的是文章就让文章的评论数加1 否则是评论的评论就让评论的评论数加1
    if (result.parentId === 0) {
      const upRes = await this.prisma.article.update({
        where: {
          id: result.articleId,
        },
        data: {
          commentCount: {
            increment: 1,
          },
        },
      });
      if (!upRes?.id) {
        throw new HttpException('未知异常', HttpStatus.INTERNAL_SERVER_ERROR);
      }
    } else {
      const upRes = await this.prisma.userArticleComment.update({
        where: {
          id: result.id,
        },
        data: {
          commentCount: {
            increment: 1,
          },
        },
      });
      if (!upRes?.id) {
        throw new HttpException('未知异常', HttpStatus.INTERNAL_SERVER_ERROR);
      }
    }

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

  // 销毁单个文章评论
  // async destroyOne(commentId: number): Promise<boolean> {
  //   const comment = await this.entity.findOne({
  //     where: { id: commentId },
  //     relations: ['commentArticle'],
  //   });
  //   if (!comment) throw new CustomHttpError('要删除的评论不存在');

  //   // 如果当前删除id有回复;
  //   const res = await this.entity.findAndCountBy({ parentId: comment.id });
  //   if (res[1] > 0) throw new CustomHttpError('删除失败，当前评论下有回复。');

  //   // 判断删除文章评论还是 评论评论
  //   if (comment.parentId === 0) {
  //     await this.articleEntity.update(comment.commentArticle.id, {
  //       commentCount: Number(comment.commentArticle.commentCount) - 1,
  //     });
  //   } else {
  //     const parent = await this.entity.findOne({
  //       where: { id: comment.parentId },
  //     });
  //     await this.entity.update(parent.id, {
  //       commentCount: Number(parent.commentCount) - 1,
  //     });
  //   }

  //   const result = await this.entity.delete(comment.id);
  //   if (result.affected <= 0) throw new CustomHttpError('删除评论操作失败！');

  //   return true;
  // }
}
