import { ApiProperty } from '@nestjs/swagger';
import { UserArticleComment } from '@prisma/client';

export class UserArticleCommentEntity implements UserArticleComment {
  @ApiProperty({ description: 'id' })
  id: number;
  @ApiProperty({ description: '创建时间' })
  createdTime: Date;
  @ApiProperty({ description: '更新时间' })
  updatedTime: Date;
  @ApiProperty({
    description: '父id，父id为0说明评论文章，否则为回复评论',
    default: 0,
  })
  parentId: number;
  @ApiProperty({ description: '评论内容' })
  content: string;
  @ApiProperty({ description: '置顶 0:否、1:是', default: 0 })
  isTop: number;
  @ApiProperty({ description: '评论数', default: 0 })
  commentCount: number;
  @ApiProperty({ description: '点赞数', default: 0 })
  likeCount: number;
  @ApiProperty({
    description: '是状态(1:审核中;2:审核通过;3审核失败;)',
    default: 2,
  })
  status: number;
  @ApiProperty({ description: '被评论的文章id' })
  articleId: number;
  @ApiProperty({ description: '评论用户id' })
  commentUserId: number;
  @ApiProperty({ description: '被回复的用户id' })
  replyUserId: number;
}
