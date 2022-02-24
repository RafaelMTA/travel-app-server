import { getRepository } from "typeorm";
import { Service } from "@entities/service";

type ServiceRequest = {
    name: string;
    description: string;
    arrival: Date;
    departure: Date;
    address: string;
    user_id: string;
    event_id: string;
}

export class ServiceCreateService{
    execute = async({name, description, arrival, departure, address, user_id, event_id} : ServiceRequest) : Promise<Service | Error> => {
        const repository = getRepository(Service);
        if(!repository) return new Error('No repository found');

        const service = repository.create({name, description, arrival, departure, address, user_id, event_id});

        await repository.save(service);

        return service;
    }
}