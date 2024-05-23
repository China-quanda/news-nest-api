import { PartialType } from '@nestjs/swagger';
import { CreateDictDatumDto } from './create-dict-datum.dto';

export class UpdateDictDatumDto extends PartialType(CreateDictDatumDto) {}
