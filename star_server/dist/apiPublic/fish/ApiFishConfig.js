"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
async function default_1(call) {
    var _a;
    const conn = call.conn;
    let current = (_a = conn.curRoom) === null || _a === void 0 ? void 0 : _a.listener;
    if (!current) {
        return call.error('NO_TABLE');
    }
    let levels = current.fishGenerator.getBulletLevels();
    let setting = levels.map((bullet) => {
        return { bulletLevel: bullet.cannonType, needGolds: bullet.needGolds };
    });
    call.succ({ bullets: setting });
    call.logger.log("got fish game bullet config,  game type:", current.room.gameType, " config:", setting);
}
