import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { EnterpriseService } from '../services/enterprise.service';
import { CreateEnterpriseDto } from '../dto/create-enterprise.dto';
import { UpdateEnterpriseDto } from '../dto/update-enterprise.dto';

@Controller('enterprise')
export class EnterpriseController {
  
  
}
