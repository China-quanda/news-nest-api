import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { PrismaService } from '@app/common';
import { Article } from '@prisma/client';

@Injectable()
export class ArticleService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createArticleDto: CreateArticleDto): Promise<Article> {
    // return 'This action adds a new article';
    // const {authorId,categoryId} = createArticleDto;
    console.log('createArticleDto===', createArticleDto);
    return await this.prisma.article.create({
      data: createArticleDto,
    });
  }

  async findAll(query?: any): Promise<Article[]> {
    console.log('query', query);
    // 当用户搜索文章时 调用新增用户搜索记录接口
    //  if (query.keywords) {
    //   await this.articleSearchService.create(query.keywords);
    //   where.title = ILike(`%${query.keywords}%`);
    // }

    const result = await this.prisma.article.findMany({
      include: {
        category: {
          select: {
            id: true,
            name: true,
          },
        },
        author: {
          select: {
            id: true,
            username: true,
          },
        },
      },
    });
    return result;
  }

  async getHotArticle(query): Promise<Article[]> {
    const result = await this.findAll(query);
    return result;
  }

  async findOne(id: number): Promise<Article> {
    const res = await this.prisma.article.findUnique({
      where: { id },
      include: {
        category: {
          select: {
            id: true,
            name: true,
          },
        },
        author: {
          select: {
            id: true,
            username: true,
          },
        },
      },
    });
    if (!res) throw new NotFoundException();
    // 文章阅读统计+1
    const upRes = await this.prisma.article.update({
      where: { id },
      data: {
        readCount: {
          increment: 1,
        },
      },
    });
    if (!upRes?.id) {
      throw new HttpException('未知异常', HttpStatus.INTERNAL_SERVER_ERROR);
    }

    // 获取文章详情信息成功的话就新增一条用户查看 浏览记录
    // await this.articleViewService.createUserView(id);
    return res;
  }

  async update(
    id: number,
    updateArticleDto: UpdateArticleDto,
  ): Promise<Article> {
    try {
      const article = await this.prisma.article.update({
        where: { id },
        data: updateArticleDto,
      });
      if (!article) throw new NotFoundException(`Not Found article a id:${id}`);
      return article;
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException('要更新的文章不存在！');
      }
      throw new HttpException('未知异常', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async remove(id: number): Promise<Article> {
    try {
      const article = await this.prisma.article.delete({ where: { id } });
      if (!article) throw new NotFoundException(`Not Found article a id:${id}`);
      return article;
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException('要删除的文章不存在！');
      }
      throw new HttpException('未知异常', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
