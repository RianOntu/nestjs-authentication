import { Controller, Get,UseGuards,Req,Res } from '@nestjs/common';
import { AppService } from './app.service';
import {AuthGuard} from "@nestjs/passport";


@Controller("auth")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('google')
 @UseGuards(AuthGuard('google'))
 async googleAuth(@Req() req):Promise<any>{}

 @Get('auth/google/redirect')
@UseGuards(AuthGuard('google'))
async googleAuthRedirect(@Req() req,@Res() res):Promise<any> {
  return this.appService.googleLogin(req)
}
}
