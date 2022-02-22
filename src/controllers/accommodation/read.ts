import { Request, Response } from "express";
import { AccommodationReadService } from "@services/accommodation/read";

export class AccommodationReadController{
    handle = async(req: Request, res: Response) : Promise<Response>=> {
        const { accommodation_id } = req.params;

        const service = new AccommodationReadService();

        const result = await service.execute(accommodation_id);

        if(result instanceof Error) return res.status(400).json(result.message);

        return res.status(200).json(result);
    }
}