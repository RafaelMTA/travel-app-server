import { getRepository } from "typeorm";
import { Pax } from "@entities/pax";

type PaxRequest = {
    name: string;
    surname: string;
    email: string;
    occupation: string;
    address: string;
    birthday: Date;
    user_id: string;
    event_id: string;
}

export class PaxCreateService{
    execute = async({name, surname, email, occupation, address, birthday, user_id, event_id} : PaxRequest) : Promise<Pax | Error> => {
        // if(start_date < new Date(Date.now())) return new Error('Invalid starting date');

        const repository = getRepository(Pax);
        if(!repository) return new Error('No repository found');

        const pax = repository.create({name, surname, email, occupation, address, birthday, user_id, event_id});

        await repository.save(pax);

        return pax;
    }
}