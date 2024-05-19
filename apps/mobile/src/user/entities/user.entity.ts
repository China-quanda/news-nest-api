import { ApiProperty } from '@nestjs/swagger';
import { User } from '@prisma/client';

export class UserEntity implements User {
  @ApiProperty({ description: 'id' })
  id: number;
  @ApiProperty({ description: '创建时间' })
  createdAt: Date;
  @ApiProperty({ description: '更新时间' })
  updatedAt: Date;
  @ApiProperty({ description: '用户名' })
  username: string;
  @ApiProperty({ description: '密码' })
  password: string;
  @ApiProperty({ description: '头像' })
  avatar: string;
  @ApiProperty({ description: '状态' })
  status: boolean;
}
