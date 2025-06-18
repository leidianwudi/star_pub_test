"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MasterSrvRPC = void 0;
const HttpRPC_1 = require("../common/HttpRPC");
const ServerGloabls_1 = require("../common/ServerGloabls");
/**
 * @en use this class to access Master service, and cache the data returned by Master service to prevent Master service from being overloaded by user requests
 * @zh 用于集群内其他进程方便访问 Master 服务,同时缓存 Master 服务返回的数据，以防止被用户请求对Master服务造成压力
*/
const cacheUpdateTime = 500;
class MasterSrvRPC extends HttpRPC_1.HttpRPC {
    static get() {
        return MasterSrvRPC.getRPCClient(ServerGloabls_1.ServerGlobals.masterUrl, MasterSrvRPC);
    }
    constructor(serverUrl) {
        super(serverUrl);
        this._lastLobbyerverListFetchTime = 0;
        this._lastGameServerListFetchTime = 0;
        this._lastGameServerMapFetchTime = 0;
        this._lastMatchServerFetchTime = 0;
    }
    async getLobbyServerList() {
        if (Date.now() - this._lastLobbyerverListFetchTime < cacheUpdateTime) {
            return this._lobbyServerList;
        }
        let ret = await this._httpClient.callApi("master/GetLobbyServerList", {});
        this._lobbyServerList = ret;
        this._lastLobbyerverListFetchTime = Date.now();
        return this._lobbyServerList;
    }
    async getGameServerList() {
        if (Date.now() - this._lastGameServerListFetchTime < cacheUpdateTime) {
            return this._gameServerList;
        }
        let ret = await this._httpClient.callApi("master/GetGameServerList", {});
        this._gameServerList = ret;
        this._lastGameServerListFetchTime = Date.now();
        return this._gameServerList;
    }
    async getGameServerMap() {
        if (Date.now() - this._lastGameServerMapFetchTime < cacheUpdateTime) {
            return this._gameServerMap;
        }
        let ret = await this._httpClient.callApi("master/GetGameServerMap", {});
        this._gameServerMap = ret;
        this._lastGameServerMapFetchTime = Date.now();
        return this._gameServerMap;
    }
    async getMatchServerList() {
        if (Date.now() - this._lastMatchServerFetchTime < cacheUpdateTime) {
            return this._matchServerList;
        }
        let ret = await this._httpClient.callApi("master/GetMatchServerList", {});
        this._matchServerList = ret;
        this._lastMatchServerFetchTime = Date.now();
        return ret;
    }
    reportServer(serverInfo) {
        this._httpClient.callApi("master/ReportServerState", { state: serverInfo });
    }
    async userLoginPrepare(uid, serverUrl) {
        return await this._httpClient.callApi("master/UserLoginPrepare", { uid: uid, serverUrl: serverUrl });
    }
    async getUserLocation(uid) {
        return await this._httpClient.callApi("master/GetUserLocation", { uid: uid });
    }
    async updateUserLocation(uids, params) {
        return await this._httpClient.callApi("master/UpdateUserLocation", { uids: uids, serverUrl: params.serverUrl, roomId: params.roomId, gameType: params.gameType, isLeaved: params.isLeaved });
    }
    async pushMessage(gameType, content, uid) {
        return await this._httpClient.callApi("master/PushMessage", { game: gameType, content: content, uid: uid });
    }
}
exports.MasterSrvRPC = MasterSrvRPC;
