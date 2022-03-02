import { Request, Response } from "express";
import { ServiceReadAllService } from "@services/service/readall";

export class ServiceReadAllController{
    handle = async(req: Request, res: Response) : Promise<Response> => {
        const user_id = res.locals.userId;
        const { event_id } = req.params;

        if(!user_id) return res.status(405).json({error: 'No user auth'});

        const service = new ServiceReadAllService();
        
        const result = await service.execute(user_id, event_id);

        if(result instanceof Error) return res.status(400).json(result.message);

        return res.status(200).json(result);
    }
}