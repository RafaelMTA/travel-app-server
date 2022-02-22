import "dotenv/config";
import jwt, { Jwt } from "jsonwebtoken";

export class JWTToken{
    generateToken = async(payload:object) : Promise<string | undefined | Error> => {
        try{
            const token = await jwt.sign(payload, process.env.JWT_SECRET,{
                expiresIn: process.env.JWT_EXPIRESIN,
                algorithm: process.env.JWT_ALGORITHM,
                issuer: process.env.JWT_ISSUER
            });
            return token;
        }catch(error){
            return new Error(`${error}`);
        }      
    }

    validateToken = async(token:string) : Promise<Jwt | Error>=> {
        try{
            return await jwt.verify(token, process.env.JWT_SECRET, {
                algorithms: process.env.JWT_ALGORITHM,
                issuer: process.env.JWT_ISSUER
            });
        }catch(error){
            return new Error(`${error}`);
        }
    }
}