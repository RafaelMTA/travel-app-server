import { getRepository } from 'typeorm';
import { User } from '@entities/user';

export class UserReadService{
    execute = async(id:string) : Promise<User | Error> => {
        try{
            const repository = getRepository(User);
            if(!repository) return new Error('No repository found');
    
            const user = await repository.findOne(id);
            if(!user) return new Error('No user found');
    
            return user;
        }catch(error){
            return new Error(`${error}`);
        }
    }
}