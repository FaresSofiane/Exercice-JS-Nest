/* eslint-disable @typescript-eslint/no-unsafe-call */
// src/user-controller/dto/register.dto.ts
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class RegisterDto {
  @IsEmail({}, { message: 'Merci de fournir un mail valide' })
  email: string;

  @IsString({
    message: 'Le mot de passe doit être une chaine de caractere valide',
  })
  @IsNotEmpty({ message: 'Le mot de passe est obligatoire' })
  password: string;
}
