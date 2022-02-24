import { Request, Response } from "express";
import { PaxReadAllService } from "@services/pax/readall";

export class PaxReadAllController{
    handle = async(req: Request, res: Response) : Promise<Response> => {
        const user_id = res.locals.userId;
        if(!user_id) return res.status(404).json({error: 'No user auth'});

        const service = new PaxReadAllService();
        
        const result = await service.execute(user_id);

        if(result instanceof Error) return res.status(400).json(result.message);

        return res.status(200).json(result);
    }
}