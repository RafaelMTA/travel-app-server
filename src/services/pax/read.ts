import { getRepository } from 'typeorm';
import { Pax } from '@entities/pax';

export class PaxReadService{
    execute = async(user_id:string, id:string) : Promise<Pax | Error> => {
        try{
            const repository = getRepository(Pax);
            if(!repository) return new Error('No repository found');
    
            const pax = await repository.findOne({user_id, id});
            if(!pax) return new Error('No pax found');
    
            return pax;
        }catch(error){
            return new Error(`${error}`);
        }
    }
}