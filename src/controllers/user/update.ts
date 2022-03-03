import { Request, Response } from "express";
import { UserUpdateService } from "@services/user/update";

export class UserUpdateController{
    handle = async(req: Request, res: Response) : Promise<Response> => {
        const user_id = res.locals.userId;
        const { email, password, confirmPassword, imageURL } = req.body;

        const service = new UserUpdateService();

        const result = await service.execute({email, password, confirmPassword, imageURL}, user_id);

        if(result instanceof Error) return res.status(400).json(result.message);

        return res.status(200).json(result);
    }
}