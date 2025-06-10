import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type AddressEnterpriseDocument = HydratedDocument<AddressSchema>;

@Schema()
export class AddressSchema {
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
    @Prop({type: Number, required: true})
    propertyNumber: number;
    @Prop({type: String, required: true})
    complement: string;
}
export const AddressEnterpriseSchemaFactory = SchemaFactory.createForClass(AddressSchema);