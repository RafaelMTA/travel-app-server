import { getRepository } from 'typeorm';
import { Service } from '@entities/service';

export class ServiceReadAllService{
    execute = async() : Promise<Service[] | Error> => {
        try{
            const repository = getRepository(Service);
            if(!repository) return new Error('No repository found');
    
            const service = await repository.find();
            if(!service) return new Error('No service found');
    
            return service;
        }catch(error){
            return new Error(`${error}`);
        }
    }
}