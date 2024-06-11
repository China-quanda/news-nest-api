import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';

export class CreateUserDto implements Prisma.UserCreateInput {
  @ApiProperty({
    description: '用户名',
    example: '张三',
  })
  @IsString()
  @Type(() => String)
  @IsNotEmpty({ message: '用户名不为空' })
  username: string;

  @ApiProperty({
    description: '密码',
    example: '123456',
  })
  @IsString()
  @Type(() => String)
  @Length(8, 30, { message: 'password的长度不能小于8不能大于30个字符' })
  @IsNotEmpty({ message: '密码不为空' })
  password: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    description: '头像',
    required: false,
  })
  avatar?: string;

  @IsBoolean()
  @IsOptional()
  @ApiProperty({
    description: '状态',
    required: false,
    default: true,
  })
  status?: boolean;

  @ApiProperty({
    description: '文章',
    required: false,
  })
  @IsOptional()
  articles?: Prisma.ArticleCreateNestedManyWithoutAuthorInput;
}
