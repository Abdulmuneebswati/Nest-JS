import { Injectable } from '@nestjs/common';
import { createCustomerDto } from 'src/customers/dto/createCustomer.dto';
import { Customer } from 'src/customers/types/Customer';

@Injectable()
export class CustomersService {
    private customers:Customer[] =[{
        id:1,
        email:"m@m.com",
        name:"Muneeb"
    },
    {
        id:2,
        email:"a@a.com",
        name:"Ashi"

    },
    {
        id:3,
        email:"n@n.com",
        name:"Nida"
    },
]
    findCustomersById(id:number){
        return this.customers.find((customer)=> customer.id === id)
    }

    createCustomerDto(customerDto:createCustomerDto){
        this.customers.push(customerDto)
    }
    getCustomers(){
        return this.customers;
    }
}
