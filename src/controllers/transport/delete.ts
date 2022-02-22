import { Request, Response } from 'express';
import { EventUserDeleteService } from '@services/event/delete';

export class EventUserDeleteController{
    handle = async(req: Request, res: Response) : Promise<Response> => {
        const {event_id} = req.params;

        const service = new EventUserDeleteService();

        const result = await service.execute(event_id);

        if(result instanceof Error) return res.status(400).json(result.message);

        return res.status(204).end();
    }
}