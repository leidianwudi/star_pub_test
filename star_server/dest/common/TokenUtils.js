"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenUtils = void 0;
const crypto_1 = __importDefault(require("crypto"));
const ServerGloabls_1 = require("./ServerGloabls");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const IDChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
    'A', 'B', 'C', 'D', 'E', 'F', 'G',
    'H', 'I', 'J', 'K', 'L', 'M', 'N',
    'O', 'P', 'Q', 'R', 'S', 'T',
    'U', 'V', 'W', 'X', 'Y', 'Z'];
class TokenUtils {
    //api 服务器
    static genJwtToken(uid, token, time, sign) {
        let payload = {
            time: time,
            uid: uid,
            token: token,
            sign: sign
        };
        return jsonwebtoken_1.default.sign(payload, ServerGloabls_1.ServerGlobals.jwtSecretKey);
    }
    static genGameServerToken(uid, worldServerUrl, roomId, gameType, time) {
        let content = uid + worldServerUrl + roomId + gameType + time + ServerGloabls_1.ServerGlobals.secretKey;
        let token = crypto_1.default.createHash('md5').update(content).digest('hex');
        return token;
    }
    static genID(len, numOnly) {
        let id = '';
        let charNum = numOnly ? 10 : IDChars.length;
        for (let i = 0; i < len; ++i) {
            id += IDChars[Math.floor(Math.random() * charNum)];
        }
        return id;
    }
    static createEnterRoomParams(uid, worldServerUrl, roomId, gameType) {
        let url = worldServerUrl;
        let time = Math.floor(Date.now() / 1000);
        let token = this.genGameServerToken(uid, url, roomId, gameType, time);
        return { roomId: roomId, gameType: gameType, serverUrl: url, token: token, time: time };
    }
    static genReloginToken(uid, serverUrl, lastLoginTime) {
        let content = uid + serverUrl + lastLoginTime + ServerGloabls_1.ServerGlobals.secretKey;
        let token = crypto_1.default.createHash('md5').update(content).digest('hex');
        return token;
    }
    static md5(content) {
        let md5 = crypto_1.default.createHash('md5').update(content).digest('hex');
        return md5;
    }
    //don't change the implemetation of this function.
    static encodePassword(password) {
        /**@zh note: the key can't be changed once it is enabled, otherwise login will fail
         * @zh 注意：加密 key 一经启用则不能更改，否则会导致登录失败
        */
        let content = password + 'com.kylin.tgx.fullstack.games';
        return crypto_1.default.createHash('sha1').update(content).digest('base64');
    }
}
exports.TokenUtils = TokenUtils;
