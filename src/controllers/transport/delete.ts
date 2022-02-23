import { Request, Response } from 'express';
import { TransportDeleteService } from "@services/transport/delete";

export class TransportDeleteController{
    handle = async(req: Request, res: Response) : Promise<Response> => {
        const {transport_id} = req.params;

        const service = new TransportDeleteService();

        const result = await service.execute(transport_id);

        if(result instanceof Error) return res.status(400).json(result.message);

        return res.status(204).end();
    }
}