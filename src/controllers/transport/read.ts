import { Request, Response } from "express";
import { TransportReadService } from "@services/transport/read";

export class TransportReadController{
    handle = async(req: Request, res: Response) : Promise<Response>=> {
        const { transport_id } = req.params;

        const service = new TransportReadService();

        const result = await service.execute(transport_id);

        if(result instanceof Error) return res.status(400).json(result.message);

        return res.status(200).json(result);
    }
}