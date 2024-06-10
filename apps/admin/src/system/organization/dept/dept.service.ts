import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateDeptDto } from './dto/create-dept.dto';
import { UpdateDeptDto } from './dto/update-dept.dto';
import { PrismaService } from '@app/common';
import { ResultList } from '@app/common/utils/result';
import { Prisma, SystemOrganizationDept } from '@prisma/client';
import { QueryDeptDto } from './dto/query-dept.dto';

@Injectable()
export class DeptService {
  constructor(private prisma: PrismaService) {}

  async create(body: CreateDeptDto): Promise<SystemOrganizationDept> {
    const result = await this.prisma.systemOrganizationDept.create({
      data: body,
    });
    if (!result) throw new HttpException('创建失败！', HttpStatus.BAD_REQUEST);
    return result;
  }

  async findAll(
    query?: QueryDeptDto,
  ): Promise<ResultList<SystemOrganizationDept[]>> {
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
    const where = {
      AND: [
        {
          org: {},
        },
        {
          name: {
            contains: query.name,
          },
        },
        {
          status: {
            equals: query.status,
          },
        },
      ],
    };
    if (query.orgId) {
      where.AND[0].org = { id: query.orgId };
    }
    const result = await this.prisma.systemOrganizationDept.findMany({
      where,
      take: query.pageSize,
      skip: (query.pageNum - 1) * query.pageSize,
    });
    const total = await this.prisma.systemOrganizationDept.count({ where });
    return {
      list: result,
      pagination: {
        total,
        pageNum: query.pageNum,
        pageSize: query.pageSize,
      },
    };
  }

  async findOne(id: number): Promise<SystemOrganizationDept> {
    const result = await this.prisma.systemOrganizationDept.findUnique({
      where: { id },
    });
    if (!result) throw new NotFoundException(`Not Found a id:${id}`);
    return result;
  }

  async update(
    id: number,
    body: UpdateDeptDto,
  ): Promise<SystemOrganizationDept> {
    try {
      const result = await this.prisma.systemOrganizationDept.update({
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

  async remove(id: number): Promise<SystemOrganizationDept> {
    try {
      const result = await this.prisma.systemOrganizationDept.delete({
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

  async deleteMany(ids: number[]): Promise<Prisma.BatchPayload> {
    if (!ids.length) {
      throw new HttpException(`ids不能为空`, HttpStatus.BAD_REQUEST);
    }
    const result = await this.prisma.systemOrganizationDept.deleteMany({
      where: {
        id: {
          in: ids,
        },
      },
    });
    return result;
  }
}
