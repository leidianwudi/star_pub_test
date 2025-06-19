import { ReportDayPersonService } from './ReportDayPersonService';
import { ReportDayPersonController_ } from './ReportDayPersonController_';
import { In_SelReportDayPersonSp } from './in/In_SelReportDayPersonSp';
import { Out_SelReportDayPerson } from './out/Out_SelReportDayPerson';
export declare class ReportDayPersonController extends ReportDayPersonController_ {
    constructor(service: ReportDayPersonService);
    select(queryParams: In_SelReportDayPersonSp): Promise<Out_SelReportDayPerson>;
}
