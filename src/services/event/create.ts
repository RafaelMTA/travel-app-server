import { Event } from "@entities/event";
import { getRepository } from "typeorm";

type EventRequest = {
    title: string;
    description: string;
    start_date: string;
    end_date: string;
    user_id: string;
}

export class EventCreateService{
    execute = async({title, description, start_date, end_date, user_id} : EventRequest) : Promise<Event | Error> => {
        const repository = getRepository(Event);
        if(!repository) return new Error('No repository found');

        const exists = await repository.findOne({user_id, title});
        if(exists) return new Error("Cannot create duplicate event name"); 

        const event = repository.create({title, description, start_date, end_date, user_id});

        await repository.save(event);

        return event;
    }
}