import { Request, Response } from "express";
import { PaxReadAllService } from "@services/pax/readall";

export class PaxReadAllController{
    handle = async(req: Request, res: Response) : Promise<Response> => {
        const service = new PaxReadAllService();
        
        const result = await service.execute();

        if(result instanceof Error) return res.status(400).json(result.message);

        return res.status(200).json(result);
    }
}