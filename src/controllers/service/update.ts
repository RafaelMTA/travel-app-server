import { Request, Response } from "express";
import { ServiceUpdateService } from "@services/service/update";

export class ServiceUpdateController{
    handle = async(req: Request, res: Response) : Promise<Response> => {
        const { user_id, event_id, service_id } = req.params;
        const { name, description, arrival, departure, address } = req.body;

        const service = new ServiceUpdateService();

        const result = await service.execute({ name, description, arrival, departure, address, user_id, event_id }, service_id);

        if(result instanceof Error) return res.status(400).json(result.message);

        return res.status(200).json(result);
    }
}