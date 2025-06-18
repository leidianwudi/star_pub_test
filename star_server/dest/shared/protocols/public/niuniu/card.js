"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.e_card_score = exports.e_card_color = void 0;
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
