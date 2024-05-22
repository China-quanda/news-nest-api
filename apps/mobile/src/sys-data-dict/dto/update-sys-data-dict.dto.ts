import { PartialType } from '@nestjs/swagger';
import { CreateSysDataDictDto } from './create-sys-data-dict.dto';

export class UpdateSysDataDictDto extends PartialType(CreateSysDataDictDto) {}
