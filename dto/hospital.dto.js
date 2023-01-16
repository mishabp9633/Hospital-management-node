import { IsNotEmpty, IsPhoneNumber, IsString } from "class-validator"



export class hospital{
    @IsString()
    @IsNotEmpty()
    hospitalName

    @IsString()
    @IsNotEmpty()
    address

    @IsString()
    @IsNotEmpty()
    place

    @IsPhoneNumber()
    mobileNo
} 