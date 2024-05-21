import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
export class CreateUserArticleCommentDto
  implements Prisma.UserArticleCommentUncheckedCreateInput
{
  @ApiProperty({ required: false, default: 0 })
  parentId?: number;
  @ApiProperty({ required: false, default: '文章写的太棒了' })
  content: string;
  @ApiProperty({ required: false, default: 0 })
  isTop?: number;
  @ApiProperty({ required: false, default: 0 })
  commentCount?: number;
  @ApiProperty({ required: false, default: 0 })
  likeCount?: number;
  @ApiProperty({ required: false, default: 2 })
  status?: number;
  @ApiProperty()
  articleId: number;
  @ApiProperty()
  commentUserId: number;
  @ApiProperty()
  replyUserId: number;
}
