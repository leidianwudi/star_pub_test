import { En_GameBase } from 'src/game/gameBase/entities/En_GameBase';
export declare class En_PokerRoom {
    id: number;
    game_code: string;
    game_code_sub: string;
    bet: number;
    min_gold: number;
    max_gold: number;
    name: string;
    enable: number;
    desc: string;
    gameBase: En_GameBase;
}
