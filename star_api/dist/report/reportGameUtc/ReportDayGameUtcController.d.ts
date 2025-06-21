import { ReportDayGameUtcService } from './ReportDayGameUtcService';
import { ReportDayGameUtcController_ } from './ReportDayGameUtcController_';
export declare class ReportDayGameUtcController extends ReportDayGameUtcController_ {
    constructor(service: ReportDayGameUtcService);
    selectTotal(): Promise<{
        list: Partial<import("./entities/En_ReportDayGameUtc").En_ReportDayGameUtc>[];
    }>;
}
