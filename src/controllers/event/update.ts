import { Request, Response } from "express";
import { EventUpdateService } from "@services/event/update";

export class EventUpdateController{
    handle = async(req: Request, res: Response) : Promise<Response> => {
        const { event_id } = req.params;
        const { title, description, start_date, end_date, imageURL } = req.body;

        const user_id = res.locals.userId;
        if(!user_id) return res.status(405).json({error: 'No user auth'});

        const service = new EventUpdateService();

        const result = await service.execute({ title, description, start_date, end_date, imageURL, user_id }, event_id);

        if(result instanceof Error) return res.status(400).json(result.message);

        return res.status(200).json(result);
    }
}