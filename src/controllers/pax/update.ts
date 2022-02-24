import { Request, Response } from "express";
import { PaxUpdateService } from "@services/pax/update";

export class PaxUpdateController{
    handle = async(req: Request, res: Response) : Promise<Response> => {
        const { event_id, pax_id } = req.params;
        const { name, surname, email, occupation, address, birthday } = req.body;

        const user_id = res.locals.userId;
        if(!user_id) return res.status(404).json({error: 'No user auth'});

        const service = new PaxUpdateService();

        const result = await service.execute({ name, surname, email, occupation, address, birthday, user_id, event_id }, pax_id);

        if(result instanceof Error) return res.status(400).json(result.message);

        return res.status(200).json(result);
    }
}