import { getRepository } from "typeorm";
import { Accommodation } from "@entities/accommodation";

type AccommodationRequest = {
    name: string;
    description: string;
    arrival: Date,
    departure: Date,
    user_id: string;
    event_id: string;
}

export class AccommodationUpdateService{
    execute = async({name, description, arrival, departure, user_id, event_id} : AccommodationRequest, id:string) : Promise<Accommodation | Error> => {
        // if(start_date < new Date(Date.now())) return new Error('Invalid starting date');
        // console.log(start_date > new Date(Date.now()));

        const repository = getRepository(Accommodation);   
        if(!repository) return new Error('No repository found');

        const accommodation = await repository.findOne(id);
        if(!accommodation) return new Error('No accommodation found');

        if(accommodation.name !== name) {
            const exists = await repository.findOne({name, user_id, event_id});
            if(exists) return new Error('Accommodation name already registed');
        }
       
        accommodation.name = name;
        accommodation.description = description;
        accommodation.arrival = arrival;
        accommodation.departure = departure;
        accommodation.updated_at = new Date(Date.now());
        
        repository.save(accommodation);

        return accommodation;    
    }   
}