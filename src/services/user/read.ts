import { UserDTO } from '@entities/DTO/userDTO';
import { User } from '@entities/user';
import { getRepository } from 'typeorm';

export class UserReadService{
    execute = async(id:string) : Promise<User | Error> => {
        try{
            const repository = getRepository(User);

            if(!repository) return new Error('Error on User Repository');
    
            const user = await repository.findOne(id);
            if(!user) return new Error('No user Found');
    
            return user;
        }catch(error){
            return new Error();
        }
    }
}