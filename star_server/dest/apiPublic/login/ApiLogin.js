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
Object.defineProperty(exports, "__esModule", { value: true });
exports.FAILED_ATTEMPT_TIME = exports.LOCK_TIME = exports.MAX_ATTEMPTS = void 0;
exports.ApiLogin = ApiLogin;
const TokenUtils_1 = require("../../common/TokenUtils");
const DBMgr_1 = require("../../db/DBMgr");
const Constants_1 = require("../../shared/configs/Constants");
const uuid = __importStar(require("uuid"));
const MasterSrvRPC_1 = require("../../SrvMaster/MasterSrvRPC");
const ServerGloabls_1 = require("../../common/ServerGloabls");
const LobbySrv_1 = require("../../SrvLobby/LobbySrv");
//密码尝试次数
exports.MAX_ATTEMPTS = 5;
//解锁时间
exports.LOCK_TIME = 10 * 60; //10分钟
//失败次数重新计数时间
exports.FAILED_ATTEMPT_TIME = 5 * 60; // 5分钟
function verifyUserPassword(user, password) {
    let psd = TokenUtils_1.TokenUtils.encodePassword(password);
    return psd == user.password;
}
async function ApiLogin(call) {
    var _a, _b, _c;
    const db = DBMgr_1.sqlDBUser;
    const u = await db.getUser(call.req.account);
    if (!u) {
        return call.error("账号不存在", { code: 'USER_NOT_EXISTS' });
    }
    if (u.locked) {
        let now = new Date();
        if (now.getTime() < u.lockUntil.getTime()) {
            return call.error("账号已锁定", { code: "USER_LOCKED" });
        }
        else {
            //锁定时间已到， 解锁用户
            await db.resetSecurityData(u.id);
        }
    }
    if (!verifyUserPassword(u, call.req.password)) {
        let failedAttempts = 1;
        let lastAttemptTime = ((_a = u.lastAttemptTime) === null || _a === void 0 ? void 0 : _a.getTime()) || 0;
        let now = new Date();
        if (now.getTime() - lastAttemptTime > exports.FAILED_ATTEMPT_TIME * 1000) {
            failedAttempts = 1;
        }
        else {
            failedAttempts = (u.failedAttempts || 0) + 1;
        }
        await db.updateFailedAttempt(u.id, failedAttempts);
        if (failedAttempts >= exports.MAX_ATTEMPTS) {
            await db.lockAccount(u.id, exports.LOCK_TIME);
            return call.error("账号已锁定", { code: "USER_LOCKED" });
        }
        let attempTime = exports.MAX_ATTEMPTS - failedAttempts;
        return call.error(`密码错误, 还剩${attempTime}次尝试机会`, { code: "PASSWORD_FAILED" });
    }
    await db.resetSecurityData(u.id);
    let uid = u.id;
    //保留毫秒
    let time = Math.floor(Date.now());
    let token = TokenUtils_1.TokenUtils.genReloginToken(uid, uuid.v4() + Math.random(), time);
    let sign = TokenUtils_1.TokenUtils.genGameServerToken(uid, token, '', '', time);
    let jwtToken = TokenUtils_1.TokenUtils.genJwtToken(uid, token, time, sign);
    let ret = await MasterSrvRPC_1.MasterSrvRPC.get().getLobbyServerList();
    console.log((_b = ret.res) === null || _b === void 0 ? void 0 : _b.serverList.length);
    let minLoadServer;
    (_c = ret.res) === null || _c === void 0 ? void 0 : _c.serverList.forEach(server => {
        if (!minLoadServer || minLoadServer.userNum > server.userNum) {
            minLoadServer = server;
        }
    });
    if (!minLoadServer && ServerGloabls_1.ServerGlobals.options.servicesMap['lobby']) {
        minLoadServer = LobbySrv_1.lobbySrv.serverState;
    }
    if (!minLoadServer) {
        return call.error("服务器忙，请稍后再试", { code: 'NO_USEABLE_SERVER' });
    }
    if (Constants_1.LOBBY_USE_HTTP) {
        db.updateUserInfoByUid(uid, { token: token });
    }
    call.succ({
        token: token,
        uid: uid,
        time: time,
        sign: sign,
        lobbyUrl: minLoadServer.publicUrl,
        apiToken: jwtToken,
        apiUrl: ServerGloabls_1.ServerGlobals.apiServerUrl,
    });
}
