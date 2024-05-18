import { ApiProperty } from '@nestjs/swagger';
import { Article, ArticleCategory } from '@prisma/client';

export class ArticleEntity implements Article {
  @ApiProperty({ description: 'id' })
  id: number;
  @ApiProperty({ description: '创建时间' })
  createdAt: Date;
  @ApiProperty({ description: '更新时间' })
  updatedAt: Date;
  @ApiProperty({ description: '文章标题' })
  title: string;
  @ApiProperty({
    description: '置顶 false:否、true:是',
    required: false,
    default: false,
  })
  isTop: boolean;

  @ApiProperty({ description: '文章内容' })
  content: string;

  @ApiProperty({
    description: '封面类型 0-无图，1-1张，3-3张,10:自动',
    required: false,
    default: 0,
  })
  coverType: number;

  @ApiProperty({
    description: '封面的URL地址',
    required: false,
    default: 0,
  })
  coverImg: string;

  @ApiProperty({
    description: '评论数',
    required: false,
    default: 0,
  })
  commentCount: number;

  @ApiProperty({
    description: '点赞数',
    required: false,
    default: 0,
  })
  likeCount: number;

  @ApiProperty({
    description: '收藏数',
    required: false,
    default: 0,
  })
  collectCount: number;

  @ApiProperty({
    description: '阅读数',
    required: false,
    default: 0,
  })
  readCount: number;

  @ApiProperty({
    description: '状态(0:草稿;1:审核中;2:审核通过;3审核失败;4:回收站)',
  })
  status: number;

  @ApiProperty({
    description: '作者id',
  })
  authorId: number;

  // @ApiProperty({ description: '作者' })
  // author: User;

  @ApiProperty({
    description: '文章类别id',
  })
  categoryId: number;

  @ApiProperty({ description: '文章类别' })
  category: ArticleCategory;
}
