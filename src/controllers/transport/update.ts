import { Request, Response } from "express";
import { EventUserUpdateService } from "@services/event/update";

export class EventUserUpdateController{
    handle = async(req: Request, res: Response) : Promise<Response> => {
        const { user_id, event_id } = req.params;
        const { name } = req.body;

        const service = new EventUserUpdateService();

        const result = await service.execute({name, user_id}, event_id);

        if(result instanceof Error) return res.status(400).json(result.message);

        return res.status(200).json(result);
    }
}