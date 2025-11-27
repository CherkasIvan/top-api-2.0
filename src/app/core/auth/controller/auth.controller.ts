import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { AuthDto } from '@shared/dto/auth/auth.dto';

@Controller('auth')
export class AuthController {

  @Post('register')
  async register(@Body() dot: AuthDto){

  }

  @HttpCode(200)
  @Post('login')
  async login(@Body() dot: AuthDto){

  }
}
