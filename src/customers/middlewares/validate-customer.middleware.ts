import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

@Injectable()
export class validateCustomerMiddleware implements NestMiddleware{
    use(req: Request, res: Response, next:NextFunction ) {
        const { authorization }= req.headers;
        if(!authorization) return res.status(403).send({error:"No token is provided"})
        console.log(authorization);
        next();
    }
}