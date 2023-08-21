import { ArgumentsHost, ExceptionFilter, HttpException } from "@nestjs/common";
import { Request, Response } from "express";


export class HttpExceptionFilter implements ExceptionFilter{
    catch(exception: HttpException, host: ArgumentsHost) {
        console.log(exception.getResponse());
        console.log(exception.getStatus());
        console.log(exception);
        
        const context = host.switchToHttp();
        const req = context.getRequest<Request>();
        const res = context.getResponse<Response>();
        res.sendStatus(exception.getStatus());
    }
}