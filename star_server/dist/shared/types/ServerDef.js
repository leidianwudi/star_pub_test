"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerType = void 0;
var ServerType;
(function (ServerType) {
    ServerType[ServerType["Master"] = 0] = "Master";
    ServerType[ServerType["Match"] = 1] = "Match";
    ServerType[ServerType["Lobby"] = 2] = "Lobby";
    ServerType[ServerType["Game"] = 3] = "Game";
})(ServerType || (exports.ServerType = ServerType = {}));
