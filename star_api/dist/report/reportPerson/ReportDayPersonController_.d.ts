import { ReportDayPersonService } from './ReportDayPersonService';
import { Out_ReportDayPerson } from './out/Out_ReportDayPerson';
import { In_InsReportDayPerson } from './in/In_InsReportDayPerson';
import { In_SelReportDayPerson } from './in/In_SelReportDayPerson';
import { En_ReportDayPerson } from './entities/En_ReportDayPerson';
export declare class ReportDayPersonController_ {
    protected readonly service: ReportDayPersonService;
    constructor(service: ReportDayPersonService);
    select(queryParams: In_SelReportDayPerson): Promise<import("./out/Out_SelReportDayPerson").Out_SelReportDayPerson>;
    selectById(body: {
        id: number;
    }): Promise<En_ReportDayPerson>;
    insert(dto: In_InsReportDayPerson): Promise<Out_ReportDayPerson>;
    update(body: In_InsReportDayPerson): Promise<Out_ReportDayPerson>;
    delete(body: {
        ids: number[];
    }): Promise<Out_ReportDayPerson>;
}
