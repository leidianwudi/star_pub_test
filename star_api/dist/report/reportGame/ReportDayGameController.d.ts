import { ReportDayGameService } from './ReportDayGameService';
import { ReportDayGameController_ } from './ReportDayGameController_';
export declare class ReportDayGameController extends ReportDayGameController_ {
    constructor(service: ReportDayGameService);
    getAll(body: {
        data: any;
    }): Promise<{
        list: import("./entities/En_ReportDayGame").En_ReportDayGame[];
        total: number;
    }>;
}
