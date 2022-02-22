import { Request, Response } from 'express';
import { AccommodationCreateService } from '@services/accommodation/create';

export class AccommodationCreateController{
    handle = async(req: Request, res: Response) : Promise<Response> => {
        const { user_id, event_id } = req.params;
        const { name, description, arrival, departure } = req.body;

        const service = new AccommodationCreateService();

        const result = await service.execute({name, description, arrival, departure, user_id, event_id});

        if(result instanceof Error) return res.status(400).json(result.message);

        return res.status(200).json(result);
    }
}
