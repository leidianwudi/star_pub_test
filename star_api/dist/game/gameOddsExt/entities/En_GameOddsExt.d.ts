import { En_GameType } from 'src/game/gameType/entities/En_GameType';
import { En_GameBase } from 'src/game/gameBase/entities/En_GameBase';
export declare class En_GameOddsExt {
    id: number;
    sort: number;
    game_type_code: string;
    game_code: string;
    odds_key: string;
    odds_value: string;
    enable: number;
    desc: string;
    gameType: En_GameType;
    gameBase: En_GameBase;
}
