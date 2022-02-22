import { getRepository } from "typeorm";
import { User } from "@entities/user";

export class UserDeleteService{
    execute = async(id:string) : Promise<Error | void> => {
        try{
            const repository = getRepository(User);
            if(!repository) return new Error('No repository found');
            if(!(await repository.findOne({id}))) return new Error('User not found'); 
    
            await repository.delete({id});
        }catch(error){
            return new Error(`${error}`);
        }
    }
}