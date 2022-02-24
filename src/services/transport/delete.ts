import { getRepository } from "typeorm";
import { Transport } from "@entities/transport";

export class TransportDeleteService{
    execute = async(user_id:string, id:string) : Promise<Error | void> => {
        try{
            const repository = getRepository(Transport);
            if(!repository) return new Error('No repository found');
            if(!(await repository.findOne({user_id, id}))) return new Error('No transport found'); 
    
            await repository.delete(id);
        }catch(error){
            return new Error(`${error}`);
        }
    }
}