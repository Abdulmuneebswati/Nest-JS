import { IsNotEmpty, isNotEmpty } from "class-validator";

export class createAddressDto{
    @IsNotEmpty()
    line1:string;
    line2:string;
    @IsNotEmpty()
    zip:string;
    @IsNotEmpty()
    state:string;
}