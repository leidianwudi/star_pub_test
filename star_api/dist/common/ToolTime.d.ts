import { En_ReportDayPerson } from '@/report/reportPerson/entities/En_ReportDayPerson';
export declare function toBeijingDateString(localISOString: string | Date, userUtc?: number): string;
export interface RecordRaw {
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
export declare function convertToStringList(data: En_ReportDayPerson[]): RecordRaw[];
