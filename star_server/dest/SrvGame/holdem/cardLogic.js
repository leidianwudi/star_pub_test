"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logic = exports.card_id = exports.e_card_type = exports.cardStr = exports.colorName = void 0;
exports.cardSort = cardSort;
exports.cardScoreSort = cardScoreSort;
const util_1 = require("./util");
exports.colorName = ["", "方块-", "梅花-", "红桃-", "黑桃-"];
exports.cardStr = ["", "", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
var e_card_type;
(function (e_card_type) {
    e_card_type[e_card_type["error"] = 0] = "error";
    e_card_type[e_card_type["High_Card"] = 1] = "High_Card";
    e_card_type[e_card_type["One_Pair"] = 2] = "One_Pair";
    e_card_type[e_card_type["Two_Pair"] = 3] = "Two_Pair";
    e_card_type[e_card_type["Three_of_a_Kind"] = 4] = "Three_of_a_Kind";
    e_card_type[e_card_type["Straight"] = 5] = "Straight";
    e_card_type[e_card_type["Flush"] = 6] = "Flush";
    e_card_type[e_card_type["Full_House"] = 7] = "Full_House";
    e_card_type[e_card_type["Four_of_a_Kind"] = 8] = "Four_of_a_Kind";
    e_card_type[e_card_type["Straight_Flush"] = 9] = "Straight_Flush";
    e_card_type[e_card_type["Royal_Flush"] = 10] = "Royal_Flush"; //皇家同花顺
})(e_card_type || (exports.e_card_type = e_card_type = {}));
exports.card_id = [
    { "id": 1, "color": 1, "score": 2 },
    { "id": 2, "color": 1, "score": 3 },
    { "id": 3, "color": 1, "score": 4 },
    { "id": 4, "color": 1, "score": 5 },
    { "id": 5, "color": 1, "score": 6 },
    { "id": 6, "color": 1, "score": 7 },
    { "id": 7, "color": 1, "score": 8 },
    { "id": 8, "color": 1, "score": 9 },
    { "id": 9, "color": 1, "score": 10 },
    { "id": 10, "color": 1, "score": 11 },
    { "id": 11, "color": 1, "score": 12 },
    { "id": 12, "color": 1, "score": 13 },
    { "id": 13, "color": 1, "score": 14 },
    { "id": 14, "color": 2, "score": 2 },
    { "id": 15, "color": 2, "score": 3 },
    { "id": 16, "color": 2, "score": 4 },
    { "id": 17, "color": 2, "score": 5 },
    { "id": 18, "color": 2, "score": 6 },
    { "id": 19, "color": 2, "score": 7 },
    { "id": 20, "color": 2, "score": 8 },
    { "id": 21, "color": 2, "score": 9 },
    { "id": 22, "color": 2, "score": 10 },
    { "id": 23, "color": 2, "score": 11 },
    { "id": 24, "color": 2, "score": 12 },
    { "id": 25, "color": 2, "score": 13 },
    { "id": 26, "color": 2, "score": 14 },
    { "id": 27, "color": 3, "score": 2 },
    { "id": 28, "color": 3, "score": 3 },
    { "id": 29, "color": 3, "score": 4 },
    { "id": 30, "color": 3, "score": 5 },
    { "id": 31, "color": 3, "score": 6 },
    { "id": 32, "color": 3, "score": 7 },
    { "id": 33, "color": 3, "score": 8 },
    { "id": 34, "color": 3, "score": 9 },
    { "id": 35, "color": 3, "score": 10 },
    { "id": 36, "color": 3, "score": 11 },
    { "id": 37, "color": 3, "score": 12 },
    { "id": 38, "color": 3, "score": 13 },
    { "id": 39, "color": 3, "score": 14 },
    { "id": 40, "color": 4, "score": 2 },
    { "id": 41, "color": 4, "score": 3 },
    { "id": 42, "color": 4, "score": 4 },
    { "id": 43, "color": 4, "score": 5 },
    { "id": 44, "color": 4, "score": 6 },
    { "id": 45, "color": 4, "score": 7 },
    { "id": 46, "color": 4, "score": 8 },
    { "id": 47, "color": 4, "score": 9 },
    { "id": 48, "color": 4, "score": 10 },
    { "id": 49, "color": 4, "score": 11 },
    { "id": 50, "color": 4, "score": 12 },
    { "id": 51, "color": 4, "score": 13 },
    { "id": 52, "color": 4, "score": 14 }
];
class Logic {
    static getCards(wang) {
        let arr = (0, util_1.deepClone)(exports.card_id);
        // 打乱
        for (let i = 0; i < arr.length; i++) {
            let index = (0, util_1.randInt)(arr.length);
            let tmp = arr[index];
            arr[index] = arr[i];
            arr[i] = tmp;
        }
        return arr;
    }
    /** 从卡组结构中输出卡片id列表 */
    static outIdNum(cards) {
        let out = [];
        for (let i = 0; i < cards.length; i++) {
            out.push(cards[i].id);
        }
        return out;
    }
    static getCardType(hand) {
        const sortedHand = this.sortHandByRank(hand);
        if (this.isRoyalFlush(sortedHand)) {
            return e_card_type.Royal_Flush;
        }
        if (this.isStraightFlush(sortedHand)) {
            return e_card_type.Straight_Flush;
        }
        if (this.isFourOfAKind(sortedHand)) {
            return e_card_type.Four_of_a_Kind;
        }
        if (this.isFullHouse(sortedHand)) {
            return e_card_type.Full_House;
        }
        if (this.isFlush(hand)) {
            return e_card_type.Flush;
        }
        if (this.isStraight(sortedHand)) {
            return e_card_type.Straight;
        }
        if (this.isThreeOfAKind(sortedHand)) {
            return e_card_type.Three_of_a_Kind;
        }
        if (this.isTwoPair(sortedHand)) {
            return e_card_type.Two_Pair;
        }
        if (this.isOnePair(sortedHand)) {
            return e_card_type.One_Pair;
        }
        return e_card_type.High_Card;
    }
    /**
     * 按照牌面分值对手中的牌进行升序排序
     * @param hand
     * @returns
     */
    static sortHandByRank(hand) {
        return hand.sort((a, b) => a.score - b.score);
    }
    /**
     * 按照牌面分值对手中的牌进行降序序排序
     * @param hand
     * @returns
     */
    static sortHandByRankDown(hand) {
        return hand.sort((a, b) => b.score - a.score);
    }
    /**
     * 判断是否是皇家同花顺，即同花顺中最大的组合，首牌为10
     * @param sortedHand
     * @returns
     */
    static isRoyalFlush(sortedHand) {
        if (sortedHand.length < 5) {
            return false;
        }
        return this.isStraightFlush(sortedHand) && sortedHand[0].score === 10 /* e_card_score.c10 */;
    }
    /**
     * 判断是否是同花顺，即牌面连续并且花色相同
     * @param sortedHand
     * @returns
     */
    static isStraightFlush(sortedHand) {
        // 先获取所有同花
        const flushArr = this.getAllFlush(sortedHand);
        // 从所有同花中获取所有顺子
        const straightArr = [];
        flushArr.forEach(item => {
            const straight = this.getStraight(item);
            if (straight.length !== 0) {
                straightArr.push(straight);
            }
        });
        // 如果没有同花顺,返回false
        if (straightArr.length === 0)
            return false;
        return true;
    }
    /**
     * 判断是否是四条，即有4张牌面相同的牌
     * @param sortedHand
     * @returns
     */
    static isFourOfAKind(sortedHand) {
        const obj = getHandNumByScore(sortedHand);
        if (obj.four === 1)
            return true;
        return false;
    }
    /**
     * 判断是否是葫芦，即有3张牌面相同的牌和2张牌面相同的牌组成
     * @param sortedHand
     * @returns
     */
    static isFullHouse(sortedHand) {
        const obj = getHandNumByScore(sortedHand);
        if (obj.double >= 1 && obj.three >= 1 || obj.three >= 2)
            return true;
        return false;
    }
    /**
     * 判断是否是同花，即五张牌的花色相同
     * @param hand
     * @returns
     */
    static isFlush(hand) {
        if (hand.length < 5) {
            return 0 /* tonghuaType.notTonghua */;
        }
        let fangkuai = 0;
        let meihua = 0;
        let hongtao = 0;
        let heitao = 0;
        for (let i = 0; i < hand.length; i++) {
            if (hand[i].color === 1 /* e_card_color.fangkuai1 */)
                fangkuai++;
            if (hand[i].color === 2 /* e_card_color.meihua2 */)
                meihua++;
            if (hand[i].color === 3 /* e_card_color.hongtao3 */)
                hongtao++;
            if (hand[i].color === 4 /* e_card_color.heitao4 */)
                heitao++;
        }
        if (fangkuai >= 5)
            return 1 /* tonghuaType.fangkuai */;
        if (meihua >= 5)
            return 2 /* tonghuaType.meihua */;
        if (hongtao >= 5)
            return 3 /* tonghuaType.hongtao */;
        if (heitao >= 5)
            return 4 /* tonghuaType.heitao */;
        return 0 /* tonghuaType.notTonghua */;
    }
    /** 对象去重 */
    static uniqueObjectsByScore(array) {
        const seen = new Set();
        return array.filter(item => {
            const value = item.score;
            if (!seen.has(value)) {
                seen.add(value);
                return true;
            }
            return false;
        });
    }
    /**
     * 判断是否是顺子，即五张牌面连续
     * @param sortedHand
     * @returns
     */
    static isStraight(sortedHand) {
        // 深拷贝
        sortedHand = JSON.parse(JSON.stringify(sortedHand));
        // 如果手牌小于5张,直接返回false
        if (sortedHand.length < 5)
            return false;
        sortedHand = this.uniqueObjectsByScore(sortedHand);
        // 有A的情况,push一个A的副本,分值改为1
        const sortedHandScore = sortedHand.map((card) => card.score);
        if (sortedHandScore.includes(14 /* e_card_score.A */)) {
            sortedHandScore.push(1);
        }
        // 从小到大排序
        sortedHandScore.sort((a, b) => a - b);
        for (let i = 0; i <= sortedHandScore.length - 5; i++) {
            // [2,5,6,7,8,9,11] 1-5是顺子,循环i=1时,i+4=5,5-1=4,所以是5张连续的牌
            if (sortedHandScore[i + 4] - sortedHandScore[i] === 4) {
                return true; // 存在顺子
            }
        }
        return false;
    }
    /**
     * 判断是否是三条，即有3张牌面相同的牌
     * @param sortedHand
     * @returns
     */
    static isThreeOfAKind(sortedHand) {
        const obj = getHandNumByScore(sortedHand);
        if (obj.three === 1)
            return true;
        return false;
    }
    /**
     * 判断是否是两对，即有2张牌面相同的牌和另外2张牌面相同的牌组成
     * @param sortedHand
     * @returns
     */
    static isTwoPair(sortedHand) {
        const obj = getHandNumByScore(sortedHand);
        if (obj.double >= 2)
            return true;
        return false;
    }
    /**
     * 判断是否是一对，即有2张牌面相同的牌
     * @param sortedHand
     * @returns
     */
    static isOnePair(sortedHand) {
        const obj = getHandNumByScore(sortedHand);
        if (obj.double === 1)
            return true;
        return false;
    }
    /**
     * 比较两手牌的大小
     * @param hand1
     * @param hand2
     * @returns res:0错误 1手牌1大 2手牌2大 3平,cardType2:手牌2牌型
     */
    static compareHands(hand1, hand2) {
        const type1 = this.getCardType(hand1);
        const type2 = this.getCardType(hand2);
        console.log(`================type1: ${type1}, hand1`, hand1);
        console.log(`================type2: ${type2}, hand2`, hand2);
        if (type1 > type2) {
            return { res: 1, cardType1: type1, cardType2: type2 };
        }
        else if (type1 < type2) {
            return { res: 2, cardType1: type1, cardType2: type2 };
        }
        else {
            // 手牌1和2的牌型相同,走这里↓
            // 牌型相同,取当前的牌型储存起来
            const type = type1;
            // TODO:按照牌型调用函数
            let res = 0;
            // 高牌
            if (type === e_card_type.High_Card)
                res = this.compareHighCard(hand1, hand2);
            // 一对
            if (type === e_card_type.One_Pair)
                res = this.compareOnePair(hand1, hand2);
            // 两对
            if (type === e_card_type.Two_Pair)
                res = this.compareTwoPair(hand1, hand2);
            // 三条
            if (type === e_card_type.Three_of_a_Kind)
                res = this.compareThreeOfAKind(hand1, hand2);
            // 顺子
            if (type === e_card_type.Straight)
                res = this.compareStraight(hand1, hand2);
            // 同花
            if (type === e_card_type.Flush)
                res = this.compareFlush(hand1, hand2);
            // 葫芦
            if (type === e_card_type.Full_House)
                res = this.compareFullHouse(hand1, hand2);
            // 四条
            if (type === e_card_type.Four_of_a_Kind)
                res = this.compareFourOfAKind(hand1, hand2);
            // 同花顺
            if (type === e_card_type.Straight_Flush)
                res = this.compareStraightFlush(hand1, hand2);
            // 皇家同花顺
            if (type === e_card_type.Royal_Flush)
                res = 3;
            if (res !== 4)
                return { res, cardType1: type1, cardType2: type2 };
            // 等待比较的数组
            let compareArr1 = this.sortHandByRankDown(hand1);
            let compareArr2 = this.sortHandByRankDown(hand2);
            console.log('compareArr1', compareArr1);
            console.log('compareArr2', compareArr2);
            for (let i = 0; i < compareArr1.length; i++) {
                if (compareArr1[i].score > compareArr2[i].score)
                    return { res: 1, cardType1: type1, cardType2: type2 };
                if (compareArr1[i].score < compareArr2[i].score)
                    return { res: 2, cardType1: type1, cardType2: type2 };
            }
            return { res: 3, cardType1: type1, cardType2: type2 };
        }
        return { res: 0, cardType1: type1, cardType2: type2 };
    }
    // 比较高牌
    static compareHighCard(hand1, hand2) {
        const sortedHand1 = this.sortHandByRankDown(hand1);
        const sortedHand2 = this.sortHandByRankDown(hand2);
        console.log('sortedHand1(比较高牌)', sortedHand1);
        console.log('sortedHand2(比较高牌)', sortedHand2);
        for (let i = 0; i < 5; i++) {
            if (sortedHand1[i].score > sortedHand2[i].score)
                return 1;
            if (sortedHand1[i].score < sortedHand2[i].score)
                return 2;
        }
        return 3;
    }
    // 比较一对
    static compareOnePair(hand1, hand2) {
        // 深拷贝
        hand1 = JSON.parse(JSON.stringify(hand1));
        hand2 = JSON.parse(JSON.stringify(hand2));
        let sortedHand1 = this.sortHandByRank(hand1);
        let sortedHand2 = this.sortHandByRank(hand2);
        const obj1 = getHandNumByScore(sortedHand1);
        const obj2 = getHandNumByScore(sortedHand2);
        const onePair1 = obj1.res.find(item => item.length === 2);
        const onePair2 = obj2.res.find(item => item.length === 2);
        if (!onePair1 || !onePair2)
            return 0;
        if (onePair1[0].score > onePair2[0].score)
            return 1;
        if (onePair1[0].score < onePair2[0].score)
            return 2;
        // 最大的5张牌(一对)
        let temp1 = [];
        let temp2 = [];
        // 取出对子
        temp1.push(...sortedHand1.splice(sortedHand1.findIndex(item => item.score === onePair1[0].score), 2));
        temp2.push(...sortedHand2.splice(sortedHand2.findIndex(item => item.score === onePair2[0].score), 2));
        // 取出剩余的三张牌(最大),先按降序排序
        sortedHand1 = this.sortHandByRankDown(sortedHand1);
        sortedHand2 = this.sortHandByRankDown(sortedHand2);
        temp1.push(...sortedHand1.slice(0, 3));
        temp2.push(...sortedHand2.slice(0, 3));
        // 全部比较一遍
        for (let i = 0; i < temp1.length; i++) {
            if (temp1[i].score > temp2[i].score)
                return 1;
            if (temp1[i].score < temp2[i].score)
                return 2;
        }
        // 五张都相等,返回3
        return 3;
    }
    // 比较两对
    static compareTwoPair(hand1, hand2) {
        // 深拷贝
        hand1 = JSON.parse(JSON.stringify(hand1));
        hand2 = JSON.parse(JSON.stringify(hand2));
        let sortedHand1 = this.sortHandByRank(hand1);
        let sortedHand2 = this.sortHandByRank(hand2);
        const obj1 = getHandNumByScore(sortedHand1);
        const obj2 = getHandNumByScore(sortedHand2);
        let twoPair1 = obj1.res.filter(item => item.length === 2);
        let twoPair2 = obj2.res.filter(item => item.length === 2);
        if (!twoPair1 || !twoPair2)
            return 0;
        // 获取两对中的最大的两对(取出最后两对)
        twoPair1 = twoPair1.slice(-2);
        twoPair2 = twoPair2.slice(-2);
        console.log('比较两对', twoPair1, '|', twoPair2);
        if (twoPair1[1][0].score > twoPair2[1][0].score)
            return 1;
        if (twoPair1[1][0].score < twoPair2[1][0].score)
            return 2;
        if (twoPair1[0][0].score > twoPair2[0][0].score)
            return 1;
        if (twoPair1[0][0].score < twoPair2[0][0].score)
            return 2;
        // 最大的5张牌
        let temp1 = [];
        let temp2 = [];
        // 取出两对
        temp1.push(...sortedHand1.splice(sortedHand1.findIndex(item => item.score === twoPair1[1][0].score), 2));
        temp2.push(...sortedHand2.splice(sortedHand2.findIndex(item => item.score === twoPair2[1][0].score), 2));
        temp1.push(...sortedHand1.splice(sortedHand1.findIndex(item => item.score === twoPair1[0][0].score), 2));
        temp2.push(...sortedHand2.splice(sortedHand2.findIndex(item => item.score === twoPair2[0][0].score), 2));
        // 取出剩余的1张牌(最大),先按降序排序
        sortedHand1 = this.sortHandByRankDown(sortedHand1);
        sortedHand2 = this.sortHandByRankDown(sortedHand2);
        temp1.push(...sortedHand1.slice(0, 1));
        temp2.push(...sortedHand2.slice(0, 1));
        // 全部比较一遍
        for (let i = 0; i < temp1.length; i++) {
            if (temp1[i].score > temp2[i].score)
                return 1;
            if (temp1[i].score < temp2[i].score)
                return 2;
        }
        // 五张都相等,返回3
        return 3;
    }
    // 比较三条
    static compareThreeOfAKind(hand1, hand2) {
        // 深拷贝
        hand1 = JSON.parse(JSON.stringify(hand1));
        hand2 = JSON.parse(JSON.stringify(hand2));
        let sortedHand1 = this.sortHandByRank(hand1);
        let sortedHand2 = this.sortHandByRank(hand2);
        const obj1 = getHandNumByScore(sortedHand1);
        const obj2 = getHandNumByScore(sortedHand2);
        const threeOfAKind1 = obj1.res.find(item => item.length === 3);
        const threeOfAKind2 = obj2.res.find(item => item.length === 3);
        console.log('比较', threeOfAKind1[0].score, '|', threeOfAKind2[0].score);
        if (!threeOfAKind1 || !threeOfAKind2)
            return 0;
        if (threeOfAKind1[0].score > threeOfAKind2[0].score)
            return 1;
        if (threeOfAKind1[0].score < threeOfAKind2[0].score)
            return 2;
        // 最大的5张牌
        let temp1 = [];
        let temp2 = [];
        // 取出三条
        temp1.push(...sortedHand1.splice(sortedHand1.findIndex(item => item.score === threeOfAKind1[0].score), 3));
        temp2.push(...sortedHand2.splice(sortedHand2.findIndex(item => item.score === threeOfAKind2[0].score), 3));
        // 取出剩余的2张牌(最大),先按降序排序
        sortedHand1 = this.sortHandByRankDown(sortedHand1);
        sortedHand2 = this.sortHandByRankDown(sortedHand2);
        temp1.push(...sortedHand1.slice(0, 2));
        temp2.push(...sortedHand2.slice(0, 2));
        // 全部比较一遍
        for (let i = 0; i < temp1.length; i++) {
            if (temp1[i].score > temp2[i].score)
                return 1;
            if (temp1[i].score < temp2[i].score)
                return 2;
        }
        // 五张都相等,返回3
        return 3;
    }
    // 比较顺子
    static compareStraight(hand1, hand2) {
        // 获取顺子
        const straight1 = this.getStraight(hand1);
        const straight2 = this.getStraight(hand2);
        if (straight1.length === 0 || straight2.length === 0)
            return 0;
        // 注释后,A2345最小,解除注释,A2345最大
        // if (straight1[0].score === 1 && straight2[0].score !== 10) return 1
        // if (straight2[0].score === 1 && straight1[0].score !== 10) return 2
        if (straight1[0].score > straight2[0].score)
            return 1;
        if (straight1[0].score < straight2[0].score)
            return 2;
        return 3;
    }
    // 比较同花
    static compareFlush(hand1, hand2) {
        // 获取同花
        let flush1 = this.getFlush(hand1);
        let flush2 = this.getFlush(hand2);
        if (flush1.length === 0 || flush2.length === 0)
            return 0;
        const tonghuaType = this.isFlush(flush1);
        flush1.map((card) => card.color === tonghuaType);
        flush2.map((card) => card.color === tonghuaType);
        flush1 = this.sortHandByRankDown(flush1);
        flush2 = this.sortHandByRankDown(flush2);
        if (flush1[0].score > flush2[0].score)
            return 1;
        if (flush1[0].score < flush2[0].score)
            return 2;
        if (flush1[1].score > flush2[1].score)
            return 1;
        if (flush1[1].score < flush2[1].score)
            return 2;
        if (flush1[2].score > flush2[2].score)
            return 1;
        if (flush1[2].score < flush2[2].score)
            return 2;
        if (flush1[3].score > flush2[3].score)
            return 1;
        if (flush1[3].score < flush2[3].score)
            return 2;
        if (flush1[4].score > flush2[4].score)
            return 1;
        if (flush1[4].score < flush2[4].score)
            return 2;
        return 3;
    }
    // 比较葫芦
    static compareFullHouse(hand1, hand2) {
        // 获取葫芦
        let fullHouse1 = this.getFullHouse(hand1);
        let fullHouse2 = this.getFullHouse(hand2);
        // 获取葫芦中的三条
        let objFullHouse1 = getHandNumByScore(fullHouse1);
        let objFullHouse2 = getHandNumByScore(fullHouse2);
        // 取出三条
        let allThreeCard1 = objFullHouse1.res.filter(item => item.length === 3);
        let allThreeCard2 = objFullHouse2.res.filter(item => item.length === 3);
        // 排序三条
        allThreeCard1.sort((a, b) => b[0].score - a[0].score);
        allThreeCard2.sort((a, b) => b[0].score - a[0].score);
        if (allThreeCard1.length === 0 || allThreeCard2.length === 0)
            return 0;
        if (allThreeCard1[0][0].score > allThreeCard2[0][0].score)
            return 1;
        if (allThreeCard1[0][0].score < allThreeCard2[0][0].score)
            return 2;
        // 比较葫芦中的所有一对
        const obj1 = getHandNumByScore(fullHouse1);
        const obj2 = getHandNumByScore(fullHouse2);
        // 取出一对
        const onePair1 = obj1.res.filter(item => item.length >= 2 && item[0].score !== fullHouse1[0].score);
        const onePair2 = obj2.res.filter(item => item.length >= 2 && item[0].score !== fullHouse1[0].score);
        // 排序一对
        onePair1.sort((a, b) => b[0].score - a[0].score);
        onePair2.sort((a, b) => b[0].score - a[0].score);
        if (!onePair1 || !onePair2)
            return 0;
        if (onePair1[0][0].score > onePair2[0][0].score)
            return 1;
        if (onePair1[0][0].score < onePair2[0][0].score)
            return 2;
        return 3;
    }
    // 比较四条
    static compareFourOfAKind(hand1, hand2) {
        // 深拷贝
        hand1 = JSON.parse(JSON.stringify(hand1));
        hand2 = JSON.parse(JSON.stringify(hand2));
        // 获取四条
        const fourOfAKind1 = this.getFourOfAKind(hand1);
        const fourOfAKind2 = this.getFourOfAKind(hand2);
        if (fourOfAKind1.length === 0 || fourOfAKind2.length === 0)
            return 0;
        if (fourOfAKind1[0].score > fourOfAKind2[0].score)
            return 1;
        if (fourOfAKind1[0].score < fourOfAKind2[0].score)
            return 2;
        // 降序排序
        let sortedHand1 = this.sortHandByRankDown(hand1);
        let sortedHand2 = this.sortHandByRankDown(hand2);
        // 最大的5张牌
        let temp1 = [];
        let temp2 = [];
        // 取出四条
        temp1.push(...sortedHand1.splice(sortedHand1.findIndex(item => item.score === fourOfAKind1[0].score), 4));
        temp2.push(...sortedHand2.splice(sortedHand2.findIndex(item => item.score === fourOfAKind2[0].score), 4));
        // 取出剩余的1张牌(最大),并降序排序
        sortedHand1 = this.sortHandByRankDown(hand1);
        sortedHand2 = this.sortHandByRankDown(hand2);
        temp1.push(...sortedHand1.slice(0, 1));
        temp2.push(...sortedHand2.slice(0, 1));
        // 全部比较一遍
        for (let i = 0; i < temp1.length; i++) {
            if (temp1[i].score > temp2[i].score)
                return 1;
            if (temp1[i].score < temp2[i].score)
                return 2;
        }
        // 五张都相等,返回3
        return 3;
    }
    // 比较同花顺
    static compareStraightFlush(hand1, hand2) {
        // 获取同花顺
        let straightFlush1 = this.getStraightFlush(hand1);
        let straightFlush2 = this.getStraightFlush(hand2);
        straightFlush1 = this.getStraight(straightFlush1);
        straightFlush2 = this.getStraight(straightFlush2);
        // 按照升序排序
        straightFlush1 = this.sortHandByRank(straightFlush1);
        straightFlush2 = this.sortHandByRank(straightFlush2);
        if (straightFlush1.length === 0 || straightFlush2.length === 0)
            return 0;
        // if (straightFlush1[0].score === 1 && straightFlush2[0].score !== 10) return 1
        // if (straightFlush2[0].score === 1 && straightFlush1[0].score !== 10) return 2
        if (straightFlush1[0].score > straightFlush2[0].score)
            return 1;
        if (straightFlush1[0].score < straightFlush2[0].score)
            return 2;
        return 3;
    }
    // 获取一对
    static getOnePair(hand) {
        const sortedHand = this.sortHandByRank(hand);
        const obj = getHandNumByScore(sortedHand);
        const onePair = obj.res.find(item => item.length === 2);
        if (!onePair)
            return [];
        return onePair;
    }
    // 获取两对
    static getTwoPair(hand) {
        const sortedHand = this.sortHandByRank(hand);
        const obj = getHandNumByScore(sortedHand);
        const twoPair = obj.res.filter(item => item.length === 2);
        if (!twoPair)
            return [];
        return twoPair.flat();
    }
    // 获取三条
    static getThreeOfAKind(hand) {
        const sortedHand = this.sortHandByRank(hand);
        const obj = getHandNumByScore(sortedHand);
        const threeOfAKind = obj.res.find(item => item.length === 3);
        if (!threeOfAKind)
            return [];
        return threeOfAKind;
    }
    // 获取顺子
    static getStraight(hand) {
        // 深拷贝hand
        hand = JSON.parse(JSON.stringify(hand));
        let copyA = null;
        // 如果有A,复制一张A,分值改为1
        if (hand.find(item => item.score === 14 /* e_card_score.A */)) {
            copyA = JSON.parse(JSON.stringify(hand.find(item => item.score === 14 /* e_card_score.A */)));
        }
        if (copyA) {
            copyA.score = 1 /* e_card_score.c1 */;
            hand.push(copyA);
        }
        const sortedHand = this.sortHandByRank(hand);
        // 去重
        const uniqueHand = this.uniqueObjectsByScore(sortedHand);
        let res = [];
        for (let i = uniqueHand.length - 1; i >= 4; i--) {
            // [2,5,6,7,8,9,11] 1-5是顺子,循环i=1时,i+4=5,5-1=4,所以是5张连续的牌
            if (uniqueHand[i].score - uniqueHand[i - 4].score === 4) {
                // 如果有CopyA,判断是否有A2345的顺子
                // if (copyA) {
                //   if (uniqueHand[0].score === e_card_score.c1 && uniqueHand[1].score === e_card_score.c2 && uniqueHand[2].score === e_card_score.c3 && uniqueHand[3].score === e_card_score.c4 && uniqueHand[4].score === e_card_score.c5) {
                //     res = [uniqueHand[0], uniqueHand[1], uniqueHand[2], uniqueHand[3], uniqueHand[4]]
                //     return res
                //   }
                // }
                res.push(uniqueHand[i], uniqueHand[i - 1], uniqueHand[i - 2], uniqueHand[i - 3], uniqueHand[i - 4]);
                // 按照分数排序
                res = res.sort((a, b) => {
                    return a.score - b.score;
                });
                return res;
            }
        }
        return res;
    }
    // 获取同花
    static getFlush(hand) {
        const sortedHand = this.sortHandByRank(hand);
        const res = [];
        let fangkuai = [];
        let meihua = [];
        let hongtao = [];
        let heitao = [];
        for (let i = 0; i < sortedHand.length; i++) {
            if (sortedHand[i].color === 1 /* e_card_color.fangkuai1 */)
                fangkuai.push(sortedHand[i]);
            if (sortedHand[i].color === 2 /* e_card_color.meihua2 */)
                meihua.push(sortedHand[i]);
            if (sortedHand[i].color === 3 /* e_card_color.hongtao3 */)
                hongtao.push(sortedHand[i]);
            if (sortedHand[i].color === 4 /* e_card_color.heitao4 */)
                heitao.push(sortedHand[i]);
        }
        if (fangkuai.length >= 5)
            return fangkuai.slice(-5);
        if (meihua.length >= 5)
            return meihua.slice(-5);
        if (hongtao.length >= 5)
            return hongtao.slice(-5);
        if (heitao.length >= 5)
            return heitao.slice(-5);
        return [];
    }
    // 获取所有同花
    static getAllFlush(hand) {
        const sortedHand = this.sortHandByRank(hand);
        let res = [];
        let fangkuai = [];
        let meihua = [];
        let hongtao = [];
        let heitao = [];
        for (let i = 0; i < sortedHand.length; i++) {
            if (sortedHand[i].color === 1 /* e_card_color.fangkuai1 */)
                fangkuai.push(sortedHand[i]);
            if (sortedHand[i].color === 2 /* e_card_color.meihua2 */)
                meihua.push(sortedHand[i]);
            if (sortedHand[i].color === 3 /* e_card_color.hongtao3 */)
                hongtao.push(sortedHand[i]);
            if (sortedHand[i].color === 4 /* e_card_color.heitao4 */)
                heitao.push(sortedHand[i]);
        }
        // 把所有同花都塞进一个数组
        if (fangkuai.length >= 5)
            res = [...res, fangkuai];
        if (meihua.length >= 5)
            res = [...res, meihua];
        if (hongtao.length >= 5)
            res = [...res, hongtao];
        if (heitao.length >= 5)
            res = [...res, heitao];
        return res;
    }
    // 获取葫芦
    static getFullHouse(hand) {
        const sortedHand = this.sortHandByRank(hand);
        const obj = getHandNumByScore(sortedHand);
        // 三张
        const fullHouse3 = obj.res.filter(item => item.length === 3);
        // 两张
        const fullHouse2 = obj.res.filter(item => item.length === 2);
        if (!fullHouse3 || !fullHouse2)
            return [];
        const fullHouse = [fullHouse3, fullHouse2];
        return fullHouse.flat(2);
    }
    // 获取四条
    static getFourOfAKind(hand) {
        const sortedHand = this.sortHandByRank(hand);
        const obj = getHandNumByScore(sortedHand);
        const fourOfAKind = obj.res.find(item => item.length === 4);
        if (!fourOfAKind)
            return [];
        return fourOfAKind;
    }
    // 获取同花顺
    static getStraightFlush(hand) {
        let straightFlush = [];
        // 先获取所有同花
        const flushArr = this.getAllFlush(hand);
        const straightArr = [];
        // 从所有同花中获取所有顺子
        flushArr.forEach(item => {
            const straight = this.getStraight(item);
            if (straight.length !== 0) {
                straightArr.push(straight);
            }
        });
        // 比较所有的顺子,取出最大的顺子
        straightArr.sort((a, b) => {
            return b[0].score - a[0].score;
        });
        straightFlush = straightArr[0];
        return straightFlush;
    }
    // 获取皇家同花顺
    static getRoyalFlush(hand) {
        const straightFlush = this.getStraightFlush(hand);
        if (straightFlush.length === 0)
            return [];
        if (straightFlush[0].score === 10 /* e_card_score.c10 */)
            return straightFlush;
        return [];
    }
    /**
     * 找到手牌中最大的一张牌
     * @param hand
     * @returns
     */
    static findMaxCard(hand) {
        const sortedHand = this.sortHandByRank(hand);
        return sortedHand[0];
    }
    /** 获取完整的5张手牌 */
    static getCompleteHandcardsObj(hand) {
        // 深拷贝
        hand = JSON.parse(JSON.stringify(hand));
        const handType = this.getCardType(hand);
        let resHand = [];
        // 高牌
        if (handType === e_card_type.High_Card)
            resHand = this.getCompleteHighCard(hand);
        // 一对
        if (handType === e_card_type.One_Pair)
            resHand = this.getCompleteOnePair(hand);
        // 两对
        if (handType === e_card_type.Two_Pair)
            resHand = this.getCompleteTwoPair(hand);
        // 三条
        if (handType === e_card_type.Three_of_a_Kind)
            resHand = this.getCompleteThreeOfAKind(hand);
        // 顺子
        if (handType === e_card_type.Straight)
            resHand = this.getCompleteStraight(hand);
        // 同花
        if (handType === e_card_type.Flush)
            resHand = this.getCompleteFlush(hand);
        // 葫芦
        if (handType === e_card_type.Full_House)
            resHand = this.getCompleteFullHouse(hand);
        // 四条
        if (handType === e_card_type.Four_of_a_Kind)
            resHand = this.getCompleteFourOfAKind(hand);
        // 同花顺
        if (handType === e_card_type.Straight_Flush)
            resHand = this.getCompleteStraightFlush(hand);
        // 皇家同花顺
        if (handType === e_card_type.Royal_Flush)
            resHand = this.getCompleteRoyalFlush(hand);
        if (handType === 0 || handType > 10)
            resHand = hand;
        return resHand;
    }
    /** 获取完整的5张手牌id */
    static getCompleteHandcards(hand) {
        const resHand = this.getCompleteHandcardsObj(hand);
        return resHand.map(item => item.id);
    }
    // 获取完整高牌
    static getCompleteHighCard(hand) {
        // 深拷贝
        hand = JSON.parse(JSON.stringify(hand));
        const sortedHand = this.sortHandByRankDown(hand);
        return sortedHand.slice(0, 5);
    }
    // 获取完整一对
    static getCompleteOnePair(hand) {
        // 深拷贝
        hand = JSON.parse(JSON.stringify(hand));
        let sortedHand = this.sortHandByRank(hand);
        const obj = getHandNumByScore(sortedHand);
        const onePair = obj.res.find(item => item.length === 2);
        // 最大的5张牌(一对)
        let temp = [];
        // 取出对子
        temp.push(...sortedHand.splice(sortedHand.findIndex(item => item.score === onePair[0].score), 2));
        // 取出剩余的三张牌(最大),先按降序排序
        sortedHand = this.sortHandByRankDown(sortedHand);
        temp.push(...sortedHand.slice(0, 3));
        return temp;
    }
    // 获取完整两对
    static getCompleteTwoPair(hand) {
        // 深拷贝
        hand = JSON.parse(JSON.stringify(hand));
        let sortedHand = this.sortHandByRank(hand);
        const obj = getHandNumByScore(sortedHand);
        let twoPair = obj.res.filter(item => item.length === 2);
        // 获取两对中的最大的两对(取出最后两对)
        twoPair = twoPair.slice(-2);
        // 最大的5张牌
        let temp = [];
        // 取出两对
        temp.push(...sortedHand.splice(sortedHand.findIndex(item => item.score === twoPair[1][0].score), 2));
        temp.push(...sortedHand.splice(sortedHand.findIndex(item => item.score === twoPair[0][0].score), 2));
        // 取出剩余的1张牌(最大),先按降序排序
        sortedHand = this.sortHandByRankDown(sortedHand);
        temp.push(...sortedHand.slice(0, 1));
        return temp;
    }
    // 获取完整三条
    static getCompleteThreeOfAKind(hand) {
        // 深拷贝
        hand = JSON.parse(JSON.stringify(hand));
        let sortedHand = this.sortHandByRank(hand);
        const obj = getHandNumByScore(sortedHand);
        const threeOfAKind = obj.res.find(item => item.length === 3);
        // 最大的5张牌
        let temp = [];
        // 取出三条
        temp.push(...sortedHand.splice(sortedHand.findIndex(item => item.score === threeOfAKind[0].score), 3));
        // 取出剩余的2张牌(最大),先按降序排序
        sortedHand = this.sortHandByRankDown(sortedHand);
        temp.push(...sortedHand.slice(0, 2));
        return temp;
    }
    // 获取完整顺子
    static getCompleteStraight(hand) {
        // 深拷贝
        hand = JSON.parse(JSON.stringify(hand));
        return this.getStraight(hand);
    }
    // 获取完整同花
    static getCompleteFlush(hand) {
        // 深拷贝
        hand = JSON.parse(JSON.stringify(hand));
        const allFlush = this.getAllFlush(hand);
        // 最大的5张牌的index
        let maxIndex = 0;
        allFlush.forEach((item, index) => {
            // 降序排序
            item.sort((a, b) => b.score - a.score);
            if (item[0].score > allFlush[maxIndex][0].score) {
                maxIndex = index;
            }
        });
        // 截取返回最大的5张牌
        allFlush[maxIndex] = allFlush[maxIndex].slice(0, 5);
        return allFlush[maxIndex];
    }
    // 获取完整葫芦
    static getCompleteFullHouse(hand) {
        // 深拷贝
        hand = JSON.parse(JSON.stringify(hand));
        // 获取葫芦
        let fullHouse = this.getFullHouse(hand);
        // 获取葫芦中的三条
        let objFullHouse = getHandNumByScore(fullHouse);
        // 取出三条
        let allThreeCard = objFullHouse.res.filter(item => item.length === 3);
        // 排序三条
        allThreeCard.sort((a, b) => b[0].score - a[0].score);
        // 比较葫芦中的所有一对
        const obj = getHandNumByScore(fullHouse);
        // 取出一对
        const onePair = obj.res.filter(item => item.length >= 2 && item[0].score !== fullHouse[0].score);
        // 排序一对
        onePair.sort((a, b) => b[0].score - a[0].score);
        // 最大的5张牌
        let temp = [];
        // 取出三条
        temp.push(...fullHouse.splice(fullHouse.findIndex(item => item.score === allThreeCard[0][0].score), 3));
        // 取出一对
        temp.push(...fullHouse.splice(fullHouse.findIndex(item => item.score === onePair[0][0].score), 2));
        return temp;
    }
    // 获取完整四条
    static getCompleteFourOfAKind(hand) {
        // 深拷贝
        hand = JSON.parse(JSON.stringify(hand));
        // 获取四条
        const fourOfAKind = this.getFourOfAKind(hand);
        // 降序排序
        let sortedHand = this.sortHandByRankDown(hand);
        // 最大的5张牌
        let temp = [];
        // 取出四条
        temp.push(...sortedHand.splice(sortedHand.findIndex(item => item.score === fourOfAKind[0].score), 4));
        // 取出剩余的1张牌(最大),并降序排序
        sortedHand = this.sortHandByRankDown(hand);
        temp.push(...sortedHand.slice(0, 1));
        return temp;
    }
    // 获取完整同花顺
    static getCompleteStraightFlush(hand) {
        // 深拷贝
        JSON.parse(JSON.stringify(hand));
        // 获取同花顺
        let straightFlush = this.getStraightFlush(hand);
        straightFlush = this.getStraight(straightFlush);
        // 按照升序排序
        straightFlush = this.sortHandByRank(straightFlush);
        return straightFlush;
    }
    // 获取完整皇家同花顺
    static getCompleteRoyalFlush(hand) {
        // 深拷贝
        JSON.parse(JSON.stringify(hand));
        // 获取同花顺
        let straightFlush = this.getStraightFlush(hand);
        straightFlush = this.getStraight(straightFlush);
        // 按照降序排序
        straightFlush = this.sortHandByRankDown(straightFlush);
        // 如果是皇家同花顺,直接返回
        if (straightFlush[0].score === 14 /* e_card_score.A */ && straightFlush[1].score === 13 /* e_card_score.K */ && straightFlush[2].score === 12 /* e_card_score.Q */ && straightFlush[3].score === 11 /* e_card_score.J */ && straightFlush[4].score === 10 /* e_card_score.c10 */) {
            return straightFlush;
        }
        return [];
    }
}
exports.Logic = Logic;
/**
 * 排序,先按颜色排序,然后按分值从小到大排列
 * @param a
 * @param b
 * @returns
 */
function cardSort(a, b) {
    if (a.color == b.color)
        return a.score - b.score;
    return a.color - b.color;
}
/**
 * 计算sortedHand中每个分值的牌的数量,返回对象
 */
function getHandNumByScore(sortedHand, fn = (item) => item.score) {
    const obj = {};
    sortedHand.forEach(card => {
        const key = JSON.stringify(fn(card));
        obj[key] = obj[key] || [];
        obj[key].push(card);
    });
    const res = Object.keys(obj).map(key => {
        return obj[key];
    });
    let double = 0;
    let three = 0;
    let four = 0;
    res.forEach(item => {
        if (item.length === 2)
            double++;
        if (item.length === 3)
            three++;
        if (item.length === 4)
            four++;
    });
    return { double, three, four, res };
}
/** 只根据分数排序的,顺子会用到 */
function cardScoreSort(a, b) {
    return a.score - b.score;
}
