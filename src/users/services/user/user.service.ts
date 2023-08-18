import { ClassSerializerInterceptor, Injectable, ParseIntPipe, UseInterceptors } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { User,serializedUser } from 'src/users/types/User';

@Injectable()
export class UserService {
    private users:User[]=[
        {
        username:"muneeb",
        password:"muneeb"
    },
    {
        username:"haseeb",
        password:"haseeb"
    },
    {
        username:"ashi",
        password:"ashi"
    },
    {
        username:"nida",
        password:"nida"
    },
    {
        username:"laraiba",
        password:"laraib"
    },
]
    getUsers(){
        // return this.users.map((user)=>plainToClass(serializedUser,user)); we can do in this way also
        return this.users.map((user)=> new serializedUser(user))
    }
    getUserByUserName(username:string){
        return this.users.find((user)=> user.username === username); 
    }
}
