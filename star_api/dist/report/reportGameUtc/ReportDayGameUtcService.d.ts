import { Repository } from 'typeorm';
import { En_ReportDayGameUtc } from './entities/En_ReportDayGameUtc';
import { ReportDayGameUtcService_ } from './ReportDayGameUtcService_';
export declare class ReportDayGameUtcService extends ReportDayGameUtcService_ {
    constructor(En_ReportDayGameUtcRep: Repository<En_ReportDayGameUtc>);
    selectTotal(): Promise<{
        list: Partial<En_ReportDayGameUtc>[];
    }>;
}
