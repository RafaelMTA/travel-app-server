import { Request, Response } from "express";
import jwtToken from "@handlers/JWTToken";

export default async(req: Request, res: Response, next) : Promise<Response>=> {
    const authHeader = req.header("Authorization");

    if(!authHeader) return res.status(401).json({error: 'Token not Provided'});

    const [, token] = authHeader.split(' ');

    try{
        const decoded = await jwtToken.validateToken(token);
        res.locals.userId = decoded["userId"];
        return next();
    }catch(error){
        console.log(error);
        return res.status(401).json(error);
    }
}