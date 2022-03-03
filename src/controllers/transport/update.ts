import { Request, Response } from "express";
import { TransportUpdateService } from "@services/transport/update";

export class TransportUpdateController{
    handle = async(req: Request, res: Response) : Promise<Response> => {
        const { event_id, transportation_id } = req.params;
        const { title, description, arrival, departure, address, imageURL } = req.body;

        const user_id = res.locals.userId;
        if(!user_id) return res.status(405).json({error: 'No user auth'});

        const service = new TransportUpdateService();

        const result = await service.execute({ title, description, arrival, departure, address, imageURL, user_id, event_id }, transportation_id);

        if(result instanceof Error) return res.status(400).json(result.message);

        return res.status(200).json(result);
    }
}