"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.groupByAccountAndDay = groupByAccountAndDay;
const ToolTime_1 = require("./ToolTime");
function groupByAccountAndDay(data, userUtc) {
    const grouped = {};
    for (const item of data) {
        const day = (0, ToolTime_1.toBeijingDateString)(item.day, userUtc);
        const key = `${item.account}_${day}`;
        if (!grouped[key]) {
            grouped[key] = {
                account: item.account,
                day,
                slots_cost: 0,
                slots_win: 0,
                slots_final: 0,
                slots_play_num: 0,
                poker_cost: 0,
                poker_win: 0,
                poker_final: 0,
                poker_play_num: 0,
                fish_cost: 0,
                fish_win: 0,
                fish_final: 0,
                fish_play_num: 0,
            };
        }
        const g = grouped[key];
        g.slots_cost += parseFloat(item.slots_cost);
        g.slots_win += parseFloat(item.slots_win);
        g.slots_final += parseFloat(item.slots_final);
        g.slots_play_num += item.slots_play_num;
        g.poker_cost += parseFloat(item.poker_cost);
        g.poker_win += parseFloat(item.poker_win);
        g.poker_final += parseFloat(item.poker_final);
        g.poker_play_num += item.poker_play_num;
        g.fish_cost += parseFloat(item.fish_cost);
        g.fish_win += parseFloat(item.fish_win);
        g.fish_final += parseFloat(item.fish_final);
        g.fish_play_num += item.fish_play_num;
    }
    return Object.values(grouped);
}
//# sourceMappingURL=ToolGroupBy.js.map