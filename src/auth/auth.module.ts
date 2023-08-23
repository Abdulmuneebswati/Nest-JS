import { Module } from '@nestjs/common';
import { AuController } from './controllers/au/au.controller';
import { AuService } from './services/au/au.service';
import { UserService } from 'src/users/services/user/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/typeorm';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './localStrategy';

@Module({
  imports:[TypeOrmModule.forFeature([User]),PassportModule],
  controllers: [AuController],
  providers: [{
    provide:"AUTH_SERVICE",
    useClass:AuService
  },
  {
    provide:"USER_SERVICE",
    useClass:UserService
  },
  LocalStrategy
]
})
export class AuthModule {}
