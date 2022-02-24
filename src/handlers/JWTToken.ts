import "dotenv/config";
import jwt from "jsonwebtoken";
import auth from "@config/auth";

const generateToken = async(payload:object) => {
    try{
        return await jwt.sign(payload, auth.config.secret, {
            expiresIn: auth.config.expiresIn,
            issuer: auth.config.issuer
        });
    }catch(error){
        return new Error(`${error}`);
    }      
}

const validateToken = async(token:string) => {
    try{
        return await jwt.verify(token, auth.config.secret, {
            algorithms: auth.config.algorithm,
            issuer: auth.config.issuer
        });
    }catch(error){
        return new Error(`${error}`);
    }
}

export default { generateToken, validateToken }
