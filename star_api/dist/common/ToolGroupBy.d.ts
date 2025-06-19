interface RecordRaw {
    account: string;
    day: string;
    slots_cost: string;
    slots_win: string;
    slots_final: string;
    slots_play_num: number;
    poker_cost: string;
    poker_win: string;
    poker_final: string;
    poker_play_num: number;
    fish_cost: string;
    fish_win: string;
    fish_final: string;
    fish_play_num: number;
}
interface RecordGrouped {
    account: string;
    day: string;
    slots_cost: number;
    slots_win: number;
    slots_final: number;
    slots_play_num: number;
    poker_cost: number;
    poker_win: number;
    poker_final: number;
    poker_play_num: number;
    fish_cost: number;
    fish_win: number;
    fish_final: number;
    fish_play_num: number;
}
export declare function groupByAccountAndDay(data: RecordRaw[], userUtc: number): RecordGrouped[];
export {};
