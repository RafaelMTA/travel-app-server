import { getRepository } from "typeorm";
import { Transport } from "@entities/transport";

export class TransportDeleteService{
    execute = async(id:string) : Promise<Error | void> => {
        try{
            const repository = getRepository(Transport);
            if(!repository) return new Error('No repository found');
            if(!(await repository.findOne({id}))) return new Error('No transport found'); 
    
            await repository.delete({id});
        }catch(error){
            return new Error(`${error}`);
        }
    }
}