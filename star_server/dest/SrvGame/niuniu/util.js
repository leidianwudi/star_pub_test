"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fomatFloat = fomatFloat;
exports.checkParam = checkParam;
exports.randMinMax = randMinMax;
exports.randInt = randInt;
exports.randArr = randArr;
exports.removeFromArr = removeFromArr;
exports.timeFormat = timeFormat;
exports.md5_calculate = md5_calculate;
const node_crypto_1 = __importDefault(require("node:crypto"));
/** 保留x位小数,数值类型不变 */
function fomatFloat(src, pos = 2) {
    return Math.round(src * Math.pow(10, pos)) / Math.pow(10, pos);
}
function checkParam(paras) {
    if (paras == undefined || paras == null) {
        return true;
    }
    return false;
}
function randMinMax(min, max) {
    return randInt(max - min) + min;
}
function randInt(num) {
    return Math.floor(Math.random() * num);
}
function randArr(arr) {
    return arr[randInt(arr.length)];
}
function removeFromArr(arr, one) {
    let index = arr.indexOf(one);
    if (index !== -1) {
        arr.splice(index, 1);
    }
}
function timeFormat(_date, hasTime = true) {
    let date = typeof _date === "object" ? _date : new Date(_date);
    let timeStr = "";
    let tmp;
    timeStr += date.getFullYear() + "-";
    tmp = date.getMonth() + 1;
    timeStr += (tmp > 9 ? tmp : "0" + tmp) + "-";
    tmp = date.getDate();
    timeStr += (tmp > 9 ? tmp : "0" + tmp);
    if (hasTime) {
        tmp = date.getHours();
        timeStr += " " + (tmp > 9 ? tmp : "0" + tmp) + ":";
        tmp = date.getMinutes();
        timeStr += (tmp > 9 ? tmp : "0" + tmp) + ":";
        tmp = date.getSeconds();
        timeStr += tmp > 9 ? tmp : "0" + tmp;
    }
    return timeStr;
}
/** md5工具 */
function md5_calculate(str) {
    let md5 = node_crypto_1.default.createHash('md5');
    return md5.update(str).digest('hex');
}
