"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TienLenGame = void 0;
const ConstDef_1 = require("./ConstDef");
const define_1 = require("./define");
const GameLogic_1 = require("./GameLogic");
const gameCfg_1 = require("./gameCfg");
const ConstDef_2 = require("./ConstDef");
class TienLenGame {
    constructor(cfg, logger) {
        this.cfg = cfg;
        this.logger = logger;
        if (this.cfg.deck) {
            this.deck = this.createDeck(this.cfg.deck);
        }
    }
    createDeck(deck) {
        let suitsMap = new Map();
        suitsMap.set("红桃", ConstDef_2.CARD_SUIT.HEART);
        suitsMap.set("草花", ConstDef_2.CARD_SUIT.CLUB);
        suitsMap.set("梅花", ConstDef_2.CARD_SUIT.CLUB);
        suitsMap.set("方块", ConstDef_2.CARD_SUIT.Diamond);
        suitsMap.set("黑桃", ConstDef_2.CARD_SUIT.SPADE);
        let ranksMap = new Map();
        ranksMap.set("A", ConstDef_1.CARD_RANK.ACE);
        ranksMap.set("2", ConstDef_1.CARD_RANK.TWO);
        ranksMap.set("3", ConstDef_1.CARD_RANK.THREE);
        ranksMap.set("4", ConstDef_1.CARD_RANK.FOUR);
        ranksMap.set("5", ConstDef_1.CARD_RANK.FIVE);
        ranksMap.set("6", ConstDef_1.CARD_RANK.SIX);
        ranksMap.set("7", ConstDef_1.CARD_RANK.SEVEN);
        ranksMap.set("8", ConstDef_1.CARD_RANK.EIGHT);
        ranksMap.set("9", ConstDef_1.CARD_RANK.NINE);
        ranksMap.set("10", ConstDef_1.CARD_RANK.TEN);
        ranksMap.set("J", ConstDef_1.CARD_RANK.JACK);
        ranksMap.set("Q", ConstDef_1.CARD_RANK.QUEEN);
        ranksMap.set("K", ConstDef_1.CARD_RANK.KING);
        let res = [];
        if (new Set(deck).size != deck.length) {
            this.logger.warn("repeat card.");
            return undefined;
        }
        for (let i = 0; i < deck.length; i++) {
            let v = deck[i];
            let s = v.substring(0, 2);
            let r = v.substring(2);
            if (!suitsMap.has(s)) {
                this.logger.warn("can't find card suits:", s);
                return undefined;
            }
            if (!ranksMap.has(r)) {
                this.logger.warn("can't find card ranks:", r);
                return undefined;
            }
            let rank = ranksMap.get(r);
            let n = (suitsMap.get(s) << 4) | (rank);
            res.push(n);
        }
        const CARD_COUNT = 52;
        if (res.length != CARD_COUNT) {
            this.logger.warn("invalid card count:", res.length);
            return undefined;
        }
        let cards = [];
        for (let i = 0; i < 13; i++) {
            cards.push(res[i]);
            cards.push(res[1 * 13 + i]);
            cards.push(res[2 * 13 + i]);
            cards.push(res[3 * 13 + i]);
        }
        return cards;
    }
    getTableUserItem(chairID, players) {
        if (chairID >= players.length)
            return null;
        return players[chairID];
    }
    getCardTimesCfg() {
        let t = gameCfg_1.TienlenTimesCfg["3"];
        return t[this.cfg.settlementType.toString()];
    }
    settlement(winUser, players, tongPai) {
        let losers = [];
        let winBadScore = 0;
        for (let i = 0; i < players.length; i++) {
            let userItem = players[i];
            if (userItem.userStatus != define_1.gameConst.US_PLAYING) {
                continue;
            }
            // 输家
            if (!players[i].isWinner) {
                // 冻结
                if (tongPai == null && players[i].userCard.length == 13 && players[i].canPlayPass) {
                    players[i].frozen = true;
                }
                players[i].lastWin = false;
                players[i].currSuccessiveWinCnt = 0;
                let cardTimesCfg = this.getCardTimesCfg();
                let handCardTimes = GameLogic_1.tienlenLogic.calcHandCardTimes(players[i].userCard, cardTimesCfg);
                let badScore = -handCardTimes.badTotalTimes * this.cfg.bet;
                players[i].badScore = badScore;
                winBadScore += -badScore;
                if (this.cfg.settlementType == 1) { //记牌数
                    let allTimes = handCardTimes.leftCards.length * (players[i].frozen ? cardTimesCfg.frozen : 1) + handCardTimes.badTotalTimes;
                    let socre = allTimes * this.cfg.bet;
                    losers.push({
                        chairID: i,
                        score: -socre,
                    });
                }
                else {
                    let allTimes = 1 * (players[i].frozen ? cardTimesCfg.frozen : 1) + handCardTimes.badTotalTimes;
                    let socre = allTimes * this.cfg.bet;
                    losers.push({
                        chairID: i,
                        score: -socre,
                    });
                }
            }
        }
        players[winUser].badScore = winBadScore;
        players[winUser].winCnt++;
        if (players[winUser].lastWin) {
            players[winUser].currSuccessiveWinCnt++;
        }
        else {
            players[winUser].lastWin = true;
            players[winUser].currSuccessiveWinCnt = 1;
        }
        if (players[winUser].currSuccessiveWinCnt > players[winUser].successiveWinCnt) {
            players[winUser].successiveWinCnt = players[winUser].currSuccessiveWinCnt;
        }
        // 分数处理
        return this.settlementScore(players, winUser, losers);
    }
    /**
     * 分数结算
     */
    settlementScore(players, winChairID, losers) {
        let scoreRecords = [];
        // 扣除金币
        if (this.cfg.chipType == gameCfg_1.EM_CHIP_TYPE.eGold) {
            let totalGold = 0;
            for (let loser of losers) {
                totalGold += -loser.score;
            }
            // 如果赢家不够分
            let winUserItem = this.getTableUserItem(winChairID, players);
            // if (winUserItem.getUserGold() < totalGold) {
            //     for (let i = 0; i < losers.length; i++) {
            //         losers[i].score = Math.ceil(winUserItem.getUserGold() / totalGold * losers[i].score);
            //     }
            // }
            let realTotalGold = 0;
            for (let loser of losers) {
                let userItem = this.getTableUserItem(loser.chairID, players);
                if (!userItem) {
                    this.logger.warn("user is null");
                    continue;
                }
                let addGold = userItem.addGold(loser.score);
                realTotalGold += addGold;
                players[loser.chairID].singleScore += addGold; // 单局
                players[loser.chairID].score += addGold; // 总的
                scoreRecords.push({
                    userID: userItem.userID,
                    chairID: loser.chairID,
                    score: addGold,
                    remark: '局内结算',
                });
            }
            if (winUserItem) {
                let addGold = winUserItem.addGold(-realTotalGold);
                players[winChairID].singleScore += addGold; // 单局
                players[winChairID].score += addGold; // 总的
                scoreRecords.push({
                    userID: winUserItem.userID,
                    chairID: winChairID,
                    score: addGold,
                    remark: '局内结算',
                });
                // 请求扣除金币
                let updateData = {
                    field: "gold",
                    data: scoreRecords
                };
                //            pinus.app.rpc.userCenter.roomRemote.subgameCalc.route(1, true)(updateData);
            }
        }
        else {
            let totalScore = 0;
            for (let loser of losers) {
                totalScore += loser.score;
                players[loser.chairID].singleScore += loser.score;
                players[loser.chairID].score += loser.score;
                let userItem = this.getTableUserItem(loser.chairID, players);
                if (!userItem) {
                    this.logger.warn("user is null");
                    continue;
                }
                scoreRecords.push({
                    userID: userItem.userID,
                    chairID: loser.chairID,
                    score: loser.score,
                });
            }
            players[winChairID].singleScore += -totalScore;
            players[winChairID].score += -totalScore;
            let userItem = this.getTableUserItem(winChairID, players);
            if (userItem) {
                scoreRecords.push({
                    userID: userItem.userID,
                    chairID: winChairID,
                    score: -totalScore,
                });
            }
        }
        return scoreRecords;
    }
    isInTimeSlot(slot) {
        if (slot.length >= 2) {
            let timeReg = /^((20|21|22|23|\d|[0-1]\d):([0-5]\d|\d))|24:00$/;
            if (timeReg.test(slot[0]) && timeReg.test(slot[1])) {
                let begin = slot[0].split(':');
                let beginTime = parseInt(begin[0]) * 100 + parseInt(begin[1]);
                let end = slot[1].split(':');
                let endTime = parseInt(end[0]) * 100 + parseInt(end[1]);
                let currDate = new Date();
                let currTime = currDate.getHours() * 100 + currDate.getMinutes();
                if (currTime >= beginTime && currTime < endTime) {
                    return true;
                }
            }
        }
        return false;
    }
    //TODO
    // async checkBigWin() {
    //     // 积分
    //     let scoreOpenTimeSolt = ConfigMgr.getInstance().getStr2Arry(EM_CONFIG_ID.e_10105, '#');
    //     this.logger.debug('bigWin开启时间', scoreOpenTimeSolt);
    //     if (this.isInTimeSlot(scoreOpenTimeSolt) && this.m_objConfig.bigWinReward) {
    //         // 倍数检查
    //         let winTimes = 0;
    //         for (let i = 0; i < this.m_objConfig.playerCount; i++) {
    //             if (this.winUser != this.m_vPlayer[i].chairID) {
    //                 winTimes += -(this.m_vPlayer[i].badScore / this.m_objConfig.bet);
    //             }
    //         }
    //         winTimes += -(this.m_vPlayer[this.winUser].bombScore / this.m_objConfig.bet);
    //         // 根据玩法获取倍数要求
    //         let timesTerm: number;
    //         if (this.m_objConfig.settlementType == 1) { //记牌数
    //             timesTerm = ConfigMgr.getInstance().getNumber(EM_CONFIG_ID.e_10102);
    //         } else {
    //             timesTerm = ConfigMgr.getInstance().getNumber(EM_CONFIG_ID.e_10106);
    //         }
    //         logger.debug('要求倍数', timesTerm);
    //         if (timesTerm > 0 && winTimes > timesTerm) {
    //             // 概率
    //             let probability: number;
    //             if (this.tongPai) {
    //                 probability = ConfigMgr.getInstance().getNumber(EM_CONFIG_ID.e_10103);
    //             } else {
    //                 probability = ConfigMgr.getInstance().getNumber(EM_CONFIG_ID.e_10104);
    //             }
    //             logger.debug('bigWin万分比', probability);
    //             let randomProbability = getRandomNum(0, 10000);
    //             logger.debug('概率随机数', randomProbability);
    //             if (probability > 0 && randomProbability < probability) {
    //                 let winUserItem = this.tableFrame.getTableUserItem(this.winUser);
    //                 let msg = {
    //                     serialNumber: this.m_objConfig.serialNumber,
    //                     creatTime: Date.now(),
    //                     data: {
    //                         userID: winUserItem.userID,
    //                         reward: this.m_objConfig.bigWinReward,
    //                         remark: '金币场bigWin奖励'
    //                     }
    //                 };
    //                 let ret = await pinus.app.rpc.userCenter.roomRemote.subgameBigWin.route(1)(msg);
    //                 logger.debug('binWin请求userCenter', ret);
    //                 if (ret) {
    //                     this.bigWin = {
    //                         chairID: this.winUser,
    //                         reward: msg.data.reward
    //                     };
    //                 }
    //             }
    //         }
    //     }
    //     // 碎片
    //     let openFragmentTimeSolt = ConfigMgr.getInstance().getStr2Arry(EM_CONFIG_ID.e_10205, '#');
    //     logger.debug('碎片开启时间', openFragmentTimeSolt);
    //     if (isInTimeSlot(openFragmentTimeSolt) && uutil.checkRewardStr(this.m_objConfig.winExtraReward)) {
    //         // 概率
    //         let probability;
    //         if (this.bigWin) {
    //             probability = ConfigMgr.getInstance().getNumber(EM_CONFIG_ID.e_10204);
    //         } else if (this.tongPai) {
    //             probability = ConfigMgr.getInstance().getNumber(EM_CONFIG_ID.e_10203);
    //         } else {
    //             probability = ConfigMgr.getInstance().getNumber(EM_CONFIG_ID.e_10202);
    //         }
    //         let randomProbability = getRandomNum(0, 10000);
    //         logger.debug('概率随机数', randomProbability);
    //         if (probability > 0 && randomProbability < probability) {
    //             let winUserItem = this.tableFrame.getTableUserItem(this.winUser);
    //             let msg = {
    //                 serialNumber: this.m_objConfig.serialNumber,
    //                 creatTime: Date.now(),
    //                 data: {
    //                     userID: winUserItem.userID,
    //                     reward: this.m_objConfig.winExtraReward,
    //                     remark: '金币场胜利奖励'
    //                 }
    //             };
    //             let ret = await pinus.app.rpc.userCenter.roomRemote.subgameWinExtraReward.route(1)(msg);
    //             logger.debug('碎片请求userCenter', ret);
    //             if (ret.code == 0) {
    //                 // 广播获得碎片
    //                 this.tableFrame.sendTableData(gameCMD.MDM_GF_FRAME, gameCMD.SUB_GF_WIN_EXTRA_REWARD, this.winUser, {
    //                     chairID: this.winUser,
    //                     reward: ret.itemID + '_' + ret.itemNum,
    //                     rewardList: [ret.itemID + '_' + ret.itemNum]
    //                 });
    //             }
    //         }
    //     }
    // }
    /**
      * 检查炸分数
      */
    checkBombScore(loopCardTypeList, players) {
        // 检查是否有人被炸
        let lastType = loopCardTypeList[loopCardTypeList.length - 1].type;
        if (loopCardTypeList.length > 1 && lastType >= ConstDef_2.CARD_TYPE.PAIRS) {
            let scoreMap = Array(this.cfg.playerCount).fill(0);
            for (let i = 0; i < loopCardTypeList.length - 1; i++) {
                if (loopCardTypeList[i + 1].type >= ConstDef_2.CARD_TYPE.PAIRS) {
                    let playTimes = GameLogic_1.tienlenLogic.calcHandCardTimes(loopCardTypeList[i].cards, this.getCardTimesCfg());
                    if (playTimes.badTotalTimes > 0) {
                        let badScore = playTimes.badTotalTimes * this.cfg.bet;
                        scoreMap[loopCardTypeList[i].chairID] += -badScore;
                    }
                }
            }
            let winChairID = loopCardTypeList[loopCardTypeList.length - 1].chairID;
            // 扣的
            let losers = [];
            for (let i = 0; i < scoreMap.length; i++) {
                if (scoreMap[i] == 0 || i == winChairID) {
                    continue;
                }
                losers.push({
                    chairID: i,
                    score: scoreMap[i]
                });
            }
            let scoreRecords = this.settlementScore(players, winChairID, losers);
            // 玩家更新炸分
            for (let sr of scoreRecords) {
                players[sr.chairID].bombScore += sr.score;
            }
            return scoreRecords;
        }
        return undefined;
    }
    /**
     * 发牌
     * @param players
     * @param test 是否启用测试功能
     * @returns
     */
    deal(players, test) {
        let deck = [];
        let tongPaiCount = 0;
        do {
            tongPaiCount = 0;
            let currentCardIndex = 0;
            // // 设置牌，用于调试
            // let settingResult = TestMgr.getInstance().getSettingCards(userIDs);
            // if (settingResult.settingCnt > 0) {
            //     this.deck = tienlenLogic.settingCards(settingResult.cards);
            // } else {
            //     this.deck = tienlenLogic.shuffle();
            // }
            if (test && this.deck) {
                this.logger.log("test deal, deck:", this.deck);
                deck = this.deck;
            }
            else {
                deck = GameLogic_1.tienlenLogic.shuffle();
            }
            // 重置牌
            for (let i = 0; i < this.cfg.playerCount; i++) {
                players[i].userCard = [];
            }
            // 发牌
            for (let i = 0; i < 13; i++) {
                for (let j = 0; j < this.cfg.playerCount; j++) {
                    players[j].userCard.push(deck[currentCardIndex++]);
                }
            }
            // 判断是否有一个以上的通牌
            for (let i = 0; i < this.cfg.playerCount; i++) {
                let tongPaiCards = GameLogic_1.tienlenLogic.getTongPaiCards(players[i].userCard);
                if (tongPaiCards.length > 0) {
                    tongPaiCount++;
                }
            }
        } while (tongPaiCount > 1);
        return deck;
    }
}
exports.TienLenGame = TienLenGame;
