import { getRepository } from "typeorm"
import { User } from "@entities/user";
import { UserDTO } from "@entities/DTO/userDTO";
import BCryptjs from "@handlers/BCryptjs";

type UserRequest = {
    email: string;
    password: string;
}

export class UserCreateService{
    execute = async({email, password}: UserRequest) : Promise<User | Error> => {
        try{
            const repository = getRepository(User);
            if(!repository) return new Error('No repository found');
            if(await repository.findOne({email})) return new Error('User already registered'); 
    
            const hashedPassword = await BCryptjs.hash(password);
            if(!hashedPassword) return new Error('Could not hash password');
            
            const user = repository.create(
                new User(email, hashedPassword)
            );
    
            await repository.save(user);
    
            return user;
        }catch(error){
            return new Error(`${error}`);
        }      
    }
}