"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DBSlot = void 0;
const Slot_1 = require("./entity/Slot");
const DataSource_1 = require("./DataSource");
const RedisClient_1 = require("./RedisClient");
const GameOdds_1 = require("./entity/GameOdds");
const GameOddsExt_1 = require("./entity/GameOddsExt");
const Poker_1 = require("./entity/Poker");
const GameType_1 = require("../common/GameType");
const EXPIRE_SECONDS = 60 * 60; //1h
class DBGameOdds {
    async getGameOdds(gameType, oddsKey) {
        let redis = RedisClient_1.RedisClient.getInstance();
        let key = ["odds", gameType, oddsKey].join(":");
        let s = await redis.get(key);
        if (!s) {
            let repo = DataSource_1.AppDataSource.getRepository(GameOdds_1.GameOdds);
            const a = await repo.findOneBy({ gameTypeCode: gameType, oddsKey: oddsKey });
            if (!a) {
                return null;
            }
            if (!a.enable) {
                return null;
            }
            await redis.setEX(key, "" + a.oddsValue, EXPIRE_SECONDS);
            return a.oddsValue / 1000;
        }
        else {
            return Number.parseInt(s) / 1000;
        }
    }
    async getGameOddsExt(gameType, gameId, oddsKey) {
        let redis = RedisClient_1.RedisClient.getInstance();
        let key = ["odds", gameType, gameId, oddsKey].join(":");
        let s = await redis.get(key);
        if (!s) {
            let repo = DataSource_1.AppDataSource.getRepository(GameOddsExt_1.GameOddsExt);
            const a = await repo.findOneBy({ gameTypeCode: gameType, gameCode: gameId, oddsKey: oddsKey });
            if (!a) {
                return null;
            }
            if (!a.enable) {
                return null;
            }
            await redis.setEX(key, "" + a.oddsValue, EXPIRE_SECONDS);
            return a.oddsValue / 1000;
        }
        else {
            return Number.parseInt(s) / 1000;
        }
    }
}
class DBPoker {
    async getSetting(gameId, subGameId) {
        let redis = RedisClient_1.RedisClient.getInstance();
        let gameType = (0, GameType_1.createGameType)(gameId, subGameId);
        let key = "pokers_" + gameType;
        let s = await redis.get(key);
        if (!s) {
            let p = null;
            let repo = DataSource_1.AppDataSource.getRepository(Poker_1.Poker);
            if (subGameId) {
                p = await repo.findOneBy({ game_id: gameId, sub_game_id: subGameId });
            }
            else {
                p = await repo.findOneBy({ game_id: gameId });
            }
            if (!p) {
                return null;
            }
            if (!p.enable) {
                return null;
            }
            let a = {
                bet: p.bet,
            };
            if (p.min_gold != 0 && p.min_gold != -1) {
                a.minGold = p.min_gold;
            }
            if (p.max_gold != 0 && p.max_gold != -1) {
                a.maxGold = p.max_gold;
            }
            await redis.setEX(key, JSON.stringify(a), EXPIRE_SECONDS);
            return a;
        }
        else {
            let r = JSON.parse(s);
            return r;
        }
    }
}
class DBSlot {
    constructor() {
        this.db = new DBGameOdds();
        this.dbPoker = new DBPoker();
    }
    async _getSlotSettings(game_id) {
        let redis = RedisClient_1.RedisClient.getInstance();
        let key = "slots_" + game_id;
        let s = await redis.get(key);
        if (!s) {
            let repo = DataSource_1.AppDataSource.getRepository(Slot_1.SlotsSettings);
            const a = await repo.findOneBy({ game_id: game_id });
            if (!a) {
                return null;
            }
            await redis.setEX(key, JSON.stringify(a.value1), EXPIRE_SECONDS);
            return a;
        }
        else {
            let value1 = JSON.parse(s);
            let slot = new Slot_1.SlotsSettings();
            slot.value1 = value1;
            slot.game_id = game_id;
            return slot;
        }
    }
    async getSlotsWinOdds(gameId) {
        let p = await this.db.getGameOddsExt("slots", gameId, "win_odds");
        if (p == null) {
            p = await this.db.getGameOdds("slots", "win_odds");
        }
        return p;
    }
    async getSlotsLoopCount(gameId) {
        let p = await this.db.getGameOddsExt("slots", gameId, "cycle_count");
        if (p == null) {
            p = await this.db.getGameOdds("slots", "cycle_count");
        }
        if (p != null) {
            p = p * 1000;
        }
        return p;
    }
    async getSlotsBigEventsOdds(gameId) {
        let p = await this.db.getGameOddsExt("slots", gameId, "big_events_odds");
        if (p == null) {
            p = await this.db.getGameOdds("slots", "big_events_odds");
        }
        return p;
    }
    async getDragonHatchBigEventsOdds(gameId) {
        let earth = await this.db.getGameOddsExt("slots", gameId, "big_events_odds_earth");
        let water = await this.db.getGameOddsExt("slots", gameId, "big_events_odds_water");
        let fire = await this.db.getGameOddsExt("slots", gameId, "big_events_odds_fire");
        let dragon = await this.db.getGameOddsExt("slots", gameId, "big_events_odds_dragon");
        return { earth, water, fire, dragon };
    }
    async getPokerSetting(gameId, subGameId) {
        return this.dbPoker.getSetting(gameId, subGameId);
    }
    async _getGameSetting(gameId) {
        let redis = RedisClient_1.RedisClient.getInstance();
        let key = "games_" + gameId;
        let s = await redis.get(key);
        if (!s) {
            let repo = DataSource_1.AppDataSource.getRepository(Slot_1.SlotsSettings);
            const a = await repo.findOneBy({ game_id: gameId });
            if (!a) {
                return null;
            }
            await redis.setEX(key, JSON.stringify(a.value1), EXPIRE_SECONDS);
            return a.value1;
        }
        else {
            let value1 = JSON.parse(s);
            return value1;
        }
    }
    async getGameSetting(gameId) {
        let r = (0, GameType_1.parseGameType)(gameId);
        let s = await this._getGameSetting(gameId);
        let poker = await this.getPokerSetting(r.major, r.minor);
        if (s) {
            if (poker) {
                Object.assign(s, poker);
            }
            return s;
        }
        else {
            return poker;
        }
    }
    //测试使用此方法
    async updateGameSetting(gameId, setting) {
        let repo = DataSource_1.AppDataSource.getRepository(Slot_1.SlotsSettings);
        await repo.update({ game_id: gameId }, { value1: setting, value2: JSON.stringify(setting) });
        let redis = RedisClient_1.RedisClient.getInstance();
        let key = "games_" + gameId;
        await redis.del(key);
        key = "slots_" + gameId;
        await redis.del(key);
    }
    async insertGameSetting(gameId, setting) {
        let repo = DataSource_1.AppDataSource.getRepository(Slot_1.SlotsSettings);
        let s = new Slot_1.SlotsSettings();
        s.game_id = gameId;
        s.name = setting.name || "";
        s.value1 = setting;
        s.value2 = JSON.stringify(setting);
        await repo.insert(s);
    }
}
exports.DBSlot = DBSlot;
