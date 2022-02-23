import { getRepository } from 'typeorm';
import { Pax } from '@entities/pax';

export class PaxReadAllService{
    execute = async() : Promise<Pax[] | Error> => {
        try{
            const repository = getRepository(Pax);
            if(!repository) return new Error('No repository found');
    
            const pax = await repository.find();
            if(!pax) return new Error('No pax found');
    
            return pax;
        }catch(error){
            return new Error(`${error}`);
        }
    }
}