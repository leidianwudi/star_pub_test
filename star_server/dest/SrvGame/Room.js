"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Room = void 0;
const node_util_1 = __importDefault(require("node:util"));
const node_crypto_1 = __importDefault(require("node:crypto"));
const winston_1 = __importStar(require("winston"));
const tsrpc_1 = require("tsrpc");
const GameSrv_1 = require("./GameSrv");
const MasterSrvRPC_1 = require("../SrvMaster/MasterSrvRPC");
const ServerGloabls_1 = require("../common/ServerGloabls");
const Delay_1 = require("../common/Delay");
/**
 * @en each room stands for a battle level/table or a game room
 * @zh 每一个 Room 表示一个战斗关卡，一张球桌或者一个游戏房间
 */
class Room {
    constructor(id, gameType, displayId, name, listener, maxUserCount, maxPlayerCount, password, emptyTime, leaveInPlaying) {
        /***
         * @en common properties for all rooms.
         * note, these properties are often used to sync to clients.
         * the specific room may add new properties on needs.
         * @zh 所有子世界通用的属性，注意，这些属性一般会用于同步给客户端
         * 具体的子世界有可能会根据需求新增。
         */
        this._roomData = {
            id: '',
            gameType: '',
            displayId: '',
            name: '',
            maxUser: 0,
            messages: [],
            userList: [],
            maxPlayerNum: 0,
            playerNum: 0,
            isPlaying: false,
            isReady: false,
            isEnd: false,
        };
        /**
         * @en key:uid, value:userdata
         * @zh 方便使用 uid 查询用户数据
         **/
        this._userMap = new Map();
        /**
         * @en user connections in this room
         * @zh 这个房间的用户链接
         */
        this.conns = [];
        /**
         * 可以接受广播消息的用户链接
         * */
        this.clientReadyConns = [];
        this._stateDirty = false;
        this.emptyTime = 10 * 1000; //房间最后一个连接断开超过这个时间， 房间主动销毁, 派生类可以修改此值
        //游戏过程中玩家是否可以退出
        this.leaveInPlaying = true;
        this._roomData.id = id;
        this._roomData.gameType = gameType;
        this._roomData.displayId = displayId;
        this._roomData.name = name;
        this._roomData.maxUser = maxUserCount;
        this._roomData.maxPlayerNum = maxPlayerCount;
        if (emptyTime != undefined) {
            this.emptyTime = emptyTime;
        }
        if (leaveInPlaying != undefined) {
            this.leaveInPlaying = leaveInPlaying;
        }
        this._password = password;
        this.lastEmptyTime = undefined;
        this.startMatchTime = undefined;
        this.lastUpdateTime = Date.now();
        this.listener = listener;
        this.logger = this.createLogger();
    }
    createLogger() {
        if (ServerGloabls_1.ServerGlobals.logDir != '') {
            let logger = winston_1.default.createLogger({
                level: 'info',
                format: winston_1.format.combine(winston_1.format.splat(), winston_1.format.timestamp({
                    format: () => {
                        return new Date().toString();
                    }
                }), winston_1.format.simple()),
                transports: [],
            });
            logger.add(new winston_1.default.transports.Console({
                format: winston_1.default.format.simple(),
            }));
            logger.add(new winston_1.default.transports.File({ dirname: ServerGloabls_1.ServerGlobals.logDir, filename: "room_" + this.gameType + "_" + this.id + ".log", maxsize: 1024 * 1024 * 1024, maxFiles: 3 }));
            let l = {
                debug(...args) {
                    let [msg, ...other] = args;
                    msg += this.format(...other);
                    logger.debug(msg);
                },
                log(...args) {
                    let [msg, ...other] = args;
                    msg += this.format(...other);
                    logger.info(msg);
                },
                warn(...args) {
                    let [msg, ...other] = args;
                    msg += this.format(...other);
                    logger.warn(msg);
                },
                error(...args) {
                    let [msg, ...other] = args;
                    msg += this.format(...other);
                    logger.error(msg);
                },
                format(...args) {
                    let r = "";
                    for (let arg of args) {
                        r += node_util_1.default.format(" %o", arg);
                    }
                    return r;
                },
            };
            return l;
        }
        else {
            return new tsrpc_1.PrefixLogger({
                logger: GameSrv_1.gameSrv.websocketServer ? GameSrv_1.gameSrv.websocketServer.logger : console,
                prefixs: [`[Room ${this.id}]`],
            });
        }
    }
    get roomData() {
        return this._roomData;
    }
    get id() {
        return this._roomData.id;
    }
    get gameType() {
        return this._roomData.gameType;
    }
    get maxUser() {
        return this._roomData.maxUser;
    }
    get messages() {
        return this._roomData.messages;
    }
    get isPlaying() {
        return this._roomData.isPlaying;
    }
    get isReady() {
        return this._roomData.isReady;
    }
    set isReady(isReady) {
        this._roomData.isReady = isReady;
        this._stateDirty = true;
    }
    get isEnd() {
        return this._roomData.isEnd;
    }
    set isEnd(isEnd) {
        this._roomData.isEnd = isEnd;
        this._stateDirty = true;
    }
    addUser(aiUser) {
        this._userMap.set(aiUser.uid, aiUser);
        this._roomData.userList.push(aiUser);
    }
    removeUser(uid) {
        this._userMap.delete(uid);
        let index = this._roomData.userList.findIndex((u) => u.uid == uid);
        if (index != -1) {
            this._roomData.userList.splice(index, 1);
        }
    }
    getUser(uid) {
        let user = this._userMap.get(uid);
        return user;
    }
    getUserConnection(uid) {
        return this.conns.find((conn) => conn.uid == uid);
    }
    setPlaying(v) {
        this._roomData.isPlaying = v;
        this._stateDirty = true;
    }
    // protected getPlayerNum() { return 0; }
    /**
     * @en current state of this room, sync to master server
     * @zh 子世界的当前状态，用于同步给 master 服务器
    */
    get state() {
        return {
            id: this._roomData.id,
            displayId: this._roomData.displayId,
            gameType: this.roomData.gameType,
            name: this._roomData.name,
            userNum: this.conns.length,
            maxUserNum: this._roomData.maxUser,
            isPlaying: this._roomData.isPlaying,
            isReady: this._roomData.isReady,
            isEnd: this._roomData.isEnd,
            playerNum: this._roomData.playerNum,
            maxPlayerNum: this._roomData.maxPlayerNum,
            startMatchTime: this.startMatchTime,
            updateTime: this.lastUpdateTime,
            password: this._password
        };
    }
    /**
     * @en current user num
     * @zh 当前用户数量
    */
    get userNum() {
        return this._roomData.userList.length;
    }
    get playerNum() {
        return this._roomData.playerNum;
    }
    get maxPlayerNum() {
        return this._roomData.maxPlayerNum;
    }
    removeUserConnection(uid) {
        for (let i = this.conns.length - 1; i >= 0; --i) {
            let c = this.conns[i];
            if (!c.uid || c.uid === uid) {
                this.conns.splice(i, 1);
            }
        }
        for (let i = this.clientReadyConns.length - 1; i >= 0; --i) {
            let c = this.clientReadyConns[i];
            if (!c.uid || c.uid === uid) {
                this.conns.splice(i, 1);
            }
        }
    }
    removeConnection(conn) {
        this.conns.removeOne(v => v === conn);
        this.clientReadyConns.removeOne(v => v === conn);
    }
    addConnection(conn) {
        this.conns.push(conn);
    }
    /**
     * @en broadcast message to all connections of this room
     * @zh 在房间内广播
     */
    broadcastMsg(msgName, msg) {
        return GameSrv_1.gameSrv.websocketServer.server.broadcastMsg(msgName, msg, this.clientReadyConns);
    }
    onMsg_ClientReady(call) {
        let conn = call.conn;
        if (!conn.uid) {
            this.logger.warn("game connection uid is null");
            return;
        }
        this.clientReadyConns.push(conn);
        conn.sendMsg("room/RoomDataSyncPush", { data: this._roomData });
        if (this.listener.onClientReady) {
            this.listener.onClientReady(conn);
        }
    }
    /**
     * @en listen messages from clients,should be overrded by sub class.
     * @zh 监听来自客户端的消息，子类会重写
     */
    listenMsgs(conn) {
        conn.listenMsg("room/ClientReady", call => this.onMsg_ClientReady(call));
        if (this.listener.listenMsgs) {
            this.listener.listenMsgs(conn);
        }
    }
    /**
     * @en unlisten message handlers,should be overrded by sub class.
     * @zh 取消监听，子类会重写
     */
    unlistenMsgs(conn) {
        conn.unlistenMsgAll("room/ClientReady");
        if (this.listener.unlistenMsgs) {
            this.listener.unlistenMsgs(conn);
        }
    }
    /**
     * @en return whether the given uid refer to a player
     * @zh 返回 uid 对应的是否为玩家
     */
    isPlayer(uid) {
        let user = this._userMap.get(uid);
        if (!user) {
            return false;
        }
        return !!user.playerId;
    }
    /**
     * @en return whether the given uid refer to a watcher
     * @zh 返回 uid 对应的是否为观众
     */
    isWatcher(uid) {
        let user = this._userMap.get(uid);
        if (!user) {
            return false;
        }
        return !user.playerId;
    }
    async setReady(user, value) {
        if (user.ready == true) {
            return;
        }
        user.ready = value;
        await this.listener.onUserReady(user);
        this.broadcastMsg("room/UserDataChangedPush", { uid: user.uid, ready: value });
        this.broadcastMsg("room/UserReady", { uid: user.uid });
        this.listener.onCheckGameBegin();
    }
    //玩家未调用exitroom， socket异常断开
    onDisconnected(conn) {
        const uid = conn.uid;
        if (!uid) {
            return;
        }
        let user = this._userMap.get(uid);
        if (user) {
            user.isOnline = false;
            let now = new Date().getTime();
            user.disconnectTime = now;
            this.broadcastMsg("room/UserDataChangedPush", { uid: uid, isOnline: user.isOnline });
        }
        this.logger.log("connection disconnected, uid:", uid);
        if (this.conns.includes(conn)) {
            this.removeConnection(conn);
            this.unlistenMsgs(conn);
            if (this.conns.length === 0) {
                this.lastEmptyTime = Date.now();
            }
        }
        if (this.listener.onDisconnected) {
            this.listener.onDisconnected(conn);
        }
    }
    update(delTime) {
        if (this.checkRoomIdle()) {
            this.logger.log("room is idle, destroy it, room id:", this._roomData.id);
            this.destroy();
        }
        else {
            if (this.listener.onUpdate) {
                this.listener.onUpdate(delTime);
            }
        }
        this.checkUserReady();
        if (this._stateDirty) {
            GameSrv_1.gameSrv.roomChanged({
                id: this.id,
                userNum: this.userNum,
                playerNum: this._roomData.playerNum,
                isPlaying: this._roomData.isPlaying,
                isEnd: this._roomData.isEnd,
            });
            this._stateDirty = false;
        }
    }
    async destroy() {
        this.logger.log('[Destroy]');
        this._roomData.isPlaying = false;
        GameSrv_1.gameSrv.roomDeleted(this.id);
        //等待room(deleted)状态上报到match server, 避免用户被断开连接后， 再次进入房间
        await (0, Delay_1.delay)(600);
        this.broadcastMsg("room/RoomClosed", { roomId: this._roomData.id, gameType: this.roomData.gameType });
        this.conns.forEach(v => {
            v.close('room_closed');
        });
        this.conns.length = 0;
        if (this.listener.onDestroy) {
            this.listener.onDestroy();
        }
    }
    // ================= called by network ================
    /***
     * @en called by rpc when a user wants to take a seat and be a player.
     * @zh 当用户想要占一个位置，成为玩家时，会被 rpc 调用
     */
    async onRPC_JoinGame(uid, roleName) {
        let user = this._userMap.get(uid);
        if (!user) {
            return 'INVALID_USER_DATA';
        }
        if (!user.playerId) {
            if (this._roomData.isPlaying) {
                return 'GAME_IS_PLAYING';
            }
            if (this._roomData.isReady) {
                return "GAME_IS_READY";
            }
            if (this._roomData.playerNum == this._roomData.maxPlayerNum) {
                return 'NO_EMPTY_SEAT';
            }
            let playerId = this.listener.onJoinGame(user, roleName, false);
            if (playerId) {
                this._roomData.playerNum = this.listener.getPlayerNum();
                user.playerId = playerId;
                user.joinTime = Date.now();
                if (this.listener.getChairId) {
                    user.chairId = this.listener.getChairId(user.uid);
                }
                this.broadcastMsg("room/UserDataChangedPush", { uid: uid, playerId: playerId, chairId: user.chairId });
                this.broadcastMsg("room/RoomDataChangedPush", { numPlayer: this._roomData.playerNum, isPlaying: this._roomData.isPlaying });
                this.broadcastMsg("room/UserJoin", { uid: uid });
            }
        }
        else {
            this.logger.log("user join game, player id:", user.playerId);
        }
    }
    async onRPC_UserReady(call) {
        const conn = call.conn;
        let uid = conn.uid;
        if (!uid) {
            return call.error('INVALID_USER');
        }
        let user = this._userMap.get(uid);
        if (!user) {
            return call.error('INVALID_USER_DATA');
        }
        let value = true;
        await this.setReady(user, value);
        call.succ({});
    }
    async onRPC_Enter(conn, userInfo) {
        this.lastEmptyTime = 0;
        const uid = conn.uid;
        if (!uid) {
            return;
        }
        this.logger.log('[UserEnter], uid:', uid, " user info:", userInfo);
        let user = this._userMap.get(uid);
        if (!user) {
            user = {
                uid: userInfo.uid,
                name: userInfo.name,
                visualId: userInfo.visualId || 0,
                gender: userInfo.gender,
                isOnline: true,
                coin: userInfo.coin,
            };
            this._roomData.userList.push(user);
            this._userMap.set(uid, user);
        }
        else {
            user.isOnline = true;
            user.disconnectTime = undefined;
        }
        this.broadcastMsg("room/UserComesToRoomPush", user);
        await this.listener.onUserEnter(user, conn);
        this._stateDirty = true;
    }
    //添加一个未准备好的ai玩家
    async addAI(aiUser, roleName) {
        if (this._userMap.has(aiUser.uid)) {
            return false;
        }
        this._userMap.set(aiUser.uid, aiUser);
        this._roomData.userList.push(aiUser);
        this.broadcastMsg("room/UserComesToRoomPush", aiUser);
        await this.listener.onUserEnter(aiUser, undefined);
        await this.onRPC_JoinGame(aiUser.uid, roleName);
        this._stateDirty = true;
        return true;
    }
    async enterAI(aiUser, roleName) {
        if (this._userMap.has(aiUser.uid)) {
            return false;
        }
        this._userMap.set(aiUser.uid, aiUser);
        this._roomData.userList.push(aiUser);
        this.broadcastMsg("room/UserComesToRoomPush", aiUser);
        await this.listener.onUserEnter(aiUser, undefined);
        await this.onRPC_JoinGame(aiUser.uid, roleName);
        await this.setReady(aiUser, true);
        this._stateDirty = true;
        return true;
    }
    async onRPC_Leave(conn) {
        const uid = conn.uid;
        if (!uid) {
            return 'INLIAD_UID';
        }
        if (this.isPlaying && !this.leaveInPlaying) {
            //玩家正在游戏中， 用户在游戏结束后，才能匹配新的游戏
            this.removeConnection(conn);
            if (conn) {
                this.unlistenMsgs(conn);
            }
            if (this.conns.length === 0) {
                this.lastEmptyTime = Date.now();
            }
            let user = this.getUser(uid);
            if (user) {
                user.isOnline = false;
                user.disconnectTime = Date.now();
            }
            //更新用户离开房间的状态
            await MasterSrvRPC_1.MasterSrvRPC.get().updateUserLocation([uid], { serverUrl: ServerGloabls_1.ServerGlobals.options.internalUrl, roomId: this.id, gameType: this.gameType, isLeaved: true });
            return;
        }
        /**
        * @en if game is playing, game over. otherwise, clean seat.
        * @zh 如果游戏正在进行中，则不做任何处理
        **/
        for (let i = 0; i < this._roomData.userList.length; ++i) {
            let u = this._roomData.userList[i];
            if (u.uid == uid) {
                if (u.playerId) {
                    let err = this.listener.onPlayerLeave(u, conn);
                    if (err) {
                        return err;
                    }
                }
                this._roomData.userList.splice(i, 1);
                this._userMap.delete(u.uid);
                break;
            }
        }
        this.logger.log('[UserLeave]', uid);
        await MasterSrvRPC_1.MasterSrvRPC.get().updateUserLocation([uid], { serverUrl: ServerGloabls_1.ServerGlobals.options.internalUrl, roomId: '', gameType: '' });
        this.broadcastMsg("room/UserLeavesFromRoomPush", { uid: uid });
        this.removeConnection(conn);
        //this._data.users.removeOne(v => v.uid === currentUser.uid);
        //delete this.players[currentUser.uid]
        this.lastUpdateTime = Date.now();
        if (conn) {
            this.unlistenMsgs(conn);
        }
        if (this.conns.length === 0) {
            this.lastEmptyTime = Date.now();
        }
        this._roomData.playerNum = this.listener.getPlayerNum();
        this._stateDirty = true;
    }
    async checkUserReady() {
        //游戏过程中或者游戏已准备开始，不会主动踢出玩家
        if (this.isPlaying || this.isReady) {
            return;
        }
        //玩家加入游戏后一段时间， 一直处于未准备状态， 服务器主动踢出玩家
        let arr = [];
        const FORCE_LEAVE_TIME = 30 * 1000;
        for (let u of this._roomData.userList) {
            if (u.playerId != 0 && !u.ready && u.joinTime != undefined) {
                let now = new Date().getTime();
                if (now - u.joinTime > FORCE_LEAVE_TIME) {
                    arr.push(u);
                }
            }
        }
        for (let u of arr) {
            await this.kickUser(u.uid);
        }
    }
    //玩家异常中断
    async kickUser(uid) {
        var _a;
        this.logger.log('[kick User]', uid);
        /**
         * @en if game is playing, game over. otherwise, clean seat.
         * @zh 如果游戏正在进行中，则不做任何处理
         **/
        for (let i = 0; i < this._roomData.userList.length; ++i) {
            let u = this._roomData.userList[i];
            if (u.uid == uid) {
                if (u.playerId) {
                    let err = this.listener.onPlayerLeave(u, undefined);
                    if (err) {
                        return err;
                    }
                }
                this._roomData.userList.splice(i, 1);
                this._userMap.delete(u.uid);
                break;
            }
        }
        let conn = this.getUserConnection(uid);
        if (conn) {
            this.removeConnection(conn);
            (_a = GameSrv_1.gameSrv.websocketServer) === null || _a === void 0 ? void 0 : _a.kickUser(conn, "prepare_timeout");
            if (this.conns.length === 0) {
                this.lastEmptyTime = Date.now();
            }
        }
        await MasterSrvRPC_1.MasterSrvRPC.get().updateUserLocation([uid], { serverUrl: ServerGloabls_1.ServerGlobals.options.internalUrl, roomId: '', gameType: '' });
        this.broadcastMsg("room/UserLeavesFromRoomPush", { uid: uid });
        this.lastUpdateTime = Date.now();
        this._roomData.playerNum = this.listener.getPlayerNum();
        this._stateDirty = true;
    }
    //检查房间是否空闲
    checkRoomIdle() {
        if (this.listener.checkRoomIdle) {
            return this.listener.checkRoomIdle();
        }
        else {
            return this.checkEmptyTime();
        }
    }
    checkEmptyTime() {
        if (this.lastEmptyTime && (Date.now() - this.lastEmptyTime >= this.emptyTime)) {
            return true;
        }
        return false;
    }
    createRandomString(length) {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let result = "";
        const randomArray = new Uint8Array(length);
        node_crypto_1.default.getRandomValues(randomArray);
        randomArray.forEach((number) => {
            result += chars[number % chars.length];
        });
        return result;
    }
    createRandomUserName() {
        const ROLE_COUNT = 4;
        const LAST_NAMES = ['赵', '李', '张', '王', '姜', '刘', '孙', '吴', '上官', '欧阳', '百里', '武', '西门', '陈', '潘', '东方', '唐'];
        const GIVEN_NAMES = ['天涯', '雪梨', '天天', '盼盼', '谋谋', '子轩', '童话', '子修', '婉儿', '松韵', '邱泽', '晨晨', '阳阳', '莎莎', '小小', '舞桐'];
        let lastName = LAST_NAMES[Math.floor(Math.random() * LAST_NAMES.length)];
        let givenName = GIVEN_NAMES[Math.floor(Math.random() * GIVEN_NAMES.length)];
        const visualId = Math.floor(Math.random() * ROLE_COUNT);
        return { name: lastName + givenName, visualId };
    }
    createAI() {
        let userID = "user_" + this.createRandomString(4);
        let { name, visualId } = this.createRandomUserName();
        let p = {
            uid: userID,
            name: "ai_" + name,
            visualId: visualId,
            isAI: true,
            isOnline: true,
            ready: false,
            gender: 0,
            coin: Number.MAX_SAFE_INTEGER,
        };
        return p;
    }
}
exports.Room = Room;
