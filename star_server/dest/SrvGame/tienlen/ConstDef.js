"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Timer = exports.EM_TimerID = exports.CARD_COLOR = exports.CARD_SUIT = exports.CARD_RANK = exports.CARD_TYPE = void 0;
// 普通牌型定义
exports.CARD_TYPE = {
    NULL: 1, //错误类型
    SINGLE: 2, //单牌
    PAIR: 3, //对子
    THREE: 4, //三张
    STRAIGHT: 5, //顺子
    PAIRS: 6, //连对
    FOUR: 7, //四张
};
exports.CARD_RANK = {
    ACE: 1,
    TWO: 2,
    THREE: 3,
    FOUR: 4,
    FIVE: 5,
    SIX: 6,
    SEVEN: 7,
    EIGHT: 8,
    NINE: 9,
    TEN: 10,
    JACK: 11,
    QUEEN: 12,
    KING: 13,
};
exports.CARD_SUIT = {
    SPADE: 0, //黑桃
    CLUB: 1, //草花
    Diamond: 2, //方块
    HEART: 3, //红桃
};
exports.CARD_COLOR = {
    BLACK: 0, //黑色
    RED: 1, //红花
};
var EM_TimerID;
(function (EM_TimerID) {
    EM_TimerID[EM_TimerID["eTimerID_Start"] = 1] = "eTimerID_Start";
    EM_TimerID[EM_TimerID["eTimerID_Action"] = 2] = "eTimerID_Action";
})(EM_TimerID || (exports.EM_TimerID = EM_TimerID = {}));
exports.Timer = {
    start: 2, //开始
    action: 15, //操作
};
