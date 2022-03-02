import { Request, Response } from "express";
import { ServiceReadService } from "@services/service/read";

export class ServiceReadController{
    handle = async(req: Request, res: Response) : Promise<Response>=> {
        const { service_id, event_id } = req.params;

        const user_id = res.locals.userId;
        if(!user_id) return res.status(405).json({error: 'No user auth'});

        const service = new ServiceReadService();

        const result = await service.execute(user_id, event_id, service_id);

        if(result instanceof Error) return res.status(400).json(result.message);

        return res.status(200).json(result);
    }
}