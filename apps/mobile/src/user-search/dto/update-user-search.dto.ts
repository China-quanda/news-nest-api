import { PartialType } from '@nestjs/swagger';
import { CreateUserSearchDto } from './create-user-search.dto';

export class UpdateUserSearchDto extends PartialType(CreateUserSearchDto) {}
