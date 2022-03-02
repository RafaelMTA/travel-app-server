import { Request, Response } from "express";
import { EventReadService } from "@services/event/read";

export class EventReadController{
    handle = async(req: Request, res: Response) : Promise<Response>=> {
        const { event_id } = req.params;

        const user_id = res.locals.userId;
        if(!user_id) return res.status(405).json({error: 'No user auth'});
        
        const service = new EventReadService();

        const result = await service.execute(user_id, event_id);

        if(result instanceof Error) return res.status(400).json(result.message);

        return res.status(200).json(result);
    }
}