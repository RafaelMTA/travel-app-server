import { getRepository } from "typeorm"
import { User } from "@entities/user";
import BCryptjs from "@handlers/BCryptjs";

type UserData = {
    email: string;
    password: string;
    confirmPassword: string;
}

export class SignUpService{
    execute = async({email, password, confirmPassword}:UserData) : Promise<void | Error> => {
        if(password !== confirmPassword) return new Error('Password does not match');

        const repository = getRepository(User);
        if(!repository) return new Error('No repository found');;

        const exists = await repository.findOne({email});
        if(exists) return new Error('User already registered'); 

        const hashedPassword = await BCryptjs.hash(password);
        if(!hashedPassword) return new Error('Could not hash password');

        const user = repository.create(
            new User(email, hashedPassword)
        );

        await repository.save(user);
    }
}