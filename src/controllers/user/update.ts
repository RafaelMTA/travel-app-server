import { Request, Response } from "express";
import { UserUpdateService } from "@services/user/update";

export class UserUpdateController{
    handle = async(req: Request, res: Response) : Promise<Response> => {
        const { id } = req.params;
        const { email, password, confirmPassword } = req.body;

        const service = new UserUpdateService();

        const result = await service.execute({email, password, confirmPassword}, id);

        if(result instanceof Error) return res.status(400).json(result.message);

        return res.status(200).json(result);
    }
}