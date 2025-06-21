"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomNiuNiu = void 0;
exports.game_operate_step = game_operate_step;
exports.game_over_logs = game_over_logs;
const niuniu_1 = require("../../shared/protocols/public/niuniu/niuniu");
const Room_1 = require("../Room");
const util_1 = require("./util");
const cmd_1 = require("./cmd");
const player_1 = __importDefault(require("./player"));
const cardLogic_1 = require("./cardLogic");
const app_config_1 = require("./app_config");
const system_code_1 = require("./system_code");
const DBPokerLog_1 = require("../../db/DBPokerLog");
const DBMgr_1 = require("../../db/DBMgr");
const SN_1 = require("../../common/SN");
const Coin_1 = require("../../db/entity/Coin");
const GameType_1 = require("../../common/GameType");
const Constants_1 = require("../../common/Constants");
//时间补充3秒 房间id 3609 有钱, 5倍 
const dt = 1000;
function game_operate_step(paras) {
    let info = {
        m: "api_logs",
        a: "inset_games_list_logs",
        create_time: paras.nowMs,
        token: "",
        games_id: paras.room_id,
        user_id: paras.uid,
        poker_logs: JSON.stringify(paras.cards),
        card_type: paras.card_type,
        operate_type: paras.op_type,
        value_type: paras.bet_scale,
        card_times: paras.card_scale,
        add_time: new Date().getTime(),
    };
    console.debug(`${paras.room_id} ${paras.uid} 中控玩家操作步骤数据, 请求: ${JSON.stringify(info)}`);
}
/**
 * 游戏结束上报到后台
 * @param room_id 房间id
 * @param base_money 房间底金
 * @param sys_add_money 系统收益
 * @param win_user_uid 胜利者的uid
 * @param win_gold 胜利的金额
 * @param fail_user_uid 输家的uid
 * @param fail_gold 输的钱
 */
