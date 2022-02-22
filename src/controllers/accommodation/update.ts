import { Request, Response } from "express";
import { AccommodationUpdateService } from "@services/accommodation/update";

export class AccommodationUpdateController{
    handle = async(req: Request, res: Response) : Promise<Response> => {
        const { user_id, event_id, accommodation_id } = req.params;
        const { name, description, arrival, departure } = req.body;

        const service = new AccommodationUpdateService();

        const result = await service.execute({ name, description, arrival, departure, user_id, event_id }, accommodation_id);

        if(result instanceof Error) return res.status(400).json(result.message);

        return res.status(200).json(result);
    }
}