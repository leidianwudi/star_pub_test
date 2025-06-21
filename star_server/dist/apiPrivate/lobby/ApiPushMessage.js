"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
const Constants_1 = require("../../common/Constants");
const LobbySrv_1 = require("../../SrvLobby/LobbySrv");
async function default_1(call) {
    let m = { content: call.req.content };
    if (call.req.game == Constants_1.LOBBY) {
        if (call.req.uid) {
            LobbySrv_1.lobbySrv.pushUserMessage(call.req.uid, m);
        }
        else {
            LobbySrv_1.lobbySrv.pushMessage(m);
        }
    }
    call.succ({});
}
