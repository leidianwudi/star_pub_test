"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
const TokenUtils_1 = require("../../common/TokenUtils");
const MasterSrvRPC_1 = require("../../SrvMaster/MasterSrvRPC");
const DBMgr_1 = require("../../db/DBMgr");
const MatchSrvRPC_1 = require("../../SrvMatch/MatchSrvRPC");
const MailSystem_1 = require("../../SrvGame/MailSystem");
const LobbySrv_1 = require("../../SrvLobby/LobbySrv");
async function default_1(call) {
    var _a, _b;
    let sign = TokenUtils_1.TokenUtils.genGameServerToken(call.req.uid, call.req.token, '', '', call.req.time);
    if (sign != call.req.sign) {
        return call.error('INVALID_TOKEN');
    }
    let userInfo = await DBMgr_1.dbUser.getUserInfoByUid(call.req.uid);
    if (!userInfo) {
        return call.error('INVALID_USER');
    }
    let masterSrvRPC = MasterSrvRPC_1.MasterSrvRPC.get();
    let gameServerPublicUrl = '';
    let gameServerInternalUrl = '';
    let roomId = '';
    let gameType = '';
    let isLeaved = undefined;
    //@en if user's room is valid, then enter the room directly
    //@zh 如果用户之前的房间有效，则直接进入之间的房间
    let loc = await masterSrvRPC.getUserLocation(userInfo.uid);
    if (loc.isSucc && loc.res.roomId) {
        call.logger.log("got user location:", loc);
        let ret = await MatchSrvRPC_1.MatchSrvRPC.get().getRoomState(loc.res.roomId);
        if (ret.isSucc && ((_a = ret.res) === null || _a === void 0 ? void 0 : _a.state)) {
            gameServerPublicUrl = ret.res.state.serverPublicUrl;
            gameServerInternalUrl = ret.res.state.serverInternalUrl;
            roomId = loc.res.roomId;
            gameType = loc.res.gameType;
            isLeaved = loc.res.isLeaved;
        }
    }
    //@zh 尝试踢掉用户
    let ret = await masterSrvRPC.userLoginPrepare(userInfo.uid, gameServerInternalUrl);
    if (!ret.isSucc) {
        return call.error(ret.err.message);
    }
    MasterSrvRPC_1.MasterSrvRPC.get().updateUserLocation([userInfo.uid], { serverUrl: gameServerInternalUrl, roomId: roomId, gameType: gameType, isLeaved });
    let conn = call.conn;
    conn.uid = userInfo.uid;
    conn.dbUserInfo = userInfo;
    if (!userInfo.name) {
        //if name is not set, then  return
        //如果还未创建角色，则直接返回
        call.succ({
            userInfo: {
                name: userInfo.name,
                visualId: userInfo.visualId,
                uid: userInfo.uid,
                gender: userInfo.gender,
                introduction: userInfo.introduction,
            },
            roomId: isLeaved ? "" : roomId,
        });
        return;
    }
    //send an email to user(this is just for test, you can remove it if you don't need)
    //发送一封邮件（这个仅用于测试邮件系统，可根据需要随时移除）
    MailSystem_1.mailSystem.sendMail('system', userInfo.uid, '欢迎登录', userInfo.name + '，你好！\n这封邮件会在你每次登录的时候收到。');
    (_b = LobbySrv_1.lobbySrv.websocketLobbyServer) === null || _b === void 0 ? void 0 : _b.authed(conn);
    call.logger.log("lobby service, user authed:", userInfo);
    call.succ({
        userInfo: {
            name: userInfo.name,
            visualId: userInfo.visualId,
            uid: userInfo.uid,
            gender: userInfo.gender,
            introduction: userInfo.introduction,
            coin: userInfo.coin,
        },
        roomId: isLeaved ? "" : roomId,
    });
}
