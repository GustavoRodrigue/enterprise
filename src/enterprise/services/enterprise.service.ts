import { Injectable, Logger, NotFoundException, ParseIntPipe } from '@nestjs/common';
import { CreateEnterpriseDto } from '../dto/create-enterprise.dto';
import { UpdateEnterpriseDto } from '../dto/update-enterprise.dto';
import { EnterpriseSchema } from '../repositories/schemas/enterprise.schema';
import { EnterpriseRepository } from '../repositories/enterprise.repository';

@Injectable()
export class EnterpriseService {
 
  constructor(
    private readonly enterpriseRepository: EnterpriseRepository
  ){}

  private readonly logger = new Logger(EnterpriseService.name);

  create(createEnterpriseDto: CreateEnterpriseDto) {
    this.logger.log('Criando Empresa', createEnterpriseDto);
    return this.enterpriseRepository.create(createEnterpriseDto);
  
  }
  findAll() {
    this.logger.log('Buscando todos os dados');
    return this.enterpriseRepository.findAll();
  }

  findOne(id: string) {
    this.logger.log('Buscando por id: ', id);
    return this.enterpriseRepository.findOne(id);
  }

  updatePatch(id: string, updateEnterpriseDto: UpdateEnterpriseDto) {
    this.logger.log('Alterando dados', updateEnterpriseDto);
    this.enterpriseRepository.updatePatch(id, updateEnterpriseDto);
  }

  remove(id: string) {
    this.logger.log('deletando os dados do id: ', id);
    return this.enterpriseRepository.remove(id);
  }

}
