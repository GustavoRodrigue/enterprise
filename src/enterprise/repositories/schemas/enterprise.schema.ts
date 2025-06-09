import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

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
    @Prop({type: String, required: true})

    nameResponsible: string
    @Prop({type: String, required: true})
    surnameResponsible: string;
    @Prop({type: String, required: true})
    emailResponsible: string;
    @Prop({type: String, required: true})
    telephoneResponsible: string;
    @Prop({type: String, required: true})
    
    zipCode: string;
    @Prop({type: String, required: true})
    country: string;
    @Prop({type: String, required: true})
    city: string;
    @Prop({type: String, required: true})
    state: string;
    @Prop({type: String, required: true})
    district: string;
    @Prop({type: String, required: true})
    road: string;
    @Prop({type: String, required: true})
    propertyNumber: number;
    @Prop({type: String, required: true})
    complement: string;

}

export const EnterpriseSchemaFactory = SchemaFactory.createForClass(EnterpriseSchema);