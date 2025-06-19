"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toBeijingDateString = toBeijingDateString;
exports.convertToStringList = convertToStringList;
function toBeijingDateString(localISOString, userUtc = 8) {
    const date = new Date(localISOString);
    const timestamp = date.getTime();
    const offsetHours = 8 - userUtc;
    const adjustedTimestamp = timestamp + offsetHours * 60 * 60 * 1000;
    const beijingDate = new Date(adjustedTimestamp);
    const year = beijingDate.getFullYear();
    const month = (beijingDate.getMonth() + 1).toString().padStart(2, '0');
    const day = beijingDate.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
}
function convertToStringList(data) {
    return data.map((item) => ({
        account: item.account,
        day: toBeijingDateString(item.day instanceof Date ? item.day.toISOString() : String(item.day)),
        slots_cost: String(item.slots_cost ?? 0),
        slots_win: String(item.slots_win ?? 0),
        slots_final: String(item.slots_final ?? 0),
        slots_play_num: item.slots_play_num ?? 0,
        poker_cost: String(item.poker_cost ?? 0),
        poker_win: String(item.poker_win ?? 0),
        poker_final: String(item.poker_final ?? 0),
        poker_play_num: item.poker_play_num ?? 0,
        fish_cost: String(item.fish_cost ?? 0),
        fish_win: String(item.fish_win ?? 0),
        fish_final: String(item.fish_final ?? 0),
        fish_play_num: item.fish_play_num ?? 0,
    }));
}
//# sourceMappingURL=ToolTime.js.map