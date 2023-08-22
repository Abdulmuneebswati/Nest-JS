import { IsEmail, IsNotEmpty, IsNumberString, MinLength, isEmail, isNotEmpty, isNotEmptyObject, isNumberString, minLength } from "class-validator";

export class createUserDto {
    @IsNotEmpty()
    @MinLength(2)
    username: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @MinLength(8)
    password: string;
}