import { BaseEntity } from '@app/common/entity';
import { ApiProperty } from '@nestjs/swagger';
import { SystemMessageNotice } from '@prisma/client';

export class NoticeEntity extends BaseEntity implements SystemMessageNotice {
  @ApiProperty({ description: '公告标题' })
  title: string;
  @ApiProperty({ description: '公告类型' })
  type: number;
  @ApiProperty({ description: '状态' })
  status: boolean;
  @ApiProperty({ description: '内容' })
  content: string;
}
