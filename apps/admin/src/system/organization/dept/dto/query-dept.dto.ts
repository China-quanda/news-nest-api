import { BaseQueryDto } from '@app/common/dto';
import { ApiProperty } from '@nestjs/swagger';
import { Transform, Type } from 'class-transformer';
import { IsBoolean, IsInt, IsOptional, IsString } from 'class-validator';

export class QueryDeptDto extends BaseQueryDto {
  @Transform((value) => (value.value == 'true' ? true : false), {
    toClassOnly: true,
  })
  // @Type(() => Boolean)
  @IsBoolean()
  @IsOptional()
  @ApiProperty({ description: '部门状态', default: true, required: false })
  status?: boolean;

  @IsString()
  @Type(() => String)
  @IsOptional()
  @ApiProperty({
    description: '部门名称',
    example: '总经办',
    required: false,
  })
  name?: string;

  @ApiProperty({ description: '机构id', example: 1, required: false })
  @Type(() => Number)
  @IsInt()
  @IsOptional()
  orgId?: number;
}
