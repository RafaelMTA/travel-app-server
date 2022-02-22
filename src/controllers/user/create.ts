import { Request, Response } from 'express';
import { UserCreateService } from '@services/user/create';

export class UserCreateController{
    handle = async(req: Request, res: Response) : Promise<Response> => {
        const {email, password} = req.body;

        const service = new UserCreateService();

        const result = await service.execute({email, password});

        if(result instanceof Error) return res.status(400).json(result.message);

        return res.status(200).json(result);
    }
}
