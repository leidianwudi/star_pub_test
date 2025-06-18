import { En_GameType } from 'src/game/gameType/entities/En_GameType';
export declare class En_GameOdds {
    id: number;
    sort: number;
    game_type_code: string;
    odds_key: string;
    odds_value: string;
    enable: number;
    desc: string;
    gameType: En_GameType;
}
