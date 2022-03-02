import { Request, Response } from "express";
import { EventCreateService } from "@services/event/create";

export class EventCreateController{
    handle = async(req: Request, res: Response) : Promise<Response> => {
        const { title, description, start_date, end_date } = req.body;

        const user_id = res.locals.userId;
        if(!user_id) return res.status(405).json({error: 'No user auth'});

        const service = new EventCreateService();

        const result = await service.execute({title, description, start_date, end_date, user_id});

        if(result instanceof Error) return res.status(400).json(result.message);

        return res.status(200).json(result);
    }
}
