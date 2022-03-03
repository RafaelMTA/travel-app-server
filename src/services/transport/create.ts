import { getRepository } from "typeorm";
import { Transport } from "@entities/transport";

type TransportRequest = {
    title: string;
    description: string;
    arrival: string,
    departure: string,
    address: string;
    imageURL: string;
    user_id: string;
    event_id: string;
}

export class TransportCreateService{
    execute = async({title, description, arrival, departure, address, imageURL, user_id, event_id} : TransportRequest) : Promise<Transport | Error> => {
        const repository = getRepository(Transport);
        if(!repository) return new Error('No repository found');

        const exists = await repository.findOne({title, user_id, event_id});
        if(exists) return new Error('Transport title already registed');

        const transport = repository.create({title, description, arrival, departure, address, imageURL, user_id, event_id});

        await repository.save(transport);

        return transport;
    }
}