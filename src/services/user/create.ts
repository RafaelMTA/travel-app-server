import { getRepository } from "typeorm"
import { User } from "@entities/user";
import { UserDTO } from "@entities/DTO/userDTO";
import BCryptjs from "@handlers/BCryptjs";

export class UserCreateService{
    execute = async({email, password}: UserDTO) : Promise<User | Error> => {
        try{
            const repository = getRepository(User);
            if(!repository) return new Error('No repository found');
            if(await repository.findOne({email})) return new Error('User already registered'); 
    
            const hashedPassword = await BCryptjs.hash(password);

            const user = await repository.create({
                email,        
                hashedPassword
            });
    
            await repository.save(user);
    
            return user;
        }catch(error){
            return new Error();
        }      
    }
}