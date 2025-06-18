"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiTryEnterRoom = ApiTryEnterRoom;
const TokenUtils_1 = require("../../common/TokenUtils");
const MatchSrvRPC_1 = require("../../SrvMatch/MatchSrvRPC");
const MasterSrvRPC_1 = require("../../SrvMaster/MasterSrvRPC");
const GameType_1 = require("../../common/GameType");
async function ApiTryEnterRoom(call) {
    var _a;
    let req = call.req;
    let uid = call.conn.uid;
    let ret = await MatchSrvRPC_1.MatchSrvRPC.get().getRoomState(req.id);
    if (!ret.isSucc) {
        call.error('OUT_OF_SERVICE');
        return;
    }
    let roomState = (_a = ret.res) === null || _a === void 0 ? void 0 : _a.state;
    if (!roomState) {
        call.error('ROOM_NOT_EXIST');
        return;
    }
    let oldRoomId = '';
    let loc = await MasterSrvRPC_1.MasterSrvRPC.get().getUserLocation(uid);
    if (loc.isSucc) {
        oldRoomId = loc.res.roomId || '';
    }
    let needCheckPassword = roomState.password && roomState.id != oldRoomId;
    if (needCheckPassword && roomState.password != req.password) {
        return call.error("INVALID_PASSWORD");
    }
    let url = roomState.serverPublicUrl;
    let time = Math.floor(Date.now() / 1000);
    let token = TokenUtils_1.TokenUtils.genGameServerToken(uid, url, roomState.id, roomState.gameType, time);
    let r = (0, GameType_1.parseGameType)(roomState.gameType);
    call.succ({ roomId: roomState.id, gameType: r.major, subType: r.minor, serverUrl: url, token: token, time: time });
}
