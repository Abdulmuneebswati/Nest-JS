import { Inject, Injectable } from '@nestjs/common';
import { UserService } from 'src/users/services/user/user.service';
import { comparePasswords } from 'src/utils/bcrypt';

@Injectable()
export class AuService {
    constructor (@Inject('USER_SERVICE') private readonly userService:UserService){}
    async validateUser(username:string,password:string){
        const userDB = await this.userService.getUserByUserName(username);
        if (userDB && userDB.password === password) {
            const matched = await comparePasswords(password,userDB.password)
            if (matched) {
                console.log(userDB); 
            return userDB  
            }else{
                console.log("password donot matched");
                return null
            }
        }
    }
}
