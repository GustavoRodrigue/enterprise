import { PartialType } from '@nestjs/mapped-types';
import { CreateEnterpriseDto } from './create-enterprise.dto';
import { ObjectId } from 'mongoose';

export class UpdateEnterpriseDto extends PartialType(CreateEnterpriseDto) {
}
