"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerApp = void 0;
const uuid_1 = require("uuid");
const node_util_1 = require("node:util");
const GameSrv_1 = require("./SrvGame/GameSrv");
const MasterSrv_1 = require("./SrvMaster/MasterSrv");
const HttpGameServer_1 = require("./common/HttpGameServer");
const ServerGloabls_1 = require("./common/ServerGloabls");
const NetworkUtil_1 = require("./common/NetworkUtil");
const MatchSrv_1 = require("./SrvMatch/MatchSrv");
const MongoDBMain_1 = require("./db/mongodb/MongoDBMain");
const LobbySrv_1 = require("./SrvLobby/LobbySrv");
const WebsocketGameServer_1 = require("./common/WebsocketGameServer");
const DBMgr_1 = require("./db/DBMgr");
const RedisClient_1 = require("./db/RedisClient");
const PinballGame_1 = require("./SrvGame/lineslot/PinballGame");
class ServerApp {
    static async initConfigs() {
        let config = null;
        try {
            config = require('./ecosystem.config.js');
        }
        catch (e) {
            config = require('../ecosystem.config.js');
        }
        let masterCount = 0;
        let matchCount = 0;
        for (let i = 0; i < config.apps.length; ++i) {
            let env = config.apps[i].env;
            let ip = env.ip || NetworkUtil_1.NetworkUtil.getLocalIPv4();
            if (!ServerGloabls_1.ServerGlobals.masterUrl && env.services.indexOf('master') != -1) {
                masterCount++;
                ServerGloabls_1.ServerGlobals.masterUrl = `http://${ip}:${env.internalPort}`;
                ;
            }
            if (!ServerGloabls_1.ServerGlobals.matchUrl && env.services.indexOf('match') != -1) {
                matchCount++;
                ServerGloabls_1.ServerGlobals.matchUrl = `http://${ip}:${env.internalPort}`;
                ;
            }
        }
        if (masterCount != 1) {
            throw Error('Master Service can be only one in server cluster');
        }
        if (matchCount != 1) {
            throw Error('Match Service can be only one in server cluster');
        }
        ServerGloabls_1.ServerGlobals.connectionTickTimeout = config.globalVars.connectionTickTimeout;
        ServerGloabls_1.ServerGlobals.secretKey = config.globalVars.secretKey;
        ServerGloabls_1.ServerGlobals.dbType = config.globalVars.dbType;
        ServerGloabls_1.ServerGlobals.mongodb = config.globalVars.mongodb;
        ServerGloabls_1.ServerGlobals.mysql = config.globalVars.mysql;
        ServerGloabls_1.ServerGlobals.redis = config.globalVars.redis;
        ServerGloabls_1.ServerGlobals.dev = config.globalVars.dev || false;
        ServerGloabls_1.ServerGlobals.logDir = config.globalVars.logDir || '';
        ServerGloabls_1.ServerGlobals.pinball = config.globalVars.pinball;
        ServerGloabls_1.ServerGlobals.holdem = config.globalVars.holdem;
        ServerGloabls_1.ServerGlobals.gameTypes = config.globalVars.gameTypes;
        ServerGloabls_1.ServerGlobals.jwtSecretKey = config.globalVars.jwtSecretKey;
        ServerGloabls_1.ServerGlobals.apiServerUrl = config.globalVars.apiServerUrl;
    }
    static initPublicHttpSecurity() {
        const serverMap = ServerGloabls_1.ServerGlobals.options.servicesMap;
        HttpGameServer_1.httpPublicServer.server.flows.preApiCallFlow.push(async (call) => {
            var _a, _b;
            if (((_a = call.service.name) === null || _a === void 0 ? void 0 : _a.indexOf('login/')) === 0) {
                //@en check if this process has enabled login service
                //@zh 检查是否本进程拥有 login 服务
                if (!serverMap['login']) {
                    call.error('UNKNOWN_ERROR');
                    return;
                }
            }
            else if (((_b = call.service.name) === null || _b === void 0 ? void 0 : _b.indexOf('lobby/')) === 0) {
                //@en check if this process has enabled lobby service
                //@zh 检查是否本进程拥有 lobby 服务
                if (!serverMap['lobby']) {
                    call.error('UNKNOWN_ERROR');
                    return;
                }
                //@en all lobby API calls are required to verify token
                //@zh 所有 lobby API 调用，都需要验证 token
                if (!call.req.token) {
                    call.error('INVALID_TOKEN');
                    return;
                }
            }
            else {
                //@en the rest protocols are only allowed to go through websocket
                //@zh 其他协议，只能走 websocket。
                call.error('UNKNOWN_ERROR');
            }
            return call;
        });
    }
    static async main() {
        node_util_1.inspect.defaultOptions.depth = 6;
        ServerGloabls_1.ServerGlobals.uuid = (0, uuid_1.v4)();
        this.initConfigs();
        await (0, DBMgr_1.dbInitialize)();
        await RedisClient_1.RedisClient.createClient(ServerGloabls_1.ServerGlobals.redis);
        if (ServerGloabls_1.ServerGlobals.pinball && ServerGloabls_1.ServerGlobals.pinball.path) {
            await PinballGame_1.pinballGame.init(ServerGloabls_1.ServerGlobals.pinball.path);
        }
        //从 process.env 中读取配置
        let args = {};
        let env = process.env;
        args.ip = env.ip;
        args.publicHttpPort = Number(env.publicHttpPort || 0);
        args.publicWsPort = Number(env.publicWsPort || 0);
        args.gameTypesMap = {};
        args.gameTypes = [];
        if (env.gameTypes) {
            let arr = env.gameTypes.split(',');
            args.gameTypes = arr;
            arr.forEach(v => {
                args.gameTypesMap[v] = true;
            });
        }
        for (let gameType of ServerGloabls_1.ServerGlobals.gameTypes) {
            if (args.gameTypesMap[gameType] == undefined) {
                args.gameTypes.push(gameType);
                args.gameTypesMap[gameType] = true;
            }
        }
        args.maxRoomNum = Number(env.maxRoomNum || 0);
        args.internalPort = Number(process.env.internalPort || 0);
        args.servicesMap = {};
        args.services = [];
        if (env.services) {
            let arr = env.services.split(',');
            args.services = arr;
            arr.forEach(v => {
                args.servicesMap[v] = true;
            });
        }
        args.publicHttpUrl = env.publicHttpUrl || `http://${NetworkUtil_1.NetworkUtil.getLocalIPv4()}:${env.publicHttpPort}`;
        args.publicWsUrl = env.publicWsUrl || `ws://${NetworkUtil_1.NetworkUtil.getLocalIPv4()}:${env.publicWsPort}`;
        args.internalUrl = `http://${args.ip}:${args.internalPort}`;
        ServerGloabls_1.ServerGlobals.options = args;
        console.log('=============Server App================');
        console.log(ServerGloabls_1.ServerGlobals);
        console.log('=============Server App================');
        // RPC HTTP 服务
        await HttpGameServer_1.internalRPCHttpService.init(args.internalPort, '../apiPrivate');
        if (args.publicHttpPort) {
            HttpGameServer_1.httpPublicServer.init(args.publicHttpPort, '../apiPublic');
            this.initPublicHttpSecurity();
        }
        if (args.publicWsPort) {
            WebsocketGameServer_1.websocketPublicServer.init(args.publicWsPort);
        }
        //======初始化相关服务=====
        await MasterSrv_1.masterSrv.init();
        await MatchSrv_1.matchSrv.init();
        await LobbySrv_1.lobbySrv.init();
        await GameSrv_1.gameSrv.init();
        //=====启动服务====
        await HttpGameServer_1.internalRPCHttpService.start();
        if (ServerGloabls_1.ServerGlobals.dbType == 'mongodb') {
            MongoDBMain_1.mongodbMain.start();
        }
        await MasterSrv_1.masterSrv.start();
        await MatchSrv_1.matchSrv.start();
        await LobbySrv_1.lobbySrv.start();
        await GameSrv_1.gameSrv.start();
        if (args.publicHttpPort) {
            HttpGameServer_1.httpPublicServer.start();
        }
        if (args.publicWsPort) {
            WebsocketGameServer_1.websocketPublicServer.start();
        }
    }
}
exports.ServerApp = ServerApp;
;
if (process.env.internalPort) {
    ServerApp.main();
}
let printMemUsage = false;
if (printMemUsage) {
    let memoryUsageMin = { arrayBuffers: Number.MAX_VALUE, external: Number.MAX_VALUE, heapTotal: Number.MAX_VALUE, heapUsed: Number.MAX_VALUE, rss: Number.MAX_VALUE };
    let memoryUsageMax = { arrayBuffers: 0, external: 0, heapTotal: 0, heapUsed: 0, rss: 0 };
    setInterval(() => {
        let usage = process.memoryUsage();
        memoryUsageMin.arrayBuffers = Math.min(memoryUsageMin.arrayBuffers, usage.arrayBuffers);
        memoryUsageMin.external = Math.min(memoryUsageMin.external, usage.external);
        memoryUsageMin.heapTotal = Math.min(memoryUsageMin.heapTotal, usage.heapTotal);
        memoryUsageMin.heapUsed = Math.min(memoryUsageMin.heapUsed, usage.heapUsed);
        memoryUsageMin.rss = Math.min(memoryUsageMin.rss, usage.rss);
        memoryUsageMax.arrayBuffers = Math.max(memoryUsageMax.arrayBuffers, usage.arrayBuffers);
        memoryUsageMax.external = Math.max(memoryUsageMax.external, usage.external);
        memoryUsageMax.heapTotal = Math.max(memoryUsageMax.heapTotal, usage.heapTotal);
        memoryUsageMax.heapUsed = Math.max(memoryUsageMax.heapUsed, usage.heapUsed);
        memoryUsageMax.rss = Math.max(memoryUsageMax.rss, usage.rss);
        console.log("==== Memory Usage====");
        console.log('ArrayBuffers', memoryUsageMin.arrayBuffers, memoryUsageMax.arrayBuffers, usage.arrayBuffers, usage.arrayBuffers - memoryUsageMin.arrayBuffers);
        console.log('External', memoryUsageMin.external, memoryUsageMax.external, usage.external, usage.external - memoryUsageMin.external);
        console.log('HeapTotal', memoryUsageMin.heapTotal, memoryUsageMax.heapTotal, usage.heapTotal, usage.heapTotal - memoryUsageMin.heapTotal);
        console.log('HeapUsed', memoryUsageMin.heapUsed, memoryUsageMax.heapUsed, usage.heapUsed, usage.heapUsed - memoryUsageMin.heapUsed);
        console.log('Rss', memoryUsageMin.rss, memoryUsageMax.rss, usage.rss, usage.rss - memoryUsageMin.rss);
        //console.log(process.cpuUsage(),process.memoryUsage());
    }, 10000);
}
