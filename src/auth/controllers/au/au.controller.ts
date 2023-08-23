import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuService } from 'src/auth/services/au/au.service';

@Controller('auth')
export class AuController {
    constructor(private authService: AuService) {}
    @UseGuards(AuthGuard('local'))
    @Post("login")
    async login(@Body() signindto:{
        email:string,
        password:string
    }){
        this.authService.validateUser(signindto.email,signindto.password)
    }
}
