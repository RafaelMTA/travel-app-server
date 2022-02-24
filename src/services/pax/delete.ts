import { getRepository } from "typeorm";
import { Pax } from "@entities/pax";

export class PaxDeleteService{
    execute = async(user_id:string, id:string) : Promise<Error | void> => {
        try{
            const repository = getRepository(Pax);
            if(!repository) return new Error('No repository found');
            if(!(await repository.findOne({user_id, id}))) return new Error('No pax found'); 
    
            await repository.delete(id);
        }catch(error){
            return new Error(`${error}`);
        }
    }
}