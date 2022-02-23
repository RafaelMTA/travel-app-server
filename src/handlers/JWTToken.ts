import "dotenv/config";
import jwt, { Jwt } from "jsonwebtoken";
import auth from "@config/auth";

export class JWTToken{
    generateToken = async(payload:object) : Promise<string | Error> => {
        try{
            const token = await jwt.sign(payload, auth.secret, {
                expiresIn: auth.expiresIn,
                issuer: auth.issuer
            });
            return token;
        }catch(error){
            return new Error(`${error}`);
        }      
    }

    validateToken = async(token:string) : Promise<Jwt | Error>=> {
        try{
            return await jwt.verify(token, auth.secret, {
                algorithms: ["HS256"],
                issuer: auth.issuer
            });
        }catch(error){
            return new Error(`${error}`);
        }
    }
}