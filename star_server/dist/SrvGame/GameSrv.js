"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gameSrv = exports.GameSrv = void 0;
const WebsocketGameServer_1 = require("../common/WebsocketGameServer");
const MasterSrvRPC_1 = require("../SrvMaster/MasterSrvRPC");
const ServerGloabls_1 = require("../common/ServerGloabls");
const ServerDef_1 = require("../shared/types/ServerDef");
const MatchSrvRPC_1 = require("../SrvMatch/MatchSrvRPC");
const RoomBilliards_1 = require("./RoomBilliards");
const RoomGomoku_1 = require("./RoomGomoku");
const RoomTank_1 = require("./RoomTank");
const RoomTest_1 = require("./RoomTest");
const RoomSlots_1 = require("./RoomSlots");
const RoomFish_1 = require("./RoomFish");
const RoomTienLen_1 = require("./tienlen/RoomTienLen");
const Constants_1 = require("../common/Constants");
const DBMgr_1 = require("../db/DBMgr");
const RoomHoldem_1 = require("./holdem/RoomHoldem");
const RoomNiuNiu_1 = require("./niuniu/RoomNiuNiu");
const GameType_1 = require("../common/GameType");
class GameSrv {
    kickUser(call) {
        if (!call.req.uid) {
            return call.error('uid is required');
        }
        if (this._userStates.has(call.req.uid)) {
            let info = this._userStates.get(call.req.uid);
            if ((info === null || info === void 0 ? void 0 : info.state) == 'loggined') {
                this._userStates.delete(call.req.uid);
                call.succ({});
            }
            else {
                call.error('user is not loggined');
            }
        }
        call.succ({});
    }
    constructor() {
        /***
         * @en used to mark the unique start sequence
         * @zh 用于标记唯一一次启动序列
         */
        this._instanceId = Date.now();
        /**
         * @en if this flag is true, the system won't create new room and match users for this RoomServer (still could join in by roomId).
         * @zh 如果此标记为 true, 则此 RoomServer 会再创建新的房间和匹配新的玩家（依然可以通过房间号进入）。
         */
        this._disabled = false;
        this._userStates = new Map();
        this._roomStateUpdates = {};
        this.allRoomsMap = new Map();
        this.updateTimeCost = 0;
    }
    async init() {
        let args = ServerGloabls_1.ServerGlobals.options;
        if (!args.servicesMap['game'] || !args.gameTypes.length) {
            return;
        }
        this.websocketServer = WebsocketGameServer_1.websocketPublicServer;
        this.serverState = {
            type: ServerDef_1.ServerType.Game,
            interalUrl: ServerGloabls_1.ServerGlobals.options.internalUrl,
            publicUrl: ServerGloabls_1.ServerGlobals.options.publicWsUrl,
            userNum: 0,
            roomNum: 0,
        };
    }
    async start() {
        if (!this.websocketServer) {
            return;
        }
        this._roomStateUpdates = {
            internalUrl: ServerGloabls_1.ServerGlobals.options.internalUrl,
            instanceId: this._instanceId,
            updateRooms: [],
            deleteRooms: [],
        };
        const FPS = 10;
        const deltaTime = 1000 / FPS;
        setInterval(() => {
            this._updateRooms(deltaTime);
        }, deltaTime);
        //@en report state every second
        //@zh 每500ms上报一次状态
        setInterval(() => {
            this.updateRoomStates();
            this.reportServerState();
        }, 500);
        //@en report state at first time
        //@zh 第一次启动，主动上报
        this.reportServerState();
    }
    async tryEnterRoom(conn, roomId, gameType, user) {
        let room = this.allRoomsMap.get(roomId);
        if (!room) {
            return { message: '房间不存在', info: { code: 'ROOM_NOT_EXISTS' } };
        }
        if (!conn.uid) {
            return { message: "用户未登录" };
        }
        //如果用户不在房间中，则需要判断是否超出限制。
        if (!room.isPlayer(conn.uid) && room.userNum >= room.maxUser) {
            return { message: '房间已满员' };
        }
        // 用户已经在本子世界中，可能是通过其它设备登录，踢出旧连接
        room.removeUserConnection(conn.uid);
        // 用户正在其它子世界中，从之前的子世界中退出
        if (conn.curRoom) {
            await conn.curRoom.onRPC_Leave(conn);
        }
        await room.onRPC_Enter(conn, user);
        room.addConnection(conn);
        conn.curRoom = room;
        room.listenMsgs(conn);
        room.lastEmptyTime = undefined;
        room.lastUpdateTime = Date.now();
        MasterSrvRPC_1.MasterSrvRPC.get().updateUserLocation([conn.uid], { serverUrl: ServerGloabls_1.ServerGlobals.options.internalUrl, roomId: room.state.id, gameType: room.state.gameType, isLeaved: false });
    }
    /**
     * 注册到 MasterServer
     */
    async joinMasterServer() {
        // 防止重复连接
        if (this.masterServerConn || this._isJoiningMasterServer) {
            return;
        }
    }
    //
    async createRoom(roomId, displayId, roomName, gameType, password) {
        if (!roomName) {
            roomName = displayId;
        }
        let r = (0, GameType_1.parseGameType)(gameType);
        let mainType = r.major;
        let subType = r.minor;
        let newRoom = null;
        if (gameType == Constants_1.GameType.BILLIARDS) {
            let gameRoom = new RoomBilliards_1.RoomBilliards(roomId, gameType, displayId, roomName, password);
            newRoom = gameRoom.room;
        }
        else if (gameType == Constants_1.GameType.GOMOKU) {
            let gameRoom = new RoomGomoku_1.RoomGomoku(roomId, gameType, displayId, roomName, password);
            newRoom = gameRoom.room;
        }
        else if (gameType == Constants_1.GameType.TANK) {
            let gameRoom = new RoomTank_1.RoomTank(roomId, gameType, displayId, roomName, password);
            newRoom = gameRoom.room;
        }
        else if (gameType == Constants_1.GameType.FISH_MASTER || gameType == Constants_1.GameType.FISH_SHARK || gameType == Constants_1.GameType.FISH_WHALE) {
            //TODO get gameId from client
            let gameId = gameType;
            let setting = await DBMgr_1.dbSlot.getGameSetting(gameId);
            if (!setting) {
                console.warn("can't get game setting, game id:", gameId);
                return null;
            }
            console.log("game id:", gameId, " setting:", setting);
            let gameRoom = new RoomFish_1.RoomFish(roomId, gameType, setting, displayId, roomName, password);
            newRoom = gameRoom.room;
        }
        else if (gameType == Constants_1.GameType.SLOTS_DRAGON ||
            gameType == Constants_1.GameType.SLOTS_OX ||
            gameType == Constants_1.GameType.SLOTS_TIGER ||
            gameType == Constants_1.GameType.SLOTS_MOUSE ||
            gameType == Constants_1.GameType.SLOTS_RABBIT ||
            gameType == Constants_1.GameType.SLOTS_KYLIN ||
            gameType == Constants_1.GameType.SLOTS_SONGKRAN ||
            gameType == Constants_1.GameType.SLOTS_DOUBLE_HAPPY ||
            gameType == Constants_1.GameType.SLOTS_DRAGONHATCH ||
            gameType == Constants_1.GameType.SLOTS_ICEANDFIRE ||
            gameType == Constants_1.GameType.SLOTS_UNICORN ||
            gameType == Constants_1.GameType.SLOTS_LOONG ||
            gameType == Constants_1.GameType.SLOTS_PANDA ||
            gameType == Constants_1.GameType.SLOTS_GANESHAGOLD ||
            gameType == Constants_1.GameType.SLOTS_MJWAYS ||
            gameType == Constants_1.GameType.SLOTS_MJWAYS2 ||
            gameType == Constants_1.GameType.SLOTS_WILDBANDITO) {
            let gameRoom = new RoomSlots_1.RoomSlots(roomId, gameType, displayId, roomName, password);
            newRoom = gameRoom.room;
        }
        else if (gameType == Constants_1.GameType.TIENLEN || mainType == Constants_1.GameType.TIENLEN) {
            let gameId = gameType;
            let setting = await DBMgr_1.dbSlot.getGameSetting(gameId);
            console.log("tienlen game setting:", setting);
            let gameRoom = new RoomTienLen_1.RoomTienLen(roomId, gameType, displayId, roomName, password, setting);
            newRoom = gameRoom.room;
        }
        else if (gameType == Constants_1.GameType.HOLDEM || mainType == Constants_1.GameType.HOLDEM) {
            let gameId = gameType;
            let setting = await DBMgr_1.dbSlot.getGameSetting(gameId);
            console.log("holdem game setting:", setting);
            let winRates = await RoomHoldem_1.RoomHoldem.load();
            let gameRoom = new RoomHoldem_1.RoomHoldem(roomId, gameType, winRates, displayId, roomName, password, setting);
            newRoom = gameRoom.room;
        }
        else if (gameType == Constants_1.GameType.NIUNIU || mainType == Constants_1.GameType.NIUNIU) {
            let gameId = gameType;
            let setting = await DBMgr_1.dbSlot.getGameSetting(gameId);
            console.log("niuniu game setting:", setting);
            let gameRoom = new RoomNiuNiu_1.RoomNiuNiu(roomId, gameType, displayId, roomName, password, setting);
            newRoom = gameRoom.room;
        }
        else if (gameType == Constants_1.GameType.TEST ||
            gameType == Constants_1.GameType.POKER_NIUNIU ||
            gameType == Constants_1.GameType.POKER_PDK_YUENAN ||
            gameType == Constants_1.GameType.SLOTS_DOUBLEFORTUNE ||
            gameType == Constants_1.GameType.BINGO_FROG) {
            let gameRoom = new RoomTest_1.RoomTest(roomId, gameType, displayId, roomName, password);
            newRoom = gameRoom.room;
        }
        if (!newRoom) {
            return null;
        }
        this.allRoomsMap.set(newRoom.id, newRoom);
        return newRoom;
    }
    broadcastInRoom(room, msg) {
        const MAX_CACHED_MESSAGES = 20;
        let len = room.messages.push(msg);
        if (len >= MAX_CACHED_MESSAGES) {
            room.messages.shift();
        }
        room.broadcastMsg('chat/Chat', msg);
    }
    broadcastInAllRooms(msg) {
        this.allRoomsMap.forEach(v => {
            if (msg.channel == 'global' || msg.channel == v.gameType) {
                this.broadcastInRoom(v, msg);
            }
        });
    }
    //消息推送到特定uid
    pushUserMessage(uid, msg) {
        var _a, _b, _c;
        (_a = this.websocketServer) === null || _a === void 0 ? void 0 : _a.logger.log("push user message, uid:", uid, " message:", msg);
        let conn = (_b = exports.gameSrv.websocketServer) === null || _b === void 0 ? void 0 : _b.userId2Conn.get(uid);
        if (conn) {
            conn.sendMsg("game/Push", msg);
        }
        else {
            (_c = this.websocketServer) === null || _c === void 0 ? void 0 : _c.logger.log("Push user message fail, can't find user connection, uid:", uid, " msg:", msg);
        }
    }
    //消息推送到某个游戏的所用用户
    pushGameMessage(gameType, msg) {
        var _a;
        (_a = this.websocketServer) === null || _a === void 0 ? void 0 : _a.logger.log("push game message, game:", gameType, " message:", msg);
        this.allRoomsMap.forEach(v => {
            var _a;
            if (gameType == v.gameType) {
                (_a = this.websocketServer) === null || _a === void 0 ? void 0 : _a.logger.log("Push message to room id:", v.id);
                v.broadcastMsg("game/Push", msg);
            }
        });
    }
    getAllUserLocations() {
        let ret = [];
        this._userStates.forEach(state => {
            ret.push({
                uid: state.uid,
                roomId: state.roomId,
                gameType: state.gameType,
            });
        });
        return ret;
    }
    getAllRoomStates() {
        let allRoomStates = [];
        this.allRoomsMap.forEach(v => {
            allRoomStates.push(v.state);
        });
        return {
            instanceId: this._instanceId,
            internalUrl: ServerGloabls_1.ServerGlobals.options.internalUrl,
            publicUrl: ServerGloabls_1.ServerGlobals.options.publicWsUrl,
            supportedGameTypes: ServerGloabls_1.ServerGlobals.options.gameTypes,
            maxRoomNum: ServerGloabls_1.ServerGlobals.options.maxRoomNum,
            rooms: allRoomStates,
        };
    }
    roomChanged(state) {
        for (let i = 0; i < this._roomStateUpdates.updateRooms.length; ++i) {
            let rs = this._roomStateUpdates.updateRooms[i];
            if (rs.id === state.id) {
                this._roomStateUpdates.updateRooms[i] = state;
                return;
            }
        }
        this._roomStateUpdates.updateRooms.push(state);
    }
    roomDeleted(id) {
        this.allRoomsMap.delete(id);
        this._roomStateUpdates.deleteRooms.push(id);
    }
    _updateRooms(deltaTime) {
        let time = Date.now();
        this.allRoomsMap.forEach(v => {
            v.update(deltaTime);
        });
        this.updateTimeCost = Date.now() - time;
    }
    async updateRoomStates() {
        await MatchSrvRPC_1.MatchSrvRPC.get().updateRoomState(this._roomStateUpdates);
        this._roomStateUpdates.updateRooms = [];
        this._roomStateUpdates.deleteRooms = [];
    }
    reportServerState() {
        if (this.serverState) {
            this.serverState.userNum = this.websocketServer.userNum;
            this.serverState.roomNum = exports.gameSrv.allRoomsMap.size;
            this.serverState.updateTimeCost = exports.gameSrv.updateTimeCost;
            MasterSrvRPC_1.MasterSrvRPC.get().reportServer(this.serverState);
        }
    }
}
exports.GameSrv = GameSrv;
exports.gameSrv = new GameSrv();
