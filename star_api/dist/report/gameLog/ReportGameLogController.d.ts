import { ReportGameLogService } from './ReportGameLogService';
import { ReportGameLogController_ } from './ReportGameLogController_';
export declare class ReportGameLogController extends ReportGameLogController_ {
    constructor(service: ReportGameLogService);
    selectTotal(): Promise<{
        list: Partial<import("./entities/En_ReportGameLog").En_ReportGameLog>[];
    }>;
}
