"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiPlacePiece = ApiPlacePiece;
async function ApiPlacePiece(call) {
    var _a;
    const conn = call.conn;
    let current = (_a = conn.curRoom) === null || _a === void 0 ? void 0 : _a.listener;
    if (!current) {
        return call.error('NO_TABLE');
    }
    current.onRPC_PlacePiece(call);
}
