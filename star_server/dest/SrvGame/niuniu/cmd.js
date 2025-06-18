"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cmd = void 0;
var cmd;
(function (cmd) {
    /**
     * 心跳
     */
    cmd[cmd["connector_main_heart"] = 0] = "connector_main_heart";
    /**
     * 是否需要恢复
     */
    cmd[cmd["connector_main_isNeedResume"] = 1] = "connector_main_isNeedResume";
    /**
     * 登录
     */
    cmd[cmd["connector_main_login"] = 2] = "connector_main_login";
    /**
     * 匹配
     */
    cmd[cmd["connector_main_match"] = 3] = "connector_main_match";
    /**
     * 抢庄
     */
    cmd[cmd["connector_main_qiangzhuang"] = 4] = "connector_main_qiangzhuang";
    /**
     * 下注
     */
    cmd[cmd["connector_main_xiazhu"] = 5] = "connector_main_xiazhu";
    /**
     * 摊牌
     */
    cmd[cmd["connector_main_tanpai"] = 6] = "connector_main_tanpai";
    /**
     * 取消匹配
     */
    cmd[cmd["connector_main_cancelMatch"] = 7] = "connector_main_cancelMatch";
    /**
     * 聊天
     */
    cmd[cmd["connector_main_chat"] = 8] = "connector_main_chat";
    /**
     * 在线玩家接口
     */
    cmd[cmd["connector_main_online"] = 9] = "connector_main_online";
    /**
     * 踢掉所有用户
     */
    cmd[cmd["onKickUser"] = 10] = "onKickUser";
    /**
     * 聊天下发
     */
    cmd[cmd["onChat"] = 11] = "onChat";
    /**
     * 玩家匹配成功
     */
    cmd[cmd["onPlayerMatch"] = 12] = "onPlayerMatch";
    /**
     * 开始游戏
     */
    cmd[cmd["onStartGame"] = 13] = "onStartGame";
    /**
     * 恢复游戏
     */
    cmd[cmd["onResume"] = 14] = "onResume";
    /**
     * 抢庄
     */
    cmd[cmd["onQiangZhuang"] = 15] = "onQiangZhuang";
    /**
     * 随机庄家通知客户端谁是庄家
     */
    cmd[cmd["onRandomZhuang"] = 16] = "onRandomZhuang";
    /**
     * 下注
     */
    cmd[cmd["onXiaZhu"] = 17] = "onXiaZhu";
    /**
     * 玩家下注通知
     */
    cmd[cmd["onUserXiaZhu"] = 18] = "onUserXiaZhu";
    /**
     * 玩家摊牌广播
     */
    cmd[cmd["onPlayerTanPai"] = 19] = "onPlayerTanPai";
    /**
     * 摊牌阶段
     */
    cmd[cmd["onTanPai"] = 20] = "onTanPai";
    /**
     * 下注结束,游戏结算
     */
    cmd[cmd["onGameOver"] = 21] = "onGameOver";
    /**
     * 机器人匹配游戏
     */
    cmd[cmd["onRobotMatch"] = 22] = "onRobotMatch";
})(cmd || (exports.cmd = cmd = {}));
