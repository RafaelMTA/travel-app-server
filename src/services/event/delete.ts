import { getRepository } from "typeorm";
import { Event } from "@entities/event";

export class EventDeleteService{
    execute = async(id:string) : Promise<Error | void> => {
        try{
            const repository = getRepository(Event);
            if(!repository) return new Error('No repository found');
            if(!(await repository.findOne({id}))) return new Error('No event found'); 
    
            await repository.delete({id});
        }catch(error){
            return new Error(`${error}`);
        }
    }
}