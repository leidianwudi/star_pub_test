import { ReportDayGameUtcService } from './ReportDayGameUtcService';
import { Out_ReportDayGameUtc } from './out/Out_ReportDayGameUtc';
import { In_InsReportDayGameUtc } from './in/In_InsReportDayGameUtc';
import { In_SelReportDayGameUtc } from './in/In_SelReportDayGameUtc';
import { En_ReportDayGameUtc } from './entities/En_ReportDayGameUtc';
export declare class ReportDayGameUtcController_ {
    protected readonly service: ReportDayGameUtcService;
    constructor(service: ReportDayGameUtcService);
    select(queryParams: In_SelReportDayGameUtc): Promise<import("./out/Out_SelReportDayGameUtc").Out_SelReportDayGameUtc>;
    selectById(body: {
        id: number;
    }): Promise<En_ReportDayGameUtc>;
    insert(dto: In_InsReportDayGameUtc): Promise<Out_ReportDayGameUtc>;
    update(body: In_InsReportDayGameUtc): Promise<Out_ReportDayGameUtc>;
    delete(body: {
        ids: number[];
    }): Promise<Out_ReportDayGameUtc>;
}
