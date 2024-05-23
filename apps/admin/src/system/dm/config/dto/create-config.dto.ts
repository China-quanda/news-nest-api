import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';

export class CreateConfigDto
  implements Prisma.SystemDmConfigUncheckedCreateInput
{
  @ApiProperty({ description: '参数名称' })
  name: string;
  @ApiProperty({ description: '参数键名' })
  key: string;
  @ApiProperty({ description: '参数键值' })
  value: string;
  @ApiProperty({
    description: '系统内置？',
    default: false,
    required: false,
  })
  type?: boolean;
  @ApiProperty({
    description: '备注',
    default: 0,
    required: false,
  })
  remark?: string;
}
