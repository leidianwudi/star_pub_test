import { Repository } from 'typeorm';
import { En_ReportGameLogUtc } from './entities/En_ReportGameLogUtc';
import { In_InsReportGameLogUtc } from './in/In_InsReportGameLogUtc';
import { In_SelReportGameLogUtc } from './in/In_SelReportGameLogUtc';
import { Out_SelReportGameLogUtc } from './out/Out_SelReportGameLogUtc';
import { RepReportGameLogUtc } from './model/RepReportGameLogUtc';
export declare class ReportGameLogUtcService_ {
    protected En_ReportGameLogUtcRep: Repository<En_ReportGameLogUtc>;
    protected rep: RepReportGameLogUtc;
    constructor(En_ReportGameLogUtcRep: Repository<En_ReportGameLogUtc>);
    select(queryParams: In_SelReportGameLogUtc): Promise<Out_SelReportGameLogUtc>;
    selectById(id: number): Promise<En_ReportGameLogUtc>;
    insert(dto: In_InsReportGameLogUtc): Promise<any>;
    update(dto: In_InsReportGameLogUtc): Promise<any>;
    delete(ids: number[]): Promise<any>;
}
