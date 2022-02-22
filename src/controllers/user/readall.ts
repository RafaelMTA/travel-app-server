import { Request, Response } from "express";
import { UserReadAllService } from "@services/user/readall";

export class UserReadAllController{
    handle = async(req: Request, res: Response) : Promise<Response> => {
        const service = new UserReadAllService();
        
        const result = await service.execute();

        if(result instanceof Error) return res.status(400).json(result.message);

        return res.status(200).json(result);
    }
}