import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { CustomersController } from './controllers/customers/customers.controller';
import { CustomersService } from './services/customers/customers.service';
import { validateCustomerMiddleware } from './middlewares/validate-customer.middleware';

@Module({
  controllers: [CustomersController],
  providers: [CustomersService],
})
export class CustomersModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(validateCustomerMiddleware).forRoutes({
    //   path:"customers/search/:id",
    //   method:RequestMethod.GET
    // }) This what we want to add middleware to the specific path but what if we want to add middleware to the whole customer controller
  
  
      // consumer.apply(validateCustomerMiddleware).forRoutes(CustomersController)
      // but what if you want to add middleware to all paths except one
      consumer.apply(validateCustomerMiddleware).exclude({
          path:"customers/search/:id",
          method:RequestMethod.GET
        }).forRoutes(CustomersController)
  }
}
