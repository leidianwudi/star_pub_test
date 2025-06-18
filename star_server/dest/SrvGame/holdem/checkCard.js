"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckCard = void 0;
class CheckCard {
    static shiSanTiao(paraCards) {
        if (paraCards.length < 3) {
            console.error("牌组长度不够无法检测三张");
            return false;
        }
        // 三张相同
        if (paraCards[0].score == paraCards[1].score &&
            paraCards[1].score == paraCards[2].score) {
            return true;
        }
    }
    static shiTongHuaShun(cards) {
        if (cards.length < 3) {
            console.error("牌组长度不够无法检测同花顺");
            return false;
        }
        cards.sort((a, b) => { return a.score - b.score; });
        //花色相同 3 张连续
        if (CheckCard.shiTongHua(cards) && CheckCard.shiShunZi(cards)) {
            return true;
        }
    }
    static shiTongHua(cards) {
        if (cards.length < 3) {
            console.error("牌组长度不够无法检测同花");
            return false;
        }
        if (cards[0].color == cards[1].color && cards[1].color == cards[2].color) {
            return true;
        }
    }
    static shiShunZi(cards) {
        if (cards.length < 3) {
            console.error("牌组长度不够无法检测顺子");
            return false;
        }
        cards.sort((a, b) => { return a.score - b.score; });
        if (cards[0].score + 1 == cards[1].score && cards[1].score + 1 == cards[2].score) {
            return true;
        }
        if (cards[0].score == 2 /* e_card_score.c2 */ && cards[1].score == 3 /* e_card_score.c3 */ && cards[2].score == 14 /* e_card_score.A */) {
            return true;
        }
    }
    static shiDuiZi(cards) {
        if (cards.length < 3) {
            console.error("牌组长度不够无法检测对子");
            return false;
        }
        if (cards[0].score == cards[1].score) {
            return true;
        }
        if (cards[1].score == cards[2].score) {
            let temp = cards.splice(2, 1)[0];
            cards.unshift(temp);
            return true;
        }
    }
    static shiSanErYi(cards) {
        cards.sort(function sortCard(a, b) {
            return b.score - a.score;
        });
        if (cards[0].score == 14 /* e_card_score.A */ && cards[1].score == 3 /* e_card_score.c3 */ && cards[2].score == 2 /* e_card_score.c2 */) {
            let temp = cards.slice(1, 3);
            temp.push(cards[0]);
            return temp;
        }
        else {
            return cards;
        }
    }
}
exports.CheckCard = CheckCard;
