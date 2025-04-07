import { Body, Controller, Post } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class UserControllerController {
  @Post('register')
  register(@Body() registerDto: RegisterDto) {
    return { message: 'Utilisateur enregistré avec succès', user: registerDto };
  }

  @Post('login')
  login(@Body() loginDto: LoginDto) {
    return {
      message: 'Utilisateur connecté avec succès',
      user: loginDto.email,
    };
  }
}
