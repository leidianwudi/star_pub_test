import { ReportGameLogUtcService } from './ReportGameLogUtcService';
import { Out_ReportGameLogUtc } from './out/Out_ReportGameLogUtc';
import { In_InsReportGameLogUtc } from './in/In_InsReportGameLogUtc';
import { In_SelReportGameLogUtc } from './in/In_SelReportGameLogUtc';
import { En_ReportGameLogUtc } from './entities/En_ReportGameLogUtc';
export declare class ReportGameLogUtcController_ {
    protected readonly service: ReportGameLogUtcService;
    constructor(service: ReportGameLogUtcService);
    select(queryParams: In_SelReportGameLogUtc): Promise<import("./out/Out_SelReportGameLogUtc").Out_SelReportGameLogUtc>;
    selectById(body: {
        id: number;
    }): Promise<En_ReportGameLogUtc>;
    insert(dto: In_InsReportGameLogUtc): Promise<Out_ReportGameLogUtc>;
    update(body: In_InsReportGameLogUtc): Promise<Out_ReportGameLogUtc>;
    delete(body: {
        ids: number[];
    }): Promise<Out_ReportGameLogUtc>;
}
