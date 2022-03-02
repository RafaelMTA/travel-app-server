import { Request, Response } from "express";
import { AccommodationUpdateService } from "@services/accommodation/update";

export class AccommodationUpdateController{
    handle = async(req: Request, res: Response) : Promise<Response> => {
        const { event_id, accommodation_id } = req.params;
        const { title, description, arrival, departure, address } = req.body;

        const user_id = res.locals.userId;
        if(!user_id) return res.status(404).json({error: 'No user auth'});

        const service = new AccommodationUpdateService();

        const result = await service.execute({ title, description, arrival, departure, address, user_id, event_id }, accommodation_id);

        if(result instanceof Error) return res.status(400).json(result.message);

        return res.status(200).json(result);
    }
}