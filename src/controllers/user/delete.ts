import { Request, Response } from 'express';
import { UserDeleteService } from '@services/user/delete';

export class UserDeleteController{
    handle = async(req: Request, res: Response) : Promise<Response> => {
        const user_id = res.locals.userId;

        const service = new UserDeleteService();

        const result = await service.execute(user_id);

        if(result instanceof Error) return res.status(400).json(result.message);

        return res.status(204).end();
    }
}