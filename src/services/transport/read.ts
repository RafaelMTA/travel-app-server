import { getRepository } from 'typeorm';
import { Transport } from '@entities/transport';

export class TransportReadService{
    execute = async(user_id:string, event_id:string, id:string) : Promise<Transport | Error> => {
        try{
            const repository = getRepository(Transport);
            if(!repository) return new Error('No repository found');
    
            const transport = await repository.findOne({user_id, event_id, id});
            if(!transport) return new Error('No transport found');
    
            return transport;
        }catch(error){
            return new Error(`${error}`);
        }
    }
}