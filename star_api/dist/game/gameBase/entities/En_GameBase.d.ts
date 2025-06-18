import { En_GameBar } from 'src/game/gameBar/entities/En_GameBar';
import { En_GameType } from 'src/game/gameType/entities/En_GameType';
import { En_ReportDayGame } from 'src/report/reportGame/entities/En_ReportDayGame';
import { En_PokerRoom } from 'src/game/pokerRoom/entities/En_PokerRoom';
import { En_GameOddsExt } from 'src/game/gameOddsExt/entities/En_GameOddsExt';
export declare class En_GameBase {
    id: number;
    sort: number;
    type_code: string;
    code: string;
    name: string;
    icon_path: string;
    desc: string;
    gameBar: En_GameBar;
    gameType: En_GameType;
    reportDayGame: En_ReportDayGame[];
    pokerRoom: En_PokerRoom[];
    gameOddsExt: En_GameOddsExt[];
}
