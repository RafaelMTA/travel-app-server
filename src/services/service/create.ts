import { getRepository } from "typeorm";
import { Service } from "@entities/service";

type ServiceRequest = {
    title: string;
    description: string;
    arrival: string;
    departure: string;
    address: string;
    user_id: string;
    event_id: string;
}

export class ServiceCreateService{
    execute = async({title, description, arrival, departure, address, user_id, event_id} : ServiceRequest) : Promise<Service | Error> => {
        const repository = getRepository(Service);
        if(!repository) return new Error('No repository found');

        const service = repository.create({title, description, arrival, departure, address, user_id, event_id});

        const exists = await repository.findOne({title, user_id, event_id});
        if(exists) return new Error('Service title already registed');
        
        await repository.save(service);

        return service;
    }
}