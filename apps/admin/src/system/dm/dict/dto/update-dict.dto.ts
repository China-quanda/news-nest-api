import { PartialType } from '@nestjs/swagger';
import { CreateSysDataDictDto } from './create-dict.dto';

export class UpdateSysDataDictDto extends PartialType(CreateSysDataDictDto) {}
