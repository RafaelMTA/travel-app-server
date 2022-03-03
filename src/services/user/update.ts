import { getRepository } from "typeorm";
import { User } from "@entities/user";
import BCryptjs from "@handlers/BCryptjs";

type UserRequest = {
    email: string;
    imageURL: string;
}

export class UserUpdateService{
    execute = async({email, imageURL} : UserRequest, id:string) : Promise<UserRequest | Error> => {
        try{
            const repository = getRepository(User);   
            if(!repository) return new Error('No repository found');

            const user = await repository.findOne(id);
            if(!user) return new Error('No user found');

            if(user.email !== email) {
                const exists = await repository.findOne({email});
                if(exists) return new Error('Email already registed');
            } 
     
            user.email = email;
            user.imageURL = imageURL;
            user.updated_at = new Date(Date.now());
            
            repository.save(user);
    
            return user;
        }catch(error){
            return new Error(`${error}`);
        }
    }
}