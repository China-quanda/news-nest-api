import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { IsBoolean, IsInt, IsString } from 'class-validator';
export class CreateMobileDeviceDto
  implements Prisma.SystemPermissionMobileDeviceUncheckedCreateInput
{
  @IsString()
  @ApiProperty({ example: 'ios' })
  deviceOs: string;
  @IsString()
  @ApiProperty({ example: '4323-sdaa-4534-gfdn-3453' })
  deviceNo: string;
  @IsString()
  @ApiProperty({ example: '华为' })
  deviceBrand: string;
  @IsBoolean()
  @ApiProperty({ default: true })
  status?: boolean;
  @IsInt()
  @ApiProperty({ example: 1 })
  userId: number;
}
