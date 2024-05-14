import { IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateAuthDto {
  @IsString()
  @IsNotEmpty({ message: '用户名不为空' })
  username: string;

  @IsString()
  @Length(8, 30, { message: 'password的长度不能小于8不能大于30个字符' })
  @IsNotEmpty({ message: '密码不为空' })
  password: string;
}
