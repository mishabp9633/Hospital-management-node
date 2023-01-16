import {
  IsString,
  IsNotEmpty,
  MinLength,
  IsEmail,
  IsPhoneNumber,
  IsIn,
} from "class-validator";

export class User {
  @IsNotEmpty()
  @IsString()
  username;

  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  password;

  @IsNotEmpty()
  @IsString()
  name;

  @IsNotEmpty()
  @IsString()
  address;

  @IsPhoneNumber()
  mobileNo;

  @IsEmail()
  email;

  @IsIn(["patient", "doctor", "admin"])
  role;
}
