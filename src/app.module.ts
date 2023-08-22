import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomersModule } from './customers/customers.module';
import { CustomersService } from './customers/services/customers/customers.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import entities from './typeorm';

@Module({
  imports: [CustomersModule, UsersModule,TypeOrmModule.forRoot({
    type:'mysql',
    host:"localhost",
    port:3306,
    username:"root",
    password:"123456789", 
    database:"tutorial_db",
    entities:entities,
    synchronize:true,
  })],
  controllers: [],
  providers: [CustomersService],
})
export class AppModule {}
