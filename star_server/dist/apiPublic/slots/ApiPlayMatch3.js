"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiPlayMatch3 = ApiPlayMatch3;
//slots的消消乐模式请求
async function ApiPlayMatch3(call) {
    var _a;
    const conn = call.conn;
    let current = (_a = conn.curRoom) === null || _a === void 0 ? void 0 : _a.listener;
    if (!current) {
        return call.error('NO_TABLE');
    }
    return current.onRPC_PlayMatch3(call);
}
