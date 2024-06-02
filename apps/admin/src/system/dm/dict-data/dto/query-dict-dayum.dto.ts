import { BaseQueryDto } from '@app/common/dto';
import { ApiProperty } from '@nestjs/swagger';
import { Transform, Type } from 'class-transformer';
import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class QueryDictDataDto extends BaseQueryDto {
  @Transform((value) => (value.value == 'true' ? true : false), {
    toClassOnly: true,
  })
  // @Type(() => Boolean)
  @IsBoolean()
  @IsOptional()
  @ApiProperty({ description: '状态', default: true, required: false })
  status?: boolean;

  @IsString()
  @Type(() => String)
  @IsOptional()
  @ApiProperty({ description: '数据标签', example: '性别', required: false })
  label?: string;

  @IsString()
  @Type(() => String)
  @ApiProperty({ description: '字典类型', example: 'ysy_age', required: true })
  dictType: string;
}
