import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { Inject, Injectable, UnauthorizedException } from "@nestjs/common";
import { AuService } from "./services/au/au.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy){
    constructor(@Inject('AUTH_SERVICE') private readonly authService:AuService){
        super({
            usernameField:"email"
        });
    }
    async validate(username:string,password:string){
            console.log(username);
            
          const user = await  this.authService.validateUser(username,password);
          if (!user) {
            throw new UnauthorizedException()
          }
          return user
    }
}