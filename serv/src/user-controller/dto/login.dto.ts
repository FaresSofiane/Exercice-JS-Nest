/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({
    example: 'nomutilisateur@mail.com',
    description: "une adresse mail de l'utilisateur",
  })
  @IsEmail({}, { message: 'Merci de fournir un mail valide' })
  @IsNotEmpty({ message: 'Une adresse mail est obligatoire' })
  email: string;

  @ApiProperty({ example: 'Motdepasse@1234', description: 'Mot de passe' })
  @IsString({
    message: 'Le mot de passe doit être une chaine de caractere valide',
  })
  @IsNotEmpty({ message: 'Le mot de passe est obligatoire' })
  password: string;
}
