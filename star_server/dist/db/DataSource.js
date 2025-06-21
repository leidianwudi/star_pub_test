"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const User_1 = require("./entity/User");
const Mail_1 = require("./entity/Mail");
const Notice_1 = require("./entity/Notice");
const Announcement_1 = require("./entity/Announcement");
const Slot_1 = require("./entity/Slot");
const UserDayStatistic_1 = require("./entity/UserDayStatistic");
const Backpack_1 = require("./entity/Backpack");
const BettingLog_1 = require("./entity/BettingLog");
const Task_1 = require("./entity/Task");
const CoinLog_1 = require("./entity/CoinLog");
const GameOdds_1 = require("./entity/GameOdds");
const GameOddsExt_1 = require("./entity/GameOddsExt");
const SlotsLog_1 = require("./entity/SlotsLog");
const Poker_1 = require("./entity/Poker");
const PokerLog_1 = require("./entity/PokerLog");
const FishLog_1 = require("./entity/FishLog");
const ReportDayGame_1 = require("./entity/ReportDayGame");
const ReportDayPerson_1 = require("./entity/ReportDayPerson");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    synchronize: false,
    logging: true,
    entities: [
        User_1.User,
        Mail_1.Mail,
        Notice_1.Notice,
        Announcement_1.Announcement,
        Slot_1.SlotsSettings,
        UserDayStatistic_1.UserDayStatistic,
        Backpack_1.Backpack,
        BettingLog_1.BettingLog,
        Task_1.Task,
        Task_1.SuperTask,
        CoinLog_1.CoinLog,
        GameOdds_1.GameOdds,
        GameOddsExt_1.GameOddsExt,
        SlotsLog_1.SlotsLog,
        Poker_1.Poker,
        PokerLog_1.PokerLog,
        FishLog_1.FishLog,
        ReportDayGame_1.ReportDayGame,
        ReportDayPerson_1.ReportDayPerson,
    ],
    migrations: [],
    subscribers: [],
});
