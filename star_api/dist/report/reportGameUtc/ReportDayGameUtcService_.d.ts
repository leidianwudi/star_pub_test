import { Repository } from 'typeorm';
import { En_ReportDayGameUtc } from './entities/En_ReportDayGameUtc';
import { In_InsReportDayGameUtc } from './in/In_InsReportDayGameUtc';
import { In_SelReportDayGameUtc } from './in/In_SelReportDayGameUtc';
import { Out_SelReportDayGameUtc } from './out/Out_SelReportDayGameUtc';
import { RepReportDayGameUtc } from './model/RepReportDayGameUtc';
export declare class ReportDayGameUtcService_ {
    protected En_ReportDayGameUtcRep: Repository<En_ReportDayGameUtc>;
    protected rep: RepReportDayGameUtc;
    constructor(En_ReportDayGameUtcRep: Repository<En_ReportDayGameUtc>);
    select(queryParams: In_SelReportDayGameUtc): Promise<Out_SelReportDayGameUtc>;
    selectById(id: number): Promise<En_ReportDayGameUtc>;
    insert(dto: In_InsReportDayGameUtc): Promise<any>;
    update(dto: In_InsReportDayGameUtc): Promise<any>;
    delete(ids: number[]): Promise<any>;
}
