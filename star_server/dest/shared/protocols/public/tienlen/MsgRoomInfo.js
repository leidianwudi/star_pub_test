"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameStatus = void 0;
var GameStatus;
(function (GameStatus) {
    GameStatus[GameStatus["GAME_STATUS_FREE"] = 0] = "GAME_STATUS_FREE";
    GameStatus[GameStatus["GAME_STATUS_PLAY"] = 100] = "GAME_STATUS_PLAY";
    GameStatus[GameStatus["GAME_STATUS_WAIT"] = 200] = "GAME_STATUS_WAIT";
    GameStatus[GameStatus["GAME_STATUS_END"] = 300] = "GAME_STATUS_END";
})(GameStatus || (exports.GameStatus = GameStatus = {}));
