import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '@app/common';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(body: CreateUserDto): Promise<User> {
    const { username, password } = body;
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(password, salt);
    console.log('hash', hash, 'password', password);
    const user = await this.prisma.user.create({
      data: {
        username: username,
        password: hash,
      },
    });
    console.log('user', user);
    return user;
  }

  async findAll(): Promise<User[]> {
    const users = await this.prisma.user.findMany();
    return users;
  }

  async findOneById(id: number): Promise<User> {
    const user = await this.prisma.user.findUnique({ where: { id } });
    if (!user) throw new NotFoundException(`Not Found user a id:${id}`);

    return user;
  }

  async findOne(username: string): Promise<User> {
    const user = await this.prisma.user.findFirst({
      where: {
        username,
      },
    });
    if (!user) throw new NotFoundException(`Not Found user a id:${username}`);
    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
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

  async remove(id: number): Promise<string> {
    try {
      const user = await this.prisma.user.delete({ where: { id } });
      if (!user) throw new NotFoundException(`Not Found user a id:${id}`);
      console.log('user', user);
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException('要删除的用户不存在！');
      }
      throw new HttpException('未知异常', HttpStatus.INTERNAL_SERVER_ERROR);
    }

    return `This action removes a #${id} user scucess`;
  }
}
