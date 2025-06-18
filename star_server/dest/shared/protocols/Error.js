"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ERR_COINS_OVERFLOW = exports.ERR_NO_GAME_SERVER = exports.ERR_IS_IN_GAME = exports.ERR_NO_GAME_CONFIG = exports.ERR_NO_ENOUGH_COINS = exports.ERR_BET = exports.ERR_NOT_LOGIN = void 0;
//用户未登录
exports.ERR_NOT_LOGIN = 10000;
//下注金额错误
exports.ERR_BET = 10001;
//金币不足
exports.ERR_NO_ENOUGH_COINS = 10002;
//游戏配置不存在
exports.ERR_NO_GAME_CONFIG = 10003;
//玩家还在游戏中， 无法匹配新游戏
exports.ERR_IS_IN_GAME = 10004;
//没有可用的房间服务器
exports.ERR_NO_GAME_SERVER = 10005;
//用户金币超过限制
exports.ERR_COINS_OVERFLOW = 10006;
