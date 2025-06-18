import { Repository } from "typeorm";
import { En_ReportDayGame } from '../entities/En_ReportDayGame';
import { RepReportDayGame_ } from "./RepReportDayGame_";
export declare class RepReportDayGame extends RepReportDayGame_ {
    readonly db: Repository<En_ReportDayGame>;
    constructor(db: Repository<En_ReportDayGame>);
}
