"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tienlenLogic = void 0;
const ConstDef_1 = require("./ConstDef");
const logger = console;
const SUITS = ['黑桃', '草花', '方块', '红桃'];
const RANKS = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
/** 一副扑克牌 ×*/
const DECK = [
    0x31, 0x32, 0x33, 0x34, 0x35, 0x36, 0x37, 0x38, 0x39, 0x3A, 0x3B, 0x3C, 0x3D, //红桃 A - K
    0x21, 0x22, 0x23, 0x24, 0x25, 0x26, 0x27, 0x28, 0x29, 0x2A, 0x2B, 0x2C, 0x2D, //方块 A - K
    0x11, 0x12, 0x13, 0x14, 0x15, 0x16, 0x17, 0x18, 0x19, 0x1A, 0x1B, 0x1C, 0x1D, //梅花 A - K
    0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08, 0x09, 0x0A, 0x0B, 0x0C, 0x0D, //黑桃 A - K
];
class TienlenLogic {
    /**
     * 判断是否是有效牌
     * @param card 牌
     * @returns
     */
    vaildCard(card) {
        return DECK.includes(card);
    }
    /**
     * 洗牌
     *
     * @param oldCards 旧的数组
     */
    shuffle() {
        let cards = [];
        let randCard = DECK.slice(0);
        let position = 0;
        let bufferCount = 52;
        let randCount = 0;
        do {
            position = Math.floor(Math.random() * (bufferCount - randCount));
            cards.push(randCard[position]);
            randCount++;
            randCard[position] = randCard[bufferCount - randCount];
        } while (randCount < bufferCount);
        return cards;
    }
    ;
    /**
     * 检查黑桃3是否在剩余牌里
     *
     * @param oldCards 旧的数组
     */
    spade3Check(deck, playerCount) {
        if ((playerCount * 13) >= deck.length) {
            return true;
        }
        let spade3Index = deck.indexOf(0x03);
        if (spade3Index >= (playerCount * 13 - 1)) {
            // 随机一张牌
            let randomIndex = Math.floor(Math.random() * playerCount * 13);
            deck[spade3Index] = deck[randomIndex];
            deck[randomIndex] = 0x03;
        }
        return true;
    }
    /**
     * 获取牌点数
     *
     * @param card 牌
     */
    getCardRank(card) {
        return (card & 0x0F);
    }
    ;
    /**
     * 获取牌花色
     *
     * @param card 牌
     */
    getCardSuit(card) {
        return (card & 0xF0) >> 4;
    }
    ;
    /**
     * 获取牌权数值
     *
     * @param card 牌
     */
    getCardWeight(card) {
        let rank = this.getCardRank(card);
        if (rank > 2)
            return rank - 2;
        return rank + 11;
    }
    ;
    /**
     * 获取牌颜色
     *
     * @param card 牌
     */
    getCardColor(card) {
        return this.getCardSuit(card) > 1 ? 1 : 0;
    }
    ;
    /**
     * 初始化数组
     * @param count 数量
     * @param value 值
     */
    initArray(count, value = 0) {
        value = value || 0;
        var arr = [];
        for (var i = 0; i < count; i++) {
            arr.push(value);
        }
        return arr;
    }
    ;
    /**
     * 获取排序数值
     *
     * @param card 牌
     */
    getSortValue(card) {
        return (this.getCardWeight(card) * 4 + this.getCardSuit(card));
    }
    ;
    /**
     * 扑克排序
     * @param cardList 牌数组
     */
    sort(cardList) {
        cardList.sort((a, b) => {
            return this.getSortValue(a) - this.getSortValue(b);
        });
    }
    ;
    /**
     * 扑克排序
     * @param cardList 牌数组
     */
    sortByCardType(cardList) {
        let targetCardList = []; // 目标数据
        let tempCardList = [...cardList];
        for (let i = 0; i < cardList.length; i++) {
            let ret = this.findPromptCards(tempCardList);
            let targetCards = [];
            if (ret.pairs.length > 0) {
                if (ret.four.length > 0) {
                    // 如果有四连对
                    let hasPairs4 = false;
                    for (let temp of ret.pairs) {
                        if (temp.cards.length >= 8) {
                            targetCards = temp.cards;
                            hasPairs4 = true;
                            break;
                        }
                    }
                    if (!hasPairs4) {
                        targetCards = ret.four[0].cards;
                    }
                }
                else {
                    targetCards = ret.pairs[0].cards;
                }
            }
            else if (ret.four.length > 0) {
                targetCards = ret.four[0].cards;
            }
            else if (ret.straight.length > 0) {
                targetCards = ret.straight[0].cards;
            }
            else if (ret.three.length > 0) {
                targetCards = ret.three[0].cards;
            }
            else if (ret.pair.length > 0) {
                targetCards = ret.pair[0].cards;
            }
            else {
                targetCards = ret.single[0].cards;
            }
            // 加入目标数组
            targetCardList.push(...targetCards);
            // 去除牌
            this.playCards(tempCardList, targetCards);
        }
        for (let i in cardList) {
            cardList[i] = targetCardList[i];
        }
        cardList = targetCardList;
    }
    ;
    greaterThan(card1, card2) {
        return this.getSortValue(card1) > this.getSortValue(card2);
    }
    /**
     * 检查对子
     * @param card1 牌1
     * @param card2 牌2
     */
    checkPair(card1, card2) {
        if (this.getCardRank(card1) == this.getCardRank(card2)) {
            return true;
        }
        return false;
    }
    /**
     * 检查连续
     * @param card1 牌1
     * @param card2 牌2
     */
    checkContinuous(card1, card2) {
        let rank1 = this.getCardRank(card1);
        let rank2 = this.getCardRank(card2);
        if (rank1 + 1 == rank2 || (rank1 == ConstDef_1.CARD_RANK.KING && rank2 == ConstDef_1.CARD_RANK.ACE)) {
            return true;
        }
        return false;
    }
    /**
     * 检查三张相同
     * @param card1 牌1
     * @param card2 牌2
     * @param card3 牌3
     */
    checkThree(card1, card2, card3) {
        if (this.checkPair(card1, card2) && this.checkPair(card2, card3)) {
            return true;
        }
        return false;
    }
    /**
     * 检查四张相同
     * @param card1 牌1
     * @param card2 牌2
     * @param card3 牌3
     * @param card4 牌4
     */
    checkFour(card1, card2, card3, card4) {
        if (this.checkPair(card1, card2) && this.checkPair(card2, card3) && this.checkPair(card3, card4)) {
            return true;
        }
        return false;
    }
    /**
     * 获取牌型
     *
     * @param cards 牌数组
     */
    getCardType(cards) {
        this.sort(cards);
        let n = cards.length;
        if (n == 1) {
            return ConstDef_1.CARD_TYPE.SINGLE;
        }
        if (n == 3) {
            if (this.checkThree(cards[0], cards[1], cards[2])) {
                return ConstDef_1.CARD_TYPE.THREE;
            }
        }
        if (n % 2 == 0) {
            if (n == 2) {
                if (this.checkPair(cards[0], cards[1])) {
                    return ConstDef_1.CARD_TYPE.PAIR;
                }
                else {
                    return ConstDef_1.CARD_TYPE.NULL;
                }
            }
            if (n == 4) {
                if (this.checkFour(cards[0], cards[1], cards[2], cards[3])) {
                    return ConstDef_1.CARD_TYPE.FOUR;
                }
            }
            if (n >= 6) {
                if (this.checkPairs(cards)) {
                    return ConstDef_1.CARD_TYPE.PAIRS;
                }
            }
        }
        if (this.checkStraight(cards)) {
            return ConstDef_1.CARD_TYPE.STRAIGHT;
        }
        return ConstDef_1.CARD_TYPE.NULL;
    }
    ;
    /**
     * 检查连对牌型
     *
     * @param cards 牌数组
     */
    checkPairs(cards) {
        if (cards.length < 6 || cards.length % 2 != 0) {
            return false;
        }
        // 如果出现2
        if (this.getCardRank(cards[cards.length - 1]) == ConstDef_1.CARD_RANK.TWO) {
            return false;
        }
        for (let i = 0; i < cards.length - 3; i += 2) {
            // 比较点数
            if (!this.checkPair(cards[i], cards[i + 1]) || !this.checkContinuous(cards[i], cards[i + 2])) {
                return false;
            }
        }
        // 最后两张牌
        if (!this.checkPair(cards[cards.length - 2], cards[cards.length - 1])) {
            return false;
        }
        return true;
    }
    /**
     * 检查顺子牌型
     *
     * @param cards 牌数组
     */
    checkStraight(cards) {
        // 如果出现2
        if (cards.length < 3 || this.getCardRank(cards[cards.length - 1]) == ConstDef_1.CARD_RANK.TWO) {
            return false;
        }
        for (let i = 0; i < cards.length - 1; i++) {
            if (!this.checkContinuous(cards[i], cards[i + 1])) {
                return false;
            }
        }
        return true;
    }
    /**
     * 检查出牌是否有效
     *
     * @param playCards    玩家出牌
     * @param prevCardType 上轮出牌
     */
    checkValidCardType(playCards, prevCardType) {
        this.sort(playCards);
        this.sort(prevCardType.cards);
        // 包含2的出牌
        if (this.getCardRank(prevCardType.cards[prevCardType.cards.length - 1]) == ConstDef_1.CARD_RANK.TWO) {
            // 出1张2
            if (prevCardType.cards.length <= 2) {
                if (playCards.length == 4) {
                    var ret = this.checkFour(playCards[0], playCards[1], playCards[2], playCards[3]);
                    if (ret) {
                        return ConstDef_1.CARD_TYPE.FOUR;
                    }
                }
                else if (playCards.length >= (4 + 2 * prevCardType.cards.length)) {
                    var ret = this.checkPairs(playCards);
                    if (ret) {
                        return ConstDef_1.CARD_TYPE.PAIRS;
                    }
                }
            }
        }
        // 4张可以压3连对
        if (prevCardType.type == ConstDef_1.CARD_TYPE.PAIRS) {
            if (playCards.length == 4) {
                var ret = this.checkFour(playCards[0], playCards[1], playCards[2], playCards[3]);
                if (ret) {
                    return ConstDef_1.CARD_TYPE.FOUR;
                }
                else {
                    return ConstDef_1.CARD_TYPE.NULL;
                }
            }
        }
        // 4连对子压四张
        if (prevCardType.type == ConstDef_1.CARD_TYPE.FOUR) {
            if (playCards.length >= 8) {
                var ret = this.checkPairs(playCards);
                if (ret) {
                    return ConstDef_1.CARD_TYPE.PAIRS;
                }
                else {
                    return ConstDef_1.CARD_TYPE.NULL;
                }
            }
        }
        let pn = prevCardType.cards.length;
        if (prevCardType.cards.length == playCards.length) {
            if (pn == 1) {
                var ret = this.greaterThan(playCards[0], prevCardType.cards[0]);
                if (ret) {
                    return ConstDef_1.CARD_TYPE.SINGLE;
                }
            }
            else if (pn == 3) {
                if (prevCardType.type == ConstDef_1.CARD_TYPE.THREE) {
                    if (this.checkThree(playCards[0], playCards[1], playCards[2])) {
                        var ret = this.greaterThan(playCards[2], prevCardType.cards[2]);
                        if (ret) {
                            return ConstDef_1.CARD_TYPE.THREE;
                        }
                    }
                }
            }
            else if (pn % 2 == 0) {
                if (pn == 2) {
                    if (prevCardType.type == ConstDef_1.CARD_TYPE.PAIR) {
                        if (this.checkPair(playCards[0], playCards[1])) {
                            var ret = this.greaterThan(playCards[1], prevCardType.cards[1]);
                            if (ret) {
                                return ConstDef_1.CARD_TYPE.PAIR;
                            }
                        }
                    }
                }
                else if (pn == 4) {
                    if (prevCardType.type == ConstDef_1.CARD_TYPE.FOUR) {
                        if (this.checkFour(playCards[0], playCards[1], playCards[2], playCards[3])) {
                            var ret = this.greaterThan(playCards[3], prevCardType.cards[3]);
                            if (ret) {
                                return ConstDef_1.CARD_TYPE.FOUR;
                            }
                        }
                    }
                }
            }
            if (pn > 2 && prevCardType.type == ConstDef_1.CARD_TYPE.STRAIGHT) {
                if (playCards.length == pn && this.checkStraight(playCards)) {
                    var ret = this.greaterThan(playCards[pn - 1], prevCardType.cards[pn - 1]);
                    if (ret) {
                        return ConstDef_1.CARD_TYPE.STRAIGHT;
                    }
                }
            }
        }
        if (pn >= 6) {
            if (prevCardType.type == ConstDef_1.CARD_TYPE.PAIRS) {
                if (this.checkPairs(playCards)) {
                    if (playCards.length > pn
                        || (playCards.length == prevCardType.cards.length && this.greaterThan(playCards[pn - 1], prevCardType.cards[pn - 1]))) {
                        return ConstDef_1.CARD_TYPE.PAIRS;
                    }
                }
            }
        }
        return ConstDef_1.CARD_TYPE.NULL;
    }
    /**
     * 检查是否有牌
     *
     * @param handCards 手牌
     * @param playCards 打出的牌
     */
    checkPlayCards(handCards, playCards) {
        for (let card of playCards) {
            if (!handCards.includes(card)) {
                return false;
            }
        }
        return true;
    }
    /**
     * 检查是否有牌
     * @param handCards 手牌
     * @param playCards 打出的牌
     */
    playCards(handCards, playCards) {
        for (let card of playCards) {
            let index = handCards.indexOf(card);
            if (index != -1) {
                handCards.splice(index, 1);
            }
        }
    }
    /**
     * 获取可以出的牌型
     * @param handCards    手牌
     * @param prevCardType 上家出牌
     */
    findPromptCards(handCards, prevCardType) {
        let ret = {
            single: [],
            pair: [],
            three: [],
            straight: [],
            pairs: [],
            four: [],
        };
        if (handCards.length == 0) {
            return ret;
        }
        this.sort(handCards);
        let pn = 0;
        if (prevCardType) {
            this.sort(prevCardType.cards);
            pn = prevCardType.cards.length;
        }
        // 单牌
        if (!prevCardType || prevCardType.type == ConstDef_1.CARD_TYPE.SINGLE) {
            for (let card of handCards) {
                if (!prevCardType || this.checkValidCardType([card], prevCardType) > ConstDef_1.CARD_TYPE.NULL) {
                    ret.single.push({
                        type: ConstDef_1.CARD_TYPE.SINGLE,
                        cards: [card]
                    });
                }
            }
        }
        // 对子
        if (!prevCardType || prevCardType.type == ConstDef_1.CARD_TYPE.PAIR) {
            for (let i = 0; i < handCards.length - 1; i++) {
                if (this.checkPair(handCards[i], handCards[i + 1])
                    && (!prevCardType || this.checkValidCardType([handCards[i], handCards[i + 1]], prevCardType) > ConstDef_1.CARD_TYPE.NULL)) {
                    ret.pair.push({
                        type: ConstDef_1.CARD_TYPE.PAIR,
                        cards: [handCards[i], handCards[i + 1]]
                    });
                }
            }
        }
        // 三张
        if (!prevCardType || prevCardType.type == ConstDef_1.CARD_TYPE.THREE) {
            for (let i = 0; i < handCards.length - 2; i++) {
                if (this.checkThree(handCards[i], handCards[i + 1], handCards[i + 2])
                    && (!prevCardType || this.checkValidCardType([handCards[i], handCards[i + 1], handCards[i + 2]], prevCardType) > ConstDef_1.CARD_TYPE.NULL)) {
                    ret.three.push({
                        type: ConstDef_1.CARD_TYPE.PAIR,
                        cards: [handCards[i], handCards[i + 1], handCards[i + 2]]
                    });
                }
            }
        }
        // 顺子
        if (!prevCardType || prevCardType.type == ConstDef_1.CARD_TYPE.STRAIGHT) {
            if (handCards.length >= pn) {
                let straight_list = [];
                for (let i = handCards.length - 1; i > pn - 2; i--) {
                    if (this.getCardRank(handCards[i]) == ConstDef_1.CARD_RANK.TWO) {
                        continue;
                    }
                    let straight = [];
                    let flag = true;
                    for (let j = i; j >= 0; j--) {
                        if (straight.length == 0) {
                            if (!prevCardType || this.greaterThan(handCards[j], prevCardType.cards[pn - 1])) {
                                straight.push(handCards[j]);
                            }
                        }
                        else {
                            if (this.getCardRank(handCards[j]) == this.getCardRank(straight[straight.length - 1])) {
                                // 相同点数，则替换
                                if (straight.length > 1) {
                                    straight[straight.length - 1] = handCards[j];
                                }
                            }
                            else if (this.checkContinuous(handCards[j], straight[straight.length - 1])) {
                                // 连续点数
                                straight.push(handCards[j]);
                            }
                            else {
                                // 不连续，则不是, 新的起点
                                i = j + 1;
                                flag = false;
                            }
                        }
                        if (!flag || j == 0 || (prevCardType && pn == straight.length)) {
                            if (straight.length >= 3 && (!prevCardType || this.checkValidCardType(straight, prevCardType) > ConstDef_1.CARD_TYPE.NULL)) {
                                straight_list.push({
                                    type: ConstDef_1.CARD_TYPE.STRAIGHT,
                                    cards: straight.reverse()
                                });
                            }
                            break;
                        }
                    }
                }
                if (straight_list.length > 0) {
                    for (let temp of straight_list.reverse()) {
                        ret.straight.push(temp);
                    }
                }
            }
        }
        // 连对, 特殊：3连对压可压单2， 4连对单2、对2、3连对、四张
        if (!prevCardType
            || prevCardType.type == ConstDef_1.CARD_TYPE.PAIRS
            || (prevCardType.type == ConstDef_1.CARD_TYPE.SINGLE && this.getCardRank(prevCardType.cards[0]) == ConstDef_1.CARD_RANK.TWO)
            || (prevCardType.type == ConstDef_1.CARD_TYPE.PAIR && this.getCardRank(prevCardType.cards[0]) == ConstDef_1.CARD_RANK.TWO)
            || prevCardType.type == ConstDef_1.CARD_TYPE.FOUR) {
            if (handCards.length >= 6) {
                let pairs_list = [];
                for (let i = handCards.length - 1; i >= 5; i--) {
                    let pairs = [];
                    let flag = true;
                    for (let j = i; j >= 0; j--) {
                        if (pairs.length == 0) {
                            pairs.push(handCards[j]);
                        }
                        else {
                            if (pairs.length % 2 == 0) {
                                // 检查是否连续 或者 点数相同
                                if (this.checkContinuous(handCards[j], pairs[pairs.length - 1])) {
                                    pairs.push(handCards[j]);
                                }
                                else if (this.getCardRank(handCards[j]) == this.getCardRank(pairs[pairs.length - 1])) {
                                    pairs[pairs.length - 1] = handCards[j];
                                }
                                else {
                                    // 断开
                                    flag = false;
                                }
                            }
                            else {
                                if (this.getCardRank(handCards[j]) == this.getCardRank(pairs[pairs.length - 1])) {
                                    pairs.push(handCards[j]);
                                }
                                else {
                                    // 断开
                                    flag = false;
                                }
                            }
                        }
                        // 判断长度是否满足
                        if (!flag || j == 0) {
                            // 如果是单数，抛出最后一张牌
                            if (pairs.length % 2 == 1) {
                                pairs.pop();
                            }
                            let tempPairs = [...pairs];
                            if (pairs.length >= 6 && (!prevCardType || this.checkValidCardType(tempPairs, prevCardType) > ConstDef_1.CARD_TYPE.NULL)) {
                                pairs_list.push({
                                    type: ConstDef_1.CARD_TYPE.PAIRS,
                                    cards: pairs
                                });
                            }
                            // 下一断
                            i = j + 1;
                            break;
                        }
                    }
                }
                if (pairs_list.length > 0) {
                    for (let temp of pairs_list.reverse()) {
                        temp.cards.reverse();
                        ret.pairs.push(temp);
                    }
                }
            }
        }
        // 四张, 特殊：可压单2、对2、3连对
        if (!prevCardType
            || prevCardType.type == ConstDef_1.CARD_TYPE.FOUR
            || (prevCardType.type == ConstDef_1.CARD_TYPE.PAIRS && prevCardType.cards.length == 6)
            || ((prevCardType.type == ConstDef_1.CARD_TYPE.PAIR || prevCardType.type == ConstDef_1.CARD_TYPE.SINGLE) && this.getCardRank(prevCardType.cards[0]) == ConstDef_1.CARD_RANK.TWO)) {
            if (handCards.length >= pn) {
                for (let i = 0; i < handCards.length - 3; i++) {
                    if (this.checkFour(handCards[i], handCards[i + 1], handCards[i + 2], handCards[i + 3])
                        && (!prevCardType || this.checkValidCardType([handCards[i], handCards[i + 1], handCards[i + 2], handCards[i + 3]], prevCardType) > ConstDef_1.CARD_TYPE.NULL)) {
                        ret.four.push({
                            type: ConstDef_1.CARD_TYPE.FOUR,
                            cards: [handCards[i], handCards[i + 1], handCards[i + 2], handCards[i + 3]]
                        });
                    }
                }
            }
        }
        return ret;
    }
    /**
     * 获取可以出的牌型
     * @param handCards    手牌
     * @param prevCardType 上家出牌
     */
    getPlayCards(handCards, prevCardType) {
        let card_type_list = this.findPromptCards(handCards, prevCardType);
        let { single, pair, three, straight, pairs, four } = card_type_list;
        if (!prevCardType) {
            // 如果就剩1手牌，直接打出
            if (this.getCardType(handCards) > ConstDef_1.CARD_TYPE.NULL) {
                return handCards;
            }
            // 顺子 -> 三张 -> 对子 -> 单张
            let first_card = handCards[0];
            if (straight.length > 0 && straight[0].cards.includes(first_card)) {
                return straight[0].cards;
            }
            else if (three.length > 0 && three[0].cards.includes(first_card)) {
                return three[0].cards;
            }
            else if (pair.length > 0 && pair[0].cards.includes(first_card)) {
                return pair[0].cards;
            }
            else {
                return single[0].cards;
            }
        }
        else {
            // 如果就剩1手牌，直接打出
            if (this.checkValidCardType(handCards, prevCardType) > ConstDef_1.CARD_TYPE.NULL) {
                return handCards;
            }
            // 先选合适的牌型
            if (prevCardType.type != ConstDef_1.CARD_TYPE.PAIRS && prevCardType.type != ConstDef_1.CARD_TYPE.FOUR) {
                switch (prevCardType.type) {
                    case ConstDef_1.CARD_TYPE.SINGLE:
                        if (single.length > 0) {
                            return single[0].cards;
                        }
                        break;
                    case ConstDef_1.CARD_TYPE.PAIR:
                        if (pair.length > 0) {
                            return pair[0].cards;
                        }
                        break;
                    case ConstDef_1.CARD_TYPE.STRAIGHT:
                        if (straight.length > 0) {
                            return straight[0].cards;
                        }
                        break;
                    case ConstDef_1.CARD_TYPE.THREE:
                        if (three.length > 0) {
                            return three[0].cards;
                        }
                        break;
                }
            }
            // 如果出2则选连对 和 四季
            if (prevCardType.type == ConstDef_1.CARD_TYPE.PAIRS
                || prevCardType.type == ConstDef_1.CARD_TYPE.FOUR
                || (prevCardType.cards.length <= 2 && this.getCardRank(prevCardType.cards[0]) == ConstDef_1.CARD_RANK.TWO)) {
                if (pairs.length > 0) {
                    let cards = pairs[0].cards;
                    if (cards.length >= 8) {
                        // 先出四季
                        if (four.length > 0) {
                            return four[0].cards;
                        }
                        return cards;
                    }
                }
                // 出四季
                if (four.length > 0) {
                    return four[0].cards;
                }
            }
        }
        return [];
    }
    /**
     * 判断是否可以出牌
     * @param handCards    手牌
     * @param prevCardType 上家出牌
     */
    checkCanPlayCards(handCards, prevCardType) {
        let card_type_list = this.findPromptCards(handCards, prevCardType);
        let { single, pair, three, straight, pairs, four } = card_type_list;
        if (single.length > 0) {
            return true;
        }
        else if (pair.length > 0) {
            return true;
        }
        else if (three.length > 0) {
            return true;
        }
        else if (straight.length > 0) {
            return true;
        }
        else if (pairs.length > 0) {
            return true;
        }
        else if (four.length > 0) {
            return true;
        }
        return false;
    }
    /**
     * 判断是否有通牌
     * @param handCards 手牌
     */
    getTongPaiCards(handCards) {
        let card_type_list = this.findPromptCards(handCards);
        let { single, pair, three, straight, pairs, four } = card_type_list;
        // 3~A
        if (straight.length > 0 && straight[straight.length - 1].cards.length == 12) {
            return straight[straight.length - 1].cards;
        }
        // 黑桃3的三连对，或者5连对
        if (pairs.length > 0) {
            for (let tempCardType of pairs) {
                if (tempCardType.cards.includes(0x03) || tempCardType.cards.length >= 10) {
                    return tempCardType.cards;
                }
            }
        }
        // 四张2
        if (four.length > 0) {
            for (let tempCardType of four) {
                if (this.getCardRank(tempCardType.cards[0]) == ConstDef_1.CARD_RANK.TWO) {
                    return tempCardType.cards;
                }
            }
        }
        // 随意6对
        if (pair.length >= 6) {
            let sixPairCards = [];
            for (let tempCardType of pair) {
                let isIn = false;
                for (let tempCard of tempCardType.cards) {
                    if (sixPairCards.includes(tempCard)) {
                        isIn = true;
                        continue;
                    }
                }
                if (!isIn) {
                    sixPairCards.push(...tempCardType.cards);
                }
            }
            if (sixPairCards.length >= 12) {
                return sixPairCards;
            }
        }
        let blackCards = [];
        let redCards = [];
        let colors = [blackCards, redCards];
        for (let card of handCards) {
            colors[this.getCardColor(card)].push(card);
        }
        for (let color of colors) {
            if (color.length >= 12) {
                return color;
            }
        }
        return [];
    }
    /**
     * 计算手牌倍数
     * @param handCards 手牌
     */
    calcHandCardTimes(handCards, cfg) {
        // 优先找出2的倍数
        let timeList = [];
        let copyCards = [...handCards];
        if (handCards.includes(0x02)) { //黑桃2
            timeList.push({ cards: [0x02], times: cfg.spade2 });
            this.playCards(copyCards, [0x02]);
        }
        if (handCards.includes(0x12)) { //草花2
            timeList.push({ cards: [0x02], times: cfg.club2 });
            this.playCards(copyCards, [0x12]);
        }
        if (handCards.includes(0x22)) { //方块2
            timeList.push({ cards: [0x02], times: cfg.diamond2 });
            this.playCards(copyCards, [0x22]);
        }
        if (handCards.includes(0x32)) { //红心2
            timeList.push({ cards: [0x02], times: cfg.heart2 });
            this.playCards(copyCards, [0x32]);
        }
        for (let i = 0; i < handCards.length; i++) {
            let cardTypeList = this.findPromptCards(copyCards);
            let { pairs, four } = cardTypeList;
            if (pairs.length > 0 && pairs[pairs.length - 1].cards.length >= 8) {
                timeList.push({ cards: pairs[pairs.length - 1].cards, times: cfg.pairs4 });
                this.playCards(copyCards, pairs[pairs.length - 1].cards);
                continue;
            }
            if (four.length > 0) {
                for (let tempCardType of four) {
                    timeList.push({ cards: tempCardType.cards, times: cfg.four });
                    this.playCards(copyCards, tempCardType.cards);
                }
                continue;
            }
            if (pairs.length > 0) {
                timeList.push({ cards: pairs[0].cards, times: cfg.pairs3 });
                this.playCards(copyCards, pairs[0].cards);
                continue;
            }
            break;
        }
        let badTotalTimes = 0;
        for (let t of timeList) {
            badTotalTimes += t.times;
        }
        return { badTotalTimes, timeList, leftCards: copyCards };
    }
    /**
     * 获取第一个出牌的玩家
     *
     * @param players 玩家
     */
    getFirstPlayer(players) {
        // 默认0最小
        let first = 0;
        let copy = [...players[0].userCard];
        this.sort(copy);
        let min = copy[0];
        for (let i = 1; i < players.length; i++) {
            let copy = [...players[i].userCard];
            this.sort(copy);
            if (this.greaterThan(min, copy[0])) {
                first = i;
                min = copy[0];
            }
        }
        return first;
    }
    /**
     * 设置牌，用于测试
     * @param settingCards
     * @returns
     */
    settingCards(settingCards) {
        let deck = exports.tienlenLogic.shuffle();
        try {
            // 去除重复
            let settingCheck = [];
            // 去除重复设置
            for (let i = 0; i < settingCards.length; i++) {
                for (let j = settingCards[i].length - 1; j >= 0; j--) {
                    if (settingCheck.includes(settingCards[i][j])) {
                        settingCards[i].splice(j, 1);
                    }
                    else {
                        settingCheck.push(settingCards[i][j]);
                    }
                }
            }
            let oriDeck = [...deck];
            // 去除设置的牌
            for (let cards of settingCards) {
                this.playCards(oriDeck, cards);
            }
            // 组装牌
            let newDeck = [];
            let hasSetting;
            do {
                hasSetting = false;
                for (let i = 0; i < settingCards.length; i++) {
                    if (settingCards[i].length > 0) {
                        newDeck.push(settingCards[i].shift());
                        hasSetting = true;
                    }
                    else {
                        newDeck.push(oriDeck.shift());
                    }
                }
            } while (hasSetting);
            if (oriDeck.length > 0) {
                newDeck.push(...oriDeck);
            }
            // 检查牌
            let check = [];
            for (let card of newDeck) {
                if (check.includes(card)) {
                    logger.debug(`设置牌 ${card} 重复!!! `, settingCards);
                    throw new Error('设置牌失败');
                }
                check.push(card);
            }
            return newDeck;
        }
        catch (error) {
            if (error instanceof Error) {
                logger.error(error.message, error.stack);
            }
        }
        return deck;
    }
    showCard(card) {
        let suit = this.getCardSuit(card);
        let rank = this.getCardRank(card);
        return SUITS[suit] + RANKS[rank - 1];
    }
    showCards(cards) {
        let showArr = [];
        for (let card of cards) {
            showArr.push(this.showCard(card));
        }
        return showArr.join(' ');
    }
}
exports.tienlenLogic = new TienlenLogic();
