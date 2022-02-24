import { getRepository } from 'typeorm';
import { Event } from '@entities/event';

export class EventReadService{
    execute = async(user_id:string, id:string) : Promise<Event | Error> => {
        try{
            const repository = getRepository(Event);
            if(!repository) return new Error('No repository found');
    
            const event = await repository.findOne({user_id, id});
            if(!event) return new Error('No event found');
    
            return event;
        }catch(error){
            return new Error(`${error}`);
        }
    }
}