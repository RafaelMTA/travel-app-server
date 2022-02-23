import { getRepository } from "typeorm";
import { Service } from "@entities/service";

export class ServiceDeleteService{
    execute = async(id:string) : Promise<Error | void> => {
        try{
            const repository = getRepository(Service);
            if(!repository) return new Error('No repository found');
            if(!(await repository.findOne({id}))) return new Error('No service found'); 
    
            await repository.delete({id});
        }catch(error){
            return new Error(`${error}`);
        }
    }
}