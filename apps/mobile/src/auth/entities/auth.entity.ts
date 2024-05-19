import { ApiProperty } from '@nestjs/swagger';

export class SignInEntity {
  @ApiProperty({ description: 'accessToken' })
  accessToken: string;
}
