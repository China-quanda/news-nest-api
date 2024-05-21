import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateArticleCategoryDto } from './dto/create-article-category.dto';
import { UpdateArticleCategoryDto } from './dto/update-article-category.dto';
import { PrismaService } from '@app/common';
import { ArticleCategory, Prisma } from '@prisma/client';

@Injectable()
export class ArticleCategoryService {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    createArticleCategoryDto: CreateArticleCategoryDto,
  ): Promise<ArticleCategory> {
    return await this.prisma.articleCategory.create({
      data: createArticleCategoryDto,
    });
  }

  async findAll(): Promise<ArticleCategory[]> {
    return await this.prisma.articleCategory.findMany();
  }

  async findOne(id: number): Promise<ArticleCategory> {
    return await this.prisma.articleCategory.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateArticleCategoryDto: UpdateArticleCategoryDto) {
    try {
      const result = await this.prisma.articleCategory.update({
        where: { id },
        data: updateArticleCategoryDto,
      });
      if (!result) {
        throw new HttpException('更新操作失败', HttpStatus.BAD_REQUEST);
      }
      return result;
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException('要更新的用户不存在！');
      }
      throw new HttpException('未知异常', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async remove(id: number): Promise<boolean> {
    const result = await this.prisma.articleCategory.delete({
      where: { id },
    });
    let flag = false;
    if (result.id) flag = true;
    if (!result) {
      throw new HttpException('操作失败', HttpStatus.BAD_REQUEST);
    }
    return flag;
    // return `This action removes a #${id} articleCategory`;
  }

  async deleteMany(ids: number[]): Promise<Prisma.BatchPayload> {
    if (!ids.length) {
      throw new HttpException(`ids不能为空`, HttpStatus.BAD_REQUEST);
    }
    const result = await this.prisma.articleCategory.deleteMany({
      where: {
        id: {
          in: ids,
        },
      },
    });
    return result;
  }
}
