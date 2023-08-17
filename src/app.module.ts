import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomersModule } from './customers/customers.module';
import { CustomersService } from './customers/services/customers/customers.service';

@Module({
  imports: [CustomersModule],
  controllers: [],
  providers: [CustomersService],
})
export class AppModule {}
