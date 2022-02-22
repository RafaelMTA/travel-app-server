import { getRepository } from 'typeorm';
import { Event } from '@entities/event';

export class EventReadAllService{
    execute = async() : Promise<Event[] | Error> => {
        try{
            const repository = getRepository(Event);
            if(!repository) return new Error('No repository found');
    
            const events = await repository.find();
            if(!events) return new Error('No event found');
    
            return events;
        }catch(error){
            return new Error(`${error}`);
        }
    }
}