import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { IsBoolean, IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateUserDto implements Prisma.UserCreateInput {
  @IsString()
  @IsNotEmpty({ message: '用户名不为空' })
  @ApiProperty({
    description: '用户名',
    example: '张三',
  })
  username: string;

  @IsString()
  @Length(8, 30, { message: 'password的长度不能小于8不能大于30个字符' })
  @IsNotEmpty({ message: '密码不为空' })
  @ApiProperty({
    description: '密码',
    example: '123456',
  })
  password: string;

  @IsString()
  @ApiProperty({
    description: '头像',
    required: false,
  })
  avatar?: string;

  @IsBoolean()
  @ApiProperty({
    description: '状态',
    required: false,
    default: true,
  })
  status: boolean;

  @ApiProperty({
    description: '文章',
    required: false,
  })
  articles?: Prisma.ArticleCreateNestedManyWithoutAuthorInput;
}
