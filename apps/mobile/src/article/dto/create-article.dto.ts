import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';

export class CreateArticleDto implements Prisma.ArticleCreateInput {
  @ApiProperty({
    description: '文章标题',
    example: '重复工作自动化！真实案例，vite插件也就这样',
  })
  title: string;

  @ApiProperty({
    description: '置顶 false:否、true:是',
    required: false,
    default: false,
  })
  isTop: boolean;

  @ApiProperty({
    description: '文章内容',
    example: `经常做那些需要适配h5和pc端的页面的同学都知道，静态资源通常需要分两套，h5一套，pc一套
  比如一个视频，pc上用的可能是1920 × 1080分辨率的，但考虑到文件大小和移动端网速一般差于pc情况，h5上可能用的是750 × 450分辨率的
  那资源一多时，代码里就会有一堆 import，如下：`,
  })
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
    required: false,
  })
  status: number;

  @ApiProperty({
    description: '作者id',
    example: 1,
  })
  authorId: number;

  // @ApiProperty({ description: '作者' })
  // author: User;

  @ApiProperty({
    description: '文章类别id',
    example: 1,
  })
  categoryId: number;

  // @ApiProperty({ description: '文章类别' })
  // category: ArticleCategory;
}
