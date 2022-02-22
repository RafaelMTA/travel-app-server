import { Request, Response } from 'express';
import { EventDeleteService } from '@services/event/delete';

export class EventDeleteController{
    handle = async(req: Request, res: Response) : Promise<Response> => {
        const {event_id} = req.params;

        const service = new EventDeleteService();

        const result = await service.execute(event_id);

        if(result instanceof Error) return res.status(400).json(result.message);

        return res.status(204).end();
    }
}