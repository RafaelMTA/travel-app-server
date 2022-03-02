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

export class ServiceUpdateService{
    execute = async({title, description, arrival, departure, address, user_id, event_id} : ServiceRequest, id:string) : Promise<Service | Error> => {
        const repository = getRepository(Service);   
        if(!repository) return new Error('No repository found');

        const service = await repository.findOne({user_id, id});
        if(!service) return new Error('No service found');

        if(service.title !== title) {
            const exists = await repository.findOne({title, user_id, event_id});
            if(exists) return new Error('Service title already registed');
        }
       
        service.title = title;
        service.description = description;
        service.arrival = arrival;
        service.departure = departure;
        service.address = address;
        service.updated_at = new Date(Date.now());
        
        repository.save(service);

        return service;    
    }   
}