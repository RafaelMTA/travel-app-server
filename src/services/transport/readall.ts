import { getRepository } from 'typeorm';
import { Transport } from '@entities/transport';

export class TransportReadAllService{
    execute = async(user_id:string) : Promise<Transport[] | Error> => {
        try{
            const repository = getRepository(Transport);
            if(!repository) return new Error('No repository found');
    
            const transport = await repository.find({user_id});
            if(!transport) return new Error('No transport found');
    
            return transport;
        }catch(error){
            return new Error(`${error}`);
        }
    }
}