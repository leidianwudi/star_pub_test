"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiGetRoomListByType = ApiGetRoomListByType;
const MatchSrv_1 = require("../../SrvMatch/MatchSrv");
async function ApiGetRoomListByType(call) {
    let arr = [];
    let roomServers = MatchSrv_1.matchSrv.roomServers;
    roomServers.forEach(roomServer => {
        let rooms = roomServer.rooms;
        for (let j = 0; j < rooms.length; j++) {
            let room = rooms[j];
            if ((room === null || room === void 0 ? void 0 : room.gameType) == call.req.gameType) {
                arr.push(room);
            }
        }
    });
    call.succ({ roomList: arr });
}
