"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiStartMatch = ApiStartMatch;
const MatchSrvRPC_1 = require("../../SrvMatch/MatchSrvRPC");
const MasterSrvRPC_1 = require("../../SrvMaster/MasterSrvRPC");
const Error_1 = require("../../shared/protocols/Error");
const GameType_1 = require("../../common/GameType");
const DBMgr_1 = require("../../db/DBMgr");
const Error_2 = require("../../shared/protocols/Error");
async function ApiStartMatch(call) {
    var _a;
    let conn = call.conn;
    if (!conn.uid) {
        return call.error("用户未登录", { code: Error_2.ERR_NOT_LOGIN });
    }
    let loc = await MasterSrvRPC_1.MasterSrvRPC.get().getUserLocation(conn.uid);
    if (loc.isSucc && loc.res.roomId && loc.res.gameType) {
        call.logger.log("user location:", loc.res);
        let ret = await MatchSrvRPC_1.MatchSrvRPC.get().getRoomState(loc.res.roomId);
        if (ret.isSucc && ((_a = ret.res) === null || _a === void 0 ? void 0 : _a.state)) {
            call.logger.log("user is in game");
            return call.error('IS_IN_GAME', { code: Error_1.ERR_IS_IN_GAME });
        }
    }
    let type = (0, GameType_1.createGameType)(call.req.type, call.req.subType);
    let setting = await DBMgr_1.dbSlot.getGameSetting(type);
    if (setting) {
        let user = await DBMgr_1.sqlDBUser.getUserByUid(conn.uid);
        if (user && setting.minGold != undefined) {
            if (!user.coin.isGreaterThan(setting.minGold)) {
                return call.error("用户金币不足", { code: Error_2.ERR_NO_ENOUGH_COINS });
            }
        }
        if (user && setting.maxGold != undefined) {
            if (!user.coin.isLessThan(setting.maxGold)) {
                call.logger.log("gameType:", type, " game setting:", setting);
                return call.error("用户金币超过限制", { code: Error_2.ERR_COINS_OVERFLOW });
            }
        }
    }
    let ret = await MatchSrvRPC_1.MatchSrvRPC.get().addToMatchQueue(conn.uid, type, call.req.immediate);
    if (ret.isSucc) {
        let r = (0, GameType_1.parseGameType)(ret.res.gameType);
        ret.res.gameType = r.major;
        ret.res.subType = r.minor;
        call.succ(ret.res);
    }
    else {
        call.error(ret.err);
    }
}
