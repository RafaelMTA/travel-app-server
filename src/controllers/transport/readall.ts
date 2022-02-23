import { Request, Response } from "express";
import { TransportReadAllService } from "@services/transport/readall";

export class TransportReadAllController{
    handle = async(req: Request, res: Response) : Promise<Response> => {
        const service = new TransportReadAllService();
        
        const result = await service.execute();

        if(result instanceof Error) return res.status(400).json(result.message);

        return res.status(200).json(result);
    }
}