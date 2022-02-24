import { getRepository } from 'typeorm';
import { Service } from '@entities/service';

export class ServiceReadAllService{
    execute = async(user_id:string) : Promise<Service[] | Error> => {
        try{
            const repository = getRepository(Service);
            if(!repository) return new Error('No repository found');
    
            const service = await repository.find({user_id});
            if(!service) return new Error('No service found');
    
            return service;
        }catch(error){
            return new Error(`${error}`);
        }
    }
}