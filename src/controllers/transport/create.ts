import { Request, Response } from 'express';
import { EventUserCreateService } from '@services/event/create';

export class EventUserCreateController{
    handle = async(req: Request, res: Response) : Promise<Response> => {
        const { user_id } = req.params;
        const { name, description } = req.body;

        const service = new EventUserCreateService();

        const result = await service.execute({name, description, user_id});

        if(result instanceof Error) return res.status(400).json(result.message);

        return res.status(200).json(result);
    }
}
