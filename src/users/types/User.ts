import { Exclude } from "class-transformer";

export interface User{
    id:number;
    username:string;
    password:string;
}
export class serializedUser{
    id:number;
    username:string;

    @Exclude()
    password:string;
    
    constructor(partial:Partial<serializedUser>){
        Object.assign(this,partial)
    }
}