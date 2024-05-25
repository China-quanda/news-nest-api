import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsInt, IsOptional, Min } from 'class-validator';
export class BaseQueryDto {
  @Min(1)
  @IsInt()
  @Type(() => Number)
  @IsOptional()
  @ApiProperty({ description: '页码', default: 1 })
  pageNum?: number;

  @Min(1)
  @IsInt()
  @Type(() => Number)
  @IsOptional()
  @ApiProperty({ description: '每页条数', default: 10 })
  pageSize?: number;
}
