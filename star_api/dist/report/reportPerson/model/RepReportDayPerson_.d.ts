import { RepositorySuper } from "src/common/RepositorySuper";
import { Repository } from "typeorm";
import { En_ReportDayPerson } from '../entities/En_ReportDayPerson';
import { In_SelReportDayPerson } from '../in/In_SelReportDayPerson';
export declare class RepReportDayPerson_ extends RepositorySuper<En_ReportDayPerson> {
    readonly db: Repository<En_ReportDayPerson>;
    constructor(db: Repository<En_ReportDayPerson>);
    findAndCount(queryParams: In_SelReportDayPerson): Promise<{
        list: En_ReportDayPerson[];
        total: number;
    }>;
}
