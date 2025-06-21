"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.masterSrv = exports.MasterSrv = void 0;
const chalk_1 = __importDefault(require("chalk"));
const HttpGameServer_1 = require("../common/HttpGameServer");
const ServerDef_1 = require("../shared/types/ServerDef");
const ServerGloabls_1 = require("../common/ServerGloabls");
const GameSrvRPC_1 = require("../SrvGame/GameSrvRPC");
class MasterSrv {
    get gameServerMap() { return this._gameServerMap; }
    get gameServerList() { return this._gameServerList; }
    get lobbyServerMap() { return this._lobbyServerMap; }
    get lobbyServerList() { return this._lobbyServerList; }
    constructor() {
        this.userLocs = {};
        /** 已注册的 GameServer */
        this._gameServerMap = {};
        this._gameServerList = [];
        /** 已注册的 LobbyServer */
        this._lobbyServerMap = {};
        this._lobbyServerList = [];
        this._tick = 0;
    }
    async init() {
    }
    async start() {
        if (!ServerGloabls_1.ServerGlobals.options.servicesMap['master']) {
            return;
        }
        HttpGameServer_1.internalRPCHttpService.logger.warn(chalk_1.default.greenBright(`[Private] Master Service Stared.`));
        // 检查服务器是否存活
        setInterval(() => {
            this.update();
        }, 3000);
    }
    async update() {
        let lobbyUserNum = 0;
        let gameUserNum = 0;
        let roomNum = 0;
        let lobbyServices = [];
        let gameServices = [];
        this._gameServerList = [];
        this._lobbyServerList = [];
        let keys = Object.keys(this._gameServerMap);
        keys.forEach(key => {
            let serverState = this._gameServerMap[key];
            if (!serverState || Date.now() - serverState.lastUpdateTime > 1000) {
                delete this._gameServerMap[key];
            }
            else {
                this._gameServerList.push(serverState);
                gameServices.push(serverState);
                gameUserNum += serverState.userNum;
                roomNum += serverState.roomNum;
            }
        });
        keys = Object.keys(this._lobbyServerMap);
        keys.forEach(key => {
            let serverState = this._lobbyServerMap[key];
            if (!serverState || Date.now() - serverState.lastUpdateTime > 1000) {
                delete this._lobbyServerMap[key];
            }
            else {
                this._lobbyServerList.push(serverState);
                lobbyServices.push(serverState);
                lobbyUserNum += serverState.userNum;
            }
        });
        if (this._tick % 30 == 0) {
            HttpGameServer_1.internalRPCHttpService.logger.log(`
            [MasterServer 状态播报]
            - 大厅服数量=${lobbyServices.length}
            - 大厅服人数=总:${lobbyUserNum}, [${lobbyServices.map(v => v.userNum).join(',')}]
            - 游戏服数量=${gameServices.length}
            - 游戏服人数=总:${gameUserNum}, [${gameServices.map(v => v.userNum).join(',')}]
            - 游戏服房间数量=总:${roomNum}, [${gameServices.map(v => v.roomNum).join(',')}]
            - 游戏服更新耗时ms=${gameServices.map(v => v.updateTimeCost).join(',')}
            `);
        }
        this._tick += 1;
    }
    getUserLocation(uid) {
        let loc = this.userLocs[uid];
        if (!loc || !this._gameServerMap[loc.serverUrl]) {
            delete this.userLocs[uid];
            return {};
        }
        return loc;
    }
    updateUserLocation(uids, serverUrl, roomId, gameType, isLeaved) {
        if (uids && uids.length) {
            uids.forEach(uid => {
                if (!uid) {
                    console.warn("[updateUserLocation] uid is null");
                    return;
                }
                let loc = this.userLocs[uid] || { serverUrl: '', roomId: '' };
                this.userLocs[uid] = loc;
                if (serverUrl == 'kick') {
                    delete this.userLocs[uid];
                    console.log("[updateUserLocation] delete user:", uid);
                }
                else {
                    if (serverUrl != undefined) {
                        loc.serverUrl = serverUrl;
                    }
                    if (roomId != undefined) {
                        loc.roomId = roomId;
                    }
                    if (gameType != undefined) {
                        loc.gameType = gameType;
                    }
                    if (loc.roomId == "") {
                        loc.isLeaved = true;
                    }
                    else if (isLeaved != undefined) {
                        loc.isLeaved = isLeaved;
                    }
                    console.log("[updateUserLocation] user location:", loc);
                    ;
                }
            });
        }
    }
    async updateServerState(serverState) {
        if (serverState.type == ServerDef_1.ServerType.Lobby) {
            this._updateServerState(serverState, this._lobbyServerMap, this._lobbyServerList);
        }
        else if (serverState.type == ServerDef_1.ServerType.Game) {
            this._updateServerState(serverState, this._gameServerMap, this._gameServerList);
        }
    }
    async _updateServerState(serverState, serverMap, serverList) {
        serverState.lastUpdateTime = Date.now();
        let notExisted = !serverMap[serverState.interalUrl];
        serverMap[serverState.interalUrl] = serverState;
        if (notExisted) {
            serverList.push(serverState);
            /**
             * @en first register, sync data
             * @zh 首次注册，同步数据
            */
            let ret = await GameSrvRPC_1.GameSrvRPC.get(serverState.interalUrl).getAllUserLocations();
            if (ret.isSucc) {
                let locations = ret.res.locations;
                for (let i = 0; i < locations.length; ++i) {
                    let loc = locations[i];
                    this.updateUserLocation([loc.uid], serverState.interalUrl, loc.roomId, loc.gameType);
                }
            }
        }
    }
}
exports.MasterSrv = MasterSrv;
exports.masterSrv = new MasterSrv();
