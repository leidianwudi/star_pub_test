"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tienlenAI = void 0;
const GameLogic_1 = require("./GameLogic");
const ConstDef_1 = require("./ConstDef");
const logger = console;
class AI {
    /**
     * 拆牌
     * @param cards 手牌
     */
    split(cards) {
        let result = [];
        let allCardsMap = this.getCardsMap(cards);
        // 拆炸弹
        this.splitFour(result, allCardsMap);
        // 拆连对
        this.splitPairs(result, allCardsMap);
        // 拆出2
        this.splitTwo(result, allCardsMap);
        // 找出最长顺子
        this.splitStraight(result, allCardsMap);
        // 找出3张、对子、单张
        allCardsMap.forEach((cards) => {
            if (cards.length > 0) {
                result.push({
                    type: GameLogic_1.tienlenLogic.getCardType(cards),
                    cards: cards.splice(0, cards.length)
                });
            }
        });
        return result;
    }
    // 拆出炸弹
    splitFour(result, map) {
        map.forEach((value, key) => {
            if (value.length == 4) {
                result.push({
                    type: ConstDef_1.CARD_TYPE.FOUR,
                    cards: value.splice(0, 4)
                });
            }
        });
    }
    // 拆出连对
    splitPairs(result, map) {
        let checkPairs = (idxStack) => {
            if (idxStack.length >= 3) {
                let cards = [];
                for (let idx of idxStack) {
                    let rank = idx > 13 ? (idx - 13) : idx;
                    cards.push(...map.get(rank).splice(0, 2));
                }
                result.push({
                    type: ConstDef_1.CARD_TYPE.STRAIGHT,
                    cards
                });
            }
        };
        let pairsUnitStack = [];
        for (let rdx = 3; rdx <= 14; rdx++) {
            let rank = rdx > 13 ? (rdx - 13) : rdx;
            if (map.has(rank) && map.get(rank).length >= 2) {
                if (pairsUnitStack.length > 0) {
                    if (rdx == pairsUnitStack[pairsUnitStack.length - 1] + 1) {
                        pairsUnitStack.push(rdx);
                    }
                    else {
                        checkPairs(pairsUnitStack);
                        pairsUnitStack = [rdx];
                    }
                }
                else {
                    pairsUnitStack.push(rdx);
                }
            }
            else {
                checkPairs(pairsUnitStack);
                pairsUnitStack = [];
            }
        }
        checkPairs(pairsUnitStack);
    }
    // 拆出2
    splitTwo(result, map) {
        if (map.has(ConstDef_1.CARD_RANK.TWO) && map.get(ConstDef_1.CARD_RANK.TWO).length > 0) {
            let cards = map.get(ConstDef_1.CARD_RANK.TWO).splice(0, map.get(ConstDef_1.CARD_RANK.TWO).length);
            result.push({
                type: GameLogic_1.tienlenLogic.getCardType(cards),
                cards
            });
        }
    }
    // 拆出顺子
    splitStraight(result, map) {
        let straightStack = [];
        let checkStraight = (idxStack) => {
            if (idxStack.length >= 3) {
                let cards = [];
                for (let idx of idxStack) {
                    let rank = idx > 13 ? (idx - 13) : idx;
                    cards.push(...map.get(rank).splice(0, 1));
                }
                straightStack.push(cards);
            }
        };
        let straightUnitStack = [];
        for (let rdx = 3; rdx <= 14; rdx++) {
            let rank = rdx > 13 ? (rdx - 13) : rdx;
            if (map.has(rank) && map.get(rank).length >= 1) {
                if (straightUnitStack.length > 0) {
                    if (rdx == straightUnitStack[straightUnitStack.length - 1] + 1) {
                        straightUnitStack.push(rdx);
                    }
                    else {
                        checkStraight(straightUnitStack);
                        straightUnitStack = [rdx];
                    }
                }
                else {
                    straightUnitStack.push(rdx);
                }
            }
            else {
                checkStraight(straightUnitStack);
                straightUnitStack = [];
            }
        }
        checkStraight(straightUnitStack);
        // 优化顺子
        this.optimizeStraight(result, map, straightStack);
    }
    /**
     * 优化顺子
     * @param straights 数组，每个都是一个顺子
     */
    optimizeStraight(result, allCardsMap, straights) {
        //降序排列
        straights.sort((a, b) => b.length - a.length);
        let resultStraights = [];
        logger.debug("find straight info:", straights);
        logger.debug("reset card info:", allCardsMap);
        for (let choseCards of straights) {
            // 顺子总长度
            let len = choseCards.length;
            if (len <= 3) {
                // 不需要拆 
                result.push({
                    type: ConstDef_1.CARD_TYPE.STRAIGHT,
                    cards: choseCards
                });
                continue;
            }
            //顺子3456，发现手上还剩下一张4和5，那么顺子分裂成345和456
            let startIndex = 0;
            let idx = 1;
            let rank1, rank2;
            for (idx = 1; idx <= len - 2; idx++) {
                rank1 = GameLogic_1.tienlenLogic.getCardRank(choseCards[idx]);
                rank2 = GameLogic_1.tienlenLogic.getCardRank(choseCards[idx + 1]);
                if (allCardsMap.has(rank1) && allCardsMap.get(rank1).length > 0 && allCardsMap.has(rank2) && allCardsMap.get(rank2).length > 0) {
                    let subStraight = [];
                    for (let j = startIndex; j <= idx - 1; j++) {
                        subStraight.push(choseCards[j]);
                    }
                    subStraight.push(this.popCardsMap(allCardsMap, rank1));
                    subStraight.push(this.popCardsMap(allCardsMap, rank2));
                    resultStraights.push(subStraight);
                    logger.debug("find card rank in reset cards,and split new straights:", rank1, rank2, subStraight);
                    // 回退后，继续
                    startIndex = idx;
                    idx = idx - 1;
                    logger.debug("after split card info:", startIndex, allCardsMap);
                    if (len - startIndex <= 3) {
                        idx = len - 2;
                        break;
                    }
                }
            }
            if (startIndex != 0) {
                resultStraights.push(choseCards.slice(startIndex));
            }
            else {
                resultStraights.push(choseCards);
            }
        }
        // 导出最终的顺子牌
        for (let choseCards of resultStraights) {
            // 顺子如果盖住对子、三张，如果发现打散牌组数更少，则打散，比如7789910JJJQKK，拆散了更好
            let rankStart = GameLogic_1.tienlenLogic.getCardRank(choseCards[0]);
            if (choseCards.length <= this.getResetCardCount(allCardsMap, rankStart, choseCards.length) + 1) {
                for (let card of choseCards) {
                    this.pushCardsMap(allCardsMap, card);
                }
                continue;
            }
            // 确定拆牌效果更好
            result.push({
                type: ConstDef_1.CARD_TYPE.STRAIGHT,
                cards: choseCards
            });
        }
    }
    // 获取剩余的牌中手数
    getResetCardCount(map, rankStart, count) {
        let hands = 0;
        for (let index = rankStart; index < rankStart + count; index++) {
            if (map.has(index) && map.get(index).length > 0) {
                hands++;
            }
        }
        return hands;
    }
    // 获取牌
    getCardsMap(cards) {
        let map = new Map();
        for (let card of cards) {
            this.pushCardsMap(map, card);
        }
        return map;
    }
    pushCardsMap(map, card) {
        let rank = GameLogic_1.tienlenLogic.getCardRank(card);
        if (map.has(rank)) {
            map.get(rank).push(card);
        }
        else {
            map.set(rank, [card]);
        }
    }
    popCardsMap(map, rank) {
        if (map.has(rank) && map.get(rank).length > 0) {
            return map.get(rank).splice(0, 1)[0];
        }
        return null;
    }
    getCardGroupScore(group) {
        // 排序
        GameLogic_1.tienlenLogic.sort(group.cards);
        let score = 0;
        let balanceWeight = 8;
        switch (group.type) {
            case ConstDef_1.CARD_TYPE.FOUR:
                score = 9;
                break;
            case ConstDef_1.CARD_TYPE.PAIRS:
                score = group.cards.length > 6 ? 10 : 8;
                break;
            case ConstDef_1.CARD_TYPE.STRAIGHT:
                let lastCard = group.cards[group.cards.length - 1];
                score = Math.max(0, (GameLogic_1.tienlenLogic.getCardWeight(lastCard) - balanceWeight) / 2);
                break;
            default:
                score = GameLogic_1.tienlenLogic.getCardWeight(group.cards[0]) - balanceWeight;
                if (score > 0) {
                    if (group.type == ConstDef_1.CARD_TYPE.THREE) {
                        score *= 2;
                    }
                    else if (group.type == ConstDef_1.CARD_TYPE.PAIR) {
                        score *= 1.5;
                    }
                }
        }
        return score;
    }
    getCardGroupsTotalScore(groups, round) {
        let sum = 0;
        for (let group of groups) {
            sum += this.getCardGroupScore(group);
        }
        if (round <= 3) {
            sum -= 6;
        }
        else if (round <= 6) {
            sum -= 5;
        }
        else if (round <= 9) {
            sum -= 4;
        }
        else {
            sum -= 3;
        }
        return sum;
    }
    playStrategy(handCards, round, prevCardType) {
        // 就剩1手牌，直接出
        let oneHandType = GameLogic_1.tienlenLogic.getCardType(handCards);
        if (oneHandType > ConstDef_1.CARD_TYPE.NULL) {
            if (!prevCardType || GameLogic_1.tienlenLogic.checkValidCardType(handCards, prevCardType) > ConstDef_1.CARD_TYPE.NULL) {
                return handCards;
            }
        }
        // 找出出牌后手牌分数最高的牌
        let excellent = [];
        let excellentScore = null;
        if (prevCardType) {
            let { single, pair, three, straight, pairs, four } = GameLogic_1.tienlenLogic.findPromptCards(handCards, prevCardType);
            let allHands = [...single, ...pair, ...three, ...straight, ...pairs, ...four];
            // 根据牌排序
            allHands.sort((a, b) => GameLogic_1.tienlenLogic.getCardRank(a.cards[0]) - GameLogic_1.tienlenLogic.getCardRank(b.cards[0]));
            for (let idx = 0; idx < allHands.length; idx++) {
                // 如果是顺子，直接出
                if (allHands[idx].type == ConstDef_1.CARD_TYPE.STRAIGHT) {
                    return allHands[idx].cards;
                }
                let tmpCards = [...handCards];
                GameLogic_1.tienlenLogic.playCards(tmpCards, allHands[idx].cards);
                let tmpHands = this.split(tmpCards);
                let currScore = this.getCardGroupsTotalScore(tmpHands, round + 1);
                if (excellentScore === null || currScore > excellentScore) {
                    excellent = [...allHands[idx].cards];
                    excellentScore = currScore;
                }
            }
            // 如果分数差太多，不出牌
            // let oriHands = this.split(handCards);
            // let oriScore = this.getCardGroupsTotalScore(oriHands, round);
            // if (excellentScore < oriScore - 4) {
            //     excellent = [];
            // }
        }
        else {
            let hands = this.split(handCards);
            // 根据牌排序
            hands.sort((a, b) => GameLogic_1.tienlenLogic.getCardRank(a.cards[0]) - GameLogic_1.tienlenLogic.getCardRank(b.cards[0]));
            for (let idx = 0; idx < hands.length; idx++) {
                let currGroup = hands.splice(idx, 1)[0];
                let currScore = this.getCardGroupsTotalScore(hands, round);
                if (excellentScore === null || currScore > excellentScore) {
                    excellent = [...currGroup.cards];
                    excellentScore = currScore;
                }
                hands.splice(idx, 0, currGroup);
            }
            // 如果是单牌，判断是否有重叠的顺子，优先出顺子
            if (excellent.length == 1) {
                let excellentWeight = GameLogic_1.tienlenLogic.getCardWeight(excellent[0]);
                for (let idx = 0; idx < hands.length; idx++) {
                    if (hands[idx].type == ConstDef_1.CARD_TYPE.STRAIGHT) {
                        let startWeight = GameLogic_1.tienlenLogic.getCardWeight(hands[idx].cards[0]);
                        let lastWeight = startWeight + hands[idx].cards.length - 1;
                        if (excellentWeight >= startWeight && excellentWeight <= lastWeight) {
                            return hands[idx].cards;
                        }
                    }
                }
            }
        }
        return excellent;
    }
}
exports.tienlenAI = new AI();
