import { Injectable } from '@nestjs/common';
import { CreateArticleCategoryDto } from './dto/create-article-category.dto';
import { UpdateArticleCategoryDto } from './dto/update-article-category.dto';
import { PrismaService } from '@app/common';
import { ArticleCategory } from '@prisma/client';

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
    return await this.prisma.articleCategory.update({
      where: { id },
      data: updateArticleCategoryDto,
    });
    // return `This action updates a #${id} articleCategory`;
  }

  async remove(id: number): Promise<boolean> {
    const articleCategory = await this.prisma.articleCategory.delete({
      where: { id },
    });
    let flag = false;
    if (articleCategory.id) flag = true;
    return flag;
    // return `This action removes a #${id} articleCategory`;
  }
}
