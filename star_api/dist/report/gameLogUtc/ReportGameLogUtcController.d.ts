import { ReportGameLogUtcService } from './ReportGameLogUtcService';
import { ReportGameLogUtcController_ } from './ReportGameLogUtcController_';
export declare class ReportGameLogUtcController extends ReportGameLogUtcController_ {
    constructor(service: ReportGameLogUtcService);
    selectTotal(): Promise<{
        list: Partial<import("./entities/En_ReportGameLogUtc").En_ReportGameLogUtc>[];
    }>;
}
