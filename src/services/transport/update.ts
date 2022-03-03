import { getRepository } from "typeorm";
import { Transport } from "@entities/transport";

type TransportRequest = {
    title: string;
    description: string;
    arrival: string;
    departure: string;
    address: string;
    imageURL: string;
    user_id: string;
    event_id: string;
}

export class TransportUpdateService{
    execute = async({title, description, arrival, departure, address, imageURL, user_id, event_id} : TransportRequest, id:string) : Promise<Transport | Error> => {
        const repository = getRepository(Transport);   
        if(!repository) return new Error('No repository found');

        const transport = await repository.findOne({user_id, id});
        if(!transport) return new Error('No transport found');

        if(transport.title !== title) {
            const exists = await repository.findOne({title, user_id, event_id});
            if(exists) return new Error('Transport title already registed');
        }
       
        transport.title = title;
        transport.description = description;
        transport.arrival = arrival;
        transport.departure = departure;
        transport.address = address;
        transport.imageURL = imageURL;
        transport.updated_at = new Date(Date.now());
        
        repository.save(transport);

        return transport;    
    }   
}