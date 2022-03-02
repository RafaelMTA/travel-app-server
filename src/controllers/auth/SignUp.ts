import { Request, Response } from 'express';
import { SignUpService } from '@services/auth/signup';

export class SignUpController{
    handle = async(req: Request, res: Response) : Promise<Response> => {
        const {email, password, confirmPassword} = req.body;

        const service = new SignUpService();

        const result = await service.execute({email, password, confirmPassword});

        if(result instanceof Error) return res.status(400).json(result.message);

        return res.status(200).end();
    }
}
