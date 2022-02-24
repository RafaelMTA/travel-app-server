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

export class AccommodationUpdateService{
    execute = async({name, description, arrival, departure, address, user_id, event_id} : AccommodationRequest, id:string) : Promise<Accommodation | Error> => {
        const repository = getRepository(Accommodation);   
        if(!repository) return new Error('No repository found');

        const accommodation = await repository.findOne({user_id, id});
        if(!accommodation) return new Error('No accommodation found');

        if(accommodation.name !== name) {
            const exists = await repository.findOne({name, user_id, event_id});
            if(exists) return new Error('Accommodation name already registed');
        }
       
        accommodation.name = name;
        accommodation.description = description;
        accommodation.arrival = arrival;
        accommodation.departure = departure;
        accommodation.address = address;
        accommodation.updated_at = new Date(Date.now());
        
        repository.save(accommodation);

        return accommodation;    
    }   
}