"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchSrvRPC = void 0;
const HttpRPC_1 = require("../common/HttpRPC");
const ServerGloabls_1 = require("../common/ServerGloabls");
const cacheUpdateInterval = 500;
class MatchSrvRPC extends HttpRPC_1.HttpRPC {
    constructor() {
        super(...arguments);
        this._roomListCache = {};
    }
    static get() {
        return MatchSrvRPC.getRPCClient(ServerGloabls_1.ServerGlobals.matchUrl, MatchSrvRPC);
    }
    async addToMatchQueue(uid, type, immediate) {
        return this._httpClient.callApi("match/StartMatch", { uid: uid, type: type, immediate: immediate }, { timeout: 60000 });
    }
    async cancelMatch(uid) {
        return this._httpClient.callApi("match/CancelMatch", { uid: uid });
    }
    async getRoomList(gameType) {
        let cache = this._roomListCache[gameType];
        if (cache && cache.lastUpdateTime + cacheUpdateInterval > Date.now()) {
            return cache.cache;
        }
        let ret = await this._httpClient.callApi("match/GetRoomListByType", { gameType: gameType });
        this._roomListCache[gameType] = {
            lastUpdateTime: Date.now(),
            cache: ret
        };
        return ret;
    }
    async createRoomOnMinLoadServer(uid, roomName, gameType, password) {
        return await this._httpClient.callApi("match/CreateRoomOnMinLoadServer", { uid: uid, roomName: roomName, gameType: gameType, password: password });
    }
    async getRoomState(roomId) {
        return await this._httpClient.callApi("match/GetRoomServerState", { roomId: roomId });
    }
    async updateRoomState(states) {
        await this.httpClient.callApi('match/UpdateRoomState', states);
    }
}
exports.MatchSrvRPC = MatchSrvRPC;
