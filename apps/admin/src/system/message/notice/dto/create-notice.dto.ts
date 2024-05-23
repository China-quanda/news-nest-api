import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';

export class CreateNoticeDto
  implements Prisma.SystemMessageNoticeUncheckedCreateInput
{
  @ApiProperty({ description: '公告标题' })
  title: string;
  @ApiProperty({ description: '公告类型' })
  type: number;
  @ApiProperty({ description: '状态' })
  status?: boolean;
  @ApiProperty({ description: '内容' })
  content: string;
}
