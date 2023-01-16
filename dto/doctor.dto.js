import { IsIn, IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class Doctor {
  @IsNotEmpty()
  @IsString()
  username;

  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  @MaxLength(225)
  password;

  @IsNotEmpty()
  @IsString()
  name;

  @IsNotEmpty()
  @IsString()
  address;

  @IsNotEmpty()
  @IsString()
  department;

  @IsNotEmpty()
  @IsString()
  startTime;

  @IsNotEmpty()
  @IsString()
  endTime;

  @IsIn(["patient", "doctor", "admin"])
  role;
}
