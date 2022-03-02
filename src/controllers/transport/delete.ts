import { Request, Response } from 'express';
import { TransportDeleteService } from "@services/transport/delete";

export class TransportDeleteController{
    handle = async(req: Request, res: Response) : Promise<Response> => {
        const {transport_id} = req.params;

        const user_id = res.locals.userId;
        if(!user_id) return res.status(405).json({error: 'No user auth'});

        const service = new TransportDeleteService();

        const result = await service.execute(user_id, transport_id);

        if(result instanceof Error) return res.status(400).json(result.message);

        return res.status(204).end();
    }
}