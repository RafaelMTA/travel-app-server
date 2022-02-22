import { Request, Response } from "express";
import { EventUserReadService } from "@services/event/read";

export class EventUserReadController{
    handle = async(req: Request, res: Response) : Promise<Response>=> {
        const { event_id } = req.params;

        const service = new EventUserReadService();

        const result = await service.execute(event_id);

        if(result instanceof Error) return res.status(400).json(result.message);

        return res.status(200).json(result);
    }
}