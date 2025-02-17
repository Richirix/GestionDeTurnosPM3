

import { EntityManager } from "typeorm";
import { Credentials } from "../entities/Credential";
import bcrypt from "bcrypt";
import { CredentialModel } from "../config/data-source";

const crypPass = async (password: string): Promise<string> => {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
};

export const createCredentialService:(entityManager:EntityManager ,a: string, b: string) => Promise<Credentials> = async (entityManager:EntityManager, username:string, password:string): Promise<Credentials> =>{

   const passwordEncripted:string=  await crypPass(password)
   const credentials: Credentials = entityManager.create(Credentials,{
    username,
    password: passwordEncripted
   }) 

    return await entityManager.save(credentials)
}

export const checkCredentials = async (username: string, passsword: string): Promise<number | undefined> => {
    
    const usernameFound : Credentials | null = await CredentialModel.findOne({
        where:{
            username: username
        }
    })
    if (!usernameFound) throw new Error(`El usuario ${username} no fue encontrado`);
    const crypPassword: boolean = await bcrypt.compare(passsword, usernameFound.password);
    if (!crypPassword) throw new Error(`Usuario o contraseña errónea`);
    
    return usernameFound.id;
}