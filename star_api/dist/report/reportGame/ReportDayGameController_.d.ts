import { ReportDayGameService } from './ReportDayGameService';
import { Out_ReportDayGame } from './out/Out_ReportDayGame';
import { In_InsReportDayGame } from './in/In_InsReportDayGame';
import { In_SelReportDayGame } from './in/In_SelReportDayGame';
import { En_ReportDayGame } from './entities/En_ReportDayGame';
export declare class ReportDayGameController_ {
    protected readonly service: ReportDayGameService;
    constructor(service: ReportDayGameService);
    select(queryParams: In_SelReportDayGame): Promise<import("./out/Out_SelReportDayGame").Out_SelReportDayGame>;
    selectById(body: {
        id: number;
    }): Promise<En_ReportDayGame>;
    insert(dto: In_InsReportDayGame): Promise<Out_ReportDayGame>;
    update(body: In_InsReportDayGame): Promise<Out_ReportDayGame>;
    delete(body: {
        ids: number[];
    }): Promise<Out_ReportDayGame>;
}
