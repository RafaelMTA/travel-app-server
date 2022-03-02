import { Request, Response } from "express";
import { EventDeleteService } from "@services/event/delete";

export class EventDeleteController{
    handle = async(req: Request, res: Response) : Promise<Response> => {
        const {event_id} = req.params;

        const user_id = res.locals.userId;
        if(!user_id) return res.status(405).json({error: 'No user auth'});
        
        const service = new EventDeleteService();

        const result = await service.execute(user_id, event_id);

        if(result instanceof Error) return res.status(400).json(result.message);

        return res.status(204).end();
    }
}