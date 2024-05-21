import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNotEmpty } from 'class-validator';

export class DeleteArticleCategoryDto {
  @IsNotEmpty()
  @IsArray()
  @ApiProperty({
    description: '删除列表',
    required: true,
    example: [1, 2, 3, 4, 5],
  })
  ids: number[];
}
