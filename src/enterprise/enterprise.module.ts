import { Module } from '@nestjs/common';
import { EnterpriseService } from './services/enterprise.service';
import { EnterpriseController } from './controllers/enterprise.controller';
import { MongooseModule, Schema } from '@nestjs/mongoose';
import { EnterpriseSchema, EnterpriseSchemaFactory } from './repositories/schemas/enterprise.schema';
import { EnterpriseRepository } from './repositories/enterprise.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: EnterpriseSchema.name, schema: EnterpriseSchemaFactory}
    ])
  ],
  controllers: [EnterpriseController],
  providers: [EnterpriseService, EnterpriseRepository],
})
export class EnterpriseModule {}
