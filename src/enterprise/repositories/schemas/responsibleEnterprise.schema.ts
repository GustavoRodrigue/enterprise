import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type ResponsibleEnterpriseDocument = HydratedDocument<ResponsibleEnterpriseSchema>;

@Schema()
export class ResponsibleEnterpriseSchema {
    @Prop({type: String, required: true})
    nameResponsible: string;
    @Prop({type: String, required: true})
    surnameResponsible: string;
    @Prop({type: String, required: true})
    emailResponsible: string;
    @Prop({type: String, required: true})
    telephoneResponsible: string;

}
export const ResponsibleEnterpriseSchemaFactory = SchemaFactory.createForClass(ResponsibleEnterpriseSchema);

