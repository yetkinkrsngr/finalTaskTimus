import { AuthService } from './auth.service';
import { Controller, Post, Body } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async registerUser(
    @Body('userName') userName: string,
    @Body('password') password: string,
    @Body('email') email: string,
    @Body('role') role: string,
  ): Promise<any> {
    return this.authService.registerUser(userName, password, email, role);
  }
}
