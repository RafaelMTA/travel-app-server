import { getRepository } from "typeorm";
import { Pax } from "@entities/pax";

type PaxRequest = {
    name: string;
    surname: string;
    email: string;
    occupation: string;
    address: string;
    birthday: string;
    user_id: string;
    imageURL:string;
    event_id: string;
}

export class PaxUpdateService{
    execute = async({name, surname, email, occupation, address, birthday, user_id, imageURL, event_id} : PaxRequest, id:string) : Promise<Pax | Error> => {
        const repository = getRepository(Pax);   
        if(!repository) return new Error('No repository found');

        const pax = await repository.findOne({user_id, id});
        if(!pax) return new Error('No pax found');

        if(pax.email !== email) {
            const exists = await repository.findOne({email, user_id, event_id});
            if(exists) return new Error('Email already registed');
        }
       
        pax.name = name;
        pax.surname = surname;
        pax.email = email;
        pax.occupation = occupation;
        pax.address = address;
        pax.birthday = birthday;
        pax.imageURL = imageURL;
        pax.updated_at = new Date(Date.now());
        
        repository.save(pax);

        return pax;    
    }   
}