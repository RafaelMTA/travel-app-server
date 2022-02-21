import { UserDTO } from "@entities/DTO/userDTO";
import { User } from "@entities/user";
import { getRepository } from "typeorm";
import BCryptjs from "@handlers/BCryptjs";

export class UserUpdateService{
    execute = async({email, password} : UserDTO, id:string) : Promise<User | Error> => {
        try{
            const repository = getRepository(User);   
            if(!repository) return new Error('No repository found');
    
            const user = await repository.findOne(id);
            if(!user) return new Error('User not found');
            
            //Check if password is the same
            const validate = await BCryptjs.validate(password, user.password);
            if(!validate) { 
                const hashedPassword = await BCryptjs.hash(password); 
                if(hashedPassword instanceof Error) return new Error('Error on password Hash');
                user.password = hashedPassword;
            }
            
            user.email = email;
            user.updated_at = new Date(Date.now());
            
            repository.save(user);
    
            return user;
        }catch(error){
            return new Error();
        }
    }
}