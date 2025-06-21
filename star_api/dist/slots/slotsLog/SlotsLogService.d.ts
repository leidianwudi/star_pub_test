import { Repository } from 'typeorm';
import { En_SlotsLog } from './entities/En_SlotsLog';
import { SlotsLogService_ } from './SlotsLogService_';
export declare class SlotsLogService extends SlotsLogService_ {
    constructor(En_SlotsLogRep: Repository<En_SlotsLog>);
    getAll(queryParams: any): Promise<void>;
}
