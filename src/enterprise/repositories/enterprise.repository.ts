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

  async findAll(): Promise<EnterpriseSchema[]>  {
    return await this.enterpriseModel.find().exec();
  }

  async findOne(id: string): Promise<EnterpriseSchema> {
    const enterpriseResult = await this.enterpriseModel.findOne({ _id: id }).exec();
    if (!enterpriseResult) {
      throw new NotFoundException(`id não encontrado no banco ${id}`);
    }
    return enterpriseResult;
  }

  async updatePatch(id: string, updateEnterpriseDto: UpdateEnterpriseDto): Promise<EnterpriseSchema> {
  
    const updated = await this.enterpriseModel.findOneAndUpdate({ _id: id }, updateEnterpriseDto,{ new: true }).exec(); 
    if (!updated) {
      throw new NotFoundException(`falha ao atualizar o id ${id}`);
    }
    return updated;
  }

  async remove(id: string): Promise<EnterpriseSchema> {
    const deleteId = await this.enterpriseModel.findOneAndDelete({_id: id}).exec();
    if(!deleteId){
      throw new NotFoundException(`O id não existe ${id}`);
    }
    return deleteId;
  }

}