"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiCreateRoom = ApiCreateRoom;
const MatchSrvRPC_1 = require("../../SrvMatch/MatchSrvRPC");
const TokenUtils_1 = require("../../common/TokenUtils");
const GameType_1 = require("../../common/GameType");
const DBMgr_1 = require("../../db/DBMgr");
const Error_1 = require("../../shared/protocols/Error");
async function ApiCreateRoom(call) {
    // 参数校验
    if (!call.req.roomName) {
        return call.error('请输入一个名称');
    }
    let conn = call.conn;
    if (!conn.uid) {
        return call.error("用户未登录", { code: Error_1.ERR_NOT_LOGIN });
    }
    let gameType = (0, GameType_1.createGameType)(call.req.gameType, call.req.subType);
    let setting = await DBMgr_1.dbSlot.getGameSetting(gameType);
    if (setting) {
        let user = await DBMgr_1.sqlDBUser.getUserByUid(conn.uid);
        if (user && setting.minGold != undefined) {
            if (!user.coin.isGreaterThan(setting.minGold)) {
                return call.error("用户金币不足", { code: Error_1.ERR_NO_ENOUGH_COINS });
            }
        }
        if (user && setting.maxGold != undefined) {
            if (!user.coin.isLessThan(setting.maxGold)) {
                call.logger.log("gameType:", gameType, " game setting:", setting);
                return call.error("用户金币超过限制", { code: Error_1.ERR_COINS_OVERFLOW });
            }
        }
    }
    let ret = await MatchSrvRPC_1.MatchSrvRPC.get().createRoomOnMinLoadServer(conn.uid, call.req.roomName, gameType, call.req.password);
    if (ret.isSucc) {
        let enterParams = TokenUtils_1.TokenUtils.createEnterRoomParams(conn.uid, ret.res.serverUrl, ret.res.roomId, gameType);
        let r = (0, GameType_1.parseGameType)(enterParams.gameType);
        enterParams.gameType = r.major;
        enterParams.subType = r.minor;
        call.succ({ enterRoomParams: enterParams });
    }
    else {
        call.error(ret.err);
    }
}
