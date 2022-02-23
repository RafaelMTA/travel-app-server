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

export class ServiceUpdateService{
    execute = async({name, description, arrival, departure, address, user_id, event_id} : ServiceRequest, id:string) : Promise<Service | Error> => {
        // if(start_date < new Date(Date.now())) return new Error('Invalid starting date');
        // console.log(start_date > new Date(Date.now()));

        const repository = getRepository(Service);   
        if(!repository) return new Error('No repository found');

        const service = await repository.findOne(id);
        if(!service) return new Error('No service found');

        if(service.name !== name) {
            const exists = await repository.findOne({name, user_id, event_id});
            if(exists) return new Error('Service name already registed');
        }
       
        service.name = name;
        service.description = description;
        service.arrival = arrival;
        service.departure = departure;
        service.address = address;
        service.updated_at = new Date(Date.now());
        
        repository.save(service);

        return service;    
    }   
}