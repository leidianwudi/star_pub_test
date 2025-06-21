import { Repository } from 'typeorm';
import { En_ReportGameLog } from './entities/En_ReportGameLog';
import { ReportGameLogService_ } from './ReportGameLogService_';
export declare class ReportGameLogService extends ReportGameLogService_ {
    constructor(En_ReportGameLogRep: Repository<En_ReportGameLog>);
    selectTotal(): Promise<{
        list: Partial<En_ReportGameLog>[];
    }>;
}
