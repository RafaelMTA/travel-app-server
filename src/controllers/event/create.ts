import { Request, Response } from 'express';
import { EventCreateService } from '@services/event/create';

export class EventCreateController{
    handle = async(req: Request, res: Response) : Promise<Response> => {
        const { user_id } = req.params;
        const { name, description, start_date, end_date } = req.body;

        const service = new EventCreateService();

        const result = await service.execute({name, description, start_date, end_date, user_id});

        if(result instanceof Error) return res.status(400).json(result.message);

        return res.status(200).json(result);
    }
}
