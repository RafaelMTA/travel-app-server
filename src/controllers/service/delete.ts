import { Request, Response } from 'express';
import { ServiceDeleteService } from "@services/service/delete";

export class ServiceDeleteController{
    handle = async(req: Request, res: Response) : Promise<Response> => {
        const { service_id } = req.params;

        const user_id = res.locals.userId;
        if(!user_id) return res.status(404).json({error: 'No user auth'});

        const service = new ServiceDeleteService();

        const result = await service.execute(user_id, service_id);

        if(result instanceof Error) return res.status(400).json(result.message);

        return res.status(204).end();
    }
}