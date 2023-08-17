import { Body, Controller, Get, HttpException, HttpStatus, Param, ParseIntPipe, Post, Req, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { Request, Response } from 'express';
import { createCustomerDto } from 'src/customers/dto/createCustomer.dto';
import { CustomersService } from 'src/customers/services/customers/customers.service';

@Controller('customers')
export class CustomersController {
constructor(private customersService: CustomersService) {}

 @Get(':id')
        getCustomer(@Param('id',ParseIntPipe) id:number, @Req() req: Request, @Res() res: Response) {
            const customer = this.customersService.findCustomersById(id);
                if (customer) {
        res.send(customer)
       } else{
        res.status(400).send({msg:"Customer not found"})
       }
    // console.log(typeof id);
    
    }

    @Get("/search/:id")
    searchCustomerById(
        @Param('id',ParseIntPipe) id:number
    ){
        const customer = this.customersService.findCustomersById(id)
        if (customer) return customer;
        else throw new HttpException('Customer Not Found!',HttpStatus.BAD_REQUEST);
    }
    @Get("")
        getAllCustomers(){
            return this.customersService.getCustomers();
        }
    @Post("create")
    @UsePipes(ValidationPipe)
    createCustomer(@Body() createCustomerDto:createCustomerDto){
    //    console.log(createCustomerDto);
       this.customersService.createCustomerDto(createCustomerDto);  
    }
}
