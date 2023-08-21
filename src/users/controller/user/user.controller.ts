import { ClassSerializerInterceptor, Controller, Get, HttpException, HttpStatus, Inject, Param, ParseIntPipe, UseFilters, UseInterceptors } from '@nestjs/common';
import { UserNotFoundException } from 'src/users/exceptions/UserNotFound.exception';
import { HttpExceptionFilter } from 'src/users/filters/HttpException.filter';
import { UserService } from 'src/users/services/user/user.service';
import { serializedUser } from 'src/users/types/User';

@Controller('user')
export class UserController {
    constructor(@Inject('USER_SERVICE') private readonly userService:UserService){
        
    }
    @UseInterceptors(ClassSerializerInterceptor)
    @Get('')
    getUsers(){
        return this.userService.getUsers();
    }
    @UseInterceptors(ClassSerializerInterceptor)
    @Get("/username/:username")
    getByusername(@Param('username') username:string){
        const user = this.userService.getUserByUserName(username);
        if (user)  return new serializedUser(user);
        else throw new HttpException('UserNotFound',HttpStatus.BAD_REQUEST);
    }
    @UseInterceptors(ClassSerializerInterceptor)
    @UseFilters(HttpExceptionFilter)
    @Get("/:userId")
    getById(@Param('userId',ParseIntPipe) userId:number){
        const user = this.userService.getUserById(userId);
        console.log(user);
        if (user)  return new serializedUser(user);
        else throw new UserNotFoundException();
    }
}
