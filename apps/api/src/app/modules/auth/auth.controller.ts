import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from './guards/local.guard';
import { LoginInput } from './dto/login.input';
import { AuthenticatedGuard } from './guards/authenticated.guard';

@Controller('auth')
export class AuthController {
  @Post('login')
  @UseGuards(LocalAuthGuard)
  async login(@Req() req: any, @Body() _loginInput: LoginInput) {
    console.log(req);
    return 'login';
  }

  @Get()
  // @UseGuards(AuthenticatedGuard)
  async whoAmI(@Req() req: any) {
    console.log(req );
    return 'whoAmI';
  }
}
