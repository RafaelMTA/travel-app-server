import { getRepository } from 'typeorm';
import { Accommodation } from '@entities/accommodation';

export class AccommodationReadAllService{
    execute = async(user_id:string, event_id:string) : Promise<Accommodation[] | Error> => {
        try{
            const repository = getRepository(Accommodation);
            if(!repository) return new Error('No repository found');
    
            const accommodation = await repository.find({user_id, event_id});
            if(!accommodation) return new Error('No accommodation found');
    
            return accommodation;
        }catch(error){
            return new Error(`${error}`);
        }
    }
}