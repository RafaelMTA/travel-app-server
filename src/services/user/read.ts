import { getRepository } from 'typeorm';
import { User } from '@entities/user';

type UserDTO  = {
    email: string;
    imageURL: string;
}

export class UserReadService{
    execute = async(id:string) : Promise<UserDTO | Error> => {
        try{
            const repository = getRepository(User);
            if(!repository) return new Error('No repository found');
    
            const user = await repository.findOne(id);
            if(!user) return new Error('No user found');
    
            return {email: user.email, imageURL: user.imageURL};
        }catch(error){
            return new Error(`${error}`);
        }
    }
}