"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomTienLen = exports.TEST_DECK = void 0;
const Player_1 = require("./Player");
const GameLogic_1 = require("./GameLogic");
const ConstDef_1 = require("./ConstDef");
const gameCfg_1 = require("./gameCfg");
const SubGameMSG_1 = require("./SubGameMSG");
const Room_1 = require("../Room");
const define_1 = require("./define");
const define_2 = require("./define");
const GameTimer_1 = require("./GameTimer");
const TienLenGame_1 = require("./TienLenGame");
const errorCode_1 = require("./errorCode");
const AI_1 = require("./AI");
const DBMgr_1 = require("../../db/DBMgr");
const Coin_1 = require("../../db/entity/Coin");
const Constants_1 = require("../../common/Constants");
const SN_1 = require("../../common/SN");
const DBPokerLog_1 = require("../../db/DBPokerLog");
const GameType_1 = require("../../common/GameType");
exports.TEST_DECK = [
    '黑桃2', '黑桃4', '方块4', '草花4', '红桃4', '黑桃9', '黑桃10', '草花5', '黑桃5', '方块5', '方块Q', '红桃Q', '红桃6',
    '草花2', '草花K', '黑桃K', '方块K', '红桃K', '黑桃8', '草花7', '红桃10', '草花9', '黑桃6', '方块6', '草花Q', '方块A',
    '方块2', '红桃J', '方块J', '草花J', '黑桃J', '草花6', '草花10', '黑桃A', '红桃A', '草花A', '红桃9', '红桃7', '红桃5',
    '红桃2', '红桃3', '方块3', '黑桃3', '草花3', '红桃8', '方块7', '方块9', '黑桃Q', '草花8', '方块10', '方块8', '黑桃7',
];
class RoomTienLen {
    constructor(id, gameTpye, displayId, name, password, options) {
        this.m_vPlayer = []; //玩家对象
        this.m_nRound = 0;
        this.deck = []; //一副牌
        this.currentUser = null; //当前玩家
        this.playExpireTime = null; //当前玩家出牌过期时间
        this.winUser = null; //胜利玩家
        this.bankUser = null; //庄家
        this.loopCardTypeList = []; //本轮出牌
        this.playCards = []; //已打出的牌
        this.bigWin = null; //大赢家数据
        this.tongPai = null; //通牌
        this.handRound = 1; // 第几手牌
        this.gameStatus = define_1.GameStatus.GAME_STATUS_FREE; //游戏状态
        this._instIdBase = 1;
        this.room = new Room_1.Room(id, gameTpye, displayId, name, this, 4, 4, password, undefined, false);
        this.beginTimestamp = 0;
        this.gameTimer = new GameTimer_1.GameTimer();
        this.cfg = {
            playerCount: 4,
            //游戏结算类型 1=记牌数，2=1打3
            settlementType: 1,
            chipType: gameCfg_1.EM_CHIP_TYPE.eScore,
            bet: 100,
            startConsume: 100,
            deck: exports.TEST_DECK,
        };
        if (options && options.bet != undefined) {
            this.cfg.bet = options.bet;
        }
        this.m_vPlayer = [];
        this.playerCount = this.m_vPlayer.length;
        this.sn = (0, SN_1.createSN)();
        this.game = new TienLenGame_1.TienLenGame(this.cfg, this.logger);
    }
    get logger() {
        return this.room.logger;
    }
    // 设置游戏状态
    setGameStatus(gameStatus) {
        this.gameStatus = gameStatus;
    }
    ;
    // 获取游戏状态
    getGameStatus() {
        return this.gameStatus;
    }
    async onEventStartGame() {
        //发测试的牌
        let dealTest = false;
        for (let i = 0; i < this.m_vPlayer.length; i++) {
            let conn = this.room.getUserConnection(this.m_vPlayer[i].userID);
            if (conn && conn.roleName === Constants_1.TEST_ROLE_NAME) {
                dealTest = true;
                this.logger.log("user role name is:", conn.roleName, ", enable deal test.");
            }
        }
        this.m_nRound++;
        this.setGameStatus(define_1.GameStatus.GAME_STATUS_PLAY);
        this.deck = this.game.deal(this.m_vPlayer, dealTest);
        // 第一局，牌最小的先出
        if (this.bankUser == null) {
            this.bankUser = GameLogic_1.tienlenLogic.getFirstPlayer(this.m_vPlayer);
        }
        this.currentUser = this.bankUser;
        let obj = {
            bankUser: this.bankUser,
            userCard: [],
            round: this.m_nRound,
            currentUser: this.currentUser,
            userCards: [],
        };
        for (let i = 0; i < this.cfg.playerCount; i++) {
            let userItem = this.getTableUserItem(i);
            if (!userItem || userItem.userStatus != define_2.gameConst.US_PLAYING) {
                continue;
            }
            let userCard = this.getSendObj(i);
            let userCards = userCard.map((card, index) => {
                return { chairId: index, cards: card, cardCount: card.length, userId: this.getUserId(index) };
            });
            this.sendToPlayer(SubGameMSG_1.SubGameMSG.S_GAME_START, i, Object.assign({}, obj, { userCard, userCards }));
        }
        obj.userCard = this.getSendObj(null);
        obj.userCards = obj.userCard.map((card, index) => {
            return { chairId: index, cards: card, cardCount: card.length, userId: this.getUserId(index) };
        });
        this.sendToWatcher(SubGameMSG_1.SubGameMSG.S_GAME_START, obj);
        // 场景数据
        let recordUserCard = [];
        for (let i = 0; i < this.cfg.playerCount; i++) {
            let userItem = this.getTableUserItem(i);
            if (!userItem || userItem.userStatus != define_2.gameConst.US_PLAYING) {
                continue;
            }
            recordUserCard[i] = this.m_vPlayer[i].userCard;
        }
        obj.userCard = recordUserCard;
        // 通牌检查
        for (let i = 0; i < this.cfg.playerCount; i++) {
            let chairID = (this.bankUser + i) % this.cfg.playerCount;
            let tongPaiCards = GameLogic_1.tienlenLogic.getTongPaiCards(this.m_vPlayer[chairID].userCard);
            if (tongPaiCards.length > 0) {
                this.winUser = chairID;
                this.tongPai = {
                    userId: this.getTableUserItem(chairID).userID,
                    chairId: chairID,
                    cards: tongPaiCards
                };
                this.m_vPlayer[chairID].isWinner = true;
                this.gameTimer.setGameTimer(() => {
                    this.onGameEnd(define_2.gameConst.GER_NORMAL);
                }, ConstDef_1.EM_TimerID.eTimerID_Action, ConstDef_1.Timer.start);
                return true;
            }
        }
        // 推送出牌消息
        this.gameTimer.setGameTimer(() => {
            this.notifyPlay();
        }, ConstDef_1.EM_TimerID.eTimerID_Action, ConstDef_1.Timer.start);
    }
    getTableUserItem(chairID) {
        if (chairID >= this.m_vPlayer.length)
            return null;
        return this.m_vPlayer[chairID];
    }
    getUserId(chairId) {
        let u = this.getTableUserItem(chairId);
        return u === null || u === void 0 ? void 0 : u.userID;
    }
    async onGameEnd(reason) {
        this.logger.log("game end");
        this.gameStatus = define_1.GameStatus.GAME_STATUS_WAIT;
        this.gameTimer.clearAllTimer();
        this.room.setPlaying(false);
        this.room.isEnd = true;
        this.currentUser = null;
        if (this.winUser == null) {
            this.logger.warn("win user is null");
            return;
        }
        // 计算比分
        if (reason == define_2.gameConst.GER_NORMAL) {
            let scoreRecords = this.game.settlement(this.winUser, this.m_vPlayer, this.tongPai);
            for (let r of scoreRecords) {
                let user = this.room.getUser(r.userID);
                if (!user || user.isAI) {
                    continue;
                }
                let u = await DBMgr_1.sqlDBUser.getUserByUid(user.uid);
                if (!u) {
                    continue;
                }
                let coinSN = (0, SN_1.createSN)();
                let sn = (0, SN_1.createSN)();
                let g = (0, GameType_1.parseGameType)(this.room.gameType);
                let gameName = (0, Constants_1.getGameName)("poker", g.major) || "";
                if (r.score > 0) {
                    await DBMgr_1.sqlDBUser.incrementCoins(r.userID, new Coin_1.Coin(r.score), this.room.gameType, coinSN, "poker", this.sn);
                    await DBPokerLog_1.dbPokerLog.insertPokerLog({ sn: sn, userAccount: u.account, gameCode: g.major, gameName: gameName, roomId: this.room.id, spend: new Coin_1.Coin(0), win: new Coin_1.Coin(r.score), final: new Coin_1.Coin(r.score) });
                }
                else if (r.score < 0) {
                    await DBMgr_1.sqlDBUser.decrementCoins(r.userID, new Coin_1.Coin(-r.score), this.room.gameType, coinSN, "poker", this.sn);
                    await DBPokerLog_1.dbPokerLog.insertPokerLog({ sn: sn, userAccount: u.account, gameCode: g.major, gameName: gameName, roomId: this.room.id, spend: new Coin_1.Coin(r.score), win: new Coin_1.Coin(0), final: new Coin_1.Coin(r.score) });
                }
            }
        }
        let userData = [];
        for (let i = 0; i < this.cfg.playerCount; i++) {
            let userItem = this.getTableUserItem(i);
            if (!userItem || userItem.userStatus != define_2.gameConst.US_PLAYING)
                continue;
            let data = {
                userId: userItem.userID,
                chairId: userItem.chairID,
                userCard: this.m_vPlayer[i].userCard,
                playRecords: this.m_vPlayer[i].playRecords,
                score: this.m_vPlayer[i].singleScore,
                bombScore: this.m_vPlayer[i].bombScore,
                badScore: this.m_vPlayer[i].badScore,
                allScore: this.m_vPlayer[i].score,
                allGold: userItem.getUserGold(),
                frozen: this.m_vPlayer[i].frozen,
                isWinner: this.m_vPlayer[i].isWinner,
                isCreator: this.createUserID == userItem.userID,
            };
            userData.push(data);
            this.logger.debug(`玩家数据: 赢次数 ${this.m_vPlayer[i].winCnt}, 炸次数 ${this.m_vPlayer[i].bombCnt}, 当前连胜 ${this.m_vPlayer[i].currSuccessiveWinCnt}, 最高连胜 ${this.m_vPlayer[i].successiveWinCnt}`);
        }
        // 判断大赢家
        if (reason == define_2.gameConst.GER_NORMAL) {
            //await this.checkBigWin();
        }
        let endObj = {
            bigWin: this.bigWin || false, // 大赢家
            tongPai: this.tongPai || undefined, // 通牌
            userData: userData,
            bigData: undefined,
            reason
        };
        let isFinal = true;
        if (isFinal) {
            let bigData = [];
            for (let i = 0; i < this.m_vPlayer.length; i++) {
                let userItem = this.m_vPlayer[i];
                bigData.push({
                    userId: userItem.userID,
                    chairId: userItem.chairID,
                    score: this.m_vPlayer[i].score,
                    gold: userItem.getUserGold(),
                    winCnt: this.m_vPlayer[i].winCnt,
                    bombCnt: this.m_vPlayer[i].bombCnt,
                    successiveWinCnt: this.m_vPlayer[i].successiveWinCnt,
                });
            }
            endObj.bigData = bigData;
        }
        this.broadCastGameData(SubGameMSG_1.SubGameMSG.S_GAME_END, endObj);
    }
    /**
     * 玩家出牌
     */
    onPlay(userItem, data) {
        if (this.getGameStatus() != SubGameMSG_1.SubGameMSG.GS_PLAY) {
            return true;
        }
        if (userItem.userStatus != define_1.UserStatus.US_PLAYING) {
            return true;
        }
        let chairID = userItem.chairID;
        // 判断是否当前玩家
        if (chairID != this.currentUser) {
            return true;
        }
        // 检查出牌
        if (!Array.isArray(data.cards) || data.cards.length == 0) {
            //BroadcastCenter.broadcast("GS_SEND_TOAST", { userItem, message: ERRORCODE.GAME_PLAY_CARDS.errStr, code: ERRORCODE.GAME_PLAY_CARDS.code });
            this.logger.warn({ userItem, message: errorCode_1.ERRORCODE.GAME_PLAY_CARDS.errStr, code: errorCode_1.ERRORCODE.GAME_PLAY_CARDS.code });
            return true;
        }
        let ret = GameLogic_1.tienlenLogic.checkPlayCards(this.m_vPlayer[chairID].userCard, data.cards);
        if (!ret) {
            //BroadcastCenter.broadcast("GS_SEND_TOAST", { userItem, message: ERRORCODE.GAME_PLAY_CARDS.errStr, code: ERRORCODE.GAME_PLAY_CARDS.code });
            this.logger.warn({ userItem, message: errorCode_1.ERRORCODE.GAME_PLAY_CARDS.errStr, code: errorCode_1.ERRORCODE.GAME_PLAY_CARDS.code });
            return true;
        }
        let cardType = ConstDef_1.CARD_TYPE.NULL;
        if (this.loopCardTypeList.length > 0) {
            cardType = GameLogic_1.tienlenLogic.checkValidCardType(data.cards, this.loopCardTypeList[this.loopCardTypeList.length - 1]);
            // 如果已经过了，需要4连对才能大
            if (this.m_vPlayer[chairID].hasPass) {
                if (cardType != ConstDef_1.CARD_TYPE.PAIRS || data.cards.length < 8) {
                    // 设置为无效出牌
                    cardType = ConstDef_1.CARD_TYPE.NULL;
                }
            }
        }
        else {
            cardType = GameLogic_1.tienlenLogic.getCardType(data.cards);
        }
        // 牌型错误
        if (ConstDef_1.CARD_TYPE.NULL == cardType) {
            //BroadcastCenter.broadcast("GS_SEND_TOAST", { userItem, message: ERRORCODE.GAME_PLAY_CARDS.errStr, code: ERRORCODE.GAME_PLAY_CARDS.code });
            this.logger.warn({ userItem, message: errorCode_1.ERRORCODE.GAME_PLAY_CARDS.errStr, code: errorCode_1.ERRORCODE.GAME_PLAY_CARDS.code });
            return true;
        }
        this.logger.log("user play, user:", userItem, " cards:", data.cards);
        this.gameTimer.clearAllTimer();
        // 删除打出的牌、记录到玩家出牌记录
        GameLogic_1.tienlenLogic.playCards(this.m_vPlayer[chairID].userCard, data.cards);
        this.m_vPlayer[chairID].playRecords.push(data.cards);
        if (cardType >= ConstDef_1.CARD_TYPE.PAIRS) {
            this.m_vPlayer[chairID].bombCnt++;
        }
        // 记录到已打出的牌
        this.playCards.push(...data.cards);
        // 记录到本轮打牌数组
        let sendData = {
            userID: userItem.userID,
            chairID,
            cards: data.cards,
            type: cardType,
            leftCardCount: this.m_vPlayer[chairID].userCard.length
        };
        this.loopCardTypeList.push(sendData);
        // 如果出完牌
        if (this.m_vPlayer[chairID].userCard.length == 0) {
            this.notifyPlay(true);
            this.checkBombScore();
            this.m_vPlayer[chairID].isWinner = true;
            this.winUser = chairID;
            this.onGameEnd(define_2.gameConst.GER_NORMAL);
        }
        else {
            // 游戏继续
            let nextUser = this.getNextUser(chairID);
            this.currentUser = nextUser;
            this.notifyPlay();
        }
        return true;
    }
    /**
     * 玩家过牌
     */
    onPass(userItem) {
        if (this.getGameStatus() != SubGameMSG_1.SubGameMSG.GS_PLAY) {
            return true;
        }
        if (userItem.userStatus != define_2.gameConst.US_PLAYING) {
            return true;
        }
        let chairID = userItem.chairID;
        // 判断是否当前玩家
        if (chairID != this.currentUser) {
            return true;
        }
        // 如果必须出牌
        if (this.loopCardTypeList.length == 0) {
            return true;
        }
        this.logger.log("user pass, user:", userItem);
        this.gameTimer.clearAllTimer();
        // 删除打出的牌、记录到玩家出牌记录
        this.m_vPlayer[chairID].hasPass = true;
        // 标记能出牌，选择过
        if (!this.m_vPlayer[chairID].canPlayPass && GameLogic_1.tienlenLogic.checkCanPlayCards(this.m_vPlayer[chairID].userCard)) {
            this.m_vPlayer[chairID].canPlayPass = true;
        }
        // 推送客户端 玩家pass
        let sendData = {
            userId: userItem.userID,
            chairId: chairID,
        };
        this.broadCastGameData(SubGameMSG_1.SubGameMSG.S_PASS, sendData);
        // 游戏继续
        let nextUser = this.getNextUser(chairID);
        if (nextUser == this.loopCardTypeList[this.loopCardTypeList.length - 1].chairID) { // 该轮结束
            // 检查是否有人被炸
            this.checkBombScore();
            // 清空本轮数据
            this.loopCardTypeList = [];
            this.handRound++;
            // 清除过牌标识
            for (let i = 0; i < this.cfg.playerCount; i++) {
                if (this.m_vPlayer[i].hasPass) {
                    this.m_vPlayer[i].hasPass = false;
                }
            }
        }
        this.currentUser = nextUser;
        this.notifyPlay();
        return true;
    }
    onTrusteeship(userItem, data) {
        if (this.getGameStatus() != SubGameMSG_1.SubGameMSG.GS_PLAY) {
            return true;
        }
        if (userItem.userStatus != define_2.gameConst.US_PLAYING) {
            return true;
        }
        let chairID = userItem.chairID;
        if (data.status) {
            if (!this.m_vPlayer[chairID].isTrusteeship) {
                this.m_vPlayer[chairID].isTrusteeship = true;
                this.broadCastGameData(SubGameMSG_1.SubGameMSG.S_TRUSTEESHIP, { chairId: chairID, status: true, userId: this.getUserId(chairID) });
                if (this.currentUser == chairID) {
                    this.gameTimer.clearAllTimer();
                    this.trusteeshipPlay();
                }
            }
        }
        else {
            if (this.m_vPlayer[chairID].isTrusteeship) {
                this.m_vPlayer[chairID].isTrusteeship = false;
                this.broadCastGameData(SubGameMSG_1.SubGameMSG.S_TRUSTEESHIP, { chairId: chairID, status: false, userId: this.getUserId(chairID) });
            }
        }
        return true;
    }
    /**
     * 检查炸分数
     */
    checkBombScore() {
        let scoreRecords = this.game.checkBombScore(this.loopCardTypeList, this.m_vPlayer);
        if (scoreRecords) {
            this.logger.log("bomb score records:", scoreRecords);
            // 推送结果
            this.broadCastGameData(SubGameMSG_1.SubGameMSG.S_BOMB_SCORE, { scoreRecords });
            // 通知玩家分数变化
            this.sendUserRoomScore();
        }
    }
    //发送玩家房间分数
    sendUserRoomScore() {
        let userData = [];
        for (let i = 0; i < this.m_vPlayer.length; i++) {
            let userItem = this.m_vPlayer[i];
            userData.push({
                chairId: userItem.chairID,
                score: this.m_vPlayer[i].score,
                gold: userItem.getUserGold(),
                userId: userItem.userID,
            });
        }
        this.broadCastGameData(SubGameMSG_1.SubGameMSG.S_ROOM_SCORE, { userData });
    }
    /**
    * 自动操作
     */
    autoPlay() {
        if (this.currentUser === null) {
            return;
        }
        // 如果就剩一手牌，直接打出
        let oneHand = false;
        let handCards = [...this.m_vPlayer[this.currentUser].userCard];
        if (this.loopCardTypeList.length > 0) {
            if (GameLogic_1.tienlenLogic.checkValidCardType(handCards, this.loopCardTypeList[this.loopCardTypeList.length - 1]) > ConstDef_1.CARD_TYPE.NULL) {
                oneHand = true;
            }
        }
        else if (GameLogic_1.tienlenLogic.getCardType(handCards) > ConstDef_1.CARD_TYPE.NULL) {
            oneHand = true;
        }
        let t = oneHand ? 0 : 15;
        this.playExpireTime = Date.now() + t * 1000;
        this.gameTimer.setGameTimer(() => {
            this.autoAction();
        }, ConstDef_1.EM_TimerID.eTimerID_Action, t);
    }
    /**
     * 自动操作
     * @returns
     */
    autoAction() {
        if (this.currentUser === null) {
            return;
        }
        let userItem = this.getTableUserItem(this.currentUser);
        if (!userItem) {
            return;
        }
        let u = this.room.getUser(userItem.userID);
        if (!u) {
            return;
        }
        let handCards = [...this.m_vPlayer[this.currentUser].userCard];
        let playCards;
        // 获取出牌
        if (u.isAI) {
            this.logger.log("ai play cards...");
            playCards = AI_1.tienlenAI.playStrategy(handCards, this.handRound, this.loopCardTypeList.length > 0 ? this.loopCardTypeList[this.loopCardTypeList.length - 1] : null);
        }
        else {
            this.logger.log("trusteeship play cards...");
            playCards = GameLogic_1.tienlenLogic.getPlayCards(handCards, this.loopCardTypeList.length > 0 ? this.loopCardTypeList[this.loopCardTypeList.length - 1] : null);
        }
        if (playCards.length > 0) {
            this.onPlay(userItem, { cards: playCards });
        }
        else {
            this.onPass(userItem);
        }
    }
    /**
     * 获取下一个用户
     * @param chairID 玩家
     */
    getNextChair(chairID) {
        for (let i = 1; i < this.cfg.playerCount; i++) {
            let nextChair = (chairID + i) % this.cfg.playerCount;
            let userItem = this.getTableUserItem(nextChair);
            if (userItem && userItem.userStatus == define_2.gameConst.US_PLAYING) {
                return nextChair;
            }
        }
        return chairID;
    }
    /**
     * 切换下一个用户
     * @param chairID 玩家
     */
    getNextUser(chairID) {
        let currentUser = this.getNextChair(chairID);
        for (let i = 0; i < this.cfg.playerCount; i++) {
            if (!this.m_vPlayer[currentUser].hasPass) {
                break;
            }
            let canPlayCards = GameLogic_1.tienlenLogic.findPromptCards(this.m_vPlayer[currentUser].userCard, this.loopCardTypeList[this.loopCardTypeList.length - 1]);
            if (canPlayCards.pairs.length > 0 && canPlayCards.pairs[canPlayCards.pairs.length - 1].cards.length >= 8) {
                break;
            }
            currentUser = this.getNextChair(currentUser);
        }
        return currentUser;
    }
    /**
     * 通知玩家出牌
     */
    notifyPlay(end = false) {
        if (this.currentUser == null) {
            this.logger.warn("notify play, current user is null");
            return;
        }
        let userItem = this.getTableUserItem(this.currentUser);
        if (!userItem)
            return;
        let obj = {
            currentUser: this.currentUser,
            userId: this.getUserId(this.currentUser),
            prevCards: this.loopCardTypeList.length > 0 ? this.loopCardTypeList[this.loopCardTypeList.length - 1] : undefined, //上家出牌
            handRound: this.handRound,
        };
        this.broadCastGameData(SubGameMSG_1.SubGameMSG.S_PLAY, obj);
        if (!end) {
            if (this.m_vPlayer[this.currentUser].isTrusteeship) {
                this.trusteeshipPlay();
            }
            else {
                this.autoPlay();
            }
        }
    }
    trusteeshipPlay() {
        console.log("trusteeshipPlay..........");
        const PLAY_TIME = 2;
        this.playExpireTime = Date.now() + PLAY_TIME * 1000;
        this.gameTimer.setGameTimer(() => {
            this.autoAction();
        }, ConstDef_1.EM_TimerID.eTimerID_Action, PLAY_TIME);
    }
    //发送给所有观战的人
    sendToWatcher(subCMD, data, needRecord = false) {
        this.logger.warn("send to watcher can't work now.");
    }
    //发送给单个玩家
    sendToPlayer(subCMD, chairID, msgData) {
        var userItem = this.getTableUserItem(chairID);
        if (userItem == null) {
            this.logger.warn("can't get user, chair id:", chairID);
            return false;
        }
        let conn = this.room.getUserConnection(userItem.userID);
        if (!conn) {
            this.logger.warn("can't get user connection, uid:", userItem.userID, " chair id:", chairID, " msg cmd:", subCMD);
            return false;
        }
        let data = msgData;
        if (subCMD == SubGameMSG_1.SubGameMSG.S_GAME_START) {
            conn.sendMsg("tienlen/GameStart", data);
        }
        else if (subCMD == SubGameMSG_1.SubGameMSG.S_TRUSTEESHIP) {
            conn.sendMsg("tienlen/TrusteeshipStatus", data);
        }
        else if (subCMD == SubGameMSG_1.SubGameMSG.S_PLAY) {
            conn.sendMsg("tienlen/TurnPlayer", data);
        }
        else if (subCMD == SubGameMSG_1.SubGameMSG.S_GAME_START) {
            conn.sendMsg("tienlen/GameStart", data);
        }
        else if (subCMD == SubGameMSG_1.SubGameMSG.S_GAME_END) {
            conn.sendMsg("tienlen/GameEnd", data);
        }
        else if (subCMD == SubGameMSG_1.SubGameMSG.S_BOMB_SCORE) {
            conn.sendMsg("tienlen/BombScore", data);
        }
        else if (subCMD == SubGameMSG_1.SubGameMSG.S_ROOM_SCORE) {
            conn.sendMsg("tienlen/RoomScore", data);
        }
        else {
            this.logger.warn("can't borad cast msg, cmd:", subCMD, " data:", data);
        }
        return true;
    }
    broadCastGameData(subCMD, msgData) {
        let data = msgData;
        this.logger.log("broadcast msg, cmd:", subCMD, " data:", data);
        if (subCMD == SubGameMSG_1.SubGameMSG.S_PASS) {
            this.room.broadcastMsg("tienlen/PassPlayer", data);
        }
        else if (subCMD == SubGameMSG_1.SubGameMSG.S_TRUSTEESHIP) {
            this.room.broadcastMsg("tienlen/TrusteeshipStatus", data);
        }
        else if (subCMD == SubGameMSG_1.SubGameMSG.S_PLAY) {
            this.room.broadcastMsg("tienlen/TurnPlayer", data);
        }
        else if (subCMD == SubGameMSG_1.SubGameMSG.S_GAME_START) {
            this.room.broadcastMsg("tienlen/GameStart", data);
        }
        else if (subCMD == SubGameMSG_1.SubGameMSG.S_GAME_END) {
            this.room.broadcastMsg("tienlen/GameEnd", data);
        }
        else if (subCMD == SubGameMSG_1.SubGameMSG.S_BOMB_SCORE) {
            this.room.broadcastMsg("tienlen/BombScore", data);
        }
        else if (subCMD == SubGameMSG_1.SubGameMSG.S_ROOM_SCORE) {
            this.room.broadcastMsg("tienlen/RoomScore", data);
        }
        else {
            this.logger.warn("can't borad cast msg, cmd:", subCMD, " data:", data);
        }
    }
    /**
     * 获取发牌信息
     * @param chairID 				座位ID
     */
    getSendObj(chairID) {
        let userCard = [];
        for (let i = 0; i < this.m_vPlayer.length; i++) {
            if (i == chairID) {
                userCard[i] = this.m_vPlayer[i].userCard;
            }
            else {
                userCard[i] = new Array(this.m_vPlayer[i].userCard.length).fill(0);
            }
        }
        return userCard;
    }
    onMsg_Trusteeship(call) {
        this.logger.log("msg trusteeship:", call.msg);
        const conn = call.conn;
        if (!conn.uid) {
            this.logger.warn("connection no uid");
            return;
        }
        const u = this.m_vPlayer.find((u) => u.userID == conn.uid);
        if (!u) {
            return;
        }
        this.onTrusteeship(u, { status: call.msg.status });
    }
    onMsg_Play(call) {
        this.logger.log("msg play:", call.msg);
        const conn = call.conn;
        if (!conn.uid) {
            this.logger.warn("connection no uid");
            return;
        }
        const u = this.m_vPlayer.find((u) => u.userID == conn.uid);
        if (!u) {
            return;
        }
        this.onPlay(u, { cards: call.msg.cards });
    }
    onMsg_Pass(call) {
        this.logger.log("msg pass:", call.msg);
        const conn = call.conn;
        if (!conn.uid) {
            this.logger.warn("connection no uid");
            return;
        }
        const u = this.m_vPlayer.find((u) => u.userID == conn.uid);
        if (!u) {
            return;
        }
        this.onPass(u);
    }
    listenMsgs(conn) {
        conn.listenMsg("tienlen/Trusteeship", call => { this.onMsg_Trusteeship(call); });
        conn.listenMsg("tienlen/Play", call => { this.onMsg_Play(call); });
        conn.listenMsg("tienlen/Pass", call => { this.onMsg_Pass(call); });
    }
    unlistenMsgs(conn) {
        conn.unlistenMsgAll("tienlen/Trusteeship");
        conn.unlistenMsgAll("tienlen/Play");
        conn.unlistenMsgAll("tienlen/Pass");
    }
    async onUserEnter(user, conn) {
    }
    onPlayerLeave(user, conn) {
        if (this.room.isPlaying) {
            return "ROOM_IS_PLAYING";
        }
        let index = this.m_vPlayer.findIndex((p) => p.userID == user.uid);
        if (index != -1) {
            this.playerCount -= 1;
            //不删除，避免chairid的顺序出问题，新加入的玩家会覆盖旧的玩家.
            this.m_vPlayer[index].isLeaved = true;
        }
        return '';
    }
    onJoinGame(newPlayer, roleName, isAI = false) {
        if (this.playerCount >= this.cfg.playerCount) {
            this.logger.warn("can't join game, room player count oversize");
            return 0;
        }
        this.playerCount += 1;
        let playerId = this._instIdBase++;
        let chairId = -1;
        let p = new Player_1.Player(newPlayer.uid, chairId, this.cfg.playerCount);
        p.gold = newPlayer.coin ? newPlayer.coin : 0;
        if (newPlayer.isAI) {
            p.isTrusteeship = true;
        }
        let index = this.m_vPlayer.findIndex((p) => p.isLeaved);
        if (index != -1) {
            p.chairID = index;
            this.m_vPlayer[index] = p;
        }
        else {
            p.chairID = this.m_vPlayer.length;
            this.m_vPlayer.push(p);
        }
        return playerId;
    }
    async onUserReady(newPlayer) {
        let p = this.m_vPlayer.find((p) => p.userID == newPlayer.uid);
        if (!p) {
            this.logger.warn("onUserReady, can't find user, uid:", newPlayer.uid);
            return;
        }
        p.userStatus = define_1.UserStatus.US_READY;
        this.onPlayerReady(newPlayer);
        //add ai
        if (this.aiTimer === undefined) {
            this.aiTimer = setTimeout(async () => {
                while (this.m_vPlayer.length < this.cfg.playerCount) {
                    let p = this.room.createAI();
                    this.logger.log("add ai:", p);
                    await this.room.enterAI(p, "");
                }
                this.logger.log("add ai complete.");
            }, 4000);
        }
    }
    onCheckGameBegin() {
        console.log("check game begin...");
        if (this.room.isPlaying) {
            return;
        }
        if (this.m_vPlayer.length < this.cfg.playerCount) {
            return;
        }
        let allReady = true;
        this.m_vPlayer.forEach((u) => {
            if (u.userStatus != define_1.UserStatus.US_READY) {
                allReady = false;
            }
        });
        if (!allReady) {
            console.log("not all players is ready, players:", this.m_vPlayer);
            return;
        }
        this.m_vPlayer.forEach((u) => {
            u.userStatus = define_1.UserStatus.US_PLAYING;
        });
        this.room.setPlaying(true);
        this.beginTimestamp = Date.now();
        this.onEventStartGame();
    }
    getPlayerNum() {
        return this.playerCount;
    }
    getChairId(userId) {
        let p = this.m_vPlayer.find((p) => p.userID == userId);
        if (!p) {
            return undefined;
        }
        return p.chairID;
    }
    onClientReady(conn) {
        if (!conn.uid) {
            return;
        }
        let user = this.room.getUser(conn.uid);
        if (!user) {
            return;
        }
        let prevCards = undefined;
        if (this.loopCardTypeList.length > 0) {
            prevCards = this.loopCardTypeList[this.loopCardTypeList.length - 1];
        }
        let players = this.m_vPlayer.map((p) => {
            let u = this.room.getUser(p.userID);
            return { uid: p.userID, name: (u === null || u === void 0 ? void 0 : u.name) || "", visualId: (u === null || u === void 0 ? void 0 : u.visualId) || 0, chairId: p.chairID };
        });
        let userCards = undefined;
        if (this.gameStatus == define_1.GameStatus.GAME_STATUS_PLAY) {
            let p = this.m_vPlayer.find((p) => p.userID == conn.uid);
            if (p) {
                let userCard = this.getSendObj(p.chairID);
                userCards = userCard.map((card, index) => {
                    return { chairId: index, cards: card, cardCount: card.length, userId: this.getUserId(index) };
                });
            }
            else {
                let userCard = this.getSendObj(null);
                userCards = userCard.map((card, index) => {
                    return { chairId: index, cards: card, cardCount: card.length, userId: this.getUserId(index) };
                });
            }
        }
        let msg = {
            roomId: this.room.id,
            gameStatus: this.gameStatus,
            serialNumber: this.cfg.bet,
            players: players,
            userCards: userCards,
            handRound: this.handRound,
            playerCount: this.playerCount,
            prevCards: prevCards,
        };
        if (this.currentUser != null) {
            let now = Date.now();
            if (this.playExpireTime && this.playExpireTime > now) {
                msg.currentLeftTime = Math.floor((this.playExpireTime - now) / 1000);
            }
            else {
                msg.currentLeftTime = 0;
            }
            let u = this.getTableUserItem(this.currentUser);
            msg.currentUser = this.currentUser;
            msg.currentUserId = u.userID;
        }
        conn.sendMsg("tienlen/RoomInfo", msg);
        if (user.playerId && user.isOnline && user.ready) {
            //玩家断线重连
            this.logger.log("play reconnect, uid:", user.uid, " player id:", user.playerId);
            this.onPlayerReady(user, conn);
        }
    }
    checkRoomIdle() {
        if (this.room.isPlaying) {
            return false;
        }
        return this.room.checkEmptyTime();
    }
    onPlayerReady(player, conn) {
    }
}
exports.RoomTienLen = RoomTienLen;
