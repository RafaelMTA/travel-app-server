import { Request, Response } from "express";
import { EventUserReadAllService } from "@services/event/readAll";

export class EventUserReadAllController{
    handle = async(req: Request, res: Response) : Promise<Response> => {
        const service = new EventUserReadAllService();
        
        const result = await service.execute();

        if(result instanceof Error) return res.status(400).json(result.message);

        return res.status(200).json(result);
    }
}