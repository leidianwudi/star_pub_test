"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.matchSrv = exports.MatchSrv = void 0;
const chalk_1 = __importDefault(require("chalk"));
const tsrpc_1 = require("tsrpc");
const TokenUtils_1 = require("../common/TokenUtils");
const HttpGameServer_1 = require("../common/HttpGameServer");
const GameSrvRPC_1 = require("../SrvGame/GameSrvRPC");
const ServerGloabls_1 = require("../common/ServerGloabls");
const Error_1 = require("../shared/protocols/Error");
class MatchSrv {
    constructor() {
        /** key: room server internalUrl */
        this.roomServers = new Map();
        /** key: roomId */
        this.roomStateMap = new Map();
        /**
         * @en rooms that can be matched.
         * @zh 处于匹配中的房间
        */
        this.roomMatchingMap = new Map();
        this.usedRoomDisplayId = new Map();
        // #region 匹配相关
        /** 待匹配队列 */
        this.matchQueue = new Map();
        let logger = new tsrpc_1.TerminalColorLogger();
        this.logger = (0, tsrpc_1.setLogLevel)(logger, "info");
    }
    async init() {
    }
    async start() {
        if (!ServerGloabls_1.ServerGlobals.options.servicesMap['match']) {
            return;
        }
        HttpGameServer_1.internalRPCHttpService.logger.warn(chalk_1.default.greenBright(`[Private] Match Service Stared.`));
        setInterval(async () => { this.update(); }, 3000);
        // 定时执行匹配
        this.update();
    }
    async update() {
        await this.refreshGameServerState();
        await this.startMatch();
    }
    async refreshGameServerState() {
        let deleteKeys = [];
        let validTimestamp = Date.now() - 1000;
        this.roomServers.forEach((roomServer, key) => {
            let isOffline = (roomServer === null || roomServer === void 0 ? void 0 : roomServer.lastUpdateTime) < validTimestamp;
            //if the server is offline, then clean the rooms of it
            //如果服务器不在线，则清理掉它的房间
            if (isOffline) {
                deleteKeys.push(key);
            }
        });
        deleteKeys.forEach(key => {
            let roomServer = this.roomServers.get(key);
            this.cleanRoomsOnServer(roomServer);
            this.roomServers.delete(key);
        });
    }
    cleanRoomsOnServer(roomServer) {
        if (roomServer) {
            console.log('clear rooms on server:', roomServer.publicUrl);
            this.roomServers.delete(roomServer.internalUrl);
            roomServer.rooms.forEach(v => {
                this.removeRoom(v);
            });
        }
    }
    async getAllRoomStates(internalUrl) {
        let ret = await GameSrvRPC_1.GameSrvRPC.get(internalUrl).getRoomStates();
        if (!ret.isSucc) {
            return;
        }
        let roomServer = ret.res;
        roomServer.rooms.forEach(v => {
            v.serverInternalUrl = roomServer.internalUrl;
            v.serverPublicUrl = roomServer.publicUrl;
            this.addNewRoom(v);
        });
        this.roomServers.set(roomServer.internalUrl, roomServer);
        roomServer.lastUpdateTime = Date.now();
    }
    addNewRoom(room) {
        this.usedRoomDisplayId.set(room.displayId, true);
        this.roomStateMap.set(room.id, room);
        this.roomStateMap.set(room.displayId, room);
        if (!room.isPlaying) {
            this.roomMatchingMap.set(room.id, room);
        }
    }
    removeRoom(room, roomServer) {
        this.roomStateMap.delete(room.id);
        this.roomStateMap.delete(room.displayId);
        this.usedRoomDisplayId.delete(room.displayId);
        this.roomMatchingMap.delete(room.id);
        if (roomServer) {
            for (let i = 0; i < roomServer.rooms.length; ++i) {
                let r = roomServer.rooms[i];
                if (r.id === room.id) {
                    roomServer.rooms.splice(i, 1);
                    break;
                }
            }
        }
    }
    async updateRoomStates(updates) {
        let roomServer = this.roomServers.get(updates.internalUrl);
        if (!roomServer || roomServer.instanceId != updates.instanceId) {
            //新的实例，需要更新房间信息
            this.cleanRoomsOnServer(roomServer);
            this.getAllRoomStates(updates.internalUrl);
            return;
        }
        roomServer.lastUpdateTime = Date.now();
        if (updates.updateRooms && updates.updateRooms.length) {
            updates.updateRooms.forEach(v => {
                let roomState = this.roomStateMap.get(v.id);
                if (roomState) {
                    roomState.userNum = v.userNum;
                    roomState.playerNum = v.userNum;
                    if (roomState.isEnd != v.isEnd) {
                        roomState.isEnd = v.isEnd;
                    }
                    if (roomState.isPlaying != v.isPlaying) {
                        roomState.isPlaying = v.isPlaying;
                    }
                    if (roomState.isPlaying || roomState.isEnd) {
                        this.roomMatchingMap.delete(roomState.id);
                    }
                    else {
                        this.roomMatchingMap.set(roomState.id, roomState);
                    }
                    console.log("update room state, room id:", v.id, " room state:", roomState);
                }
            });
        }
        if (updates.deleteRooms && updates.deleteRooms.length) {
            updates.deleteRooms.forEach(v => {
                console.log("delete room state, room id:", v);
                let room = this.roomStateMap.get(v);
                if (room) {
                    this.removeRoom(room, roomServer);
                }
            });
        }
    }
    getRoomState(roomId) {
        return this.roomStateMap.get(roomId);
    }
    async startMatch() {
        await this._doMatch().catch(e => {
            HttpGameServer_1.internalRPCHttpService.server.logger.error('[MatchError]', e);
        });
    }
    async addToMatchQueue(call) {
        let conn = call.conn;
        let c = this.matchQueue.get(call.req.uid);
        if (c) {
            return;
        }
        if (call.req.immediate) {
            await this.quickMatch(call);
        }
        else {
            // 加入匹配队列，待匹配
            this.matchQueue.set(call.req.uid, call);
        }
    }
    async removeFromMatchQueue(call) {
        let conn = call.conn;
        let c = this.matchQueue.get(call.req.uid);
        if (c) {
            this.matchQueue.delete(call.req.uid);
        }
        return call.succ({});
    }
    async quickMatch(call) {
        let gameType = call.req.type;
        let bestMatchedSubWorld = this.getBestMatchedNoFullSubWorld(gameType);
        // 尝试匹配，你可以在此实现自己的匹配规则            
        // 这里简单起见，优先匹配人多的子世界
        let serverUrl = '';
        let roomId = '';
        if (bestMatchedSubWorld) {
            serverUrl = bestMatchedSubWorld.serverPublicUrl;
            roomId = bestMatchedSubWorld.id;
        }
        else {
            /*
            //uncomment this line to enable room server performance testing
            //解开注释，进行房间服负载测试
            for(let i = 0; i < 100; ++i){
                await this._createRoom('', gameType, '');
            }
            */
            // 没有合适的子世界，那么创建一个子世界
            this.logger.log("quick match, create room for gameType:", gameType);
            let retCreateSubWorld = await this._createRoom('', gameType, '');
            if (retCreateSubWorld.isSucc) {
                serverUrl = retCreateSubWorld.res.serverUrl;
                roomId = retCreateSubWorld.res.roomId;
            }
            else {
                this.logger.error("create room err:", retCreateSubWorld.err);
                call.error(retCreateSubWorld.err);
                return false;
            }
        }
        if (serverUrl && roomId) {
            let enterParams = TokenUtils_1.TokenUtils.createEnterRoomParams(call.req.uid, serverUrl, roomId, gameType);
            call.succ(enterParams);
            return true;
        }
        return false;
    }
    getBestMatchedNoFullSubWorld(configId) {
        let roomState = null;
        let minPlayerNum = 1000000000;
        this.roomMatchingMap.forEach(v => {
            //不匹配游戏中和游戏已结束的房间
            if (!v.isEnd && !v.isPlaying && !v.isReady && v.gameType == configId && v.playerNum < v.maxPlayerNum && !v.password && v.playerNum < minPlayerNum) {
                roomState = v;
                minPlayerNum = v.playerNum;
            }
        });
        return roomState;
    }
    /**
     * 执行一次匹配
     */
    async _doMatch() {
        this.logger.debug(`匹配开始，匹配人数=${this.matchQueue.size}`);
        let succNum = 0;
        this.matchQueue.forEach(async (call, key) => {
            let conn = call.conn;
            // 连接已断开，不再匹配
            if (call.conn.status !== tsrpc_1.ConnectionStatus.Opened) {
                this.matchQueue.delete(key);
            }
            let bSuc = await this.quickMatch(call);
            if (bSuc) {
                succNum++;
                this.matchQueue.delete(key);
            }
            else {
                this.matchQueue.delete(key);
            }
        });
        this.logger.debug(`匹配结束，成功匹配人数=${succNum}`);
    }
    // #endregion
    genRoomDisplayId() {
        let roomId = '';
        while (true) {
            roomId = TokenUtils_1.TokenUtils.genID(6, true);
            if (!this.usedRoomDisplayId.has(roomId)) {
                break;
            }
        }
        return roomId;
    }
    getMinLoadRoomServer(gameType) {
        let minLoadServer = undefined;
        this.roomServers.forEach(roomServer => {
            if (roomServer.rooms.length < roomServer.maxRoomNum && roomServer.supportedGameTypes.indexOf(gameType) != -1) {
                if (!minLoadServer || roomServer.rooms.length < minLoadServer.rooms.length) {
                    minLoadServer = roomServer;
                }
            }
        });
        return minLoadServer;
    }
    async createRoom(call) {
        return await this._createRoom(call.req.roomName, call.req.gameType, call.req.password);
    }
    async _createRoom(roomName, gameType, password) {
        // 挑选一个人数最少的 WorldServer
        let roomServer = this.getMinLoadRoomServer(gameType);
        if (!roomServer) {
            return { isSucc: false, err: new tsrpc_1.TsrpcError('没有可用的房间服务器', { code: Error_1.ERR_NO_GAME_SERVER }) };
        }
        let displayId = this.genRoomDisplayId();
        this.usedRoomDisplayId.set(displayId, true);
        let roomId = gameType + '_' + Date.now() + displayId;
        // RPC -> WorldServer
        let op = await GameSrvRPC_1.GameSrvRPC.get(roomServer.internalUrl).httpClient.callApi("game/CreateRoom", {
            roomName: roomName,
            roomId: roomId,
            displayId: displayId,
            gameType: gameType,
            password: password,
        });
        if (!op.isSucc) {
            this.usedRoomDisplayId.delete(displayId);
            return { isSucc: false, err: new tsrpc_1.TsrpcError(op.err) };
        }
        let roomState = op.res.state;
        roomState.serverPublicUrl = roomServer.publicUrl;
        roomState.serverInternalUrl = roomServer.internalUrl;
        roomServer.rooms.push(roomState);
        this.addNewRoom(roomState);
        // Return
        return {
            isSucc: true,
            res: {
                roomId: roomState.id,
                serverUrl: roomServer.publicUrl
            }
        };
    }
}
exports.MatchSrv = MatchSrv;
exports.matchSrv = new MatchSrv();
