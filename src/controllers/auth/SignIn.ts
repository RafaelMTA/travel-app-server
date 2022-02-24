import { Request, Response } from "express";
import { SignInService } from "@services/auth/signin";

export class SignInController{
    handle = async(req: Request, res: Response) : Promise<Response> => {
        const { email, password } = req.body;
        const service = new SignInService();

        const result = await service.execute({email, password});

        if(result instanceof Error) return res.status(400).json(result.message);

        return res.status(201).json({token: result});
    }
}