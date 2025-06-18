import { Repository } from 'typeorm';
import { En_ReportDayGame } from './entities/En_ReportDayGame';
import { In_InsReportDayGame } from './in/In_InsReportDayGame';
import { In_SelReportDayGame } from './in/In_SelReportDayGame';
import { Out_SelReportDayGame } from './out/Out_SelReportDayGame';
import { RepReportDayGame } from './model/RepReportDayGame';
export declare class ReportDayGameService_ {
    protected En_ReportDayGameRep: Repository<En_ReportDayGame>;
    protected rep: RepReportDayGame;
    constructor(En_ReportDayGameRep: Repository<En_ReportDayGame>);
    select(queryParams: In_SelReportDayGame): Promise<Out_SelReportDayGame>;
    selectById(id: number): Promise<En_ReportDayGame>;
    insert(dto: In_InsReportDayGame): Promise<any>;
    update(dto: In_InsReportDayGame): Promise<any>;
    delete(ids: number[]): Promise<any>;
}
