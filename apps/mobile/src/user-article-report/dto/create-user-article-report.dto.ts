import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { IsInt } from 'class-validator';

export class CreateUserArticleReportDto
  implements Prisma.UserArticleReportUncheckedCreateInput
{
  @IsInt()
  @ApiProperty({
    description: `举报类型： 0-其他问题，1-标题夸张，2-低俗色情，3-错别字多，4-旧闻重复，5-广告软文，6-内容不实，7-涉嫌违法犯罪，8-侵权`,
    default: 1,
  })
  type?: number;
  @ApiProperty({
    description: `举报描述文字`,
    default: '标题党',
  })
  remark: string;
  @IsInt()
  @ApiProperty({
    description: `举报状态： 审核状态(0:审核失败;1:审核中;2:审核完成,内容未违规,3:审核完成,内容违规已删除该文章)`,
    default: 1,
  })
  status?: number;
  @IsInt()
  @ApiProperty({ default: 1 })
  userId: number;
  @IsInt()
  @ApiProperty({ default: 1 })
  articleId: number;
}
