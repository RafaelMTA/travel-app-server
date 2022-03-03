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
    imageURL: string;
    event_id: string;
}

export class PaxCreateService{
    execute = async({name, surname, email, occupation, address, birthday, user_id, imageURL, event_id} : PaxRequest) : Promise<Pax | Error> => {
        const repository = getRepository(Pax);
        if(!repository) return new Error('No repository found');

        const exists = await repository.findOne({email, user_id, event_id});
        if(exists) return new Error('Email already registed');
        
        const pax = repository.create({name, surname, email, occupation, address, birthday, user_id, imageURL, event_id});

        await repository.save(pax);

        return pax;
    }
}