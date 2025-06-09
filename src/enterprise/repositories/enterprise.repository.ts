import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { EnterpriseSchema } from "./schemas/enterprise.schema";
import { Model } from "mongoose";
import { CreateEnterpriseDto } from "../dto/create-enterprise.dto";
import { UpdateEnterpriseDto } from "../dto/update-enterprise.dto";

@Injectable()
export class EnterpriseRepository{
  constructor(
      @InjectModel(EnterpriseSchema.name) private enterpriseModel: Model<EnterpriseSchema>,
    ){}

  async create(createEnterpriseDto: CreateEnterpriseDto): Promise<EnterpriseSchema>{
    const createdEnterprise = await new this.enterpriseModel(createEnterpriseDto);

    return createdEnterprise.save();
  }


}