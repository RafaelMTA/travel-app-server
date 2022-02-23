import { Request, Response } from "express";
import { PaxReadService } from "@services/pax/read";

export class PaxReadController{
    handle = async(req: Request, res: Response) : Promise<Response>=> {
        const { pax_id } = req.params;

        const service = new PaxReadService();

        const result = await service.execute(pax_id);

        if(result instanceof Error) return res.status(400).json(result.message);

        return res.status(200).json(result);
    }
}