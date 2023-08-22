import { ClassSerializerInterceptor, Injectable, ParseIntPipe, UseInterceptors } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToClass } from 'class-transformer';
import { User as UserEntity } from 'src/typeorm';
import { createUserDto } from 'src/users/dto/createUser.dto';
import { User,serializedUser } from 'src/users/types/User';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {

    constructor(@InjectRepository(UserEntity) private readonly userRepository:Repository<UserEntity>){}

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
    createUser(createUserDto:createUserDto){
       const newUser =  this.userRepository.create(createUserDto);
       return this.userRepository.save(newUser)
        
       
    }
}
