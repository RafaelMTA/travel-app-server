import { Request, Response } from 'express';
import { ServiceDeleteService } from "@services/service/delete";

export class ServiceDeleteController{
    handle = async(req: Request, res: Response) : Promise<Response> => {
        const { service_id } = req.params;

        const service = new ServiceDeleteService();

        const result = await service.execute(service_id);

        if(result instanceof Error) return res.status(400).json(result.message);

        return res.status(204).end();
    }
}