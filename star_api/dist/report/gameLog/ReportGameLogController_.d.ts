import { ReportGameLogService } from './ReportGameLogService';
import { Out_ReportGameLog } from './out/Out_ReportGameLog';
import { In_InsReportGameLog } from './in/In_InsReportGameLog';
import { In_SelReportGameLog } from './in/In_SelReportGameLog';
import { En_ReportGameLog } from './entities/En_ReportGameLog';
export declare class ReportGameLogController_ {
    protected readonly service: ReportGameLogService;
    constructor(service: ReportGameLogService);
    select(queryParams: In_SelReportGameLog): Promise<import("./out/Out_SelReportGameLog").Out_SelReportGameLog>;
    selectById(body: {
        id: number;
    }): Promise<En_ReportGameLog>;
    insert(dto: In_InsReportGameLog): Promise<Out_ReportGameLog>;
    update(body: In_InsReportGameLog): Promise<Out_ReportGameLog>;
    delete(body: {
        ids: number[];
    }): Promise<Out_ReportGameLog>;
}
