import { Request, Response } from "express";
import { AccommodationReadService } from "@services/accommodation/read";

export class AccommodationReadController{
    handle = async(req: Request, res: Response) : Promise<Response>=> {
        const { accommodation_id, event_id } = req.params;

        const user_id = res.locals.userId;
        if(!user_id) return res.status(404).json({error: 'No user auth'});

        const service = new AccommodationReadService();

        const result = await service.execute(user_id, event_id, accommodation_id);

        if(result instanceof Error) return res.status(400).json(result.message);

        return res.status(200).json(result);
    }
}