import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateArticleCategoryDto {
  @ApiProperty({
    description: '类别名称',
    example: '娱乐',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ description: '描述', required: false, example: '娱乐类别' })
  @IsString()
  @IsOptional()
  description: string;

  @ApiProperty({
    description: '关键词',
    required: false,
    example: '前端大娱乐，娱乐',
  })
  @IsString()
  @IsOptional()
  keywords: string;

  @ApiProperty({ description: '排序', required: false, default: 1 })
  @IsInt()
  @IsOptional()
  sort: number;

  @ApiProperty({ description: '状态', required: false, default: true })
  @IsBoolean()
  @IsOptional()
  status: boolean;
  // articles: ;
}
