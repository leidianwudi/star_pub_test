"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubGameMSG = void 0;
const define_1 = require("./define");
exports.SubGameMSG = {
    GS_FREE: define_1.gameConst.GAME_STATUS_FREE, //空闲状态
    GS_PLAY: define_1.gameConst.GAME_STATUS_PLAY, //游戏状态
    S_GAME_START: 101, //游戏开始
    C_PLAY: 110, //玩家出牌
    S_PLAY: 111, //通知玩家出牌      
    C_PASS: 121, //玩家过牌
    S_PASS: 122, //推送玩家过牌
    C_TRUSTEESHIP: 125, //托管请求
    S_TRUSTEESHIP: 126, //托管通知
    S_ROOM_SCORE: 129, //房间分数同步
    S_BOMB_SCORE: 130, //炸奖励或罚分数
    S_GAME_END: 131, //结算
};
