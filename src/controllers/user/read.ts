import { Request, Response } from "express";
import { UserReadService } from "@services/user/read";

export class UserReadController{
    handle = async(req: Request, res: Response) : Promise<Response>=> {
        const user_id = res.locals.userId;

        const service = new UserReadService();

        const result = await service.execute(user_id);

        if(result instanceof Error) return res.status(400).json(result.message);

        return res.status(200).json(result);
    }
}