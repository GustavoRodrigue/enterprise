import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { EnterpriseSchema } from "./schemas/enterprise.schema";
import { Model } from "mongoose";
import { CreateEnterpriseDto } from "../dto/create-enterprise.dto";
import { UpdateEnterpriseDto } from "../dto/update-enterprise.dto";

@Injectable()
export class EnterpriseRepository{
  


}