import { getRepository } from 'typeorm';
import { Accommodation } from '@entities/accommodation';

export class AccommodationReadService{
    execute = async(id:string) : Promise<Accommodation | Error> => {
        try{
            const repository = getRepository(Accommodation);
            if(!repository) return new Error('No repository found');
    
            const accommodation = await repository.findOne(id);
            if(!accommodation) return new Error('No accommodation found');
    
            return accommodation;
        }catch(error){
            return new Error(`${error}`);
        }
    }
}