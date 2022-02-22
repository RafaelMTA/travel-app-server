import { getRepository } from 'typeorm';
import { User } from '@entities/user';

export class UserReadAllService{
    execute = async() : Promise<User[] | Error> => {
        try{
            const repository = getRepository(User);
            if(!repository) return new Error('No repository found');
    
            const users = await repository.find();
            if(!users) return new Error('No user found');
    
            return users;
        }catch(error){
            return new Error(`${error}`);
        }
    }
}