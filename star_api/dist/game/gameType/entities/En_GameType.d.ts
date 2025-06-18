import { En_GameBase } from 'src/game/gameBase/entities/En_GameBase';
import { En_ReportDayGame } from 'src/report/reportGame/entities/En_ReportDayGame';
import { En_GameOdds } from 'src/game/gameOdds/entities/En_GameOdds';
import { En_GameOddsExt } from 'src/game/gameOddsExt/entities/En_GameOddsExt';
export declare class En_GameType {
    id: number;
    type_code: string;
    type_name: string;
    desc: string;
    gameBases: En_GameBase[];
    reportDayGame: En_ReportDayGame[];
    gameOdds: En_GameOdds[];
    gameOddsExt: En_GameOddsExt[];
}
