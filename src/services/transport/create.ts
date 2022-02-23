import { getRepository } from "typeorm";
import { Transport } from "@entities/transport";

type TransportRequest = {
    name: string;
    description: string;
    arrival: Date,
    departure: Date,
    address: string;
    user_id: string;
    event_id: string;
}

export class TransportCreateService{
    execute = async({name, description, arrival, departure, address, user_id, event_id} : TransportRequest) : Promise<Transport | Error> => {
        // if(start_date < new Date(Date.now())) return new Error('Invalid starting date');

        const repository = getRepository(Transport);
        if(!repository) return new Error('No repository found');

        const transport = repository.create({name, description, arrival, departure, address, user_id, event_id});

        await repository.save(transport);

        return transport;
    }
}