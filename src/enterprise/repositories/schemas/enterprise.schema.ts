import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
import { ResponsibleEnterpriseSchema, ResponsibleEnterpriseSchemaFactory } from "./responsibleEnterprise.schema";
import { AddressEnterpriseSchemaFactory, AddressSchema } from "./address.schema";

export type EnterpriseDocument = HydratedDocument<EnterpriseSchema>;

@Schema({collection: 'enterprise', timestamps: true})
export class EnterpriseSchema{
    
    @Prop({type: String, required: true})
    companyName: string;
    @Prop({type: String, required: true})
    fantasyName: string;
    @Prop({type: String, required: true})
    email: string;
    @Prop({type: String, required: true})
    cnpj: string;
    @Prop({type: String, required: true})
    telephone: string;
    @Prop({type: String, required: true})
    descriptionService: string

    @Prop({ type: ResponsibleEnterpriseSchemaFactory, required: true })
    responsibleEnterprise: ResponsibleEnterpriseSchema;
    
    @Prop({type: AddressEnterpriseSchemaFactory, required: true})
    address: AddressSchema;

}

export const EnterpriseSchemaFactory = SchemaFactory.createForClass(EnterpriseSchema);