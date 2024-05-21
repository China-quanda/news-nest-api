import { ApiProperty } from '@nestjs/swagger';
import { IsInt, Min } from 'class-validator';
export class QueryUserArticleCommentDto {
  @IsInt()
  @Min(1)
  @ApiProperty({ description: '页码', default: 1 })
  pageNum?: number;
  @IsInt()
  @Min(1)
  @ApiProperty({ description: '每页条数', default: 10 })
  pageSize?: number;
}
