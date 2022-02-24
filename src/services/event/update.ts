import { getRepository } from "typeorm";
import { Event } from "@entities/event";

type EventRequest = {
    name: string;
    description: string;
    start_date: Date;
    end_date: Date;
    user_id: string;
}

export class EventUpdateService{
    execute = async({name, description, start_date, end_date, user_id} : EventRequest, id:string) : Promise<Event | Error> => {
        const repository = getRepository(Event);   
        if(!repository) return new Error('No repository found');

        const event = await repository.findOne(id);
        if(!event) return new Error('No event found');

        if(event.name !== name) {
            const exists = await repository.findOne({name, user_id});
            if(exists) return new Error('Event name already registed');
        }
       
        event.name = name;
        event.description = description;
        event.start_date = start_date;
        event.end_date = end_date;
        event.updated_at = new Date(Date.now());
        
        repository.save(event);

        return event;    
    }   
}