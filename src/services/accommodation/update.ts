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

export class AccommodationUpdateService{
    execute = async({title, description, arrival, departure, address, imageURL, user_id, event_id} : AccommodationRequest, id:string) : Promise<Accommodation | Error> => {
        const repository = getRepository(Accommodation);   
        if(!repository) return new Error('No repository found');

        const accommodation = await repository.findOne({user_id, id});
        if(!accommodation) return new Error('No accommodation found');

        if(accommodation.title !== title) {
            const exists = await repository.findOne({title, user_id, event_id});
            if(exists) return new Error('Accommodation title already registed');
        }
       
        accommodation.title = title;
        accommodation.description = description;
        accommodation.arrival = arrival;
        accommodation.departure = departure;
        accommodation.address = address;
        accommodation.imageURL = imageURL;
        accommodation.updated_at = new Date(Date.now());
        
        repository.save(accommodation);

        return accommodation;    
    }   
}