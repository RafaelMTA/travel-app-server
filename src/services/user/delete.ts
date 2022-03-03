import { User } from "@entities/user";
import { getRepository } from "typeorm";

export class UserDeleteService{
    execute = async(id:string) : Promise<Error | void> => {
        try{
            const repository = getRepository(User);
            if(!repository) return new Error('No repository found');

            const exists = await repository.findOne(id);
            if(!exists) return new Error('User not found'); 
    
            await repository.delete(id);
        }catch(error){
            return new Error(`${error}`);
        }
    }
}