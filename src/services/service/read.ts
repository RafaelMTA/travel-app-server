import { getRepository } from 'typeorm';
import { Service } from '@entities/service';

export class ServiceReadService{
    execute = async(user_id:string, id:string) : Promise<Service | Error> => {
        try{
            const repository = getRepository(Service);
            if(!repository) return new Error('No repository found');
    
            const service = await repository.findOne({user_id, id});
            if(!service) return new Error('No service found');
    
            return service;
        }catch(error){
            return new Error(`${error}`);
        }
    }
}