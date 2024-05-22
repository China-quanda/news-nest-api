import { PartialType } from '@nestjs/swagger';
import { CreateSysDataDictDatumDto } from './create-sys-data-dict-datum.dto';

export class UpdateSysDataDictDatumDto extends PartialType(CreateSysDataDictDatumDto) {}
