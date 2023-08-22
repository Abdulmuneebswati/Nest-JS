import { Module } from '@nestjs/common';
import { UserController } from './controller/user/user.controller';
import { UserService } from './services/user/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [{
    provide:"USER_SERVICE",
    useClass:UserService
  }]
})
export class UsersModule {}
