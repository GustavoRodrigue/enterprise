import { IsEmail, IsNumber, IsOptional, IsString, IsStrongPassword } from "class-validator";

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
        descriptionService: string
        @IsString()
        nameResponsible: string
        @IsString()
        surnameResponsible: string;
        @IsEmail()
        emailResponsible: string;
        @IsString()
        telephoneResponsible: string;
        @IsString()
        zipCode: string;
        @IsString()
        country: string;
        @IsString()
        city: string;
        @IsString()
        state: string;
        @IsString()
        district: string;
        @IsString()
        road: string;
        @IsNumber()
        propertyNumber: number;
        @IsString()
        complement: string;
   
}
