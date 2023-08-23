import * as bcrypt from "bcrypt";


export async function encryptPassword(password:string){
const SALT = bcrypt.genSaltSync();
    return bcrypt.hashSync(password,SALT);
}

export async function comparePasswords(password:string,hash:string){
        return bcrypt.compareSync(password,hash);
    }