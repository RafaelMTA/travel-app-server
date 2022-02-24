import { Event } from "@entities/event";
import { getRepository } from "typeorm";

type EventRequest = {
    name: string;
    description: string;
    start_date: Date;
    end_date: Date;
    user_id: string;
}

export class EventCreateService{
    execute = async({name, description, start_date, end_date, user_id} : EventRequest) : Promise<Event | Error> => {
        const repository = getRepository(Event);
        if(!repository) return new Error('No repository found');

        const event = repository.create({name, description, start_date, end_date, user_id});

        await repository.save(event);

        return event;
    }
}