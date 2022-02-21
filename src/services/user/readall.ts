import { User } from '@entities/user';
import { getRepository } from 'typeorm';

export class UserReadAllService{
    execute = async() : Promise<User[] | Error> => {
        try{
            const repository = getRepository(User);

            if(!repository) return new Error('Error on User Repository');
    
            const users = await repository.find();
            if(!users) return new Error('No user data Found');
    
            return users;
        }catch(error){
            return new Error();
        }
    }
}