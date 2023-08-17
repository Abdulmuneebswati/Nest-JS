import { IsEmail, IsNotEmpty, IsNotEmptyObject, IsNumberString, ValidateNested, isEmail, isNotEmpty, isNumber, isNumberString } from "class-validator";
import { createAddressDto } from "./createAddress.dto";
import { Type } from "class-transformer";

export class createCustomerDto{
    @IsEmail()
    email:string;
    @IsNumberString()
    @IsNotEmpty()
    id:number;
    @IsNotEmpty()
    name:string
    @ValidateNested()
    @Type(()=>createAddressDto)
    @IsNotEmptyObject()
    address:createAddressDto
}