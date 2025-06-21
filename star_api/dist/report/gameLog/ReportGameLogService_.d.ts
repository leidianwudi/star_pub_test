import { Repository } from 'typeorm';
import { En_ReportGameLog } from './entities/En_ReportGameLog';
import { In_InsReportGameLog } from './in/In_InsReportGameLog';
import { In_SelReportGameLog } from './in/In_SelReportGameLog';
import { Out_SelReportGameLog } from './out/Out_SelReportGameLog';
import { RepReportGameLog } from './model/RepReportGameLog';
export declare class ReportGameLogService_ {
    protected En_ReportGameLogRep: Repository<En_ReportGameLog>;
    protected rep: RepReportGameLog;
    constructor(En_ReportGameLogRep: Repository<En_ReportGameLog>);
    select(queryParams: In_SelReportGameLog): Promise<Out_SelReportGameLog>;
    selectById(id: number): Promise<En_ReportGameLog>;
    insert(dto: In_InsReportGameLog): Promise<any>;
    update(dto: In_InsReportGameLog): Promise<any>;
    delete(ids: number[]): Promise<any>;
}
