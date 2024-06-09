import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
export class CreateMobileDeviceDto
  implements Prisma.SystemPermissionMobileDeviceUncheckedCreateInput
{
  @IsNotEmpty()
  @IsString()
  @Type(() => String)
  @ApiProperty({ example: 'ios' })
  deviceOs: string;

  @IsNotEmpty()
  @IsString()
  @Type(() => String)
  @ApiProperty({ example: '4323-sdaa-4534-gfdn-3453' })
  deviceNo: string;

  @IsNotEmpty()
  @IsString()
  @Type(() => String)
  @ApiProperty({ example: '华为' })
  deviceBrand: string;

  @IsBoolean()
  @IsOptional()
  @ApiProperty({ default: true })
  status?: boolean;

  @IsNotEmpty()
  @IsInt()
  @Type(() => Number)
  @ApiProperty({ example: 1 })
  userId: number;
}
