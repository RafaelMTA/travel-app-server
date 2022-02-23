import { Request, Response } from 'express';
import { ServiceCreateService } from "@services/service/create";

export class ServiceCreateController{
    handle = async(req: Request, res: Response) : Promise<Response> => {
        const { user_id, event_id } = req.params;
        const { name, description, arrival, departure, address } = req.body;

        const service = new ServiceCreateService();

        const result = await service.execute({name, description, arrival, departure, address, user_id, event_id});

        if(result instanceof Error) return res.status(400).json(result.message);

        return res.status(200).json(result);
    }
}
