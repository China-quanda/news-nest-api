import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Length } from 'class-validator';

export class SignInDto {
  @IsString()
  @IsNotEmpty({ message: '用户名不为空' })
  @ApiProperty({
    description: '用户名',
    example: 'admin',
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
}
