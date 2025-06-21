import { En_GameBase } from 'src/game/gameBase/entities/En_GameBase';
import { En_GameType } from 'src/game/gameType/entities/En_GameType';
export declare class En_ReportDayGame {
    id: number;
    day: Date;
    type_code: string;
    game_code: string;
    spend: number;
    win: number;
    final: number;
    play_num: number;
    room_num: number;
    rtp: number;
    rtp_big: number;
    gameBase: En_GameBase;
    gameType: En_GameType;
}
