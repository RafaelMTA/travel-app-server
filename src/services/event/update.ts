import { getRepository } from "typeorm";
import { Event } from "@entities/event";

type EventRequest = {
    title: string;
    description: string;
    start_date: string;
    end_date: string;
    user_id: string;
}

export class EventUpdateService{
    execute = async({title, description, start_date, end_date, user_id} : EventRequest, id:string) : Promise<Event | Error> => {
        const repository = getRepository(Event);   
        if(!repository) return new Error('No repository found');

        const event = await repository.findOne(id);
        if(!event) return new Error('No event found');

        if(event.title !== title) {
            const exists = await repository.findOne({title, user_id});
            if(exists) return new Error('Event title already registed');
        }
       
        event.title = title;
        event.description = description;
        event.start_date = start_date;
        event.end_date = end_date;
        event.updated_at = new Date(Date.now());
        
        repository.save(event);

        return event;    
    }   
}