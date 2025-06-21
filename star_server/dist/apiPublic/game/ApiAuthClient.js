"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiAuthClient = ApiAuthClient;
const TokenUtils_1 = require("../../common/TokenUtils");
const DBMgr_1 = require("../../db/DBMgr");
const GameSrv_1 = require("../../SrvGame/GameSrv");
const ServerGloabls_1 = require("../../common/ServerGloabls");
const GameType_1 = require("../../common/GameType");
async function ApiAuthClient(call) {
    if (!GameSrv_1.gameSrv.websocketServer) {
        return;
    }
    let req = call.req;
    let gameType = (0, GameType_1.createGameType)(req.gameType, req.subType);
    let serverToken = TokenUtils_1.TokenUtils.genGameServerToken(req.uid, ServerGloabls_1.ServerGlobals.options.publicWsUrl, req.roomId, gameType, req.time);
    if (serverToken != req.sign) {
        return call.error('AUTH_FAILED');
    }
    let userInfo = await DBMgr_1.dbUser.getUserInfoByUid(req.uid);
    if (!userInfo) {
        return call.error('USER_NOT_EXISTS');
    }
    let user = {
        name: userInfo.name,
        visualId: userInfo.visualId,
        uid: userInfo.uid,
        gender: userInfo.gender,
        coin: userInfo.coin,
    };
    let conn = call.conn;
    conn.state = 'ready';
    conn.uid = req.uid;
    conn.roleName = req.roleName;
    conn.dbUserInfo = userInfo;
    GameSrv_1.gameSrv.websocketServer.authed(conn);
    if (req.roomId && gameType) {
        let err = await GameSrv_1.gameSrv.tryEnterRoom(conn, req.roomId, gameType, user);
        if (err) {
            return call.error(err.message, err.info);
        }
        let room = GameSrv_1.gameSrv.allRoomsMap.get(req.roomId);
        if (!room) {
            return call.error('ROOM_NOT_EXIST');
        }
        /*
        let err2 = room.onRPC_JoinGame(req.uid,req.roleName!);
        if(err2){
            return call.error(err2);
        }
        */
    }
    else {
        call.logger.warn("game auth no room id");
    }
    call.succ({ user: user });
}
