import { ReportDayPersonService } from './ReportDayPersonService';
import { ReportDayPersonController_ } from './ReportDayPersonController_';
import { In_SelReportDayPersonSp } from './in/In_SelReportDayPersonSp';
export declare class ReportDayPersonController extends ReportDayPersonController_ {
    constructor(service: ReportDayPersonService);
    selectByUtc(queryParams: In_SelReportDayPersonSp, req: Request): Promise<import("./out/Out_SelReportDayPerson").Out_SelReportDayPerson>;
    selectTotal(): Promise<{
        list: Partial<import("./entities/En_ReportDayPerson").En_ReportDayPerson>[];
    }>;
}
