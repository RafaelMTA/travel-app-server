import { Request, Response } from 'express';
import { UserDeleteService } from '../../services/user/delete';

export class UserDeleteController{
    handle = async(req: Request, res: Response) : Promise<Response> => {
        const {id} = req.params;

        const service = new UserDeleteService();

        const result = await service.execute(id);

        if(result instanceof Error) return res.status(400).json(result.message);

        return res.status(204).end();
    }
}