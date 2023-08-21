import { ClassSerializerInterceptor, Injectable, ParseIntPipe, UseInterceptors } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { User,serializedUser } from 'src/users/types/User';

@Injectable()
export class UserService {
    private users:User[]=[
        {
            id:1,
        username:"muneeb",
        password:"muneeb"
    },
    {
        id:2,
        username:"haseeb",
        password:"haseeb"
    },
    {
        id:3,
        username:"ashi",
        password:"ashi"
    },
    {
        id:4,
        username:"nida",
        password:"nida"
    },
    {
        id:6,
        username:"laraib",
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
    getUserById(id:number){
        return this.users.find((user)=> user.id === id);
    }
}
