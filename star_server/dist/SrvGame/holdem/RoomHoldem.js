"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomHoldem = exports.sql_config = void 0;
exports.game_operate_step = game_operate_step;
exports.game_over_logs = game_over_logs;
exports.add_room_info = add_room_info;
const async_mutex_1 = require("async-mutex");
const Room_1 = require("../Room");
const cardLogic_1 = require("./cardLogic");
const util_1 = require("./util");
const player_1 = __importDefault(require("./player"));
const Coin_1 = require("../../db/entity/Coin");
const DBMgr_1 = require("../../db/DBMgr");
const ai_1 = require("./ai");
const ai2_1 = require("./ai2");
const ai_2 = require("./ai");
const aiRule_1 = require("./aiRule");
const ServerGloabls_1 = require("../../common/ServerGloabls");
const SN_1 = require("../../common/SN");
const DBPokerLog_1 = require("../../db/DBPokerLog");
const GameType_1 = require("../../common/GameType");
const Constants_1 = require("../../common/Constants");
let dt = 1000;
const mutex = new async_mutex_1.Mutex();
//每轮最多加注次数
const MAX_RAISE_COUNT = 3;
exports.sql_config = {
    /** 房间的倍数 */
    room_scale: [10, 20, 50, 100],
    //等待新玩家匹配时间
    room_waiting_time: 15 * 1000,
    /** 游戏匹配等待倒计时 */
    room_start_count_down: 3 * 1000,
    /** 游戏匹配房间不能退出的倒计时 */
    room_start_game_ani: 2 * 1000,
    /** 进入开始游戏,配牌时间 */
    room_licensing_time: 15 * 1000,
    /** 结算抽水0.05的百分比 */
    lost_percent: 0.0,
    /** 下注时间 */
    bet_time: 20 * 1000,
    /**游戏开始到发牌的等待时间-1秒*/
    deal_waiting_time: 2 * 1000,
    /**发牌后下注的等待时间 */
    bet_waiting_time: 3 * 1000,
    /** 流程变更时间 */
    round_change_time: 3 * 1000,
    /** 流程加速时间 */
    round_quick_check: 2 * 1000,
    /** 房间上限 */
    room_num: 20,
    /** 入场限制金币数 */
    join_limit: [[50, 800], [100, 1500], [300, 2500], [1000, 999999999]],
    /** 入场携带金币数量 */
    take_money: [[10, 500], [20, 1000], [50, 1500], [100, 2000]],
    /** allin手牌展示时间 */
    all_in_show: 5 * 1000,
    /** 断线重连时间阈值 */
    Reconnect_Timeout: 5000,
};
function game_operate_step(paras) {
    let data = {
        m: "api_logs",
        a: "inset_games_list_logs",
        token: "",
        games_id: paras.games_id,
        user_id: paras.user_id,
        user_status: paras.user_status,
        operate_type: paras.operate_type,
        stake: paras.stake,
        add_time: paras.add_time,
        poker_logs: paras.poker_logs,
        card_type: paras.card_type,
        hand_card: JSON.stringify(paras.hand_card)
    };
    console.debug(`game_operate_step: 房间id: ${paras.games_id} 用户id: ${paras.user_id} 中控玩家操作步骤数据, 请求: ${JSON.stringify(data)}}`);
}
/**
 * 游戏结束上报到后台
 * @param id id
 * @param status 游戏状态（0,未开始，1、已结束）
 * @param grade 房间等级：1新手模式
 * @param base_money 房间底金
 * @param total_money 房间收益
 * @param game_results_win 赢家收益信息
 * @param game_results_win_gold 赢家收益
 * @param game_results_fail 输家扣分信息
 * @param game_results_fail_gold 输家扣分
 * @param create_time 创建时间
 * @param update_time 结束时间
 */
function game_over_logs(id, status, grade, base_money, total_money, create_time, update_time = undefined, game_results_win, game_results_win_gold, game_results_fail, game_results_fail_gold) {
    let data = {};
    data.status = 1;
    data.id = id;
    data.status = status;
    data.grade = grade;
    data.base_money = base_money;
    data.total_money = total_money;
    data.game_results_win = game_results_win;
    data.game_results_win_gold = game_results_win_gold;
    data.game_results_fail = game_results_fail;
    data.game_results_fail_gold = game_results_fail_gold;
    data.create_time = create_time;
    data.update_time = update_time;
    console.debug(`game_over_logs: 房间id${id} 中控游戏进行中上报数据 ${JSON.stringify(data)} `);
}
//===============================================
/**
 *
 * 添加玩家在房间的信息
 * @param game_id 游戏ID
 * @param user_id 玩家ID
 * @param init_money 进入游戏余额
 * @param pour_money 底金金额
 * @param create_time 创建时间
 */
