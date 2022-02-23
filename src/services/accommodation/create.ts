import { getRepository } from "typeorm";
import { Accommodation } from "@entities/accommodation";

type AccommodationRequest = {
    name: string;
    description: string;
    arrival: Date;
    departure: Date;
    address: string;
    user_id: string;
    event_id: string;
}

export class AccommodationCreateService{
    execute = async({name, description, arrival, departure, address, user_id, event_id} : AccommodationRequest) : Promise<Accommodation | Error> => {
        // if(start_date < new Date(Date.now())) return new Error('Invalid starting date');

        const repository = getRepository(Accommodation);
        if(!repository) return new Error('No repository found');

        const accommodation = repository.create({name, description, arrival, departure, address, user_id, event_id});

        await repository.save(accommodation);

        return accommodation;
    }
}