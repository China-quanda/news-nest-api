import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';

export class CreateSysDataDictDto
  implements Prisma.SysDataDictUncheckedCreateInput
{
  @ApiProperty({ example: '用户性别' })
  name: string;
  @ApiProperty({ example: 'sys_user_sex' })
  type: string;
  @ApiProperty({ example: '用户性别列表', required: false })
  remark?: string;
  @ApiProperty({ default: true, required: false })
  status?: boolean;
}
