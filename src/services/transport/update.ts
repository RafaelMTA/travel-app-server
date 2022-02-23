import { getRepository } from "typeorm";
import { Transport } from "@entities/transport";

type TransportRequest = {
    name: string;
    description: string;
    arrival: Date;
    departure: Date;
    address: string;
    user_id: string;
    event_id: string;
}

export class TransportUpdateService{
    execute = async({name, description, arrival, departure, address, user_id, event_id} : TransportRequest, id:string) : Promise<Transport | Error> => {
        // if(start_date < new Date(Date.now())) return new Error('Invalid starting date');
        // console.log(start_date > new Date(Date.now()));

        const repository = getRepository(Transport);   
        if(!repository) return new Error('No repository found');

        const transport = await repository.findOne(id);
        if(!transport) return new Error('No transport found');

        if(transport.name !== name) {
            const exists = await repository.findOne({name, user_id, event_id});
            if(exists) return new Error('Transport name already registed');
        }
       
        transport.name = name;
        transport.description = description;
        transport.arrival = arrival;
        transport.departure = departure;
        transport.address = address;
        transport.updated_at = new Date(Date.now());
        
        repository.save(transport);

        return transport;    
    }   
}