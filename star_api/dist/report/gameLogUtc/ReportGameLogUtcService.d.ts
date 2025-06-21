import { Repository } from 'typeorm';
import { En_ReportGameLogUtc } from './entities/En_ReportGameLogUtc';
import { ReportGameLogUtcService_ } from './ReportGameLogUtcService_';
export declare class ReportGameLogUtcService extends ReportGameLogUtcService_ {
    constructor(En_ReportGameLogUtcRep: Repository<En_ReportGameLogUtc>);
    selectTotal(): Promise<{
        list: Partial<En_ReportGameLogUtc>[];
    }>;
}
