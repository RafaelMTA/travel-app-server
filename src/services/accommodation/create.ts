import { getRepository } from "typeorm";
import { Accommodation } from "@entities/accommodation";

type AccommodationRequest = {
    title: string;
    description: string;
    arrival: string;
    departure: string;
    address: string;
    imageURL: string;
    user_id: string;
    event_id: string;
}

export class AccommodationCreateService{
    execute = async({title, description, arrival, departure, address, imageURL, user_id, event_id} : AccommodationRequest) : Promise<Accommodation | Error> => {
        const repository = getRepository(Accommodation);
        if(!repository) return new Error('No repository found');

        const exists = await repository.findOne({title, user_id, event_id});
        if(exists) return new Error('Accommodation title already registed');
        
        const accommodation = repository.create({title, description, arrival, departure, address, imageURL, user_id, event_id});
    
        await repository.save(accommodation);

        return accommodation;
    }
}