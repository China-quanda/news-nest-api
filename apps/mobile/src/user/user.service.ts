import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '@app/common';
import {
  Prisma,
  User,
  UserArticleCollect,
  UserArticleFavorite,
} from '@prisma/client';
import {
  CreateUserArticleFavoriteDto,
  UpdateUserArticleFavoriteDto,
} from './dto/user-article-favorite.dto';
import {
  UpdateUserArticleCollectDtoDto,
  UserArticleCollectDto,
} from './dto/user-article-collect.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const salt = await bcrypt.genSalt();
    createUserDto.password = await bcrypt.hash(createUserDto.password, salt);

    const user = await this.prisma.user.create({
      data: createUserDto,
    });

    return user;
  }

  async findAll(): Promise<User[]> {
    const users = await this.prisma.user.findMany();
    return users;
  }

  async findOne(id: number): Promise<User> {
    const user = await this.prisma.user.findUnique({ where: { id } });
    if (!user) throw new NotFoundException(`Not Found user a id:${id}`);
    return user;
  }

  async findOneUser(where: Prisma.UserWhereInput): Promise<User> {
    const user = await this.prisma.user.findFirst({ where: where });
    // findUnique({ where: { username } });
    if (!user) throw new NotFoundException();
    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    if (updateUserDto.password) {
      const salt = await bcrypt.genSalt();
      updateUserDto.password = await bcrypt.hash(updateUserDto.password, salt);
    }
    try {
      const user = await this.prisma.user.update({
        where: { id },
        data: updateUserDto,
      });
      if (!user) throw new NotFoundException(`Not Found user a id:${id}`);
      return user;
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException('要更新的用户不存在！');
      }
      throw new HttpException('未知异常', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async remove(id: number): Promise<boolean> {
    let flag = false;
    try {
      const user = await this.prisma.user.delete({ where: { id } });
      if (!user) throw new NotFoundException(`Not Found user a id:${id}`);
      flag = true;
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException('要删除的用户不存在！');
      }
      throw new HttpException('未知异常', HttpStatus.INTERNAL_SERVER_ERROR);
    }
    return flag;
  }

  async createArticleFavorites(
    body: CreateUserArticleFavoriteDto,
  ): Promise<UserArticleFavorite> {
    const result = await this.prisma.userArticleFavorite.create({
      data: body,
    });

    return result;
  }

  async findAllArticleFavorites(): Promise<UserArticleFavorite[]> {
    const result = await this.prisma.userArticleFavorite.findMany({
      include: {
        collects: {
          include: {
            article: true,
          },
        },
      },
    });
    return result;
  }

  async findOneArticleFavorites(id: number): Promise<UserArticleFavorite> {
    const result = await this.prisma.userArticleFavorite.findUnique({
      where: { id },
      include: {
        collects: true,
      },
    });
    if (!result) throw new NotFoundException();
    return result;
  }

  async updateArticleFavorites(
    id: number,
    body: UpdateUserArticleFavoriteDto,
  ): Promise<UserArticleFavorite> {
    try {
      const result = await this.prisma.userArticleFavorite.update({
        where: { id },
        data: body,
      });
      if (!result) throw new NotFoundException(`Not Found  id:${id}`);
      return result;
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException('要更新的目标不存在！');
      }
    }
  }

  async removeArticleFavorites(id: number): Promise<UserArticleFavorite> {
    try {
      const result = await this.prisma.userArticleFavorite.delete({
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

  async createArticleCollect(
    body: UserArticleCollectDto,
  ): Promise<UserArticleCollect> {
    // 1、先判断当前用户是否已经收藏过
    // 如果收藏过了，就提示您已经收藏过了！

    // 2、没收藏过就创建收藏
    const result = await this.prisma.userArticleCollect.create({
      data: body,
    });
    if (!result) {
      throw new HttpException('未知异常', HttpStatus.INTERNAL_SERVER_ERROR);
    }

    // 3、收藏成功后更新文章收藏数
    const article = await this.prisma.article.update({
      where: {
        id: body.articleId,
      },
      data: {
        collectCount: {
          increment: 1,
        },
      },
    });
    if (!article?.id) {
      throw new HttpException('未知异常', HttpStatus.INTERNAL_SERVER_ERROR);
    }

    return result;
  }

  async removeArticleCollect(id: number): Promise<UserArticleCollect> {
    try {
      const result = await this.prisma.userArticleCollect.delete({
        where: { id },
      });
      if (!result) throw new NotFoundException(`Not Found a id:${id}`);

      const article = await this.prisma.article.update({
        where: {
          id: result.articleId,
        },
        data: {
          collectCount: {
            decrement: 1,
          },
        },
      });
      if (!article?.id) {
        throw new HttpException('未知异常', HttpStatus.INTERNAL_SERVER_ERROR);
      }

      return result;
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException('要删除的目标不存在！');
      }
      throw new HttpException('未知异常', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async updateArticleCollect(
    id: number,
    body: UpdateUserArticleCollectDtoDto,
  ): Promise<UserArticleCollect> {
    try {
      const result = await this.prisma.userArticleCollect.update({
        where: { id },
        data: body,
      });
      if (!result) throw new NotFoundException(`Not Found  id:${id}`);
      return result;
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException('要更新的目标不存在！');
      }
    }
  }
}
