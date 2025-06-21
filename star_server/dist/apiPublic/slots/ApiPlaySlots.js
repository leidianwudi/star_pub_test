"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiPlaySlots = ApiPlaySlots;
async function ApiPlaySlots(call) {
    var _a;
    const conn = call.conn;
    let current = (_a = conn.curRoom) === null || _a === void 0 ? void 0 : _a.listener;
    if (!current) {
        return call.error('NO_TABLE');
    }
    return current.onRPC_PlaySlots(call);
}
