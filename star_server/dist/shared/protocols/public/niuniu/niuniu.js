"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.e_room_status = void 0;
/** 房间状态 */
var e_room_status;
(function (e_room_status) {
    e_room_status[e_room_status["Normal"] = 0] = "Normal";
    e_room_status[e_room_status["DengDai"] = 1] = "DengDai";
    e_room_status[e_room_status["Ready"] = 2] = "Ready";
    e_room_status[e_room_status["QiangZhuang"] = 3] = "QiangZhuang";
    e_room_status[e_room_status["ShowRandomZhuang"] = 4] = "ShowRandomZhuang";
    e_room_status[e_room_status["XiaZhu"] = 5] = "XiaZhu";
    e_room_status[e_room_status["TanPai"] = 6] = "TanPai";
    e_room_status[e_room_status["JieSuan"] = 7] = "JieSuan";
})(e_room_status || (exports.e_room_status = e_room_status = {}));
