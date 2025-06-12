import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { EnterpriseSchema } from "./schemas/enterprise.schema";
import { Model } from "mongoose";
import { CreateEnterpriseDto } from "../dto/create-enterprise.dto";
import { UpdateEnterpriseDto } from "../dto/update-enterprise.dto";
import { MensageEnterpriseDto } from "../dto/mensage-enterprise.dto";

@Injectable()
export class EnterpriseRepository{
  constructor(
      @InjectModel(EnterpriseSchema.name) private enterpriseModel: Model<EnterpriseSchema>,
    ){}

  private mensageDTO = new MensageEnterpriseDto();

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

  async update(id: string, updateEnterpriseDto: UpdateEnterpriseDto) {
     if(!id){
      throw new BadRequestException(`O id não foi informado`);
    }
    const enterpriseId = await this.enterpriseModel.findOne({ _id: id }).exec();
    if (!enterpriseId) {
      throw new NotFoundException(`O id não existe ${id}`);
    }

    await this.enterpriseModel.updateOne({ _id: id }, updateEnterpriseDto).exec(); 
   
    this.mensageDTO.mensage = 'Empresa atualizada com sucesso!';
    return this.mensageDTO;
  }

  async remove(id: string){
    if(!id){
      throw new BadRequestException(`O id não foi informado`);
    }
    const enterpriseId = await this.enterpriseModel.findOne({ _id: id }).exec();
    if (!enterpriseId) {
      throw new NotFoundException(`O id não existe ${id}`);
    }
    await this.enterpriseModel.deleteOne({_id: id}).exec();

    this.mensageDTO.mensage = 'Empresa deletada com sucesso!';

    return this.mensageDTO;
  
  }

}