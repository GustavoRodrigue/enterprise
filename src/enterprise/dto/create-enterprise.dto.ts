import { Type } from "class-transformer";
import { IsEmail, IsNotEmpty, IsNumber, IsString, ValidateNested } from "class-validator";


export class ResponsibleEnterpriseDto {
  @IsString()
  @IsNotEmpty()
  nameResponsible: string;

  @IsString()
  @IsNotEmpty()
  surnameResponsible: string;

  @IsEmail()
  @IsNotEmpty()
  emailResponsible: string;

  @IsString()
  @IsNotEmpty()
  telephoneResponsible: string;
}

export class AddressEnterpriseDto {
  
  @IsString()
  @IsNotEmpty()
  zipCode: string;

  @IsString()
  @IsNotEmpty()
  country: string;

  @IsString()
  @IsNotEmpty()
  city: string;

  @IsString()
  @IsNotEmpty()
  state: string;

  @IsString()
  @IsNotEmpty()
  district: string;

  @IsString()
  @IsNotEmpty()
  road: string;

  @IsNumber()
  @IsNotEmpty()
  propertyNumber: number;

  @IsString()
  @IsNotEmpty()
  complement: string;
}

export class CreateEnterpriseDto {
  @IsString()
  companyName: string;

  @IsString()
  fantasyName: string;

  @IsEmail()
  email: string;

  @IsString()
  cnpj: string;

  @IsString()
  telephone: string;

  @IsString()
  descriptionService: string;

  @ValidateNested()
  @Type(() => ResponsibleEnterpriseDto)
  responsibleEnterprise: ResponsibleEnterpriseDto;

  @ValidateNested()
  @Type(() => AddressEnterpriseDto)
  address: AddressEnterpriseDto;
}
