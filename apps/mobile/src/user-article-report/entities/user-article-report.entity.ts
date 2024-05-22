import { BaseEntity } from '@app/common/entity';
import { ApiProperty } from '@nestjs/swagger';
import { UserArticleReport } from '@prisma/client';

export class UserArticleReportEntity
  extends BaseEntity
  implements UserArticleReport
{
  @ApiProperty()
  type: number;
  @ApiProperty()
  remark: string;
  @ApiProperty()
  status: number;
  @ApiProperty()
  userId: number;
  @ApiProperty()
  articleId: number;
}
