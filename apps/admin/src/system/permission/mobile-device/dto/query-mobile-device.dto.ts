import { BaseQueryDto } from '@app/common/dto';
import { ApiProperty } from '@nestjs/swagger';
import { Transform, Type } from 'class-transformer';
import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

export class QueryMobileDeviceDto extends BaseQueryDto {
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
  @ApiProperty({
    description: '用户名',
    example: '姓名',
    required: false,
  })
  username?: string;

  @IsString()
  @Type(() => String)
  @IsOptional()
  @ApiProperty({
    description: '设备编号',
    example: '4323-sdaa-4534-gfdn-3453',
    required: false,
  })
  deviceNo?: string;

  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  @ApiProperty({ description: '部门id', example: 0, required: false })
  depId?: number;
}
