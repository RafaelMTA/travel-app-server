import { Request, Response } from 'express';

export class CreateController<T extends IModel, U extends IService> {
    async handle(req: Request, res: Response) : Promise<Response>{

    }
}