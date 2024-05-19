import { PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';
// PartialType(CreateUserDto)
export class UpdateUserDto extends PartialType(CreateUserDto) {}