function add_room_info(params) {
    let data = {
        m: "api_logs",
        a: "inset_games_list",
        token: "",
        games_id: params.games_id,
        user_id: params.user_id,
        open_poker: params.open_poker,
        public_poker: params.public_poker,
        settlement_poker: params.settlement_poker,
        seat: params.seat,
        role: params.role,
        init_money: params.init_money,
        game_init_money: params.game_init_money,
        pour_money: params.pour_money,
        settle_money: params.settle_money,
        is_win: params.is_win,
        create_time: params.create_time,
        update_time: params.update_time
    };
    console.debug(`add_room_info: 中控结算对局详情,请求: ${JSON.stringify(data)}`);
}
class RoomHoldem {
    constructor(id, gameTpye, winRates, displayId, name, password, setting) {
        this._instIdBase = 1;
        /** 房间状态 */
        this.status = 0 /* e_room_status.Normal */;
        /** 轮次状态 */
        this.round_status = 0 /* e_room_round_status.Normal */;
        /** 简单轮次状态 */
        this.round = 0 /* e_room_round.Normal */;
        /** 简单轮次状态的临时记录 */
        this.roundTemp = 0 /* e_room_round.Normal */;
        /** 当前简单轮次状态的下注次数数组 */
        this.roundBetTimes = [];
        /** 结束前轮次 */
        this.endRound = undefined;
        /** 房间底分 */
        this.baseScore = 0;
        /** 房间类型 0普通场 1比赛场 */
        this.roomType = 0;
        /** 本局底池 */
        this.pot = 0;
        /** 边池,边池的定义是
         * 1、在有玩家allin的时候产生一个边池,将之前产生的投注计入边池,
         * 2、之后的投注与该玩家无关,
         * 3、如果该玩家牌力弱于首名,但强于三名,则获得边池奖励 */
        this.sidepot = [];
        /** 等待时间 单位:秒 */
        this.waitTime = 0;
        /** 是否已处理回合初始化 */
        this.roundBegin = false;
        /** 游戏结束时间 */
        this.overTime = 0;
        /** 操作倒计时 */
        this.dt = 0;
        /** 玩家的手牌 */
        this.handCardArr = [];
        /** 玩家数据 */
        this.players = [];
        /** 玩家id */
        this.uids = [];
        /** 投注记录 */
        this.bets = [];
        /** 操作记录 */
        this.ops = [];
        /** 弃牌玩家 */
        this.folds = [];
        /** 全押玩家 */
        this.allin = [];
        /** 全押玩家对应的全押时轮次 */
        this.allin_round = [];
        /** 胜利玩家 */
        this.winner = [];
        /** 失败玩家 */
        this.loser = [];
        /** 平局玩家 */
        this.draw = [];
        /** 玩家金币变化 */
        this.goldChange = [];
        /** 最后加注的玩家座位 */
        this.last_raise = 0;
        /** 最后操作 */
        this.last_action = 0 /* e_player_action.normal */;
        /** 本局游戏的庄家位(如果是2人局,庄家位跟小盲位是同一个) */
        this.button_seat = 0;
        /** 当前操作玩家座位 */
        this.cur_seat = 0;
        /** 小盲玩家座位 */
        this.sb_seat = 0;
        /** 大盲玩家座位 */
        this.bb_seat = 0;
        /** 小盲盲注大小 */
        this.sb_bet = 0;
        /** 大盲盲注大小 */
        this.bb_bet = 0;
        //固定小注, 翻牌前/翻牌圈
        this.sb_bet_limit = 0;
        //固定大注, 转牌圈/河牌圈
        this.bb_bet_limit = 0;
        /** 特殊处理,大盲在翻牌前的第一轮下注结束有一次过牌机会,使用完就无法再次过牌 */
        this.bb_check = false;
        /** 加速处理,没有玩家可以操作 */
        this.quick_check = false;
        /** 公共出牌 */
        this.cardLog = [];
        /** 玩家历史操作 */
        this.playLog = [];
        /** 本局游戏最大赢的金额 */
        this.maxWin = 0;
        /** 系统抽水 */
        this.systemMoney = 0;
        /** 胜利玩家金币总和 */
        this.winMoney = 0;
        this.room = new Room_1.Room(id, gameTpye, displayId, name, this, 6, 6, password, undefined, false);
        this.playerCount = 0;
        this.baseScore = 2;
        if (setting && setting.bet != undefined) {
            this.baseScore = setting.bet;
        }
        //计算大小盲注大小
        this.sb_bet = this.baseScore / 2;
        this.bb_bet = this.baseScore;
        this.sb_bet_limit = this.bb_bet;
        this.bb_bet_limit = this.bb_bet * 2;
        this.waitTime = 0;
        this.winRates = winRates;
        this.ai = { rules: [] };
        this.dt = setInterval(this.update.bind(this), dt);
        this.sn = (0, SN_1.createSN)();
    }
    static async load() {
        console.log("load winrate from:", ServerGloabls_1.ServerGlobals.holdem.winRatePath);
        let winRates = await (0, ai_1.parseWinRate)(ServerGloabls_1.ServerGlobals.holdem.winRatePath);
        return winRates;
    }
    getLockKey() {
        return 0;
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
    /**
     * 房间是否在加速中,流程加速不允许外部操作
     * @returns
     */
    isQuick() {
        return this.quick_check;
    }
    /**
     * 等待阶段过程
     */
    Waiting_process() {
        if (this.players.length >= 2) {
            //人数满足, 进入准备阶段
            this.status = 2 /* e_room_status.Ready */;
            this.waitTime = exports.sql_config.room_start_count_down;
            this.room.isReady = true;
        }
    }
    /**
     * 准备阶段过程
     */
    Ready_process() {
        //等待时间结束, 
        this.status = 3 /* e_room_status.Play */;
        this.waitTime = exports.sql_config.deal_waiting_time;
        //开始游戏
        let players = this.players.filter((p) => !p.isLeaved);
        this.players = players;
        this.startGame();
        let response = {
            room_id: this.id,
            room_status: 3 /* e_room_status.Play */,
            licensing_time: exports.sql_config.room_licensing_time,
            action_time: exports.sql_config.bet_time,
            allin_time: exports.sql_config.all_in_show,
            button_seat: this.button_seat,
            sb_seat: this.sb_seat,
            bb_seat: this.bb_seat,
            sb_bet: this.sb_bet,
            bb_bet: this.bb_bet
        };
        //游戏进行中,更新游戏记录
        this.logger.log(`房间${this.id}游戏进行中,调用了update_games函数`);
        this.logger.debug(`开始游戏时,this.players长度:${this.players.length}`);
        for (let i = 0; i < this.players.length; i++) {
            this.logger.debug(`开始游戏时:下发第${i + 1}个startGame:${this.players[i].uid}`);
            this.notifyStartGame(response, this.players[i].uid);
        }
    }
    /**
     * 游戏阶段过程
     * @returns
     */
    Play_process() {
        this.logger.debug(`==============play, this.cur_seat:${this.cur_seat}, round_status: ${this.round_status}, round: ${this.exchange_round_status()}, ${this.changeRound(this.round_status)}`);
        //等待时间到, 如果是发牌阶段, 系统进行发牌, 
        //如果是玩家操作阶段, 判断是否上一个玩家未操作,进行自动操作
        //然后设置等待时间, 并通知下一个玩家操作
        //超时自动操作, 没有托管状态
        //跟随前一个玩家操作, 下注 = 跟注, 过牌 = 过牌
        //如果前一个玩家弃牌, 判断当前剩余金额是否足够跟本局最低注, 金额不足时弃牌
        switch (this.round_status) {
            case 0 /* e_room_round_status.Normal */:
                //初始状态, 转发牌
                this.round_status = 2 /* e_room_round_status.Preflop */;
                this.round = this.changeRound(this.round_status);
                break;
            case 2 /* e_room_round_status.Preflop */:
                //给每个玩家发两张底牌
                this.Preflop_deal();
                this.waitTime = exports.sql_config.bet_waiting_time;
                this.round_status++;
                this.round = this.changeRound(this.round_status);
                break;
            case 3 /* e_room_round_status.Preflop_Bet */:
            //通知玩家进行底牌圈的下注
            case 5 /* e_room_round_status.Flop_Bet */:
            //通知玩家进行翻牌圈的下注
            case 7 /* e_room_round_status.Turn_Bet */:
            //通知每个玩家进行转牌圈的下注
            case 9 /* e_room_round_status.River_Bet */:
                //通知每个玩家进行河牌圈的下注
                if (!this.roundBegin) {
                    //新的一轮开始,清空轮累计下注
                    this.Round_Begin();
                    return;
                }
                this.Player_bet();
                break;
            case 4 /* e_room_round_status.Flop */:
            // 翻牌圈发三张公共牌
            case 6 /* e_room_round_status.Turn */:
            // 转牌圈发一张公共牌
            case 8 /* e_room_round_status.River */:
                //河牌圈发一张公共牌
                this.Deal(this.round_status);
                this.roundBegin = false;
                this.round_status++;
                this.round = this.changeRound(this.round_status);
                this.waitTime = exports.sql_config.round_change_time;
                if (this.quick_check) {
                    //流程加速
                    this.waitTime = exports.sql_config.round_quick_check;
                }
                const cardTypeObjArr = [];
                // 循环每个玩家
                for (let i = 0; i < this.players.length; i++) {
                    const uid = this.players[i].uid;
                    const cardTypeObj = {
                        uid,
                        // 玩家手牌
                        card: this.handCardArr[i],
                        // 玩家手牌跟公共牌组合的最大牌型
                        cardType: this.Round_Card_Type(this.handCardArr[i])
                    };
                    cardTypeObjArr.push(cardTypeObj);
                }
                if (this.round_status - 1 === 8 /* e_room_round_status.River */) {
                    let result = game_operate_step({
                        games_id: this.id, user_id: this.players[this.button_seat].uid, user_status: 1, operate_type: 4 /* operate_type.River */, add_time: (0, util_1.nowMs)(), poker_logs: JSON.stringify(this.cardLog[2]), card_type: JSON.stringify(cardTypeObjArr), hand_card: this.handCardArr.map((item, index) => {
                            // 返回所有人的cardTypeObjArr
                            return {
                                uid: this.players[index].uid,
                                card: item,
                                cardType: this.Round_Card_Type(item)
                            };
                        })
                    });
                }
                if (this.round_status - 1 === 6 /* e_room_round_status.Turn */) {
                    let result = game_operate_step({
                        games_id: this.id, user_id: this.players[this.button_seat].uid, user_status: 1, operate_type: 3 /* operate_type.Turn */, add_time: (0, util_1.nowMs)(), poker_logs: JSON.stringify(this.cardLog[1]), card_type: JSON.stringify(cardTypeObjArr),
                        hand_card: this.handCardArr.map((item, index) => {
                            // 返回所有人的cardTypeObjArr
                            return {
                                uid: this.players[index].uid,
                                card: item,
                                cardType: this.Round_Card_Type(item)
                            };
                        })
                    });
                }
                if (this.round_status - 1 === 4 /* e_room_round_status.Flop */) {
                    let result = game_operate_step({
                        games_id: this.id, user_id: this.players[this.button_seat].uid, user_status: 1, operate_type: 2 /* operate_type.Flop */, add_time: (0, util_1.nowMs)(), poker_logs: JSON.stringify(this.cardLog[0]), card_type: JSON.stringify(cardTypeObjArr),
                        hand_card: this.handCardArr.map((item, index) => {
                            // 返回所有人的cardTypeObjArr
                            return {
                                uid: this.players[index].uid,
                                card: item,
                                cardType: this.Round_Card_Type(item)
                            };
                        })
                    });
                }
                break;
            case 10 /* e_room_round_status.Showdown */:
                //摊牌
                this.status = 4 /* e_room_status.Settle */;
                this.waitTime = exports.sql_config.room_licensing_time;
                break;
            default:
                //异常流程
                this.logger.error(`房间id:${this.id}流程状态${this.round_status},流程状态异常,做结算处理`);
                this.status = 4 /* e_room_status.Settle */;
                this.waitTime = exports.sql_config.room_licensing_time;
                break;
        }
    }
    /**
     * 回合开始处理
     * @returns
     */
    Round_Begin() {
        if (this.round_status != 3 /* e_room_round_status.Preflop_Bet */) {
            this.bets = Array.from({ length: this.players.length }, () => 0);
            this.ops = Array.from({ length: this.players.length }, () => 0);
            this.folds.forEach((item) => {
                this.ops[item] = 6 /* e_player_action.fold */;
            });
            this.allin.forEach((item) => {
                this.ops[item] = 4 /* e_player_action.allin */;
            });
        }
        if (this.cur_seat == -1 || this.quick_check) {
            //流程加速
            this.round_status++;
            this.round = this.changeRound(this.round_status);
            this.waitTime = exports.sql_config.round_quick_check;
            return;
        }
        //每轮的第一次通知获取上一轮的最后一次操作
        let round = this.exchange_round_status(this.round_status);
        let last_round = round - 1;
        if (last_round < 0)
            last_round = 0;
        let can_call = 0;
        let can_raise = 0;
        let call = this.getCall(this.cur_seat);
        let can_bet = this.checkBet(call) ? 1 : 0;
        let can_check = this.checkCheck(this.last_action, this.cur_seat) ? 1 : 0;
        this.waitTime = exports.sql_config.bet_time;
        //通知下一个玩家可以操作
        this.notifyAction(this.changeRound(this.round_status), Number(this.pot.toFixed(2)), -1, 0, 0, 0, 0, [], this.cur_seat, can_bet, can_check, can_call, can_raise, call, this.Min_Raise(call), this.waitTime);
        this.roundBegin = true;
    }
    /**
     * 结算过程
     */
    async Settle_process() {
        await this.gameOver(this.endRound);
        for (let i = 0; i < this.players.length; i++) {
            const player = this.players[i];
            // 玩家角色:1、庄家  2、小盲3、大盲4、玩家
            let gameRole = 0;
            if (player.chairId === this.button_seat && this.players.length > 2) {
                gameRole = 1;
            }
            if (player.chairId === this.sb_seat) {
                gameRole = 2;
            }
            if (player.chairId === this.bb_seat) {
                gameRole = 3;
            }
            if (!gameRole) {
                gameRole = 4;
            }
            // 是否胜利:0输 1赢 2平
            let isWin = 0;
            if (this.winner.indexOf(player.uid) !== -1) {
                isWin = 1;
            }
            if (this.draw.indexOf(player.uid) !== -1) {
                isWin = 2;
            }
            if (this.loser.indexOf(player.uid) !== -1) {
                isWin = 0;
            }
            add_room_info({
                games_id: this.id,
                user_id: player.uid,
                open_poker: JSON.stringify(this.handCardArr[player.chairId]),
                public_poker: JSON.stringify([...this.cardLog[0], ...this.cardLog[1], ...this.cardLog[2]]),
                settlement_poker: JSON.stringify(cardLogic_1.Logic.getCompleteHandcardsObj([...this.handCardArr[player.chairId],
                    ...this.cardLog[0],
                    ...this.cardLog[1],
                    ...this.cardLog[2]])),
                seat: player.chairId,
                role: gameRole,
                init_money: player.userGold,
                game_init_money: Number(player.gold) - Number(this.goldChange[player.chairId]),
                pour_money: this.goldChange[player.chairId],
                settle_money: Number(player.userGold) + Number(this.goldChange[player.chairId]),
                is_win: isWin,
                create_time: (0, util_1.nowMs)(),
                update_time: (0, util_1.nowMs)()
            });
        }
    }
    /**
     * 房间循环过程
     * @returns
     */
    async update() {
        // 如果房间人满，6人，就倒计时3秒开始游戏
        if (this.players.length === 6 && this.status <= 2 /* e_room_status.Ready */ && this.waitTime > 3000) {
            this.waitTime = 3000;
        }
        //每个tick, 房间时间减1
        if (this.waitTime > 0) {
            this.waitTime = this.waitTime - dt;
        }
        // 重置轮次的下注次数
        if (this.round !== this.roundTemp) {
            this.roundTemp = this.round;
            this.roundBetTimes = [];
            this.players.forEach(() => {
                this.roundBetTimes.push(0);
            });
        }
        if (this.status == 1 /* e_room_status.Waiting */) {
            //等待匹配阶段
            if (this.waitTime <= 0) {
                this.Waiting_process();
            }
            return;
        }
        if (this.status == 2 /* e_room_status.Ready */) {
            //等待准备
            if (this.waitTime <= 0) {
                this.Ready_process();
            }
            return;
        }
        if (this.status == 3 /* e_room_status.Play */) {
            //游戏阶段
            if (this.waitTime <= 0) {
                await this.getRoomLock();
                try {
                    this.Play_process();
                }
                finally {
                    //最终要释放锁, 避免catch到异常后,流程死锁
                    await this.returnRelease('update Play', '');
                }
            }
            return;
        }
        if (this.status == 4 /* e_room_status.Settle */) {
            //结算阶段, 游戏结束
            await this.Settle_process();
            this.status = 5 /* e_room_status.SettleFinish */;
            return;
        }
        if (this.waitTime < 0) {
            this.waitTime = 0;
        }
    }
    //#region 流程方法
    // 获取当前轮次的卡牌
    Round_Card(hand) {
        let index = (this.round_status / 2) - 2;
        if (index > 2)
            index = 2;
        let comm_ids = [];
        for (let i = 0; i <= index; i++) {
            //取目前为止发的公共牌
            comm_ids = comm_ids.concat(this.cardLog[i]);
        }
        comm_ids = comm_ids.concat(hand);
        return comm_ids;
    }
    // 获取指定轮次的公共牌
    getRoundCommCard(round = undefined) {
        round = round === undefined ? this.round_status : round;
        let index = (round / 2) - 2;
        if (index > 2)
            index = 2;
        let comm_ids = [];
        for (let i = 0; i <= index; i++) {
            //取目前为止发的公共牌
            comm_ids = comm_ids.concat(this.cardLog[i]);
        }
        return comm_ids;
    }
    /** 获取当前轮次的卡牌类型*/
    Round_Card_Type(hand, round = undefined) {
        round = round === undefined ? this.round_status : round;
        let index = (round / 2) - 2;
        if (index > 2)
            index = 2;
        let comm_ids = [];
        for (let i = 0; i <= index; i++) {
            //取目前为止发的公共牌
            comm_ids = [...comm_ids, ...this.cardLog[i]];
        }
        comm_ids = comm_ids = [...comm_ids, ...hand];
        this.logger.debug('当前轮次:', round);
        this.logger.debug('当前轮次的卡牌:', comm_ids);
        this.logger.debug('当前轮次的卡牌类型:', cardLogic_1.Logic.getCardType(comm_ids));
        return cardLogic_1.Logic.getCardType(comm_ids);
    }
    /**
     * 获取当前最小加注
     */
    Min_Raise(call) {
        //return call + this.baseScore;
        let round = this.exchange_round_status();
        if (round == 0) {
            return call + this.sb_bet_limit;
        }
        else {
            return call + this.bb_bet_limit;
        }
        // let round_log = this.playLog[round];
        // if (!round_log || round_log.length < 2) {
        //     //没有当前局记录, 返回小盲注
        //     return this.bb_bet;
        // }
        // let last = this.Last_log(1);
        // let last_bet = last?.bet??0;
        // let last2 = this.Last_log(2);
        // let last2_bet = last2?.bet??0;
        // let min_raise = last_bet - last2_bet;
        // if (min_raise < 0) {
        //     min_raise = 0;
        // }
        // return min_raise;
    }
    /**
     * 获取最后的操作记录
     * @param last 最后第几个操作
     * @returns
     */
    Last_log(last = 1, round = -1) {
        if (round == -1) {
            round = this.exchange_round_status();
        }
        let round_log = this.playLog[round];
        if (!round_log || round_log.length == 0) {
            return null;
        }
        let last_log = round_log[round_log.length - last];
        return last_log;
    }
    /** 记录玩家操作 */
    Player_action(seat, action, bet, skipOps = false) {
        if (!skipOps) {
            this.ops[seat] = action;
        }
        this.bets[seat] = this.bets[seat] + bet;
        let raise = 0;
        let last_log = this.Last_log();
        if (last_log) {
            raise = bet - last_log.bet;
        }
        else {
            raise = 0;
        }
        if (raise < 0) {
            raise = 0;
        }
        let round = this.exchange_round_status();
        this.logger.debug('==================== player action,', this.round_status, round, last_log);
        if (this.playLog.length == round) {
            this.playLog.push([]);
        }
        let isRaisable = !!(last_log && last_log.action != 5 /* e_player_action.check */);
        this.playLog[round].push({
            round, seat, action, bet, raise, isRaisable,
        });
    }
    /**
     * 转换轮次状态为标准轮次
     * @returns
     */
    exchange_round_status(round_status = -1) {
        if (round_status == -1) {
            round_status = this.round_status;
        }
        switch (round_status) {
            case 1 /* e_room_round_status.Preflop_Blinds */:
            case 2 /* e_room_round_status.Preflop */:
            case 3 /* e_room_round_status.Preflop_Bet */:
                return 0;
            case 4 /* e_room_round_status.Flop */:
            case 5 /* e_room_round_status.Flop_Bet */:
                return 1;
            case 6 /* e_room_round_status.Turn */:
            case 7 /* e_room_round_status.Turn_Bet */:
                return 2;
            case 8 /* e_room_round_status.River */:
            case 9 /* e_room_round_status.River_Bet */:
                return 3;
        }
        return 0;
    }
    /**
     * 转化简单的轮次状态
     * @param round_status
     * @returns
     */
    changeRound(round_status) {
        switch (round_status) {
            case 1 /* e_room_round_status.Preflop_Blinds */:
            case 2 /* e_room_round_status.Preflop */:
            case 3 /* e_room_round_status.Preflop_Bet */:
                return 1 /* e_room_round.Preflop */;
                break;
            case 4 /* e_room_round_status.Flop */:
            case 5 /* e_room_round_status.Flop_Bet */:
                return 2 /* e_room_round.Flop */;
                break;
            case 6 /* e_room_round_status.Turn */:
            case 7 /* e_room_round_status.Turn_Bet */:
                return 3 /* e_room_round.Turn */;
                break;
            case 8 /* e_room_round_status.River */:
            case 9 /* e_room_round_status.River_Bet */:
                return 4 /* e_room_round.River */;
                break;
            case 10 /* e_room_round_status.Showdown */:
                return 5 /* e_room_round.Showdown */;
                break;
            default:
                return 0 /* e_room_round.Normal */;
                break;
        }
    }
    /**
     * 翻牌前发玩家手牌
     */
    async Preflop_deal() {
        //手牌已经是开始游戏时预先配置好的,按轮次下发即可
        //初始化一个与玩家人数相同的空数组
        let card_type_arr = Array.from({ length: this.handCardArr.length }, () => 0);
        const cardTypeObjArr = [];
        for (let i = 0; i < this.handCardArr.length; i++) {
            let cards = this.objToCard(this.handCardArr[i]);
            let uid = this.uids[i];
            const cardTypeObj = {
                uid,
                // 玩家手牌
                card: this.handCardArr[i],
                // 玩家手牌跟公共牌组合的最大牌型
                cardType: this.Round_Card_Type(this.handCardArr[i])
            };
            cardTypeObjArr.push(cardTypeObj);
            //计算手牌跟公共牌组合的最大牌型
            let card_type = this.Round_Card_Type(this.handCardArr[i]);
            card_type_arr[i] = card_type;
            // Logger.info(`房间${this.id}:给用户发放底牌了,调用了game_operate_step函数`);
            let result = game_operate_step({
                games_id: this.id,
                user_id: uid,
                user_status: 1,
                operate_type: 1,
                add_time: (0, util_1.nowMs)(),
                poker_logs: JSON.stringify(this.handCardArr[i]),
                card_type: JSON.stringify(this.Round_Card_Type(this.handCardArr[i])),
                hand_card: this.handCardArr.map((item, index) => {
                    // 返回所有人的cardTypeObjArr
                    return {
                        uid: this.players[index].uid,
                        card: item,
                        cardType: this.Round_Card_Type(item)
                    };
                })
            });
            //通知客户端
            this.notifyDeal(cards, 0, [...card_type_arr], uid, card_type);
            //通知完客户端,将当前的用户卡牌类型再重置回0
            card_type_arr[i] = 0;
        }
    }
    printCard(card) {
        let s = "";
        for (let c of card) {
            s += cardLogic_1.cardStr[c.score];
        }
        return s;
    }
    /**
     * 获取当前轮加注次数
     */
    getRaiseCount() {
        let round = this.exchange_round_status();
        let round_log = this.playLog[round];
        if (!round_log || round_log.length == 0) {
            return 0;
        }
        let raiseCount = 0;
        for (let log of round_log) {
            if (log.action == 3 /* e_player_action.raise */) {
                raiseCount += 1;
            }
        }
        return raiseCount;
    }
    /**
     * 自动操作
     * @param seat 座位
     * @returns
     */
    suggest_action(seat) {
        return this.suggest_action_v2(seat);
    }
    suggest_action_v0(seat) {
        let player = this.players[seat];
        let last_log = this.Last_log();
        let suggest = { action: 0, bet: 0 };
        if (!last_log) {
            //本轮第一个行动玩家
            // suggest.action = e_player_action.check;
            // game.bet = 0;
            suggest.action = 1 /* e_player_action.bet */;
            suggest.bet = this.bb_bet;
            return suggest;
        }
        if (last_log.action == 5 /* e_player_action.check */) {
            //前一个玩家过牌,自动选择过牌
            suggest.action = 5 /* e_player_action.check */;
            suggest.bet = 0;
        }
        else if (last_log.action == 1 /* e_player_action.bet */ || last_log.action == 2 /* e_player_action.call */ || last_log.action == 3 /* e_player_action.raise */) {
            let roundMaxBet = this.getArrMax(this.bets);
            if (this.bets[seat] < roundMaxBet) {
                suggest.action = 2 /* e_player_action.call */;
                suggest.bet = roundMaxBet - this.bets[seat];
            }
            else {
                suggest.action = 5 /* e_player_action.check */;
                suggest.bet = 0;
            }
        }
        // else if (player.gold >= need_bet) {
        //     //余额满足,下注
        //     suggest.action = e_player_action.bet;
        //     suggest.bet = need_bet;
        // }
        // else if (role.money > player.bet) {
        //     //未全部下注,allin
        //     suggest.action = e_player_action.bet;
        //     suggest.bet = role.money - player.bet;
        // }
        else {
            suggest.action = 6 /* e_player_action.fold */;
            suggest.bet = 0;
        }
        console.log("suggest action:", suggest, " last action:", last_log);
        return suggest;
    }
    suggest_action_v2(seat) {
        let player = this.players[seat];
        let user = this.room.getUser(player.uid);
        if (!user) {
            this.logger.error("can't get user with uid:", player.uid);
            throw new Error("can't get user");
        }
        let last_log = this.Last_log();
        let suggest = { action: 0, bet: 0 };
        if (!user.isAI) {
            //普通玩家下注超时
            if (!last_log) {
                //本轮第一个行动玩家
                suggest.action = 5 /* e_player_action.check */;
                suggest.bet = 0;
            }
            else if (last_log.action == 5 /* e_player_action.check */) {
                //前一个玩家过牌,自动选择过牌
                suggest.action = 5 /* e_player_action.check */;
                suggest.bet = 0;
            }
            else if (last_log.action == 1 /* e_player_action.bet */ || last_log.action == 2 /* e_player_action.call */ || last_log.action == 3 /* e_player_action.raise */) {
                let roundMaxBet = this.getArrMax(this.bets);
                if (this.bets[seat] < roundMaxBet) {
                    suggest.action = 2 /* e_player_action.call */;
                    suggest.bet = roundMaxBet - this.bets[seat];
                }
                else {
                    suggest.action = 5 /* e_player_action.check */;
                    suggest.bet = 0;
                }
            }
            else {
                suggest.action = 6 /* e_player_action.fold */;
                suggest.bet = 0;
            }
            console.log("player timeout");
        }
        else {
            this.logger.log("ai play...");
            //ai 玩家
            let roundIndex = this.exchange_round_status();
            let playLogs = [];
            if (this.playLog[roundIndex]) {
                for (let playLog of this.playLog[roundIndex]) {
                    let p = this.players.find((p) => p.chairId == playLog.seat);
                    //未弃牌玩家
                    if (p && p.opType != 4 /* e_player_seat.fold */) {
                        playLogs.push(playLog);
                    }
                }
            }
            //游戏开始玩家下注次数(所有轮，所有玩家)
            let betCount = 0;
            for (let playLogs of this.playLog) {
                for (let playLog of playLogs) {
                    if (playLog.action == 1 /* e_player_action.bet */ || playLog.action == 2 /* e_player_action.call */ || playLog.action == 3 /* e_player_action.raise */) {
                        betCount += 1;
                    }
                }
            }
            //本轮其他玩家下注金额
            let raiseCount = 0;
            let raisableCount = 0;
            let bet = 0;
            for (let playLog of playLogs) {
                if (playLog.seat != seat) {
                    bet += playLog.bet;
                    if (playLog.action == 3 /* e_player_action.raise */) {
                        raiseCount += 1;
                        raisableCount += 1;
                    }
                    else if (playLog.isRaisable) {
                        raisableCount += 1;
                    }
                }
            }
            //本轮第一次出牌
            let playerPosition = 0;
            let playLogIndex = playLogs.findIndex((log) => log.seat == seat);
            if (playLogIndex != -1) {
                playerPosition = playLogIndex + 1;
            }
            else {
                playerPosition = playLogs.length + 1;
            }
            //所有未弃牌的玩家数
            let playerCount = 0;
            for (let p of this.players) {
                if (p.opType != 4 /* e_player_seat.fold */) {
                    playerCount += 1;
                }
            }
            let P = (0, ai2_1.createP)(playerPosition, playerCount);
            let Q1 = (0, ai2_1.createQ1)(betCount * this.baseScore, bet);
            let Q2 = (0, ai2_1.createQ2)(raiseCount, raisableCount);
            let Q3 = (0, ai2_1.createQ3)(playerCount, this.players.length - 1);
            let Q = (0, ai2_1.createQ)(Q1, Q2, Q3);
            this.logger.log("ai parameters:", playerPosition, playerCount, betCount * this.baseScore, bet, raiseCount, raisableCount, playerCount, this.players.length - 1, P, Q1, Q2, Q3, Q);
            let index = (this.round_status / 2) - 2;
            if (index > 2)
                index = 2;
            let comm_ids = [];
            for (let i = 0; i <= index; i++) {
                //取目前为止发的公共牌
                comm_ids = [...comm_ids, ...this.cardLog[i]];
            }
            comm_ids = [...comm_ids, ...this.handCardArr[seat]];
            let score = undefined;
            if (this.round_status == 3 /* e_room_round_status.Preflop_Bet */) {
                let a = this.handCardArr[seat];
                let r1 = a[0].score;
                let r2 = a[1].score;
                let isSameSuit = a[0].color == a[1].color;
                score = (0, ai2_1.createPreS)(r1, r2, isSameSuit);
            }
            else {
                score = (0, ai_2.getCardScore)(comm_ids);
            }
            let R = (0, ai2_1.createR)(score, player.I, P);
            let probs = (0, ai2_1.createProbability)(Q, score, player.I, P);
            let actions = (0, ai2_1.randomAction)(probs.fold, probs.call, probs.raise);
            this.logger.log("hand card:", this.handCardArr[seat], this.printCard(this.handCardArr[seat]));
            this.logger.log("all cards:", comm_ids, this.printCard(comm_ids));
            this.logger.log("get ai rule, ", " player count:", playerCount, " position:", playerPosition, " card score:", score);
            let desc = `player position ${playerPosition}, playerCount ${playerCount} bet count: ${betCount},  bet: ${bet}, raise count ${raiseCount} raisable count: ${raisableCount} P ${P} Q ${Q} (${Q1} ${Q2} ${Q3}) I ${player.I}, card score ${score} fold ${probs.fold} call ${probs.call} raise ${probs.raise}`;
            suggest.action = 6 /* e_player_action.fold */;
            suggest.bet = 0;
            suggest.desc = desc;
            if (!last_log) {
                //本轮第一个行动玩家
                if (actions.fold) {
                    suggest.action = 6 /* e_player_action.fold */;
                    suggest.bet = 0;
                }
                else if (actions.call) {
                    suggest.action = 1 /* e_player_action.bet */;
                    suggest.bet = this.bb_bet;
                }
                else if (actions.raise) {
                    suggest.action = 1 /* e_player_action.bet */;
                    suggest.bet = this.bb_bet;
                }
            }
            else if (last_log.action == 5 /* e_player_action.check */) {
                if (actions.fold) {
                    suggest.action = 6 /* e_player_action.fold */;
                    suggest.bet = 0;
                }
                else if (actions.call) {
                    //前一个玩家过牌,自动选择过牌
                    suggest.action = 5 /* e_player_action.check */;
                    suggest.bet = 0;
                }
                else if (actions.raise) {
                    suggest.action = 1 /* e_player_action.bet */;
                    suggest.bet = R * this.bb_bet;
                }
            }
            else {
                let roundMaxBet = this.getArrMax(this.bets);
                if (actions.fold) {
                    suggest.action = 6 /* e_player_action.fold */;
                    suggest.bet = 0;
                }
                else if (actions.call) {
                    if (this.bets[seat] < roundMaxBet) {
                        suggest.action = 2 /* e_player_action.call */;
                        suggest.bet = roundMaxBet - this.bets[seat];
                    }
                    else {
                        //这手牌以“翻牌前”下注轮开始，从小盲位的玩家开始，然后顺时针继续，直到每个玩家都处于以下三种状态：弃牌、投入所有筹码或者与本轮最大下注筹码相匹配。 如果所有玩家都跟注大盲位置的玩家，则大盲位的玩家可以过牌或加注。
                        suggest.action = 5 /* e_player_action.check */;
                        suggest.bet = 0;
                    }
                }
                else if (actions.raise) {
                    let raiseCount = this.getRaiseCount();
                    if (raiseCount >= MAX_RAISE_COUNT) {
                        suggest.action = 2 /* e_player_action.call */;
                        suggest.bet = roundMaxBet - this.bets[seat];
                    }
                    else {
                        suggest.action = 3 /* e_player_action.raise */;
                        suggest.bet = R * this.bb_bet + roundMaxBet - this.bets[seat];
                    }
                }
            }
        }
        console.log("suggest action:", suggest, " last action:", last_log);
        return suggest;
    }
    /**
     * 自动操作
     * @param seat 座位
     * @returns
     */
    suggest_action_v1(seat) {
        let player = this.players[seat];
        let user = this.room.getUser(player.uid);
        if (!user) {
            this.logger.error("can't get user with uid:", player.uid);
            throw new Error("can't get user");
        }
        let last_log = this.Last_log();
        let suggest = { action: 0, bet: 0 };
        if (!user.isAI) {
            //普通玩家下注超时
            if (!last_log) {
                //本轮第一个行动玩家
                suggest.action = 5 /* e_player_action.check */;
                suggest.bet = 0;
            }
            else if (last_log.action == 5 /* e_player_action.check */) {
                //前一个玩家过牌,自动选择过牌
                suggest.action = 5 /* e_player_action.check */;
                suggest.bet = 0;
            }
            else if (last_log.action == 1 /* e_player_action.bet */ || last_log.action == 2 /* e_player_action.call */ || last_log.action == 3 /* e_player_action.raise */) {
                let roundMaxBet = this.getArrMax(this.bets);
                if (this.bets[seat] < roundMaxBet) {
                    suggest.action = 2 /* e_player_action.call */;
                    suggest.bet = roundMaxBet - this.bets[seat];
                }
                else {
                    suggest.action = 5 /* e_player_action.check */;
                    suggest.bet = 0;
                }
            }
            else {
                suggest.action = 6 /* e_player_action.fold */;
                suggest.bet = 0;
            }
            console.log("player timeout");
        }
        else {
            //ai 玩家
            let round = undefined;
            if (this.round_status == 1 /* e_room_round_status.Preflop_Blinds */) {
                round = aiRule_1.RuleRound.Preflop_Blinds;
            }
            else if (this.round_status == 3 /* e_room_round_status.Preflop_Bet */) {
                round = aiRule_1.RuleRound.Preflop;
            }
            else if (this.round_status == 5 /* e_room_round_status.Flop_Bet */) {
                round = aiRule_1.RuleRound.Flop;
            }
            else if (this.round_status == 7 /* e_room_round_status.Turn_Bet */) {
                round = aiRule_1.RuleRound.Turn;
            }
            else if (this.round_status == 9 /* e_room_round_status.River_Bet */) {
                round = aiRule_1.RuleRound.River;
            }
            if (round == undefined) {
                console.error("invalid round:", this.round_status);
                throw new Error("invalid round");
            }
            let playerPosition = 1;
            let roundIndex = this.exchange_round_status();
            let playLogs = this.playLog[roundIndex] || [];
            //本轮第一次出牌
            playerPosition += playLogs.length;
            for (let i = 0; i < playLogs.length; i++) {
                if (playLogs[i].seat == seat) {
                    //本轮已经出牌过
                    playerPosition = i + 1;
                    break;
                }
            }
            //所有未弃牌的玩家数
            let playerCount = 0;
            for (let p of this.players) {
                if (p.opType != 4 /* e_player_seat.fold */) {
                    playerCount += 1;
                }
            }
            let index = (this.round_status / 2) - 2;
            if (index > 2)
                index = 2;
            let comm_ids = [];
            for (let i = 0; i <= index; i++) {
                //取目前为止发的公共牌
                comm_ids = [...comm_ids, ...this.cardLog[i]];
            }
            comm_ids = [...comm_ids, ...this.handCardArr[seat]];
            let winRate = undefined;
            let score = undefined;
            if (this.round_status == 3 /* e_room_round_status.Preflop_Bet */) {
                let key = (0, ai_2.getWinRateKey)(this.handCardArr[seat]);
                let w = this.winRates.get(key);
                if (w) {
                    if (this.playerCount == 3) {
                        winRate = w.winRate3;
                    }
                    else if (this.playerCount == 4) {
                        winRate = w.winRate4;
                    }
                    else if (this.playerCount == 5) {
                        winRate = w.winRate5;
                    }
                    else if (this.playerCount == 6) {
                        winRate = w.winRate6;
                    }
                }
            }
            else {
                score = (0, ai_2.getCardScore)(comm_ids);
            }
            this.logger.log("hand card:", this.handCardArr[seat], this.printCard(this.handCardArr[seat]));
            this.logger.log("all cards:", comm_ids, this.printCard(comm_ids));
            this.logger.log("get ai rule, round:", round, " player count:", playerCount, " position:", playerPosition, " win rate:", winRate, " card score:", score);
            let rule = (0, ai_2.getAiRule)(this.ai, round, playerCount, playerPosition, winRate, score);
            if (rule) {
                let roundMaxBet = this.getArrMax(this.bets);
                suggest = (0, ai_2.getRuleAction)(rule, this.baseScore, roundMaxBet, this.bets[seat], last_log);
                this.logger.log("ai rule:", rule, " suggest action:", suggest);
            }
            else {
                this.logger.log("no ai rule found, current round:", this.round_status);
                if (!last_log) {
                    //本轮第一个行动玩家
                    // suggest.action = e_player_action.check;
                    // game.bet = 0;
                    suggest.action = 1 /* e_player_action.bet */;
                    suggest.bet = this.bb_bet;
                }
                else if (last_log.action == 5 /* e_player_action.check */) {
                    //前一个玩家过牌,自动选择过牌
                    suggest.action = 5 /* e_player_action.check */;
                    suggest.bet = 0;
                }
                else if (last_log.action == 1 /* e_player_action.bet */ || last_log.action == 2 /* e_player_action.call */ || last_log.action == 3 /* e_player_action.raise */) {
                    let roundMaxBet = this.getArrMax(this.bets);
                    if (this.bets[seat] < roundMaxBet) {
                        suggest.action = 2 /* e_player_action.call */;
                        suggest.bet = roundMaxBet - this.bets[seat];
                    }
                    else {
                        suggest.action = 5 /* e_player_action.check */;
                        suggest.bet = 0;
                    }
                }
                // else if (player.gold >= need_bet) {
                //     //余额满足,下注
                //     suggest.action = e_player_action.bet;
                //     suggest.bet = need_bet;
                // }
                // else if (role.money > player.bet) {
                //     //未全部下注,allin
                //     suggest.action = e_player_action.bet;
                //     suggest.bet = role.money - player.bet;
                // }
                else {
                    suggest.action = 6 /* e_player_action.fold */;
                    suggest.bet = 0;
                }
            }
        }
        console.log("suggest action:", suggest, " last action:", last_log);
        return suggest;
    }
    /**
     * 玩家下注
     */
    Player_bet() {
        if (this.waitTime <= 0) {
            //超时处理
            let suggest = this.suggest_action(this.cur_seat);
            this.Process_action(this.cur_seat, suggest.action, suggest.bet, suggest.desc);
        }
    }
    /**
     * 操作处理
     * @param seat 座位
     * @param action 操作
     * @param bet 下注
     */
    Process_action(seat, action, bet, desc) {
        this.logger.debug('action:', action);
        this.last_action = action;
        if (seat == -1) {
            this.quick_check = true;
            this.round_status++;
            this.round = this.changeRound(this.round_status);
            this.waitTime = exports.sql_config.round_quick_check;
            return '';
        }
        let player = this.players[seat];
        //let user = await userMgr.getInGameUser(player.uid);
        //allin兼容处理，如果提交的bet+player.bet已经大于player.gold，强行修改action为allin
        if (player.bet + bet >= player.gold) {
            action = 4 /* e_player_action.allin */;
        }
        if (action == 1 /* e_player_action.bet */ || action == 2 /* e_player_action.call */ || action == 3 /* e_player_action.raise */ || action == 4 /* e_player_action.allin */) {
            //对allin做下注金额的兼容处理,避免客户端上传的数值错误
            if (action == 4 /* e_player_action.allin */) {
                bet = player.gold - player.bet;
                this.allin.push(seat);
                this.allin_round.push(this.round_status);
                // Logger.info(`房间${this.id}:用户${player.uid}全压了,调用了game_operate_step函数`);
                game_operate_step({
                    games_id: this.id, user_id: player.uid, user_status: 1, operate_type: 11 /* operate_type.AllIn */, stake: bet, add_time: (0, util_1.nowMs)(),
                    hand_card: this.handCardArr.map((item, index) => {
                        // 返回所有人的cardTypeObjArr
                        return {
                            uid: this.players[index].uid,
                            card: item,
                            cardType: this.Round_Card_Type(item)
                        };
                    })
                });
            }
            //下注
            let result = this.Process_bet(seat, bet, player);
            if (result) {
                return result;
            }
            // 下注
            if (action == 1 /* e_player_action.bet */) {
                // Logger.info(`房间${this.id}:用户${player.uid}下注了,调用了game_operate_step函数`);
                game_operate_step({
                    games_id: this.id, user_id: player.uid, user_status: 1, operate_type: 5 /* operate_type.Stake */, stake: bet, add_time: (0, util_1.nowMs)(),
                    hand_card: this.handCardArr.map((item, index) => {
                        // 返回所有人的cardTypeObjArr
                        return {
                            uid: this.players[index].uid,
                            card: item,
                            cardType: this.Round_Card_Type(item)
                        };
                    })
                });
            }
        }
        // 跟注
        if (action == 2 /* e_player_action.call */) {
            this.logger.log(`房间${this.id}:用户${player.uid}跟注了,调用了game_operate_step函数`);
            game_operate_step({
                games_id: this.id, user_id: player.uid, user_status: 1, operate_type: 6 /* operate_type.Call */, stake: bet, add_time: (0, util_1.nowMs)(),
                hand_card: this.handCardArr.map((item, index) => {
                    // 返回所有人的cardTypeObjArr
                    return {
                        uid: this.players[index].uid,
                        card: item,
                        cardType: this.Round_Card_Type(item)
                    };
                })
            });
        }
        // 加注
        if (action == 3 /* e_player_action.raise */) {
            this.logger.log(`房间${this.id}:用户${player.uid}加注了,调用了game_operate_step函数`);
            this.roundBetTimes[seat]++;
            game_operate_step({
                games_id: this.id, user_id: player.uid, user_status: 1, operate_type: 9 /* operate_type.Raise */, stake: bet, add_time: (0, util_1.nowMs)(),
                hand_card: this.handCardArr.map((item, index) => {
                    // 返回所有人的cardTypeObjArr
                    return {
                        uid: this.players[index].uid,
                        card: item,
                        cardType: this.Round_Card_Type(item)
                    };
                })
            });
        }
        if (action == 5 /* e_player_action.check */) {
            //过牌
            if (!this.bets[seat])
                this.bets[seat] = 0;
            this.logger.log(`房间${this.id}:用户${player.uid}过牌了,调用了game_operate_step函数`);
            game_operate_step({
                games_id: this.id, user_id: player.uid, user_status: 1, operate_type: 8 /* operate_type.Check */, stake: bet, add_time: (0, util_1.nowMs)(),
                hand_card: this.handCardArr.map((item, index) => {
                    // 返回所有人的cardTypeObjArr
                    return {
                        uid: this.players[index].uid,
                        card: item,
                        cardType: this.Round_Card_Type(item)
                    };
                })
            });
        }
        if (action == 6 /* e_player_action.fold */) {
            //弃牌
            player.opType = 4 /* e_player_seat.fold */;
            this.folds.push(seat);
            this.logger.log(`房间${this.id}:用户${player.uid}弃牌了,调用了game_operate_step函数`);
            game_operate_step({
                games_id: this.id, user_id: player.uid, user_status: 1, operate_type: 7 /* operate_type.Fold */, stake: bet, add_time: (0, util_1.nowMs)(),
                hand_card: this.handCardArr.map((item, index) => {
                    // 返回所有人的cardTypeObjArr
                    return {
                        uid: this.players[index].uid,
                        card: item,
                        cardType: this.Round_Card_Type(item)
                    };
                })
            });
        }
        this.cur_seat = this.nextSeat(seat);
        //记录操作
        this.Player_action(seat, action, bet);
        this.waitTime = exports.sql_config.bet_time;
        let hand_card = [];
        if (action == 4 /* e_player_action.allin */) {
            hand_card = this.objToCard(this.handCardArr[seat]);
        }
        let call = this.getCall(this.cur_seat);
        let round_bet = this.bets[seat];
        let game_bet = this.players[seat].bet;
        let can_raise = 1;
        let can_call = 1;
        let can_check = 0; //默认值，默认不能过牌
        let can_bet = 1; //默认值，默认可以下注
        let action_seat = this.cur_seat;
        let roundFinal = false;
        this.logger.debug('==================check round: check');
        if (this.checkRoundFinal(seat, action, call)) {
            this.logger.debug('==================check round: final');
            can_check = 1;
            can_bet = 1;
            call = this.baseScore;
            //回合结束，重置最后一个操作的记录
            this.last_action = 0 /* e_player_action.normal */;
            roundFinal = true;
        }
        if (this.getHasOpCount(this.ops) > 0 && this.getArrMax(this.bets) == 0) {
            //如果本轮有玩家操作,但是没有下注(弃牌/过牌),则下一顺位玩家的下注金额保底设置为房间底分
            this.logger.debug('===设置下一个玩家的下注是底分');
            call = this.baseScore;
        }
        can_check = this.checkCheck(action, this.cur_seat) ? 1 : 0;
        if (this.checkGameFinal(seat, action)) {
            can_bet = 0;
            can_check = 0;
            call = 0;
        }
        if (can_check) {
            can_raise = 0;
            can_call = 0;
            can_bet = 1;
        }
        else {
            can_bet = 0;
        }
        if (can_bet) {
            can_raise = 0;
            can_call = 0;
        }
        let raiseCount = this.getRaiseCount();
        if (raiseCount >= MAX_RAISE_COUNT) {
            can_raise = 0;
        }
        if (roundFinal) {
            //每一轮的最后一次action,需要拆分成两个action
            //发牌前广播下注,发牌后通知下一个玩家操作
            action_seat = -1;
        }
        let waitTime = this.waitTime;
        if (action_seat != -1 && !this.quick_check) {
            let user = this.room.getUser(this.players[action_seat].uid);
            if (user && user.isAI) {
                //ai玩家出牌时间随机
                this.waitTime = 3000 + Math.floor(Math.random() * 12) * 1000;
            }
        }
        // TODO这是为了allin后不翻牌
        hand_card = undefined;
        if (this.isQuick()) {
            //快进不下发操作按钮
            this.cur_seat = -1;
            action_seat = -1;
        }
        //通知下注情况以及下一个玩家可以操作
        this.notifyAction(this.changeRound(this.round_status), Number(this.pot.toFixed(2)), seat, action, bet, round_bet, game_bet, hand_card, action_seat, can_bet, can_check, can_call, can_raise, call, this.Min_Raise(call), waitTime, desc);
        // 先判断游戏是否结束
        if (this.checkGameFinal(seat, action)) {
            this.endRound = this.round_status;
            //只剩下一个玩家,游戏结束
            this.round_status = 10 /* e_room_round_status.Showdown */;
            this.round = this.changeRound(this.round_status);
            this.waitTime = 1;
            // 游戏结束的话，其他代码不需要执行了
            return '';
        }
        // 后判断轮次是否结束
        if (roundFinal) {
            this.round_status++;
            this.round = this.changeRound(this.round_status);
            this.waitTime = 1;
        }
        return '';
    }
    /**
     * 下注处理
     * @param seat 座位
     * @param bet 下注
     * @param player 玩家信息
     * @param role 角色信息
     * @param last_log 最后操作信息
     * @returns
     */
    Process_bet(seat, bet, player) {
        //校验下注是否合法
        if (player.gold < player.bet + bet) {
            //余额不足
            return '余额不足';
        }
        //底池增加
        this.pot += bet;
        //玩家下注更新
        player.bet += bet;
    }
    /**
     * 发第几轮的公共牌
     * @param round_status
     */
    Deal(round_status) {
        //发公共牌
        let index = (round_status / 2) - 2;
        let cards = this.objToCard(this.cardLog[index]);
        let card_type_arr = Array.from({ length: this.handCardArr.length }, () => 0);
        for (let i = 0; i < this.players.length; i++) {
            if (this.players[i].bet == this.players[i].gold) {
                //玩家全押了
                // TODO 这里是为了allin后不翻牌
                // card_type_arr[i] = this.Round_Card_Type(this.handCardArr[i]);
            }
        }
        for (let i = 0; i < this.handCardArr.length; i++) {
            //计算手牌跟公共牌组合的最大牌型
            let card_type = this.Round_Card_Type(this.handCardArr[i]);
            card_type_arr[i] = card_type;
            this.notifyDeal(cards, 1, [...card_type_arr], this.uids[i], card_type);
            //通知完客户端,将当前的用户卡牌类型再重置回0
            card_type_arr[i] = 0;
        }
    }
    //#endregion
    //#region 对外方法
    canIn() {
        //房间未满都可加入
        if (this.players.length < 6
            && this.status <= 2 /* e_room_status.Ready */) {
            return true;
        }
        return false;
    }
    inRoom(uid) {
        for (let i = 0; i < this.players.length; i++) {
            if (this.players[i].uid == uid) {
                return true;
            }
        }
        return false;
    }
    /**
     * 校验玩家
     * @param uid
     * @param seat
     * @returns
     */
    checkCurrentUser(uid, seat) {
        if (this.uids.indexOf(uid) === -1) {
            return '玩家不在本局游戏';
        }
        if (this.uids[seat] !== uid) {
            return '玩家座位不一致';
        }
        return '';
    }
    /**
     * 获取目前房间内玩家
     * @returns
     */
    getPlayer() {
        return this.players;
    }
    //#endregion
    //#region 内部方法
    create(uid, take_money) {
        //let user: UserInfo = userMgr.getUserByUid(uid);
        let user = this.room.getUser(uid);
        if (!user) {
            this.logger.warn("user not in room, uid:", uid);
            return;
        }
        if (take_money == 0) {
            //如果携带金币为0, 根据配置读取
            let cfg = exports.sql_config.take_money.find(p => p[0] == this.baseScore);
            if (!cfg || !cfg[1]) {
                take_money = 500;
            }
            else {
                take_money = cfg[1];
            }
        }
        if (this.uids.indexOf(uid) !== -1) {
            //玩家已存在房间
        }
        else {
            //没有这个玩家
            let player = new player_1.default();
            player.nickname = user.name;
            player.uid = uid;
            player.pic = user.visualId;
            player.headImg = "";
            if (user.coin && user.coin >= take_money) {
                player.gold = take_money;
            }
            else {
                player.gold = user.coin ? user.coin : 0;
            }
            player.userGold = user.coin ? user.coin : 0;
            player.I = (0, ai2_1.createI)();
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
            this.uids.push(uid);
        }
        if (this.players.length == 2) {
            this.waitTime = exports.sql_config.room_start_count_down;
        }
    }
    userBaseInfo() {
        let users = [];
        for (let i = 0; i < this.players.length; i++) {
            let info = this.players[i].endBaseInfo();
            users.push(info);
        }
        return users;
    }
    /**
     * 开始游戏
     * @returns
     */
    startGame() {
        //设置玩家椅子id
        for (let i = 0; i < this.players.length; i++) {
            let info = this.players[i];
            info.chairId = i;
        }
        //-----------------------------初始化本局游戏
        //初始化玩家数量对应的下注列表
        this.bets = Array.from({ length: this.players.length }, () => 0);
        this.ops = Array.from({ length: this.players.length }, () => 0);
        //随机一个庄家位
        let playerCount = this.players.length;
        this.button_seat = (0, util_1.randInt)(playerCount);
        this.players[this.button_seat].opType = 1 /* e_player_seat.button */;
        //从庄家位开始游戏
        this.cur_seat = this.button_seat;
        //大小盲座位
        this.sb_seat = this.nextSeat(this.button_seat);
        this.bb_seat = this.nextSeat(this.sb_seat);
        //计算大小盲注大小
        this.sb_bet = this.baseScore / 2;
        this.bb_bet = this.baseScore;
        //顺序分配大小盲位
        //小盲位是庄家位下一个
        this.players[this.sb_seat].opType = 2 /* e_player_seat.sb */;
        //大盲位是小盲位下一个
        this.players[this.bb_seat].opType = 3 /* e_player_seat.bb */;
        //盲注处理
        this.players[this.sb_seat].bet = this.sb_bet;
        this.pot += this.sb_bet;
        this.Player_action(this.sb_seat, 1 /* e_player_action.bet */, this.sb_bet, true);
        this.players[this.bb_seat].bet = this.bb_bet;
        this.pot += this.bb_bet;
        this.Player_action(this.bb_seat, 1 /* e_player_action.bet */, this.bb_bet, true);
        //计算好公共牌以及每个玩家的手牌,后续游戏过程中,
        //发牌阶段从数组中读取对应的手牌id展示给玩家
        let totalcards = cardLogic_1.Logic.getCards();
        let cards = cardLogic_1.Logic.getCards();
        totalcards.push(...cards);
        //给每个玩家发手牌
        for (let i = 0; i < this.players.length; i++) {
            let elemCards = totalcards.splice(0, 2);
            let info = this.players[i];
            info.base_cards = elemCards;
            info.uid = info.uid;
            this.handCardArr.push(elemCards);
        }
        // 测试用
        // let info: PlayerInfo = this.players[0];
        // let elemCards: I_card[] = [{ "id": 13, "color": 1, "score": 14 }, { "id": 1, "color": 1, "score": 2 }]
        // info.base_cards = []
        // info.base_cards = elemCards;
        // this.handCardArr[info.chairId] = elemCards;
        // let info1: PlayerInfo = this.players[1];
        // let elemCards1: I_card[] = [{ "id": 26, "color": 2, "score": 14 }, { "id": 15, "color": 2, "score": 3 }]
        // info1.base_cards = []
        // info1.base_cards = elemCards1;
        // this.handCardArr[info1.chairId] = elemCards1;
        //翻牌圈的公共牌
        let flop_card = totalcards.splice(0, 3);
        this.cardLog.push(flop_card);
        // //转牌圈的公共牌
        let turn_card = totalcards.splice(0, 1);
        this.cardLog.push(turn_card);
        // //河牌圈的公共牌
        let river_card = totalcards.splice(0, 1);
        this.cardLog.push(river_card);
        // 测试用
        // this.cardLog = []
        // this.cardLog.push([{ "id": 27, "color": 3, "score": 2 }, { "id": 28, "color": 3, "score": 3 }, { "id": 29, "color": 3, "score": 4 }])
        // this.cardLog.push([{ "id": 43, "color": 4, "score": 5 }])
        // this.cardLog.push([{ "id": 47, "color": 4, "score": 9 }])
        //从大盲位下一位开始下注
        this.cur_seat = this.nextSeat(this.bb_seat);
        this.logger.debug(`===========startGame, sb_seat: ${this.sb_seat}, bb_seat:${this.bb_seat}, cur_seat:${this.cur_seat}`);
        // 大小盲注下注发中控(先小后大)
        const sbPlayer = this.players[this.sb_seat];
        const bbPlayer = this.players[this.bb_seat];
        // 小
        game_operate_step({
            games_id: this.id,
            user_id: sbPlayer.uid,
            user_status: 1,
            operate_type: 9 /* operate_type.Raise */,
            stake: this.sb_bet,
            add_time: (0, util_1.nowMs)(),
            poker_logs: '',
            card_type: '',
            hand_card: this.handCardArr.map((item, index) => {
                // 返回所有人的cardTypeObjArr
                return {
                    uid: sbPlayer.uid,
                    card: item,
                    cardType: this.Round_Card_Type(item)
                };
            })
        });
        // 大
        game_operate_step({
            games_id: this.id,
            user_id: bbPlayer.uid,
            user_status: 1,
            operate_type: 9 /* operate_type.Raise */,
            stake: this.bb_bet,
            add_time: (0, util_1.nowMs)(),
            poker_logs: '',
            card_type: '',
            hand_card: this.handCardArr.map((item, index) => {
                // 返回所有人的cardTypeObjArr
                return {
                    uid: sbPlayer.uid,
                    card: item,
                    cardType: this.Round_Card_Type(item)
                };
            })
        });
        this.room.setPlaying(true);
    }
    /**
     * 玩家重新进入进入房间
     * @param uid 玩家id
     * @returns
     */
    reenter(uid) {
        if (this.status == 0 /* e_room_status.Normal */ || this.status == 1 /* e_room_status.Waiting */ || this.status == 2 /* e_room_status.Ready */) {
            return false;
        }
        let seat = this.getPlayerSeat(uid);
        if (seat < 0) {
            return;
        }
        let round = this.endRound;
        if (!round) {
            round = this.round_status;
        }
        let index = (round / 2) - 2;
        let comm_ids = [];
        for (let i = 0; i < index; i++) {
            //取目前为止发的公共牌
            comm_ids = comm_ids.concat(this.cardLog[i]);
        }
        let call = this.getCall(this.cur_seat);
        let minRaiseValue = this.Min_Raise(call);
        let can_bet = this.checkBet(call) ? 1 : 0;
        let can_check = this.checkCheck(this.last_action, this.cur_seat) ? 1 : 0;
        let cur_seat = this.getOpSeat();
        let can_raise = 1;
        let can_call = 1;
        if (this.status == 5 /* e_room_status.SettleFinish */) {
            can_bet = 0;
            can_check = 0;
            cur_seat = -1;
            call = 0;
            minRaiseValue = 0;
        }
        if (can_check) {
            can_raise = 0;
            can_call = 0;
            can_bet = 1;
        }
        else {
            can_bet = 0;
        }
        if (can_bet) {
            can_raise = 0;
            can_call = 0;
        }
        let raiseCount = this.getRaiseCount();
        if (can_raise == 1 && raiseCount >= MAX_RAISE_COUNT) {
            can_raise = 0;
        }
        this.logger.log("handcard array:", this.handCardArr, " seat:", seat);
        let response = {
            room_id: this.id,
            room_status: this.status,
            round_status: this.round_status,
            comm_ids: this.objToCard(comm_ids),
            hand_ids: this.objToCard(this.handCardArr[seat]),
            card_type: this.Round_Card_Type(this.handCardArr[seat]),
            main_pot: this.pot,
            op_seat: cur_seat,
            op_time: this.waitTime,
            players: [],
            round_bets: [],
            bet: this.baseScore,
            can_bet: can_bet,
            min_bet: call,
            can_check: can_check,
            can_call: can_call,
            call: call,
            can_raise: can_raise,
            min_raise: minRaiseValue,
        };
        let playRound = this.exchange_round_status();
        let roundLogs = this.playLog[playRound];
        for (let i = 0; i < this.players.length; i++) {
            let hand_ids = [];
            let card_type = 0;
            let allin_round = -1;
            let allin_index = this.allin.indexOf(this.players[i].chairId);
            if (allin_index < 0)
                allin_index = 0;
            if (this.players[i].bet == this.players[i].gold) {
                //玩家全押了
                hand_ids = this.objToCard(this.handCardArr[i]);
                card_type = this.Round_Card_Type(this.handCardArr[i]);
                allin_round = this.changeRound(this.allin_round[allin_index]);
            }
            let playLog = undefined;
            if (roundLogs) {
                playLog = roundLogs.findLast((a) => a.seat == this.players[i].chairId);
            }
            response.players.push({
                uid: this.players[i].uid,
                gold: this.players[i].gold,
                bet: this.players[i].bet,
                seat: this.players[i].chairId,
                seat_type: this.players[i].opType,
                nickname: this.players[i].nickname,
                head: this.players[i].headImg,
                pic: this.players[i].pic,
                status: 2 /* e_role_status.Play */,
                last_action: playLog === null || playLog === void 0 ? void 0 : playLog.action,
                round_bet: this.bets[i] || 0,
                hand_ids,
                card_type,
                allin_round
            });
            response.round_bets[i] = this.bets[i];
        }
        this.notifyResume(response, uid);
    }
    async getRoomLock() {
        await mutex.acquire(this.getLockKey());
        this.logger.debug(`======================获取锁:${this.getLockKey()}`);
    }
    async returnRelease(entry, msg) {
        mutex.release();
        this.logger.debug(`======================释放锁:${this.getLockKey()}, msg:${msg}, 入口:${entry}`);
        return msg;
    }
    /**
     * 玩家出牌
     * @param seat 玩家座位
     * @param action 玩家操作
     * @param bet 下注金额
     * @returns
     */
    play(uid, seat, action, bet) {
        let result = this.checkCurrentUser(uid, seat);
        if (result !== '') {
            return result;
        }
        if (this.isQuick()) {
            //如果处于流程加速中, 直接返回给客户端成功, 跳过后续处理
            this.logger.log("game run in quick.");
            return '';
        }
        let user = this.players[seat];
        if (!user) {
            this.logger.log(`玩家座位:${seat}`);
            return '玩家不在房间';
        }
        //出牌座位是否一致
        if (this.cur_seat != seat) {
            this.logger.log(`cur_seat:${this.cur_seat}, seat:${seat}`);
            return '当前还未轮到你的讲话';
        }
        // 超过每轮3次下注限制
        // if (this.roundBetTimes[seat] >= 3 && action === e_player_action.raise) {
        //     return '每轮只能加注3次';
        // }
        //无手牌无法出牌
        if (this.handCardArr[seat].length === 0) {
            this.logger.log(`座位${seat}玩家无手牌`);
            return '请等待发牌';
        }
        if (!this.checkBetRound()) {
            this.logger.log(`当前轮次:${this.round_status}, this.checkBetRound:${this.checkBetRound()}`);
            return '当前不是下注轮次';
        }
        result = this.Process_action(seat, action, bet);
        return result;
    }
    checkBetRound() {
        switch (this.round_status) {
            case 3 /* e_room_round_status.Preflop_Bet */:
            case 5 /* e_room_round_status.Flop_Bet */:
            case 7 /* e_room_round_status.Turn_Bet */:
            case 9 /* e_room_round_status.River_Bet */:
            case 10 /* e_room_round_status.Showdown */:
                return true;
                break;
            default:
                return false;
        }
    }
    getPlayerSeat(uid) {
        for (let i = 0; i < this.players.length; i++) {
            if (this.players[i].uid == uid) {
                return i;
            }
        }
        return -1;
    }
    /**
     * 获取前一个玩家的座位
     * @param seat
     * @returns
     */
    prevSeat(seat = -1) {
        let prev = this.cur_seat;
        if (seat !== -1) {
            prev = seat;
        }
        for (let i = 0; i < this.players.length; i++) {
            prev--;
            if (prev < 0) {
                prev = this.players.length - 1;
            }
            if (this.players[prev].opType != 4 /* e_player_seat.fold */) {
                //上一个座位的玩家没有弃牌,返回座位号
                return prev;
            }
        }
    }
    /**
     * 获取下一个出牌玩家座位
     * @returns
     */
    nextSeat(seat = -1) {
        let next = this.cur_seat;
        if (seat !== -1) {
            next = seat;
        }
        for (let i = 0; i < this.players.length; i++) {
            next--;
            if (next < 0) {
                next = this.players.length - 1;
            }
            if (this.players[next].opType != 4 /* e_player_seat.fold */ &&
                this.players[next].gold > this.players[next].bet) {
                //下一个座位的玩家没有弃牌并且还有余额可投注
                return next;
            }
        }
        return -1;
    }
    /**
     * 计算投注数组平均值
     * @param bets
     * @returns
     */
    getArrAverage(bets) {
        const average = bets.reduce((a, b) => a + b) / bets.length;
        return average;
    }
    /**
     * 计算投注数组最大值
     * @param bets
     * @returns
     */
    getArrMax(bets = []) {
        if (bets.length == 0)
            bets = this.bets;
        if (bets.length == 0)
            return 0;
        let max = 0;
        for (let i = 0; i < bets.length; i++) {
            if (bets[i] > max) {
                max = bets[i];
            }
        }
        return max;
    }
    /** 计算投注数组最小值 */
    getArrMin(bets = []) {
        if (bets.length == 0)
            bets = this.bets;
        if (bets.length == 0)
            return 0;
        let min = bets[0];
        for (let i = 0; i < bets.length; i++) {
            if (this.folds.indexOf(i) == -1 &&
                this.allin.indexOf(i) == -1) {
                //弃牌跳过
                //最小值需要跳过allin, 避免最大最小值始终无法一致
                if (bets[i] < min) {
                    min = bets[i];
                }
            }
        }
        return min;
    }
    /**
     * 获取跟注数量
     * @param seat
     * @returns
     */
    getCall(seat) {
        var _a;
        let call = this.getArrMax() - ((_a = this.bets[seat]) !== null && _a !== void 0 ? _a : 0);
        //如果还没有人下注，底注为房间底分
        if (call == 0 && this.getArrMax() == 0) {
            call = this.baseScore;
        }
        if (this.quick_check) {
            //加速中不允许下注
            call = 0;
        }
        return call;
    }
    /**
     * 获取当前操作玩家
     * @returns
     */
    getOpSeat() {
        if (this.quick_check) {
            //加速中不下发当前操作玩家
            return -1;
        }
        return this.cur_seat;
    }
    /**
     * 校验是否可以下注
     * @param call
     * @returns
     */
    checkBet(call) {
        if (call == 0) {
            return false;
        }
        return true;
    }
    checkArrAverage() {
        return this.getArrMax(this.bets) > 0 && this.getArrMax(this.bets) == this.getArrMin(this.bets);
    }
    /**
     * 返回非弃牌非allin玩家数量
     * @returns
     */
    allCanOp() {
        return this.ops.filter(o => o != 6 /* e_player_action.fold */ && o != 4 /* e_player_action.allin */).length;
    }
    /**
     * 获取已操作玩家数量
     * @param ops
     * @returns
     */
    getHasOpCount(ops) {
        const zero = ops.filter(o => o == 0).length;
        this.logger.debug(`==========ops: ${this.ops}, check round:`, zero);
        return ops.length - zero;
    }
    /**
     * 校验是否可以过牌
     * @param action 当前玩家操作
     * @param next_seat 下一个顺位玩家座位
     */
    checkCheck(action, next_seat) {
        if (this.quick_check) {
            //加速中不允许操作
            return false;
        }
        if (this.round_status != 3 /* e_room_round_status.Preflop_Bet */ &&
            action == 0 /* e_player_action.normal */) {
            //每轮的第一个玩家必定可以check
            //翻牌前大小盲是系统强制下注的,需要特殊处理
            return true;
        }
        if (action == 5 /* e_player_action.check */) {
            //如果当前玩家可以过牌，下一个顺位默认可以过牌
            return true;
        }
        if (this.getArrMax(this.bets) == 0) {
            //如果本轮还没有玩家下注，下一个顺位可以过牌
            return true;
        }
        if (!this.bb_check &&
            next_seat == this.bb_seat) {
            //使用掉过牌机会
            this.bb_check = true;
            if (this.getArrMax(this.bets) != this.getArrMin(this.bets)) {
                //如果当前筹码没平，过牌机会自动失效
                return false;
            }
            //大盲在第一轮有一次过牌机会
            return true;
        }
        return false;
    }
    /**
     * 校验本轮是否结束
     * @returns
     */
    checkRoundFinal(seat, action, call) {
        //无法操作的玩家数量
        let unOperator = this.folds.length + this.allin.length;
        // if (this.players.length == this.folds.length + 1) {
        //     //如果只剩下一个玩家,游戏结束
        //     return true;
        // }
        this.logger.debug('==================check round: 最大下注：', this.getArrMax(this.bets), '最小下注:', this.getArrMin(this.bets), '已经操作的玩家：', this.getHasOpCount(this.ops), '还未操作的玩家：', (this.players.length - this.folds.length), '操作序列：', this.ops, '下注序列：', this.bets);
        //本轮有下注, 最大下注跟最小下注一致,表示配平
        //本轮无下注, 当前玩家过牌,并且下一个玩家是庄家,表示全部过牌
        //所有玩家没有都喊话
        if (this.getHasOpCount(this.ops) < this.players.length) {
            this.logger.debug(`====已操作玩家:${this.getHasOpCount(this.ops)}, 所有玩家没有都喊话`);
            return false;
        }
        //下注配平了
        let arrAverage = false;
        if (this.getArrMax(this.bets) > 0 && this.getArrMax(this.bets) == this.getArrMin(this.bets)) {
            this.logger.debug(`===下注最大${this.getArrMax(this.bets)},最小:${this.getArrMin(this.bets)},配平了`);
            arrAverage = true;
        }
        if (call == 0) {
            //下一家没得加注
            return true;
        }
        if (this.getHasOpCount(this.ops) >= this.players.length && this.getArrMax() == 0) {
            //所有玩家都操作过了，没有下注也回合结束
            return true;
        }
        if (arrAverage &&
            this.getHasOpCount(this.ops) == this.players.length &&
            this.players.length == unOperator + 1) {
            //所有玩家都操作过了, 筹码配平了,场上可以操作的玩家只剩下一个时快进
            this.quick_check = true;
            this.waitTime = exports.sql_config.round_quick_check;
            this.logger.debug('===所有玩家都操作过了, 场上可以操作的玩家只剩下一个时快进');
            return true;
        }
        if (seat == this.cur_seat ||
            this.cur_seat == -1) {
            //下一个可操作玩家依旧是当前操作玩家,表示其他玩家是弃牌或全押状态
            //或者无可操作玩家,判定本轮结束
            this.quick_check = true;
            this.waitTime = exports.sql_config.round_quick_check;
            return true;
        }
        if (arrAverage) {
            return true;
        }
        return false;
    }
    /**
     * 校验游戏是否结束
     * @returns
     */
    checkGameFinal(seat, action) {
        let checkNext = this.nextSeat(seat);
        if (this.players.length == this.folds.length + 1) {
            //如果只剩下一个玩家,游戏结束
            return true;
        }
        if (this.round_status == 9 /* e_room_round_status.River_Bet */ &&
            (this.checkArrAverage() ||
                action == 5 /* e_player_action.check */ && this.getHasOpCount(this.ops) >= this.players.length)) {
            return true;
        }
        if (checkNext == -1) {
            //没有玩家可以操作，进入流程加速，跳过玩家操作阶段，只进行发牌
            this.quick_check = true;
        }
        //当前玩家操作完，可操作玩家只剩下1人，并且剩余可操作玩家的下注是最大，加速流程到结束
        if (this.allCanOp() == 1 && this.bets[checkNext] >= this.getArrMax(this.bets)) {
            this.quick_check = true;
        }
        return false;
    }
    /**
     * 校验是否发牌轮
     * @param status
     * @returns
     */
    checkDealRound(status) {
        switch (status) {
            case 4 /* e_room_round_status.Flop */:
            case 8 /* e_room_round_status.River */:
            case 6 /* e_room_round_status.Turn */:
                return true;
                break;
            default:
                return false;
                break;
        }
        return false;
    }
    /**
     * 卡组对象转id数组
     * @param cards
     * @returns
     */
    objToCard(cards) {
        let ids = [];
        for (let i = 0; i < cards.length; i++) {
            ids.push(cards[i].id);
        }
        return ids;
    }
    /**
     *
     * @param notFoldPlayers
     * @returns
     */
    getMaxCardPlayer(notFoldPlayers) {
        console.log('============getMaxCardPlayer: ', notFoldPlayers);
        notFoldPlayers = notFoldPlayers.sort((a, b) => {
            let checkCard = [...this.handCardArr[a.chairId],
                ...this.cardLog[0],
                ...this.cardLog[1],
                ...this.cardLog[2]];
            let checkCard1 = [...this.handCardArr[b.chairId],
                ...this.cardLog[0],
                ...this.cardLog[1],
                ...this.cardLog[2]];
            let result = cardLogic_1.Logic.compareHands(checkCard, checkCard1);
            if (result.res === 1) {
                return -1;
            }
            else if (result.res === 2) {
                return 1;
            }
            else {
                // res返回3平局
                // 平局要判断谁的公共牌多,谁用的公共牌多谁就排前面
                // 公共牌id数组
                const publicPoker = [
                    ...this.cardLog[0],
                    ...this.cardLog[1],
                    ...this.cardLog[2]
                ].map(card => card.id);
                const checkCardId = cardLogic_1.Logic.getCompleteHandcards(checkCard);
                const checkCard1Id = cardLogic_1.Logic.getCompleteHandcards(checkCard1);
                // 计算谁用的公共牌多
                let checkCardFromPublicNum = 0;
                let checkCardFromPublicNum1 = 0;
                publicPoker.forEach((cardID) => {
                    checkCardId.forEach((checkCardId) => {
                        if (cardID === checkCardId) {
                            checkCardFromPublicNum++;
                        }
                    });
                    checkCard1Id.forEach((checkCardId) => {
                        if (cardID === checkCardId) {
                            checkCardFromPublicNum1++;
                        }
                    });
                });
                // 多的放在前面
                if (checkCardFromPublicNum > checkCardFromPublicNum1) {
                    return -1;
                }
                else if (checkCardFromPublicNum < checkCardFromPublicNum1) {
                    return 1;
                }
                else {
                    return 0;
                }
            }
        });
        return notFoldPlayers[0].chairId;
    }
    getMaxCardPlayers(notFoldPlayers, maxCardPlayer) {
        const maxCardPlayers = [];
        notFoldPlayers.forEach((player) => {
            let checkCard = [...this.handCardArr[maxCardPlayer],
                ...this.cardLog[0],
                ...this.cardLog[1],
                ...this.cardLog[2]];
            let checkCard1 = [...this.handCardArr[player.chairId],
                ...this.cardLog[0],
                ...this.cardLog[1],
                ...this.cardLog[2]];
            let result = cardLogic_1.Logic.compareHands(checkCard, checkCard1);
            if (result.res === 3) {
                maxCardPlayers.push(player.chairId);
            }
        });
        return maxCardPlayers;
    }
    /**
     * 游戏结束
     */
    async gameOver(round = undefined) {
        //移除定时器
        clearInterval(this.dt);
        this.overTime = (0, util_1.nowMs)();
        //结算逻辑
        let { settlementPlayers, winnerPlayerArr, drawPlayerArr, loserPlayerArr } = await this.settle_logic(round);
        this.submit_game_over_logs(settlementPlayers, winnerPlayerArr, drawPlayerArr, loserPlayerArr);
        this.room.setPlaying(false);
        this.room.isEnd = true;
    }
    /**
     * 结算并广播
     * @param round
     * @returns
     */
    async settle_logic(round = undefined) {
        if (this.endRound) {
            round = this.endRound;
        }
        // 1用数组把survival玩家的player（深拷贝）存起来
        // 创建一个结算数组（下发数组）,并初始化
        /** 下发数组 */
        let settlementPlayers = [];
        // 是否所有人都弃牌
        let isAllFold = (this.players.length - 1) == this.folds.length;
        // 在所有人中找到未弃牌的玩家，并且牌型最大的玩家
        // 未弃牌玩家
        const notFoldPlayers = this.players.filter(player => player.opType !== 4 /* e_player_seat.fold */);
        // 牌型最大的玩家(chiarId)
        const maxCardPlayer = this.getMaxCardPlayer(notFoldPlayers);
        // 跟牌型最大的玩家比，如果是一样，说明是平局。那么都要下发
        const maxCardPlayers = this.getMaxCardPlayers(notFoldPlayers, maxCardPlayer);
        this.players.forEach(player => {
            let card_type = isAllFold ? undefined : this.Round_Card_Type(this.handCardArr[player.chairId], round);
            settlementPlayers.push({
                /** 玩家id */
                uid: player.uid,
                /** 座位 */
                seat: player.chairId,
                /** 昵称 */
                nickname: player.nickname,
                /** 头像 */
                head: player.headImg,
                /** 金币变化 */
                gold: 0,
                /** 玩家手牌 */
                hand_card: isAllFold ? [] : this.objToCard(this.handCardArr[player.chairId]),
                /** 手牌最大的赢家(座位号) */
                maxCardPlayers,
                /** 结算牌 */
                // 所有人自己的牌
                settlement_card: isAllFold ? [] : cardLogic_1.Logic.getCompleteHandcards([
                    ...this.cardLog[0],
                    ...this.cardLog[1],
                    ...this.cardLog[2],
                    ...this.handCardArr[player.chairId],
                ]),
                // 全局最大的牌
                // settlement_card: isAllFold ? [] : Logic.getCompleteHandcards([
                //     ...this.handCardArr[maxCardPlayer],
                //     ...this.cardLog[0],
                //     ...this.cardLog[1],
                //     ...this.cardLog[2]
                // ]),
                /** 牌型 */
                card_type,
                /** 金币变化(不包含自己的钱) */
                changeGold: 0
            });
        });
        //填充结算玩家
        let survival = [];
        for (let i = 0; i < this.players.length; i++) {
            survival.push(JSON.parse(JSON.stringify(this.players[i])));
        }
        // 2对下注排序(升序)
        survival.sort((a, b) => {
            return a.bet - b.bet;
        });
        // 3创建边池数组，把所有人的下注减去最小下注（生成对象:边池id，边池钱，边池包含的玩家），并push到边池数组中
        let sidePotArr = [];
        // 只要survival数组长度大于1，就说明还有边池
        while (survival.length) {
            // 生成边池
            let sidePot = {
                id: sidePotArr.length,
                money: 0,
                players: []
            };
            // 最小下注
            let minBet = 0;
            // 循环所有玩家，找到最小下注(不能为0)
            for (let i = 0; i < survival.length; i++) {
                let player = survival[i];
                if (player.bet > 0) {
                    minBet = player.bet;
                    break;
                }
            }
            // 循环所有玩家，生成边池
            for (let i = 0; i < survival.length; i++) {
                let player = survival[i];
                if (player.bet === 0) {
                    // 在边池中添加玩家
                    sidePot.players.push(survival.splice(i, 1)[0]);
                    i--;
                    continue;
                }
                // 边池钱加上最小下注或者玩家下注（取最小值）
                sidePot.money += minBet;
                // 所有人的下注减去最小下注
                player.bet -= minBet;
                settlementPlayers[player.chairId].gold -= minBet;
                settlementPlayers[player.chairId].changeGold -= minBet;
                // 如果玩家下注被减为0，删除这个玩家
                if (player.bet <= 0) {
                    // 在边池中添加玩家
                    sidePot.players.push(survival.splice(i, 1)[0]);
                    i--;
                }
                // 如果玩家下注还有剩余，也要在边池中添加玩家
                if (player.bet > 0) {
                    // 在边池中添加玩家
                    sidePot.players.push(JSON.parse(JSON.stringify(player)));
                }
            }
            // 把边池push到边池数组中
            if (sidePot.money > 0) {
                sidePotArr.push(sidePot);
            }
        }
        // 4对边池数组进行循环，每次循环都比较数组每一个对象中每一个人的牌力，牌力最大的人获得边池中所有的钱（备注：抽水，平局平分边池）
        sidePotArr.forEach((sidePot) => {
            // 循环比较sidePot中每一个人的牌力
            sidePot.players.sort((a, b) => {
                let checkCard = [...this.handCardArr[a.chairId],
                    ...this.cardLog[0],
                    ...this.cardLog[1],
                    ...this.cardLog[2]];
                let checkCard1 = [...this.handCardArr[b.chairId],
                    ...this.cardLog[0],
                    ...this.cardLog[1],
                    ...this.cardLog[2]];
                if (a.opType === 4 /* e_player_seat.fold */)
                    return 1;
                if (b.opType === 4 /* e_player_seat.fold */)
                    return -1;
                let result = cardLogic_1.Logic.compareHands(checkCard, checkCard1);
                if (result.res == 1) {
                    return -1;
                }
                else if (result.res == -1) {
                    return 1;
                }
                else {
                    // 平局
                    return 0;
                }
            });
            // 胜利玩家座位
            let winSeat = sidePot.players[0].chairId;
            // 胜利玩家数组
            let winSeatArr = [winSeat];
            // 循环比较胜利玩家和其他玩家的牌力,有一致的就添加到胜利玩家数组中(平局)
            for (let i = 1; i < Math.min(6, sidePot.players.length); i++) {
                let checkCard = [...this.handCardArr[winSeat],
                    ...this.cardLog[0],
                    ...this.cardLog[1],
                    ...this.cardLog[2]];
                let checkCard1 = [...this.handCardArr[sidePot.players[i].chairId],
                    ...this.cardLog[0],
                    ...this.cardLog[1],
                    ...this.cardLog[2]];
                if (cardLogic_1.Logic.compareHands(checkCard, checkCard1).res === 3 && sidePot.players[i].opType !== 4 /* e_player_seat.fold */) {
                    winSeatArr.push(sidePot.players[i].chairId);
                }
            }
            // 本边池的胜利玩家数量
            let winSeatNum = winSeatArr.length;
            // 胜利玩家收益
            this.winMoney += sidePot.money;
            // 本边池的胜利玩家收益
            let winGold = sidePot.money / winSeatNum;
            // 结算本边池
            winSeatArr.forEach((seat) => {
                settlementPlayers[seat].gold = Number(settlementPlayers[seat].gold) + Number(winGold);
                settlementPlayers[seat].changeGold = Number(settlementPlayers[seat].changeGold) + Number(winGold);
            });
        });
        // 5下发结算消息，同步中控
        // 胜利玩家列表
        let winnerPlayerArr = [];
        // 失败玩家列表
        let loserPlayerArr = [];
        // 平局玩家列表
        let drawPlayerArr = [];
        // 填充胜利玩家列表和失败玩家列表
        settlementPlayers.forEach(item => {
            if (item.gold > 0) {
                winnerPlayerArr.push(item.uid);
            }
            if (item.gold < 0) {
                loserPlayerArr.push(item.uid);
            }
            if (item.gold === 0) {
                drawPlayerArr.push(item.uid);
            }
        });
        this.winner = winnerPlayerArr;
        this.loser = loserPlayerArr;
        this.draw = drawPlayerArr;
        // 循环所有玩家，发送结算消息
        for (let i = 0; i < settlementPlayers.length; i++) {
            const player = settlementPlayers[i];
            // 如果玩家金币大于0，要抽水
            if (player.gold > 0) {
                // 抽水
                const systemMoney = player.gold * exports.sql_config.lost_percent;
                this.systemMoney += systemMoney;
                player.gold -= systemMoney;
                player.changeGold -= systemMoney;
            }
            this.goldChange[player.seat] = player.gold;
            // 下发结算信息
            this.notifySettle(settlementPlayers, this.id, this.objToCard(this.getRoundCommCard(round)), player.gold, player.uid);
        }
        for (let i = 0; i < settlementPlayers.length; i++) {
            const player = settlementPlayers[i];
            // 更新玩家金币
            this.players[player.seat].addMoney(player.gold, this.id);
            let user = this.room.getUser(player.uid);
            if (!user || user.isAI) {
                continue;
            }
            let sn = (0, SN_1.createSN)();
            let u = await DBMgr_1.sqlDBUser.getUserByUid(player.uid);
            let r = (0, GameType_1.parseGameType)(this.room.gameType);
            let spend = new Coin_1.Coin(0);
            let win = new Coin_1.Coin(0);
            let final = new Coin_1.Coin(0);
            if (player.gold > 0) {
                let coinSN = (0, SN_1.createSN)();
                await DBMgr_1.sqlDBUser.incrementCoins(player.uid, new Coin_1.Coin(player.gold), this.room.gameType, coinSN, "poker", this.sn);
                win = new Coin_1.Coin(player.gold);
                final = win;
            }
            else if (player.gold < 0) {
                let coinSN = (0, SN_1.createSN)();
                await DBMgr_1.sqlDBUser.decrementCoins(player.uid, new Coin_1.Coin(-player.gold), this.room.gameType, coinSN, "poker", this.sn);
                spend = new Coin_1.Coin(player.gold);
                final = spend;
            }
            if (u != null) {
                let gameName = (0, Constants_1.getGameName)("poker", r.major) || "";
                await DBPokerLog_1.dbPokerLog.insertPokerLog({ sn: sn, userAccount: u.account, gameCode: r.major, gameName: gameName, roomId: this.room.id, spend: spend, win: win, final: final });
            }
        }
        return { settlementPlayers: settlementPlayers, winnerPlayerArr: winnerPlayerArr, drawPlayerArr: drawPlayerArr, loserPlayerArr: loserPlayerArr };
    }
    /**
     * 提交游戏结束的中控日志
     * @param settlementPlayers
     * @param winnerPlayerArr
     * @param drawPlayerArr
     * @param loserPlayerArr
     */
    submit_game_over_logs(settlementPlayers, winnerPlayerArr, drawPlayerArr, loserPlayerArr) {
        // 所有赢家下的注的总和
        const allWinnerBet = this.players.filter(player => winnerPlayerArr.indexOf(player.uid) !== -1).reduce((a, b) => a + b.bet, 0);
        // 所有平局玩家下的注的总和
        const allDrawBet = this.players.filter(player => drawPlayerArr.indexOf(player.uid) !== -1).reduce((a, b) => a + b.bet, 0);
        // 本局所有赢家赢的钱
        const winnerWinMoney = settlementPlayers.filter(player => winnerPlayerArr.indexOf(player.uid) !== -1).reduce((a, b) => a + b.gold, 0);
        // 本局所有输家输的钱
        const loserLoseMoney = settlementPlayers.filter(player => loserPlayerArr.indexOf(player.uid) !== -1).reduce((a, b) => a + b.gold, 0);
        // 同步中控
        game_over_logs(this.id, 1, this.roomType, this.baseScore, this.systemMoney, (0, util_1.nowMs)(), (0, util_1.nowMs)(), JSON.stringify([...winnerPlayerArr, ...drawPlayerArr]), winnerWinMoney, JSON.stringify(loserPlayerArr), loserLoseMoney);
    }
    notifyResume(resume, uid) {
        let conn = this.room.getUserConnection(uid);
        if (!conn) {
            this.logger.warn("can't get user connection, uid:", uid);
            return;
        }
        let r = { ...resume };
        r.op_seat = this.chairIdToSeatId(r.op_seat);
        r.players = r.players.map((p) => {
            let seatId = this.chairIdToSeatId(p.seat);
            return { ...p, seat: seatId };
        });
        conn.sendMsg("holdem/Resume", resume);
    }
    /**
     *
     * @api {websocket} /onSettle 06.结算通知
     * @apiName onSettle
     * @apiGroup 客户端事件广播
     * @apiVersion  0.1.0
     *
     * @apiSuccess {object[]} players 玩家结算信息
     * @apiSuccess (player){number} room_id 房间id
     * @apiSuccess (player){number} uid 玩家id
     * @apiSuccess (player){number} seat 玩家座位
     * @apiSuccess (player){string} nickname 昵称
     * @apiSuccess (player){string} head 头像
     * @apiSuccess (player){number} gold 金币变化
     * @apiSuccess (player){number[]} hand_card 玩家手牌
     * @apiSuccess (player){number[]} maxCardPlayer 手牌最大的赢家(座位号)
     * @apiSuccess (player){number[]} comm_ids 公共牌型
     * @apiSuccess (player){number[]} settlement_card 结算牌型
     * @apiSuccess (player){number} card_type 牌型
     * @apiSuccess {number} cur_gold 当前玩家的金币变化
     */
    notifySettle(players, room_id, comm_ids, cur_gold, uid) {
        let conn = this.room.getUserConnection(uid);
        if (!conn) {
            this.logger.warn("can't get user connection, uid:", uid);
            return;
        }
        //更改玩家的椅子id
        let ps = players.map((p) => {
            let seatId = this.chairIdToSeatId(p.seat);
            let maxCardPlayers = p.maxCardPlayers.map((p) => this.chairIdToSeatId(p));
            return { ...p, seat: seatId, maxCardPlayers: maxCardPlayers };
        });
        conn.sendMsg("holdem/GameOver", {
            room_id: room_id,
            comm_ids: comm_ids,
            cur_gold: cur_gold,
            players: ps,
        });
    }
    /**
     *
     * @api {websocket} /onDeal 06.发牌通知
     * @apiName onDeal
     * @apiGroup 客户端事件广播
     * @apiVersion  0.1.0
     *
     * @apiSuccess {number[]} card_ids 发牌id数组
     * @apiSuccess {number} type 发牌类型 0手牌 1公共牌
     * @apiSuccess {number} op_time 操作时间
     * @apiSuccess {number[]} card_type 牌型枚举(当前玩家的手牌和公共牌组合的最大牌型),如果有玩家全押,也下发对应牌型
    *
    */
    notifyDeal(card_ids, type, card_types, uid, card_type) {
        let conn = this.room.getUserConnection(uid);
        if (!conn) {
            this.logger.warn("can't get user connection, uid:", uid);
            return;
        }
        conn.sendMsg("holdem/Deal", {
            card_ids: card_ids,
            type: type,
            card_type: card_type,
            op_time: exports.sql_config.room_licensing_time,
        });
    }
    /**
     *
     * @api {websocket} /onAction 05.操作通知
     * @apiName onAction
     * @apiGroup 客户端事件广播
     * @apiVersion  0.1.0
     *
     * @apiSuccess {number} round 当前轮次
     * @apiSuccess {number} pot 底池大小
     * @apiSuccess {number} seat 上家玩家座位
     * @apiSuccess {number} action 上家操作 1下注 4allin 5过牌 6弃牌
     * @apiSuccess {number} bet 上家下注金额
     * @apiSuccess {number} round_bet 上家本轮的累计下注
     * @apiSuccess {number} game_bet 上家本局游戏的累计下注
     * @apiSuccess {number[]} hand_card 全押玩家的手牌
     *
     * @apiSuccess {number} cur_seat 当前操作的玩家座位
     * @apiSuccess {number} can_bet 是否可下注
     * @apiSuccess {number} can_check 是否可过牌
     * @apiSuccess {number} call 跟注金额(当前玩家最小的跟注金额, 如果没有上一个操作玩家，则做为盲注表现，如果跟住金额为0，表示当前无需下注)
     * @apiSuccess {number} min_raise 最小加注金额(当前玩家最小的加注金额为上一家的下注金额-上上家的下注金额)
     *
     * @apiSuccess {number} op_time 操作时间
     *
     */
    notifyAction(round, pot, seat, action, bet, round_bet, game_bet, hand_card, cur_seat, can_bet, can_check, can_call, can_raise, call, min_raise, op_time, desc) {
        this.room.broadcastMsg("holdem/Action", {
            round: round,
            pot: pot,
            seat: this.chairIdToSeatId(seat),
            action: action,
            bet: bet,
            round_bet: round_bet,
            game_bet: game_bet,
            hand_card: hand_card,
            cur_seat: this.chairIdToSeatId(cur_seat),
            can_bet: can_bet,
            min_bet: call,
            can_check: can_check,
            can_call: can_call,
            call: call,
            can_raise: can_raise,
            min_raise: min_raise,
            op_time: op_time,
            desc: desc,
        });
    }
    /**
     *
     * @api {websocket} /onStartGame 03.开始游戏通知
     * @apiName onStartGame
     * @apiGroup 客户端事件广播
     * @apiVersion  0.1.0
     *
     * @apiSuccess {number} room_id 房间id
     * @apiSuccess {number} room_status 房间状态
     * @apiSuccess {number} licensing_time 发牌时间
     * @apiSuccess {number} action_time 操作时间
     * @apiSuccess {number} button_seat 庄家位
     * @apiSuccess {number} sb_bet 小盲注
     * @apiSuccess {number} bb_bet 大盲注
     *
     */
    notifyStartGame(response, uid) {
        this.logger.log("onStartGame", `发送给 ${uid}`, response);
        //app.sendMsgByUid(cmd.onStartGame, response, [uid]);
        let r = { ...response };
        r.button_seat = this.chairIdToSeatId(r.button_seat);
        r.sb_seat = this.chairIdToSeatId(r.sb_seat);
        r.bb_seat = this.chairIdToSeatId(r.bb_seat);
        let conn = this.room.getUserConnection(uid);
        if (!conn) {
            this.logger.warn("can't get user connection, uid:", uid);
            return;
        }
        conn.sendMsg("holdem/GameStart", r);
    }
    get id() {
        return this.room.id;
    }
    get logger() {
        return this.room.logger;
    }
    async onMsg_Play(call) {
        this.logger.log("msg play:", call.msg);
        const conn = call.conn;
        if (!conn.uid) {
            this.logger.warn("connection no uid");
            return;
        }
        let player = this.players.find((p) => p.uid == conn.uid);
        if (!player) {
            this.logger.warn("can't get player, uid:", conn.uid);
            return;
        }
        await this.getRoomLock();
        try {
            let err = this.play(conn.uid, player.chairId, call.msg.action, call.msg.bet);
            if (err != "") {
                this.logger.log("play err:", err);
                call.conn.sendMsg("holdem/PlayResult", {
                    isSuccess: false,
                    error: err,
                });
            }
            else {
                call.conn.sendMsg("holdem/PlayResult", { isSuccess: true });
            }
        }
        finally {
            this.returnRelease("play", "");
        }
    }
    listenMsgs(conn) {
        conn.listenMsg("holdem/Play", call => { this.onMsg_Play(call); });
    }
    unlistenMsgs(conn) {
        conn.unlistenMsgAll("holdem/Play");
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
            this.uids.remove((v) => v == user.uid);
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
        this.playerCount += 1;
        let playerId = this._instIdBase++;
        this.logger.log("房间id是 " + this.id + " 房间底分是: " + this.baseScore);
        this.create(newPlayer.uid, 0);
        return playerId;
    }
    async onUserReady(newPlayer) {
        //add ai
        if (this.aiTimer === undefined) {
            this.aiTimer = setTimeout(async () => {
                while (this.players.length < this.room.maxPlayerNum && (this.status == 0 /* e_room_status.Normal */ || this.status == 1 /* e_room_status.Waiting */)) {
                    let p = this.room.createAI();
                    this.logger.log("add ai:", p);
                    await this.room.enterAI(p, "");
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
        //all players ready and player count more than 3
        if (this.status == 0 /* e_room_status.Normal */) {
            //第一个玩家进入房间后， 等待其它玩家进入游戏
            this.status = 1 /* e_room_status.Waiting */;
            this.waitTime = exports.sql_config.room_waiting_time;
            this.logger.log("room waiting now");
        }
    }
    onClientReady(conn) {
        if (!conn.uid) {
            return;
        }
        conn.sendMsg("holdem/RoomHoldem", {
            room_id: this.id,
            timestamp: (0, util_1.nowMs)(),
            room_status: this.status,
            players: this.userBaseInfo(),
            op_time: ((this.players.length > 1) ? this.waitTime : 0),
            sb_bet: this.sb_bet,
            bb_bet: this.bb_bet,
        });
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
        let player = this.players.find((p) => p.uid == userId);
        return player === null || player === void 0 ? void 0 : player.seatId;
    }
    checkRoomIdle() {
        if (this.room.isPlaying) {
            return false;
        }
        return this.room.checkEmptyTime();
    }
}
exports.RoomHoldem = RoomHoldem;
