"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logic = exports.e_card_type = exports.e_card_score = exports.e_card_color = void 0;
const app_config_1 = require("./app_config");
const util_1 = require("./util");
// 牌色
var e_card_color;
(function (e_card_color) {
    e_card_color[e_card_color["Normal"] = 0] = "Normal";
    e_card_color[e_card_color["fangkuai1"] = 1] = "fangkuai1";
    e_card_color[e_card_color["meihua2"] = 2] = "meihua2";
    e_card_color[e_card_color["hongtao3"] = 3] = "hongtao3";
    e_card_color[e_card_color["heitao4"] = 4] = "heitao4";
})(e_card_color || (exports.e_card_color = e_card_color = {}));
// 牌值
var e_card_score;
(function (e_card_score) {
    e_card_score[e_card_score["none"] = 0] = "none";
    e_card_score[e_card_score["c3"] = 3] = "c3";
    e_card_score[e_card_score["c4"] = 4] = "c4";
    e_card_score[e_card_score["c5"] = 5] = "c5";
    e_card_score[e_card_score["c6"] = 6] = "c6";
    e_card_score[e_card_score["c7"] = 7] = "c7";
    e_card_score[e_card_score["c8"] = 8] = "c8";
    e_card_score[e_card_score["c9"] = 9] = "c9";
    e_card_score[e_card_score["c10"] = 10] = "c10";
    e_card_score[e_card_score["J"] = 11] = "J";
    e_card_score[e_card_score["Q"] = 12] = "Q";
    e_card_score[e_card_score["K"] = 13] = "K";
    e_card_score[e_card_score["A"] = 14] = "A";
    e_card_score[e_card_score["c2"] = 16] = "c2";
    e_card_score[e_card_score["little_king"] = 18] = "little_king";
    e_card_score[e_card_score["big_king"] = 19] = "big_king";
})(e_card_score || (exports.e_card_score = e_card_score = {}));
// 五小牛>四炸（炸弹）>五花牛>四花牛>牛牛>牛九>牛八>牛七>牛六>牛五>牛四>牛三>牛二>牛一>没牛
var e_card_type;
(function (e_card_type) {
    e_card_type[e_card_type["Normal"] = 0] = "Normal";
    e_card_type[e_card_type["niu1"] = 1] = "niu1";
    e_card_type[e_card_type["niu2"] = 2] = "niu2";
    e_card_type[e_card_type["niu3"] = 3] = "niu3";
    e_card_type[e_card_type["niu4"] = 4] = "niu4";
    e_card_type[e_card_type["niu5"] = 5] = "niu5";
    e_card_type[e_card_type["niu6"] = 6] = "niu6";
    e_card_type[e_card_type["niu7"] = 7] = "niu7";
    e_card_type[e_card_type["niu8"] = 8] = "niu8";
    e_card_type[e_card_type["niu9"] = 9] = "niu9";
    e_card_type[e_card_type["niuniu"] = 10] = "niuniu";
    e_card_type[e_card_type["sihua"] = 11] = "sihua";
    e_card_type[e_card_type["wuhuaniu"] = 12] = "wuhuaniu";
    e_card_type[e_card_type["zhadan"] = 13] = "zhadan";
    e_card_type[e_card_type["wuxiaoniu"] = 14] = "wuxiaoniu";
    e_card_type[e_card_type["kongpaixing"] = 15] = "kongpaixing";
})(e_card_type || (exports.e_card_type = e_card_type = {}));
// 五小牛：5倍
// 五花牛：5倍
// 四炸：4倍
// 四花牛：4倍
// 牛牛：3倍
// 牛七~牛九：2倍
// 牛一~牛六：1倍
class Logic {
    static getCards() {
        let arr = [];
        let id = 0;
        function push(color) {
            for (let i = 3; i <= 14; i++) {
                arr.push({ "id": id++, "color": color, "score": i });
            }
            arr.push({ "id": id++, "color": color, "score": e_card_score.c2 });
        }
        push(e_card_color.fangkuai1);
        push(e_card_color.meihua2);
        push(e_card_color.hongtao3);
        push(e_card_color.heitao4);
        // arr.push({ "id": id++, "color": e_card_color.king0, "score": e_card_score.little_king });
        // arr.push({ "id": id++, "color": e_card_color.king1, "score": e_card_score.big_king });
        // Logger.debug("牌型", JSON.stringify(arr));
        // 打乱
        for (let i = 0; i < arr.length; i++) {
            let index = (0, util_1.randInt)(arr.length);
            let tmp = arr[index];
            arr[index] = arr[i];
            arr[i] = tmp;
        }
        // 测试用
        // arr = [
        //     { "id": 1, "color": 1, "score": e_card_score.K },
        //     { "id": 2, "color": 4, "score": e_card_score.c9 },
        //     { "id": 3, "color": 4, "score": e_card_score.A },
        //     { "id": 4, "color": 1, "score": e_card_score.K },
        //     { "id": 5, "color": 3, "score": e_card_score.c3 },
        //     { "id": 10, "color": 4, "score": e_card_score.J },
        //     { "id": 20, "color": 1, "score": e_card_score.c6 },
        //     { "id": 30, "color": 1, "score": e_card_score.c4 },
        //     { "id": 40, "color": 2, "score": e_card_score.c10 },
        //     { "id": 50, "color": 4, "score": e_card_score.c3 },
        // ]
        return arr;
    }
    static idCardSuan(cards) {
        let num1 = Logic.cardScoreVal(cards[0].score);
        let num2 = Logic.cardScoreVal(cards[1].score);
        let num3 = Logic.cardScoreVal(cards[2].score);
        let num4 = Logic.cardScoreVal(cards[3].score);
        let num5 = Logic.cardScoreVal(cards[4].score);
        //判断五小牛 5张牌点数都小于5，且点数之和小于等于10
        if (num1 < 5 && num2 < 5 && num3 < 5 && num4 < 5 && num5 < 5 && (num1 + num2 + num3 + num4 + num5) <= 10) {
            cards.sort(Logic.sortCard);
            return { cards: cards, type: e_card_type.wuxiaoniu, scale: app_config_1.svr_config.scale_wu_xiao_niu };
        }
        //4炸 5张牌中有4张牌点数相同，第五张随意
        let temp = [...cards];
        temp.sort(Logic.sortCard);
        // 炸弹牌型 55554
        if (temp[0].score == temp[1].score &&
            temp[1].score == temp[2].score &&
            temp[2].score == temp[3].score) {
            return { cards: temp, type: e_card_type.zhadan, scale: app_config_1.svr_config.scale_zha_dan };
        }
        // 炸弹牌型 65555
        if (temp[1].score == temp[2].score &&
            temp[2].score == temp[3].score &&
            temp[3].score == temp[4].score) {
            temp = temp.reverse();
            return { cards: temp, type: e_card_type.zhadan, scale: app_config_1.svr_config.scale_zha_dan };
        }
        //五花牛 5张牌都为花牌（J、Q、K）中的任意牌
        if (this.isFlowerCard(temp[0].score) &&
            this.isFlowerCard(temp[1].score) &&
            this.isFlowerCard(temp[2].score) &&
            this.isFlowerCard(temp[3].score) &&
            this.isFlowerCard(temp[4].score)) {
            temp.sort((a, b) => {
                return b.score - a.score;
            });
            return { cards: temp, type: e_card_type.wuhuaniu, scale: 5 };
        }
        //四花牛 5张牌中有4张为花牌（J、Q、K）中的任意牌，且第五牌为10
        if (this.isFlowerCard(temp[0].score) &&
            this.isFlowerCard(temp[1].score) &&
            this.isFlowerCard(temp[2].score) &&
            this.isFlowerCard(temp[3].score) && temp[4].score == 10) {
            return { cards: temp, type: e_card_type.sihua, scale: 4 };
        }
        if (this.isFlowerCard(temp[4].score) &&
            this.isFlowerCard(temp[1].score) &&
            this.isFlowerCard(temp[2].score) &&
            this.isFlowerCard(temp[3].score) && temp[0].score == 10) {
            temp.reverse();
            return { cards: temp, type: e_card_type.sihua, scale: 4 };
        }
        let numV1 = Logic.socreValue(temp[0].score);
        let numV2 = Logic.socreValue(temp[1].score);
        let numV3 = Logic.socreValue(temp[2].score);
        let numV4 = Logic.socreValue(temp[3].score);
        let numV5 = Logic.socreValue(temp[4].score);
        //这里取值要不能超过10 
        //牛牛 5张牌中任意3张点数之和为10的整数倍，且另外2张牌的点数之和也为10的整数倍
        //1,2,3  4,5
        if ((numV1 + numV2 + numV3) % 10 == 0) {
            let niuji = (numV4 + numV5) % 10;
            let left = temp.splice(0, 3);
            return Logic.niuSave(temp, left, niuji);
        }
        // 1,2,4  3,5
        else if ((numV1 + numV2 + numV4) % 10 == 0) {
            let niuji = (numV3 + numV5) % 10;
            let left = temp.splice(0, 2);
            left.push(temp.splice(1, 1)[0]);
            return Logic.niuSave(temp, left, niuji);
        }
        // 1,2,5  3,4
        else if ((numV1 + numV2 + numV5) % 10 == 0) {
            let niuji = (numV3 + numV4) % 10;
            let left = temp.splice(0, 2);
            left.push(temp.splice(2, 1)[0]);
            return Logic.niuSave(temp, left, niuji);
        }
        // 1,3,4  2,5
        else if ((numV1 + numV3 + numV4) % 10 == 0) {
            let niuji = (numV2 + numV5) % 10;
            let left = temp.splice(0, 1);
            left.push(temp.splice(1, 1)[0]);
            left.push(temp.splice(1, 1)[0]);
            return Logic.niuSave(temp, left, niuji);
        }
        // 145
        else if ((numV1 + numV4 + numV5) % 10 == 0) {
            let niuji = (numV2 + numV3) % 10;
            let left = temp.splice(0, 1);
            left.push(temp.splice(2, 1)[0]);
            left.push(temp.splice(2, 1)[0]);
            return Logic.niuSave(temp, left, niuji);
        }
        //1,3,5  2,4
        else if ((numV1 + numV3 + numV5) % 10 == 0) {
            let niuji = (numV2 + numV4) % 10;
            let left = temp.splice(0, 1);
            left.push(temp.splice(1, 1)[0]);
            left.push(temp.splice(2, 1)[0]);
            return Logic.niuSave(temp, left, niuji);
        }
        //2,3,4  1,5
        else if ((numV2 + numV3 + numV4) % 10 == 0) {
            let niuji = (numV1 + numV5) % 10;
            let left = temp.splice(1, 3);
            return Logic.niuSave(temp, left, niuji);
        }
        //2,3,5  1,4
        else if ((numV2 + numV3 + numV5) % 10 == 0) {
            let niuji = (numV1 + numV4) % 10;
            let left = temp.splice(1, 2);
            left.push(temp.splice(2, 1)[0]);
            return Logic.niuSave(temp, left, niuji);
        }
        //2,4,5  1,3
        else if ((numV2 + numV4 + numV5) % 10 == 0) {
            let niuji = (numV1 + numV3) % 10;
            let left = temp.splice(1, 1);
            left.push(temp.splice(2, 1)[0]);
            left.push(temp.splice(2, 1)[0]);
            return Logic.niuSave(temp, left, niuji);
        }
        //3,4,5  1,2
        else if ((numV3 + numV4 + numV5) % 10 == 0) {
            let niuji = (numV1 + numV2) % 10;
            let left = temp.splice(2, 3);
            return Logic.niuSave(temp, left, niuji);
        }
        //没牛
        else {
            return { cards: temp, type: e_card_type.Normal, scale: 1 };
        }
    }
    static niuSave(temp, left, niuji) {
        let niu = [e_card_type.niuniu, e_card_type.niu1, e_card_type.niu2, e_card_type.niu3, e_card_type.niu4,
            e_card_type.niu5, e_card_type.niu6, e_card_type.niu7, e_card_type.niu8, e_card_type.niu9];
        let right = temp.splice(0, 2);
        left.sort(Logic.sortCard);
        right.sort(Logic.sortCard);
        return {
            cards: left.concat(right),
            type: niu[niuji],
            scale: niuji == 0 ?
                app_config_1.svr_config.scale_niu_niu :
                niuji > e_card_type.niu6 ?
                    app_config_1.svr_config.scale_da_niu : app_config_1.svr_config.scale_xiao_niu
        };
    }
    static isFlowerCard(num) {
        if (num >= 11 && num <= 13) {
            return true;
        }
        return false;
    }
    /** 返回牌的最大值,11 ,12 13 都是 10 */
    static socreValue(num) {
        if (num > 10) {
            if (num == 16) {
                return 2;
            }
            if (num == 14) {
                return 1;
            }
            return 10;
        }
        return num;
    }
    static cardScoreVal(num) {
        if (num == 16) {
            return 2;
        }
        if (num == 14) {
            return 1;
        }
        return num;
    }
    static bigerThanZhuang(zhuang_, xian_) {
        let zhuang = {
            id_cards: [...zhuang_.id_cards],
            type: zhuang_.type,
            scale: zhuang_.scale,
        };
        let xian = {
            id_cards: [...xian_.id_cards],
            type: xian_.type,
            scale: xian_.scale,
        };
        // 若庄家和闲家的牌完全相同，无论是花色还是点数的大小都相同，则这局直接判定为庄家获胜
        let zhuang_num = [];
        let xian_num = [];
        zhuang.id_cards.forEach((card) => {
            let val = card.score;
            if (val == 14) {
                val = 1;
            }
            else if (val == 16) {
                val = 2;
            }
            zhuang_num.push(val);
        });
        xian.id_cards.forEach((card) => {
            let val = card.score;
            if (val == 14) {
                val = 1;
            }
            else if (val == 16) {
                val = 2;
            }
            xian_num.push(val);
        });
        zhuang_num.sort((a, b) => { return b - a; });
        xian_num.sort((a, b) => { return b - a; });
        //牌型大的大
        if (xian.type > zhuang.type) {
            return true;
        }
        console.log(`闲家牌型:${xian.type},庄家牌型:${zhuang.type}`);
        //牌型相同的时候
        if (xian.type == zhuang.type) {
            if (zhuang.type == e_card_type.zhadan) {
                return xian.id_cards[2].score > zhuang.id_cards[2].score; //中间的牌肯定是四个中的一个
            }
            zhuang.id_cards.sort(Logic.sortCard);
            xian.id_cards.sort(Logic.sortCard);
            //比牌值大小
            // 如果有A(14) 则直接取A,否则取最大的牌值
            let xian_score = xian.id_cards[0].score;
            let zhuang_score = zhuang.id_cards[0].score;
            // if (zhuang.id_cards.find((card: I_card) => { return card.score == 14 })) {
            //     zhuang_score = 1;
            // }
            // if (xian.id_cards.find((card: I_card) => { return card.score == 14 })) {
            //     xian_score = 1;
            // }
            console.log(`闲家牌值:${xian_score},庄家牌值:${zhuang_score}`);
            if (xian_score > zhuang_score) {
                console.log("比牌值大小", xian_score, zhuang_score);
                return xian_score > zhuang_score;
            }
            else if (xian_score < zhuang_score) {
                console.log("比牌值大小", xian_score, zhuang_score);
                return false;
            }
            else {
                //牌值相同,继续比花色,花色肯定不可能相同
                let xian_color = xian.id_cards[0].color;
                let zhuang_color = zhuang.id_cards[0].color;
                if (xian_color > zhuang_color) {
                    return true;
                }
                else {
                    return false;
                }
            }
        }
        return false;
    }
    /** 排序 */
    static sortCard(a, b) {
        let scoreA = 0;
        if (a.score == 14) {
            scoreA = 1;
        }
        else if (a.score == 16) {
            scoreA = 2;
        }
        else {
            scoreA = a.score;
        }
        let scoreB = 0;
        if (b.score == 14) {
            scoreB = 1;
        }
        else if (b.score == 16) {
            scoreB = 2;
        }
        else {
            scoreB = b.score;
        }
        return scoreB - scoreA;
    }
}
exports.Logic = Logic;
