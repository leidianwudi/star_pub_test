"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lobbySrv = exports.LobbySrv = void 0;
const MasterSrvRPC_1 = require("../SrvMaster/MasterSrvRPC");
const HttpGameServer_1 = require("../common/HttpGameServer");
const ServerGloabls_1 = require("../common/ServerGloabls");
const WebsocketGameServer_1 = require("../common/WebsocketGameServer");
const DBMgr_1 = require("../db/DBMgr");
const Constants_1 = require("../shared/configs/Constants");
const ServerDef_1 = require("../shared/types/ServerDef");
class LobbySrv {
    constructor() {
        this._onlineUserMap = new Map();
    }
    async init() {
        if (!ServerGloabls_1.ServerGlobals.options.servicesMap['lobby']) {
            return;
        }
        if (Constants_1.LOBBY_USE_HTTP) {
            this._httpLobbyServer = HttpGameServer_1.httpPublicServer;
            this._httpLobbyServer.server.flows.preApiCallFlow.push(async (call) => {
                var _a;
                if (((_a = call.service.name) === null || _a === void 0 ? void 0 : _a.indexOf('lobby/')) === 0) {
                    let userInfo = await DBMgr_1.dbUser.getUserInfoByToken(call.req.token);
                    if (!userInfo) {
                        call.error('INVALID_TOKEN');
                    }
                    else {
                        call.conn.uid = userInfo.uid;
                        call.conn.dbUserInfo = userInfo;
                        //@en Record the last message time of this user
                        //@zh 记录此用户最近一次的消息时间
                        this._onlineUserMap.set(userInfo.uid, Date.now());
                    }
                }
                return call;
            });
            this.serverState = {
                type: ServerDef_1.ServerType.Lobby,
                interalUrl: ServerGloabls_1.ServerGlobals.options.internalUrl,
                publicUrl: ServerGloabls_1.ServerGlobals.options.publicHttpUrl,
                userNum: 0,
            };
        }
        else {
            this._websocketLobbyServer = WebsocketGameServer_1.websocketPublicServer;
            this.serverState = {
                type: ServerDef_1.ServerType.Lobby,
                interalUrl: ServerGloabls_1.ServerGlobals.options.internalUrl,
                publicUrl: ServerGloabls_1.ServerGlobals.options.publicWsUrl,
                userNum: 0,
            };
        }
    }
    async start() {
        if (!ServerGloabls_1.ServerGlobals.options.servicesMap['lobby']) {
            return;
        }
        if (this._httpLobbyServer) {
            //@en HTTP needs to start a separate online user statistics
            //@zh HTTP 需要启动单独的在线人数统计
            setInterval(() => {
                this.checkOnlineUsers();
            }, 10000);
        }
        if (this._websocketLobbyServer || this._httpLobbyServer) {
            //@en report state every second
            //@zh 每500ms上报一次状态
            setInterval(() => {
                this.reportServerState();
            }, 500);
            //@en report state at first time
            //@zh 第一次启动，主动上报
            this.reportServerState();
        }
    }
    checkOnlineUsers() {
        //@en if no message received in 15 seconds, consider offline
        //@zh 如果 15 秒内没有收到消息，则视为已下线
        let validTimestamp = Date.now() - 15000;
        let deleteKeys = [];
        this._onlineUserMap.forEach((lastMsgTime, key) => {
            if (!lastMsgTime || lastMsgTime < validTimestamp) {
                deleteKeys.push(key);
            }
        });
        deleteKeys.forEach(key => {
            this._onlineUserMap.delete(key);
        });
    }
    reportServerState() {
        if (this.serverState) {
            if (this._websocketLobbyServer) {
                this.serverState.userNum = this._websocketLobbyServer.userNum;
            }
            else if (this._httpLobbyServer) {
                this.serverState.userNum = this._onlineUserMap.size;
            }
            MasterSrvRPC_1.MasterSrvRPC.get().reportServer(this.serverState);
        }
    }
    //push message to uid
    pushUserMessage(uid, msg) {
        if (!this._websocketLobbyServer) {
            return;
        }
        this._websocketLobbyServer.logger.log("push message:", msg, " to uid:", uid);
        let conn = this._websocketLobbyServer.userId2Conn.get(uid);
        if (conn) {
            conn.sendMsg("game/Push", msg);
        }
        else {
            this._websocketLobbyServer.logger.log("Push user message fail, can't find user connection, uid:", uid, " msg:", msg);
        }
    }
    //push msg to every connection
    pushMessage(msg) {
        if (!this._websocketLobbyServer) {
            return;
        }
        this._websocketLobbyServer.logger.log("push message:", msg, " to loggy");
        this._websocketLobbyServer.server.broadcastMsg("game/Push", msg);
    }
    get websocketLobbyServer() {
        return this._websocketLobbyServer;
    }
}
exports.LobbySrv = LobbySrv;
exports.lobbySrv = new LobbySrv();
