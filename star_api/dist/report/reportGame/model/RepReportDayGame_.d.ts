import { RepositorySuper } from "src/common/RepositorySuper";
import { Repository } from "typeorm";
import { En_ReportDayGame } from '../entities/En_ReportDayGame';
import { In_SelReportDayGame } from '../in/In_SelReportDayGame';
export declare class RepReportDayGame_ extends RepositorySuper<En_ReportDayGame> {
    readonly db: Repository<En_ReportDayGame>;
    constructor(db: Repository<En_ReportDayGame>);
    findAndCount(queryParams: In_SelReportDayGame): Promise<{
        list: En_ReportDayGame[];
        total: number;
    }>;
}
