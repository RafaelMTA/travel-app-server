import { getRepository } from "typeorm"
import { User } from "@entities/user";
import BCryptjs from "@handlers/BCryptjs";
import JWTToken from '@handlers/JWTToken';

type UserData = {
    email: string;
    password: string;
}

export class SignInService{
    execute = async({email, password}:UserData) : Promise<string | Error> => {
        const repository = getRepository(User);
        if(!repository) return new Error('No repository found');

        const user = await repository.findOne({email});
        if(!user) return new Error('No user found');

        const match = await BCryptjs.validate(password, user.password);
        if(!match) return new Error('Invalid credentials');

        const token = await JWTToken.generateToken({userId: user.id});

        return token; 
    }
}