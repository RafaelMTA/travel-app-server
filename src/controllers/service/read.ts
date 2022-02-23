import { Request, Response } from "express";
import { ServiceReadService } from "@services/service/read";

export class ServiceReadController{
    handle = async(req: Request, res: Response) : Promise<Response>=> {
        const { service_id } = req.params;

        const service = new ServiceReadService();

        const result = await service.execute(service_id);

        if(result instanceof Error) return res.status(400).json(result.message);

        return res.status(200).json(result);
    }
}