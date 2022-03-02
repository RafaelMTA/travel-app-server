import { getRepository } from "typeorm";
import { User } from "@entities/user";
import BCryptjs from "@handlers/BCryptjs";

type UserRequest = {
    email: string;
    password: string;
    confirmPassword:string;
}

export class UserUpdateService{
    execute = async({email, password, confirmPassword} : UserRequest, id:string) : Promise<User | Error> => {
        try{
            if(password !== confirmPassword) return new Error("Password is not a match");

            const repository = getRepository(User);   
            if(!repository) return new Error('No repository found');

            const user = await repository.findOne(id);
            if(!user) return new Error('No user found');

            if(user.email !== email) {
                const exists = await repository.findOne({email});
                if(exists) return new Error('User already registed');
            } 

            //Check if password is the same
            const validate = await BCryptjs.validate(password, user.password);
            if(!validate) { 
                const hashedPassword = await BCryptjs.hash(password); 
                if(!hashedPassword) return new Error('Error on password Hash');
                user.password = hashedPassword;
            }
            
            user.email = email;
            user.updated_at = new Date(Date.now());
            
            repository.save(user);
    
            return user;
        }catch(error){
            return new Error(`${error}`);
        }
    }
}