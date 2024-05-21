import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserSearchDto } from './dto/create-user-search.dto';
import { UpdateUserSearchDto } from './dto/update-user-search.dto';
import { UserSearch } from '@prisma/client';
import { PrismaService } from '@app/common';
import { BaseQueryDto } from '@app/common/dto';
import { ResultList } from '@app/common/utils/result';

@Injectable()
export class UserSearchService {
  constructor(private prisma: PrismaService) {}
  async create(body: CreateUserSearchDto): Promise<UserSearch> {
    const isSearch = await this.prisma.userSearch.findFirst({
      where: {
        AND: { userId: body.userId, keywords: body.keywords },
      },
    });
    if (isSearch?.id) {
      // 如果用户之前搜索过这个词，就让number搜索次数+1
      const upRes = await this.prisma.userSearch.update({
        where: { id: isSearch.id },
        data: {
          searchCount: {
            increment: 1,
          },
        },
      });
      if (!upRes?.id) {
        throw new HttpException('未知异常', HttpStatus.INTERNAL_SERVER_ERROR);
      }
    } else {
      const result = await this.prisma.userSearch.create({
        data: body,
      });
      if (!result)
        throw new HttpException('创建失败！', HttpStatus.BAD_REQUEST);
      return result;
    }
  }

  async findAll(query?: BaseQueryDto): Promise<ResultList<UserSearch[]>> {
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
    const result = await this.prisma.userSearch.findMany({
      take: query.pageSize,
      skip: (query.pageNum - 1) * query.pageSize,
    });
    const total = await this.prisma.userSearch.count();
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
    const result = await this.prisma.userSearch.findUnique({
      where: { id },
    });
    if (!result) throw new NotFoundException(`Not Found a id:${id}`);
    return result;
  }
  async update(id: number, body: UpdateUserSearchDto): Promise<UserSearch> {
    try {
      const result = await this.prisma.userSearch.update({
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

  async remove(id: number): Promise<UserSearch> {
    try {
      const result = await this.prisma.userSearch.delete({
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

  // 获取热门搜索
  // async getHotSearch(query) {
  //   const { pageNum = 1, pageSize = 10, where = {} } = query;
  //   const [list, total] = await this.entity.findAndCount({
  //     where,
  //     order: {
  //       searchCount: 'DESC', // 根据搜索量倒序排序
  //     },
  //     take: pageSize,
  //     skip: (pageNum - 1) * pageSize,
  //   });
  //   return { list, pagination: { total, pageSize, pageNum } };
  // }

  // 获取搜索联想建议列表
  // async getAdvicelist(msg) {
  //   const result: any = await this.httpService.request({
  //     url: `https://api.52vmy.cn/api/wl/word/baidu?msg=${msg}`,
  //   });
  //   return result.data.data || [];
  // }
}