function game_over_logs(room_id, base_money, sys_add_money, win_user_uid, win_gold, fail_user_uid, fail_gold) {
    let data = {};
    data.room_id = room_id;
    data.status = 1;
    data.base_money = base_money;
    data.total_money = sys_add_money;
    data.game_results_win = JSON.stringify(win_user_uid);
    data.game_results_win_gold = win_gold;
    data.game_results_fail = JSON.stringify(fail_user_uid);
    data.game_results_fail_gold = fail_gold;
    console.debug(`游戏结束上报数据 ${JSON.stringify(data)}`);
}
class RoomNiuNiu {
    constructor(id, gameTpye, displayId, name, password, options) {
        this._instIdBase = 1;
        /** 庄家的座位 */
        this.zJiaSeat = 0;
        /** 当前房间的庄抢的倍数 */
        this.zScale = -1;
        /** 玩家数据 */
        this.players = [];
        /** 当前操作人 */
        this.nowChaId = -1; /// -1不可操作 99所有人可以操作 0~x固定位置可以操作
        /** 操作倒计时 */
        this.logicInterval = 0;
        /** 玩家的id牌 */
        this.idCardArr = {};
        /** 抢庄的数据 */
        this.qiangzhuangArr = [];
        /** 还未下注的闲家 */
        this.noBetPlayerSeat = [];
        /** 风控玩家数量 */
        this.fkUserNum = 0;
        /** fkuid */
        this.fkUid = "";
        /** fkCard */
        this.fkCards = [];
        /** 房间状态 */
        this.status = niuniu_1.e_room_status.Normal;
        /** 房间底分 */
        this.score = 1;
        /** 等待时间 */
        this.waitTime = 0;
        /** 相同抢庄倍数的seat */
        this.sameZhuangScaleSeat = [];
        /** 操作倒计时 */
        this.timeInterval = 0;
        this.room = new Room_1.Room(id, gameTpye, displayId, name, this, 6, 6, password, undefined, false);
        if (options && options.bet != undefined) {
            this.score = options.bet;
        }
        this.playerCount = 0;
        this.waitTime = 0;
        this.status = niuniu_1.e_room_status.Normal;
        this.logicInterval = setInterval(this.update.bind(this), dt);
        this.now = Date.now();
        this.timeInterval = setInterval(() => {
            this.now = Date.now();
        }, 100);
    }
    nowMs() {
        return this.now;
    }
    /** 房间id */
    get id() {
        return this.room.id;
    }
    get logger() {
        return this.room.logger;
    }
    update() {
        this.logger.log(`房间状态是:`, this.status);
        this.logger.log('房间等待时间是:', this.waitTime);
        this.waitTime = this.waitTime - dt;
        if (this.status == niuniu_1.e_room_status.Ready) {
            if (this.waitTime <= 0) { //倒计时结束才触发,进入抢庄阶段,此时第一个人操作
                //游戏开始， 删除在准备阶段退出的玩家
                this.players = this.players.filter((p) => !p.isLeaved);
                for (let i = 0; i < this.players.length; i++) {
                    this.players[i].chairId = i;
                }
                this.waitTime = (app_config_1.svr_config.zhuang_select_scale_time_down + app_config_1.svr_config.start_game_ani) * 1000;
                let op_idx = 0;
                this.nowChaId = op_idx;
                this.status = niuniu_1.e_room_status.QiangZhuang;
                this.room.setPlaying(true);
                this.logger.log(`开始游戏,房间id${this.id},操作人是:${this.nowChaId},总人数${this.players.length}`);
                for (let b = 0; b < this.players.length; b++) {
                    let info = this.players[b];
                    //中控插入玩家步骤
                    game_operate_step({
                        room_id: this.id,
                        uid: info.uid,
                        cards: [],
                        bet_scale: 0,
                        card_scale: 0,
                        card_type: cardLogic_1.e_card_type.kongpaixing,
                        op_type: 4 /* c_operate_type.pipei */,
                        nowMs: this.nowMs(),
                    });
                    let end = {
                        cards: [],
                        z_seat: -1,
                        z_scale: -1,
                        op_seat: op_idx,
                        room_id: this.id,
                        timestamp: this.nowMs(),
                        op_time: this.waitTime,
                        room_status: this.status,
                        players: this.userBaseInfo(info.uid),
                        bet_list: app_config_1.svr_config.cash_scale_list,
                        z_list: app_config_1.svr_config.zhuang_scale_list,
                        used_zhuang: this.userZhuangCanUser(this.nowChaId), //todo 也需要计算只能抢哪些庄
                    };
                    this.logger.log("onStartGame", "发送给 " + info.uid, end);
                    this.sendMsgByUid(cmd_1.cmd.onStartGame, end, info.uid);
                }
            }
        }
        //抢庄阶段
        if (this.status == niuniu_1.e_room_status.QiangZhuang) {
            if (this.waitTime <= 0) {
                for (let player of this.players) {
                    let q = this.qiangzhuangArr.find((q) => q.uid == player.uid);
                    if (!q) {
                        let u = this.room.getUser(player.uid);
                        let scale = 0;
                        if (u && u.isAI) {
                            //ai 玩家
                            let actionChance = [
                                1 - player.I, //不抢
                                0.3 * (1 - player.I), //1倍
                                0.2 * player.I, //2倍
                                0.3 * player.I, //3倍
                                0.5 * Math.pow(player.I, 1.2), //4倍
                                0.7 * Math.pow(player.I, 1.5), //5倍
                            ];
                            let actions = [0, 1, 2, 3, 4, 5];
                            let actionIndex = this.randomAction(actionChance);
                            scale = actions[actionIndex];
                            this.logger.log("ai qiangzhuang scale:", scale);
                        }
                        this.qiangzhuang(player.uid, player.chairId, scale);
                        this.logger.log("用户在指定时间内并未抢庄, uid:", player.uid);
                    }
                }
                this.logger.log(`房间id是:${this.id},当庄的人是:${this.qiangzhuangArr[0].seat},倍数是:${this.qiangzhuangArr[0].scale},进入下注阶段`);
                this.zJiaSeat = this.qiangzhuangArr[0].seat;
                this.zScale = this.qiangzhuangArr[0].scale;
                this.players[this.zJiaSeat].isZhuang = true;
                this.nowChaId = this.zJiaSeat;
                // 判断是否有多个最大的抢庄倍数
                let maxZhuangScaleTimes = 1;
                let qz = this.qiangzhuangArr[0];
                for (let i = 1; i < this.qiangzhuangArr.length; i++) {
                    let q = this.qiangzhuangArr[i];
                    let qscale = q.isGiveUp ? 0 : q.scale;
                    let zscale = qz.isGiveUp ? 0 : qz.scale;
                    if (qscale == zscale) {
                        maxZhuangScaleTimes++;
                    }
                }
                if (maxZhuangScaleTimes > 1) {
                    this.randOneMaxZ();
                    return;
                }
                // 初始化还未下注的闲家
                this.noBetPlayerSeat = this.players.map((p, i) => p.chairId).filter(i => i !== this.zJiaSeat);
                this.logger.log(`房间id是:${this.id},庄家是:${this.zJiaSeat},进入下注阶段,还未下注的玩家是:${this.noBetPlayerSeat}`);
                // 初始化所有玩家的下注倍数
                this.players.forEach(item => {
                    if (!item.isZhuang) {
                        item.bets_scale = 0;
                    }
                });
                this.status = niuniu_1.e_room_status.XiaZhu;
                this.waitTime = app_config_1.svr_config.start_bet_time_down * 1000;
                for (let i = 0; i < this.players.length; i++) {
                    let info = this.players[i];
                    let xz = {
                        bet_list: [],
                        z_scale: this.zScale,
                        z_seat: this.zJiaSeat,
                        op_time: this.waitTime,
                        room_status: this.status,
                        timestamp: this.nowMs(),
                    };
                    xz.bet_list = this.userBetCanUser(info.chairId);
                    this.logger.log("onXiaZhu", "发送给 " + info.uid, xz);
                    this.sendMsgByUid(cmd_1.cmd.onXiaZhu, xz, info.uid);
                }
                return;
            }
        }
        if (this.status == niuniu_1.e_room_status.ShowRandomZhuang) {
            //等待客户端显示随机庄家的动画完成,然后通知客户端下注
            if (this.waitTime <= 0) {
                // 初始化还未下注的闲家
                this.noBetPlayerSeat = this.players.map((p, i) => p.chairId).filter(i => i !== this.zJiaSeat);
                this.logger.log(`房间id是:${this.id},庄家是:${this.zJiaSeat},进入下注阶段,还未下注的玩家是:${this.noBetPlayerSeat}`);
                // 初始化所有玩家的下注倍数
                this.players.forEach(item => {
                    if (!item.isZhuang) {
                        item.bets_scale = 0;
                    }
                });
                this.status = niuniu_1.e_room_status.XiaZhu;
                this.waitTime = app_config_1.svr_config.start_bet_time_down * 1000;
                for (let i = 0; i < this.players.length; i++) {
                    let info = this.players[i];
                    let xz = {
                        bet_list: [],
                        z_scale: this.zScale,
                        z_seat: this.zJiaSeat,
                        op_time: this.waitTime,
                        room_status: this.status,
                        timestamp: this.nowMs(),
                    };
                    xz.bet_list = this.userBetCanUser(info.chairId);
                    this.logger.log("onXiaZhu", "发送给 " + info.uid, xz);
                    this.sendMsgByUid(cmd_1.cmd.onXiaZhu, xz, info.uid);
                }
            }
        }
        // 下注阶段
        if (this.status == niuniu_1.e_room_status.XiaZhu) {
            let doXiaZhu = (p) => {
                this.logger.log(`玩家 ${p.uid} 没有下注,自动下注: ${app_config_1.svr_config.cash_scale_list[0]} 倍`);
                let user = this.room.getUser(p.uid);
                p.bets_scale = app_config_1.svr_config.cash_scale_list[0];
                if (user && user.isAI) {
                    let qz = this.qiangzhuangArr.find((v) => v.uid == p.uid);
                    let R = 0;
                    if (qz === null || qz === void 0 ? void 0 : qz.isGiveUp) {
                        R = 0;
                    }
                    else if (qz) {
                        R = qz.scale;
                    }
                    let actionChance = [
                        1 - p.I + 0.3 * R, //1倍
                        0.6 * p.I + 0.2 * R, //2倍
                        0.8 * p.I + 0.3 * R, //3倍
                        1.0 * p.I + 0.4 * R, //4倍
                        1.2 * p.I + 0.5 * R, //5倍
                    ];
                    let actions = [1, 2, 3, 4, 5];
                    let actionIndex = this.randomAction(actionChance);
                    p.bets_scale = actions[actionIndex];
                    this.logger.log("ai bet scale:", p.bets_scale);
                }
                game_operate_step({
                    cards: [],
                    uid: p.uid,
                    card_scale: 0,
                    room_id: this.id,
                    bet_scale: p.bets_scale,
                    card_type: cardLogic_1.e_card_type.kongpaixing,
                    op_type: 3 /* c_operate_type.xiazhu */,
                    nowMs: this.nowMs(),
                });
                this.logger.log("xiazhu player:", p);
                // 去除已经下注的玩家
                this.noBetPlayerSeat = this.noBetPlayerSeat.filter(i => i !== p.chairId);
                this.broadcastMsg(cmd_1.cmd.onUserXiaZhu, { op_seat: p.chairId, scale: p.bets_scale });
            };
            if (this.waitTime <= 0) {
                this.waitTime = app_config_1.svr_config.tan_pai_wait_time * 1000;
                this.status = niuniu_1.e_room_status.TanPai;
                // 把所有还没下注的玩家设置为0倍
                this.noBetPlayerSeat.forEach(seat => {
                    this.players[seat].bets_scale = 0;
                });
                //检测一下玩家谁没有下注
                for (let i = 0; i < this.players.length; i++) {
                    let p = this.players[i];
                    if (p.bets_scale <= 0 && !p.isZhuang) {
                        doXiaZhu(p);
                    }
                }
                //算牌
                this.loadPlayerscard();
                let tp = {
                    op_time: app_config_1.svr_config.show_time * 1000,
                    room_status: this.status,
                    cards: this.showUserCards(),
                    timestamp: this.nowMs(),
                };
                this.logger.log(`摊牌阶段开始`);
                this.broadcastMsg(cmd_1.cmd.onTanPai, tp);
            }
            else if (this.waitTime <= 4 * 1000) {
                //ai玩家随机时间下注， 25%概率
                for (let i = 0; i < this.players.length; i++) {
                    let p = this.players[i];
                    let user = this.room.getUser(p.uid);
                    if (user && user.isAI && p.bets_scale <= 0 && !p.isZhuang) {
                        let r = Math.random();
                        this.logger.log("xiazhu random:", r, " uid:", user.uid);
                        if (r < 0.25) {
                            doXiaZhu(p);
                        }
                    }
                }
            }
        }
        if (this.status == niuniu_1.e_room_status.TanPai) {
            if (this.waitTime <= 0) {
                this.status = niuniu_1.e_room_status.JieSuan;
                this.room.setPlaying(false);
                this.room.isEnd = true;
                clearInterval(this.logicInterval);
                clearInterval(this.timeInterval);
                let awards = this.getResultToClient();
                let end = {
                    zhuang_seat: this.zJiaSeat,
                    zhuang_scale: this.zScale,
                    timestamp: this.nowMs(),
                    awards: awards,
                    z_uid: this.players[this.zJiaSeat].uid,
                };
                this.jiesuan(awards);
                this.logger.log(`结算阶段开始,房间id是: ${this.id}, 显示牌:`, this.idCardArr);
                this.broadcastMsg(cmd_1.cmd.onGameOver, end);
            }
        }
        if (this.waitTime < -10000) {
            this.waitTime = 0;
        }
    }
    randomAction(actionChance) {
        let total = actionChance.reduce((prev, cur) => prev + cur, 0);
        let r = Math.random() * total;
        let rand = r;
        for (let i = 0; i < actionChance.length; i++) {
            if (r < actionChance[i]) {
                return i;
            }
            r -= actionChance[i];
        }
        this.logger.error("action chance:", actionChance, " rand:", rand, " total:", total, " r:", r);
        throw new Error("can't get action");
    }
    qiangzhuang(uid, seat, scale) {
        if (this.status !== niuniu_1.e_room_status.QiangZhuang)
            return false;
        for (let i = 0; i < this.players.length; i++) {
            if (this.players[i].isZhuang)
                return false;
        }
        let isGiveUp = false;
        if (scale <= 0) {
            scale = 1;
            isGiveUp = true;
        }
        this.logger.log(`${seat} 位置的玩家 ${uid} 抢庄, 当前房间状态 ${this.status}`);
        this.qiangzhuangArr.push({
            uid,
            seat,
            scale,
            isGiveUp,
        });
        // 玩家抢庄倍数
        let p = this.players[seat];
        p.bets_scale = scale;
        //对抢庄倍数进行排序
        this.qiangzhuangArr.sort((a, b) => {
            let scale1 = a.isGiveUp ? 0 : a.scale;
            let scale2 = b.isGiveUp ? 0 : b.scale;
            if (scale1 === scale2) {
                return Math.random() - 0.5;
            }
            else {
                return scale2 - scale1;
            }
        });
        // 最大的设为房间抢庄
        if (this.qiangzhuangArr[0].scale > 0) {
            this.zJiaSeat = this.qiangzhuangArr[0].seat;
            this.zScale = this.qiangzhuangArr[0].scale;
        }
        //中控记录玩家操作步骤
        game_operate_step({
            room_id: this.id,
            uid: uid,
            cards: [],
            bet_scale: scale,
            card_scale: 0,
            card_type: cardLogic_1.e_card_type.kongpaixing,
            op_type: 2 /* c_operate_type.qiangzhuang */,
            nowMs: this.nowMs(),
        });
        let qz = {
            seat: seat,
            scale: scale,
            isGiveUp: isGiveUp,
            z_scale: this.zScale,
            z_seat: this.zJiaSeat,
            op_seat: seat,
            op_time: this.waitTime,
            room_status: this.status,
            timestamp: this.nowMs(),
            used_zhuang: this.userZhuangCanUser(this.nowChaId),
            qiangzhuangArr: this.qiangzhuangArr,
        };
        this.broadcastMsg(cmd_1.cmd.onQiangZhuang, qz);
        this.logger.log(`${seat} 位置玩家 ${uid} 抢庄 倍数是 ${scale}, 庄家:${this.zJiaSeat}, 庄家倍数:${this.zScale}`);
        return true;
    }
    xiazhu(scale, seat, next) {
        this.logger.log(`${seat} 位置玩家下注 ${scale} 倍, 当前房间状态 ${this.status}`);
        if (this.status != niuniu_1.e_room_status.XiaZhu) {
            return next({ code: 2, info: "非下注阶段" });
        }
        //如果是庄就不能下注
        if (this.zJiaSeat == seat) {
            return next({ code: system_code_1.e_err_code.zhuangbunengxiazhu, info: "庄家不能下注" });
        }
        if (scale < 1) {
            return next({ code: 4, info: "下注倍数错误,不能为0" });
        }
        let p = this.players[seat];
        let bets = this.userBetCanUser(seat);
        if (bets.indexOf(Number(scale)) < 0) {
            return next({ code: 3, info: "不能下注的倍数" });
        }
        p.bets_scale = scale;
        // 去除已经下注的玩家
        this.noBetPlayerSeat = this.noBetPlayerSeat.filter(i => i !== seat);
        next({ code: 0, info: "下注成功" });
        this.logger.log(`${seat} 位置的玩家 ${p.uid} 下注成功 下注是 ${scale}`);
        //中控记录下注
        game_operate_step({
            cards: [],
            uid: p.uid,
            card_scale: 0,
            room_id: this.id,
            bet_scale: p.bets_scale,
            card_type: cardLogic_1.e_card_type.kongpaixing,
            op_type: 3 /* c_operate_type.xiazhu */,
            nowMs: this.nowMs(),
        });
        let xz = { op_seat: seat, scale: scale };
        this.broadcastMsg(cmd_1.cmd.onUserXiaZhu, xz);
        //检测每一个下注
        let skipXiaZhu = true;
        for (let a = 0; a < this.players.length; a++) {
            let p = this.players[a];
            this.logger.log(`当前玩家${p.uid} 下注倍数是 ${p.bets_scale}`);
            if (p.bets_scale <= 0) {
                this.logger.log(`检测到还未下注的玩家,继续等待下注`);
                skipXiaZhu = false;
                break;
            }
        }
        if (skipXiaZhu) {
            this.logger.log(`跳过下注回合`);
            this.waitTime = 1000;
        }
    }
    tanpai(seat) {
        this.broadcastMsg(cmd_1.cmd.onPlayerTanPai, { seat });
    }
    /**
     * 恢复游戏
     * @param uid 登录的人
     */
    reenter(uid) {
        if (this.status == niuniu_1.e_room_status.Normal ||
            this.status == niuniu_1.e_room_status.DengDai ||
            this.status == niuniu_1.e_room_status.Ready ||
            this.status == niuniu_1.e_room_status.JieSuan) {
            return false;
        }
        let cards = [];
        let seat = this.getPlayerSeat(uid);
        if (seat >= 0 && seat <= this.players.length - 1) {
            if (this.idCardArr[seat]) {
                cards = this.idCardArr[seat].id_cards;
            }
        }
        let end = {
            room_id: this.id,
            timestamp: this.nowMs(),
            z_scale: this.zScale,
            z_seat: this.zJiaSeat,
            op_seat: this.nowChaId,
            op_time: this.waitTime,
            room_status: this.status,
            players: this.userBaseInfo(uid),
            bet_list: app_config_1.svr_config.cash_scale_list,
            z_list: app_config_1.svr_config.zhuang_scale_list,
            cards: this.status >= niuniu_1.e_room_status.TanPai ? this.showUserCards() : cards,
            room_scale: this.score,
            used_zhuang: this.status == niuniu_1.e_room_status.QiangZhuang ?
                this.userZhuangCanUser(this.nowChaId) :
                this.status == niuniu_1.e_room_status.XiaZhu ? this.userBetCanUser(seat) : [],
        };
        this.logger.log("onResume", "发送给 " + uid, end);
        this.sendMsgByUid(cmd_1.cmd.onResume, end, uid);
    }
    findMaxMoney() {
        let money = 0;
        let seat = 0;
        for (let i = 0; i < this.players.length; i++) {
            let p = this.players[i];
            if (p.gold > money) {
                money = p.gold;
                seat = i;
            }
        }
        return seat;
    }
    loadPlayerscard() {
        if (this.fkUserNum > 0) {
            this.loadFkPlayerCards();
            return;
        }
        let cards = cardLogic_1.Logic.getCards();
        for (let a = 0; a < this.players.length; a++) {
            let no012niu = false;
            // 90%的概率不是012牛
            if (Math.random() < 0.99) {
                no012niu = true;
            }
            // 测试用
            // no012niu = false;
            // no012niu = true;
            this.logger.log(`uid:${this.players[a].uid} 不是012牛:${no012niu}`);
            let p = this.players[a];
            // 创建一个深拷贝的牌堆(只给下一句代码用)
            const copyCardsOut = JSON.parse(JSON.stringify(cards));
            let card = copyCardsOut.splice(0, 5);
            let res = cardLogic_1.Logic.idCardSuan(card);
            if (no012niu) {
                if (res.type == cardLogic_1.e_card_type.kongpaixing || res.type == cardLogic_1.e_card_type.Normal || res.type == cardLogic_1.e_card_type.niu1 || res.type == cardLogic_1.e_card_type.niu2) {
                    this.logger.log(`遇到012牛,重新算牌: ${res.type}`);
                    // 深拷贝一个卡组,用于概率判断
                    const copyCards = JSON.parse(JSON.stringify(cards));
                    while ((res.type == cardLogic_1.e_card_type.kongpaixing || res.type == cardLogic_1.e_card_type.Normal || res.type == cardLogic_1.e_card_type.niu1 || res.type == cardLogic_1.e_card_type.niu2) && copyCards.length > 5) {
                        this.logger.log(`重新算牌: ${res.type}`);
                        this.logger.log(`剩余牌数: ${copyCards.length}`);
                        card = copyCards.splice(0, 5);
                        res = cardLogic_1.Logic.idCardSuan(card);
                        this.logger.log(`重新算牌结果: ${res.type}`);
                        this.logger.log(`重新算牌后剩余牌数: ${copyCards.length}`);
                    }
                    // 在原卡组去除这5张牌
                    for (let i = 0; i < card.length; i++) {
                        for (let j = 0; j < cards.length; j++) {
                            if (card[i].id === cards[j].id) {
                                cards.splice(j, 1);
                                break;
                            }
                        }
                    }
                }
                else {
                    // 初始牌就符合标准,不用重新算牌
                    // 在原卡组去除这5张牌
                    for (let i = 0; i < card.length; i++) {
                        for (let j = 0; j < cards.length; j++) {
                            if (card[i].id === cards[j].id) {
                                cards.splice(j, 1);
                                break;
                            }
                        }
                    }
                }
            }
            else {
                if (res.type != cardLogic_1.e_card_type.kongpaixing && res.type != cardLogic_1.e_card_type.Normal && res.type != cardLogic_1.e_card_type.niu1 && res.type != cardLogic_1.e_card_type.niu2) {
                    // 深拷贝一个卡组,用于概率判断
                    const copyCards = JSON.parse(JSON.stringify(cards));
                    while ((res.type != cardLogic_1.e_card_type.kongpaixing && res.type != cardLogic_1.e_card_type.Normal && res.type != cardLogic_1.e_card_type.niu1 && res.type != cardLogic_1.e_card_type.niu2) && copyCards.length > 5) {
                        card = copyCards.splice(0, 5);
                        res = cardLogic_1.Logic.idCardSuan(card);
                    }
                    // 在原卡组去除这5张牌
                    for (let i = 0; i < card.length; i++) {
                        for (let j = 0; j < cards.length; j++) {
                            if (card[i].id === cards[j].id) {
                                cards.splice(j, 1);
                                break;
                            }
                        }
                    }
                }
                else {
                    // 初始牌就符合标准,不用重新算牌
                    // 在原卡组去除这5张牌
                    for (let i = 0; i < card.length; i++) {
                        for (let j = 0; j < cards.length; j++) {
                            if (card[i].id === cards[j].id) {
                                cards.splice(j, 1);
                                break;
                            }
                        }
                    }
                }
            }
            this.idCardArr[a] = {
                id_cards: res.cards,
                type: res.type,
                scale: res.scale,
            };
            p.cardType = res.type;
            p.cards = res.cards;
            p.card_scale = res.scale;
        }
    }
    /** 加载风控牌 */
    loadFkPlayerCards() {
        //首先取牌,然后把风控玩家的牌过滤掉,
        let cards = cardLogic_1.Logic.getCards();
        if (!this.fkCards || this.fkCards.length < 5) {
            this.fkCards = cards.splice(0, 5);
            this.logger.error("==============风控牌取到的数据为空,这里从自己的牌里随机一套给风控用户", JSON.stringify(this.fkCards));
        }
        ;
        for (let m = 0; m < this.fkCards.length; m++) {
            let fkCard = this.fkCards[m];
            for (let i = 0; i < cards.length; i++) {
                let elemCard = cards[i];
                if (elemCard.color == fkCard.color && elemCard.score == fkCard.score) {
                    cards.splice(i, 1);
                    break;
                }
            }
        }
        //过滤后的牌再去取牌
        for (let a = 0; a < this.players.length; a++) {
            let p = this.players[a];
            let card = [];
            if (p.uid == this.fkUid) { //风控玩家的牌
                card = this.fkCards;
            }
            else {
                card = cards.splice(0, 5);
            }
            let res = cardLogic_1.Logic.idCardSuan(card);
            this.idCardArr[a] = {
                id_cards: res.cards,
                type: res.type,
                scale: res.scale,
            };
            p.cardType = res.type;
            p.cards = res.cards;
            p.card_scale = res.scale;
        }
    }
    userBaseInfo(uid) {
        let users = [];
        for (let i = 0; i < this.players.length; i++) {
            users.push(this.players[i].endBaseInfo(uid));
        }
        return users;
    }
    async jiesuan(users) {
        let r = (0, GameType_1.parseGameType)(this.room.gameType);
        let gameName = (0, Constants_1.getGameName)("poker", r.major) || "";
        for (let u of users) {
            let sn = (0, SN_1.createSN)();
            let user = await DBMgr_1.sqlDBUser.getUserByUid(u.uid);
            if (!user) {
                continue;
            }
            if (u.is_win) {
                await DBPokerLog_1.dbPokerLog.insertPokerLog({ gameCode: r.major, gameName: gameName, roomId: this.room.id, sn: sn, userAccount: user.account, spend: new Coin_1.Coin(0), win: new Coin_1.Coin(u.win_gold), final: new Coin_1.Coin(u.win_gold) });
            }
            else {
                await DBPokerLog_1.dbPokerLog.insertPokerLog({ gameCode: r.major, gameName: gameName, roomId: this.room.id, sn: sn, userAccount: user.account, spend: new Coin_1.Coin(u.win_gold), win: new Coin_1.Coin(0), final: new Coin_1.Coin(u.win_gold) });
            }
        }
    }
    getResultToClient() {
        let sys_add_gold = 0;
        let win_uid = [];
        let fail_uid = [];
        let win_gold = 0;
        let fail_gold = 0;
        let gold = 0;
        let users = [];
        let z_win_fail_gold = 0;
        let zhuang_user = this.players[this.zJiaSeat];
        let zhuang_card = this.idCardArr[this.zJiaSeat];
        for (let i = 0; i < this.players.length; i++) {
            let info = this.players[i];
            if (info.isZhuang) {
                continue;
            }
            let biger = cardLogic_1.Logic.bigerThanZhuang(zhuang_card, this.idCardArr[i]);
            let user_win_fail = 0;
            if (biger) {
                // 闲家赢:= 房间底注*闲家牌型的对应倍数*闲家下注倍数*庄家倍数 
                gold = this.score * Math.max(1, info.card_scale) * Math.max(1, info.bets_scale) * Math.max(1, this.zScale);
                let dtGold = (0, util_1.fomatFloat)(gold * app_config_1.svr_config.lost_percent);
                info.addMoney(dtGold, this.id);
                z_win_fail_gold += -gold;
                //中控数据
                win_gold += dtGold;
                win_uid.push(info.uid);
                user_win_fail = dtGold;
                sys_add_gold += (gold - dtGold);
                info.sendResultToCenter(this.id, this.score, 2 /* e_win_fail.win */, dtGold);
                this.logger.log(`结算数据,闲家胜, 庄家uid:${zhuang_user.uid} 闲家uid:${info.uid}; 房间底注:${this.score} 闲家牌型倍数:${info.card_scale} 闲家下注倍数:${info.bets_scale} 计算的收益是${gold} 扣除百分比是${app_config_1.svr_config.lost_percent} 闲家收益${dtGold} 庄家失去:${-gold}`);
                this.logger.log(`结算数据,操作数量:${z_win_fail_gold}`);
            }
            else {
                // 庄家赢:= 房间底注*庄家牌型的对应倍数*闲家的下注倍数*庄家抢庄倍数
                gold = this.score * Math.max(1, zhuang_user.card_scale) * info.bets_scale * this.zScale;
                info.addMoney(-gold, this.id);
                z_win_fail_gold += gold;
                //中控数据
                fail_gold += -gold;
                user_win_fail = -gold;
                fail_uid.push(info.uid);
                info.sendResultToCenter(this.id, this.score, 1 /* e_win_fail.fail */, -gold);
                this.logger.log(`结算数据,庄家胜, 庄家uid:${zhuang_user.uid} 闲家uid:${info.uid}; 房间底注:${this.score} 庄家牌型倍数:${zhuang_user.card_scale} 庄家抢庄倍数:${this.zScale} 扣除百分比是${app_config_1.svr_config.lost_percent}  闲家失去${-gold} 庄家收益${gold}`);
                this.logger.log(`结算数据,操作数量:${z_win_fail_gold}`);
            }
            let award = {
                uid: info.uid,
                gold: info.gold,
                seat: info.chairId,
                is_win: biger ? 2 /* e_win_fail.win */ : 1 /* e_win_fail.fail */,
                win_gold: user_win_fail,
                user_scale: info.bets_scale,
                type: this.idCardArr[i].type,
                scale: this.idCardArr[i].scale,
                card: this.idCardArr[i].id_cards,
            };
            users.push(award);
        }
        //最后算出庄的输赢
        if (z_win_fail_gold > 0) {
            let z_win = (0, util_1.fomatFloat)(z_win_fail_gold * app_config_1.svr_config.lost_percent);
            sys_add_gold += z_win_fail_gold - z_win;
            zhuang_user.addMoney(z_win, this.id);
            //中控数据
            win_gold += z_win;
            win_uid.push(zhuang_user.uid);
            z_win_fail_gold = z_win;
        }
        else {
            zhuang_user.addMoney(z_win_fail_gold, this.id);
            //中控数据
            fail_gold += z_win_fail_gold;
            fail_uid.push(zhuang_user.uid);
        }
        let zIsWin = (z_win_fail_gold > 0 ? 2 /* e_win_fail.win */ : 1 /* e_win_fail.fail */);
        zhuang_user.bets_scale = this.zScale;
        zhuang_user.sendResultToCenter(this.id, this.score, zIsWin, z_win_fail_gold);
        let z = {
            uid: zhuang_user.uid,
            gold: zhuang_user.gold,
            seat: zhuang_user.chairId,
            is_win: zIsWin,
            user_scale: zhuang_user.bets_scale,
            win_gold: z_win_fail_gold,
            type: zhuang_card.type,
            scale: zhuang_card.scale,
            card: zhuang_card.id_cards,
        };
        users.push(z);
        users.sort((a, b) => { return a.seat - b.seat; });
        //游戏结束上报
        game_over_logs(this.id, this.score, sys_add_gold, win_uid, win_gold, fail_uid, fail_gold);
        return users;
    }
    /**
     * 获取当前玩家可抢庄的对应倍数
     * @param seat 位置
     */
    userZhuangCanUser(seat) {
        // 抢x倍所需分数=房间底分*抢庄x倍*牌型最大倍数*当局闲家数量
        let will_list = [];
        let p = this.players[seat];
        let list = app_config_1.svr_config.zhuang_scale_list;
        for (let i = 0; i < list.length; i++) {
            let ele = list[i];
            let targGold = this.score * ele * app_config_1.svr_config.card_type_max_scale * (this.players.length - 1);
            if (p.gold >= targGold) {
                will_list.push(ele);
            }
        }
        return will_list;
    }
    /**
     * 获取当前玩家可下注的对应倍数
     * @param seat 位置
     */
    userBetCanUser(seat) {
        if (seat === undefined || seat === null)
            return [];
        // 抢x倍所需分数=房间底分*抢庄x倍*牌型最大倍数*当局闲家数量
        let will_list = [];
        let p = this.players[seat];
        let list = app_config_1.svr_config.cash_scale_list;
        for (let i = 0; i < list.length; i++) {
            let ele = list[i];
            let targGold = this.score * ele * app_config_1.svr_config.card_type_max_scale * (this.players.length - 1);
            this.logger.log(`需要${targGold}金币才能下${ele}倍,当前玩家金币${p.gold}`);
            if (p.gold >= targGold) {
                will_list.push(ele);
            }
        }
        return will_list;
    }
    /**
     * 下发用户的牌信息
     * @returns
     */
    showUserCards() {
        let allCards = [];
        for (let i = 0; i < this.players.length; i++) {
            let p = this.players[i];
            allCards.push(p.endUserCards(p.uid));
        }
        return allCards;
    }
    /** 随机找一个庄 */
    randOneMaxZ() {
        if (this.zScale <= 0) {
            this.zScale = app_config_1.svr_config.zhuang_scale_list[0];
            let zSeat = this.findMaxMoney();
            this.zJiaSeat = zSeat;
            this.nowChaId = zSeat;
            this.players[zSeat].isZhuang = true;
            this.players[zSeat].bets_scale = this.zScale;
        }
        else {
            this.players[this.zJiaSeat].isZhuang = true;
        }
        //中控记录玩家操作步骤
        game_operate_step({
            cards: [],
            card_scale: 0,
            room_id: this.id,
            bet_scale: this.zScale,
            card_type: cardLogic_1.e_card_type.kongpaixing,
            op_type: 2 /* c_operate_type.qiangzhuang */,
            uid: this.players[this.zJiaSeat].uid,
            nowMs: this.nowMs(),
        });
        // let qz: i_qz = {
        //     seat: this.findMaxMoney(),
        //     scale: this.zScale,
        //     z_scale: this.zScale,
        //     z_seat: this.zJiaSeat,
        //     qiangzhuangArr: this.qiangzhuangArr,
        //     op_seat: this.nowChaId,
        //     op_time: svr_config.show_bet_time * 1000,
        //     room_status: this.status,
        //     timestamp: this.nowMs(),
        //     used_zhuang: this.userZhuangCanUser(this.nowChaId),
        // }
        // 随机庄家,进入动画播放阶段
        this.players.forEach(p => this.sameZhuangScaleSeat.push(p.chairId));
        // 动画展示的时间(跑马灯变换时间*随机庄人数*跑马灯展示圈数+跑马灯变换时间*庄家seat+庄家动画时间 + 飞倍数时间)
        const timeCount = Math.ceil(app_config_1.svr_config.show_zhuang_time * this.sameZhuangScaleSeat.length * app_config_1.svr_config.quan_shu + app_config_1.svr_config.show_zhuang_time * this.zJiaSeat + app_config_1.svr_config.play_zhuang + app_config_1.svr_config.play_multiple);
        this.logger.log("random zhuang time count:", timeCount, this.sameZhuangScaleSeat.length, this.zJiaSeat);
        // 等待时间 = 动画展示的时间(动画展示时间精度为1s) + 1s
        this.waitTime = Math.ceil(timeCount / 1000) * 1000 + 1000;
        // 下发给客户端的中控数据
        const toClientData = {
            play_multiple: app_config_1.svr_config.play_multiple,
            play_zhuang: app_config_1.svr_config.play_zhuang,
            quan_shu: app_config_1.svr_config.quan_shu,
            show_zhuang_time: app_config_1.svr_config.show_zhuang_time
        };
        // 通知客户端谁当庄
        this.broadcastMsg(cmd_1.cmd.onRandomZhuang, { seat: this.zJiaSeat, zhuangScale: this.zScale, ramdomZhuangArr: this.sameZhuangScaleSeat, room_status: this.status, ...toClientData });
        this.status = niuniu_1.e_room_status.ShowRandomZhuang;
    }
    // private onXiaZhuSendMsg() {
    //     if (!this.isNotifyZhuang && this.waitTime <= 0 && this.status == e_room_status.ShowRandomZhuang) {
    //         const uids = this.players.map(p => p.uid)
    //         // 动画展示的时间(跑马灯变换时间*随机庄人数*跑马灯展示圈数+跑马灯变换时间*庄家seat+庄家动画时间 + 飞倍数时间)
    //         const timeCount = Math.ceil(svr_config.show_zhuang_time * this.sameZhuangScaleSeat.length * svr_config.quan_shu + svr_config.show_zhuang_time * this.zJiaSeat + svr_config.play_zhuang + svr_config.play_multiple)
    //         // 等待时间 = 动画展示的时间(动画展示时间精度为1s) + 1s
    //         this.waitTime = Math.ceil(timeCount / 1000) * 1000 + 1000
    //         // 下发给客户端的中控数据
    //         const toClientData = {
    //             play_multiple: svr_config.play_multiple,
    //             play_zhuang: svr_config.play_zhuang,
    //             quan_shu: svr_config.quan_shu,
    //             show_zhuang_time: svr_config.show_zhuang_time
    //         }
    //         // 通知客户端谁当庄
    //         this.broadcastMsg(cmd.onRandomZhuang, { seat: this.zJiaSeat, zhuangScale: this.zScale, ramdomZhuangArr: this.sameZhuangScaleSeat, room_status: this.status, ...toClientData });
    //         this.isNotifyZhuang = true
    //         this.status = e_room_status.ToXiaZhu
    //     } else if (this.isNotifyZhuang && this.status == e_room_status.ShowRandomZhuang) {
    //         this.waitTime = 0
    //         this.status = e_room_status.ToXiaZhu
    //     }
    //     if (this.waitTime <= 0 && this.status == e_room_status.ToXiaZhu) {
    //         this.status = e_room_status.XiaZhu
    //         // 初始化所有玩家的下注倍数
    //         this.players.forEach(item => {
    //             if (!item.isZhuang) {
    //                 item.bets_scale = 0
    //             }
    //         })
    //         this.waitTime = svr_config.start_bet_time_down * 1000;
    //         let xz: i_xz = {
    //             bet_list: [],
    //             z_scale: this.zScale,
    //             z_seat: this.zJiaSeat,
    //             op_time: this.waitTime,
    //             room_status: this.status,
    //             timestamp: this.nowMs(),
    //         }
    //         for (let i = 0; i < this.players.length; i++) {
    //             let info: PlayerInfo = this.players[i];
    //             xz.bet_list = this.userBetCanUser(info.chairId);
    //             this.logger.log("onXiaZhu", "发送给 " + info.uid, xz);
    //             this.sendMsgByUid(cmd.onXiaZhu, xz, info.uid);
    //         }
    //     }
    // }
    getPlayerSeat(uid) {
        for (let i = 0; i < this.players.length; i++) {
            if (this.players[i].uid == uid) {
                return this.players[i].chairId;
            }
        }
        return -1;
    }
    sendMsgByUid(c, msg, uid) {
        let conn = this.room.getUserConnection(uid);
        if (!conn) {
            this.logger.warn("can't get user connection, uid:", uid);
            return;
        }
        if (c == cmd_1.cmd.onXiaZhu) {
            let m = { ...msg };
            m.z_seat = this.chairIdToSeatId(m.z_seat);
            conn.sendMsg("niuniu/XiaZhu", m);
        }
        else if (c == cmd_1.cmd.onStartGame) {
            let m = { ...msg };
            m.z_seat = this.chairIdToSeatId(m.z_seat);
            m.players = m.players.map((p) => {
                return { ...p, seat: this.chairIdToSeatId(p.seat) };
            });
            conn.sendMsg("niuniu/GameStart", m);
        }
        else if (c == cmd_1.cmd.onResume) {
            let m = { ...msg };
            m.z_seat = this.chairIdToSeatId(m.z_seat);
            m.players = m.players.map((p) => {
                return { ...p, seat: this.chairIdToSeatId(p.seat) };
            });
            conn.sendMsg("niuniu/Resume", m);
        }
    }
    broadcastMsg(c, msg) {
        for (let i = 0; i < this.players.length; i++) {
            let info = this.players[i];
            //中控数据记录摊牌
            if (c == cmd_1.cmd.onTanPai) {
                setTimeout(() => {
                    game_operate_step({
                        room_id: this.id,
                        uid: info.uid,
                        bet_scale: 0,
                        cards: this.idCardArr[info.chairId].id_cards,
                        card_scale: this.idCardArr[info.chairId].scale,
                        card_type: this.idCardArr[info.chairId].type,
                        op_type: 1 /* c_operate_type.sendcard */,
                        nowMs: this.nowMs(),
                    });
                }, 100 * i + 100);
            }
            //中控数据记录gameover
            if (c == cmd_1.cmd.onGameOver) {
                game_operate_step({
                    room_id: this.id,
                    uid: info.uid,
                    cards: [],
                    card_scale: 0,
                    bet_scale: 0,
                    card_type: cardLogic_1.e_card_type.kongpaixing,
                    op_type: 5 /* c_operate_type.gameover */,
                    nowMs: this.nowMs(),
                });
            }
        }
        if (c == cmd_1.cmd.onPlayerTanPai) {
            let tp = { ...msg };
            tp.seat = this.chairIdToSeatId(tp.seat);
            this.room.broadcastMsg("niuniu/PlayerTanPai", tp);
        }
        else if (c == cmd_1.cmd.onRandomZhuang) {
            let m = { ...msg };
            m.seat = this.chairIdToSeatId(m.seat);
            m.ramdomZhuangArr = m.ramdomZhuangArr.map((s) => this.chairIdToSeatId(s));
            this.room.broadcastMsg("niuniu/RandomZhuang", m);
        }
        else if (c == cmd_1.cmd.onTanPai) {
            let tp = { ...msg };
            tp.cards = tp.cards.map((card) => {
                return { ...card, seat: this.chairIdToSeatId(card.seat) };
            });
            this.room.broadcastMsg("niuniu/TanPai", tp);
        }
        else if (c == cmd_1.cmd.onUserXiaZhu) {
            let m = { ...msg };
            m.op_seat = this.chairIdToSeatId(m.op_seat);
            this.room.broadcastMsg("niuniu/UserXiaZhu", m);
        }
        else if (c == cmd_1.cmd.onGameOver) {
            let m = { ...msg };
            m.awards = m.awards.map((a) => {
                return { ...a, seat: this.chairIdToSeatId(a.seat) };
            });
            this.room.broadcastMsg("niuniu/GameOver", m);
        }
        else if (c == cmd_1.cmd.onQiangZhuang) {
            let m = { ...msg };
            m.op_seat = this.chairIdToSeatId(m.op_seat);
            m.z_seat = this.chairIdToSeatId(m.z_seat);
            m.qiangzhuangArr = m.qiangzhuangArr.map((q) => {
                return { ...q, seat: this.chairIdToSeatId(q.seat) };
            });
            this.room.broadcastMsg("niuniu/PlayerQiangZhuang", m);
        }
    }
    async onMsg_Play(call) {
        let seat = this.seatIdToChairId(call.msg.user_seat);
        this.xiazhu(call.msg.bet_scale_val, seat, (res) => {
            this.logger.log("xiazhu result:", res);
        });
    }
    async onMsg_QiangZhuang(call) {
        let conn = call.conn;
        let seat = this.seatIdToChairId(call.msg.user_seat);
        this.qiangzhuang(conn.uid, seat, call.msg.scale_val);
    }
    async onMsg_Showdown(call) {
        let seat = this.seatIdToChairId(call.msg.user_seat);
        this.tanpai(seat);
    }
    listenMsgs(conn) {
        conn.listenMsg("niuniu/Play", call => { this.onMsg_Play(call); });
        conn.listenMsg("niuniu/QiangZhuang", call => { this.onMsg_QiangZhuang(call); });
        conn.listenMsg("niuniu/Showdown", call => { this.onMsg_Showdown(call); });
    }
    unlistenMsgs(conn) {
        conn.unlistenMsgAll("niuniu/Play");
        conn.unlistenMsgAll("niuniu/QiangZhuang");
        conn.unlistenMsgAll("niuniu/Showdown");
    }
    async onUserEnter(user, conn) {
    }
    onPlayerLeave(user, conn) {
        if (this.room.isPlaying) {
            return "ROOM_IS_PLAYING";
        }
        let index = this.players.findIndex((p) => p.uid == user.uid);
        if (index != -1 && !this.players[index].isLeaved) {
            this.playerCount -= 1;
            //不删除，避免chairid的顺序出问题，新加入的玩家会覆盖旧的玩家.
            this.players[index].isLeaved = true;
        }
        if (this.status == niuniu_1.e_room_status.Ready) {
            //游戏开始倒计时过程中有玩家退出游戏， 重置游戏开始倒计时
            this.waitTime = app_config_1.svr_config.room_wait_time * 1000;
        }
        return '';
    }
    onJoinGame(newPlayer, roleName, isAI) {
        if (this.playerCount >= this.room.maxPlayerNum) {
            this.logger.warn("can't join game, room player count oversize");
            return 0;
        }
        if (this.room.isPlaying) {
            this.logger.warn("can't join game, room is playing");
            return 0;
        }
        if (this.room.isReady) {
            this.logger.warn("can't join game, room is ready");
            return 0;
        }
        this.playerCount += 1;
        let playerId = this._instIdBase++;
        let player = new player_1.default();
        player.nickname = newPlayer.name;
        player.gold = newPlayer.coin || 0;
        player.uid = newPlayer.uid;
        player.isZhuang = false;
        player.head = "";
        player.pic = newPlayer.visualId;
        if (newPlayer) {
            //保证后续计算不能出现NAN
            let agg = Math.random(); //[0.15, 0.85]
            agg *= 0.7;
            agg += 0.15;
            let e = (Math.random() * 0.3) - 0.15; //[-0.15, 0.15]
            player.I = agg + e;
            if (player.I < 0.01) {
                player.I = 0.01;
            }
            if (player.I > 0.99) {
                player.I = 0.99;
            }
        }
        let leavedIndex = this.players.findIndex((p) => p.isLeaved);
        if (leavedIndex != -1) {
            //填补之前退出玩家的位置
            player.chairId = this.players[leavedIndex].chairId;
            player.seatId = player.chairId;
            this.players[leavedIndex] = player;
        }
        else {
            player.chairId = this.players.length;
            player.seatId = player.chairId;
            this.players.push(player);
        }
        if (this.status == niuniu_1.e_room_status.Ready) {
            //在游戏准备开始阶段，有新的玩家加入，取消游戏准备开始
            this.status = niuniu_1.e_room_status.Normal;
            this.room.broadcastMsg("niuniu/Reset", {});
        }
        return playerId;
    }
    async onUserReady(newPlayer) {
        //add ai
        if (this.aiTimer === undefined) {
            this.aiTimer = setTimeout(async () => {
                let aiUsers = [];
                while (this.players.length < this.room.maxPlayerNum && this.status == niuniu_1.e_room_status.Normal) {
                    let p = this.room.createAI();
                    this.logger.log("add ai:", p);
                    await this.room.addAI(p, "");
                    aiUsers.push(p);
                }
                for (let p of aiUsers) {
                    await this.room.setReady(p, true);
                }
                this.logger.log("add ai complete.");
            }, 4000);
        }
    }
    onCheckGameBegin() {
        const MIN_PLAYER_COUNT = 3;
        if (this.playerCount < MIN_PLAYER_COUNT) {
            return;
        }
        let allReady = true;
        for (let p of this.players) {
            if (p.isLeaved) {
                continue;
            }
            let u = this.room.getUser(p.uid);
            if (!(u === null || u === void 0 ? void 0 : u.ready)) {
                allReady = false;
            }
        }
        this.logger.log("all players:", this.players, " all ready:", allReady, " room status:", this.status);
        if (!allReady) {
            return;
        }
        if (this.status == niuniu_1.e_room_status.Normal) {
            this.waitTime = app_config_1.svr_config.room_wait_time * 1000;
            this.status = niuniu_1.e_room_status.Ready;
            //开始倒计时
            this.room.isReady = true;
            this.room.broadcastMsg("niuniu/Go", { time: this.waitTime });
        }
        else if (this.status == niuniu_1.e_room_status.Ready) {
            // 如果房间人满，6人，就倒计时3秒开始游戏
            if (this.playerCount == this.room.maxPlayerNum && this.waitTime > 3000) {
                this.waitTime = 3000;
                this.room.broadcastMsg("niuniu/Go", { time: this.waitTime });
            }
        }
    }
    onClientReady(conn) {
        if (!conn.uid) {
            return;
        }
        conn.sendMsg("niuniu/RoomNiuNiu", { room_scale: this.score, room_status: this.status, waitTime: this.waitTime });
        let player = this.players.find((p) => p.uid == conn.uid);
        if (!player) {
            return;
        }
        //玩家断线重连
        this.reenter(conn.uid);
    }
    getPlayerNum() {
        return this.playerCount;
    }
    getChairId(userId) {
        let seat = this.getPlayerSeat(userId);
        if (seat == -1) {
            return undefined;
        }
        return seat;
    }
    checkRoomIdle() {
        if (this.room.isPlaying) {
            return false;
        }
        return this.room.checkEmptyTime();
    }
    //将客户端不连续的椅子id转化为服务端内部连续的椅子id
    seatIdToChairId(seatId) {
        if (seatId == -1) {
            return -1;
        }
        for (let p of this.players) {
            if (p.seatId == seatId) {
                return p.chairId;
            }
        }
        throw new Error("invalid seat id");
    }
    //将服务端连续的椅子id转化为客户端不连续的椅子id
    chairIdToSeatId(chairId) {
        if (chairId == -1) {
            return -1;
        }
        for (let p of this.players) {
            if (p.chairId == chairId) {
                return p.seatId;
            }
        }
        throw new Error("invalid chair id");
    }
    onDestroy() {
        if (this.status != niuniu_1.e_room_status.JieSuan) {
            clearInterval(this.logicInterval);
            clearInterval(this.timeInterval);
        }
    }
}
exports.RoomNiuNiu = RoomNiuNiu;
