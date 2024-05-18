import { ApiProperty } from '@nestjs/swagger';

export class ArticleCategoryEntity {
  @ApiProperty({ description: 'id' })
  id: number;
  @ApiProperty({ description: '创建时间' })
  createdAt: string;
  @ApiProperty({ description: '更新时间' })
  updatedAt: string;
  @ApiProperty({ description: '类别名称' })
  name: string;
  @ApiProperty({ description: '描述' })
  description: string;
  @ApiProperty({ description: '关键词' })
  keywords: string;
  @ApiProperty({ description: '排序' })
  sort: number;
  @ApiProperty({ description: '状态' })
  status: boolean;
  // articles: ;
}
