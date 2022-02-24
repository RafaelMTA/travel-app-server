import { Request, Response } from 'express';
import { AccommodationDeleteService } from '@services/accommodation/delete';

export class AccommodationDeleteController{
    handle = async(req: Request, res: Response) : Promise<Response> => {
        const {accommodation_id} = req.params;

        const user_id = res.locals.userId;
        if(!user_id) return res.status(404).json({error: 'No user auth'});

        const service = new AccommodationDeleteService();

        const result = await service.execute(user_id, accommodation_id);

        if(result instanceof Error) return res.status(400).json(result.message);

        return res.status(204).end();
    }
}