import { Request, Response } from 'express';
import { PaxDeleteService } from "@services/pax/delete";

export class PaxDeleteController{
    handle = async(req: Request, res: Response) : Promise<Response> => {
        const { pax_id } = req.params;

        const service = new PaxDeleteService();

        const result = await service.execute(pax_id);

        if(result instanceof Error) return res.status(400).json(result.message);

        return res.status(204).end();
    }
}