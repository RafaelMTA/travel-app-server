import { EventDTO } from "@entities/DTO/eventDTO";
import { Event } from "@entities/event";
import { getRepository } from "typeorm";

export class EventUserCreateService{
    execute = async({name, user_id} : EventDTO) : Promise<Event | Error> => {
        const repository = getRepository(Event);
        if(!repository) return new Error('No repository found');
        const event = repository.create({name, user_id});

        await repository.save(event);

        return event;
    }
}