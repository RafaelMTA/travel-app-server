import { getRepository } from "typeorm";
import { Accommodation } from "@entities/accommodation";

export class AccommodationDeleteService{
    execute = async(user_id:string, id:string) : Promise<Error | void> => {
        try{
            const repository = getRepository(Accommodation);
            if(!repository) return new Error('No repository found');
            if(!(await repository.findOne({user_id, id}))) return new Error('No accommodation found'); 
    
            await repository.delete(id);
        }catch(error){
            return new Error(`${error}`);
        }
    }
}