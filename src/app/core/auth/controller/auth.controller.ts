import { Body, Controller, HttpCode, Post } from '@nestjs/common';

import { AuthDto } from '@core/auth/dto/auth.dto';

@Controller('auth')
export class AuthController {
    @Post('register')
    async register(@Body() dot: AuthDto) {}

    @HttpCode(200)
    @Post('login')
    async login(@Body() dot: AuthDto) {}
}
