import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserArticleReportDto } from './dto/create-user-article-report.dto';
import { UpdateUserArticleReportDto } from './dto/update-user-article-report.dto';
import { UserArticleReport } from '@prisma/client';
import { PrismaService } from '@app/common';
import { ResultList } from '@app/common/utils/result';
import { BaseQueryDto } from '@app/common/dto';

@Injectable()
export class UserArticleReportService {
  constructor(private prisma: PrismaService) {}

  async create(body: CreateUserArticleReportDto): Promise<UserArticleReport> {
    const result = await this.prisma.userArticleReport.create({
      data: body,
    });
    if (!result) throw new HttpException('创建失败！', HttpStatus.BAD_REQUEST);
    return result;
  }

  async findAll(
    query?: BaseQueryDto,
  ): Promise<ResultList<UserArticleReport[]>> {
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
    const result = await this.prisma.userArticleReport.findMany({
      take: query.pageSize,
      skip: (query.pageNum - 1) * query.pageSize,
    });
    const total = await this.prisma.userArticleReport.count();
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
    const result = await this.prisma.userArticleReport.findUnique({
      where: { id },
    });
    if (!result) throw new NotFoundException(`Not Found a id:${id}`);
    return result;
  }

  async update(
    id: number,
    body: UpdateUserArticleReportDto,
  ): Promise<UserArticleReport> {
    try {
      const result = await this.prisma.userArticleReport.update({
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

  async remove(id: number): Promise<UserArticleReport> {
    try {
      const result = await this.prisma.userArticleReport.delete({
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
