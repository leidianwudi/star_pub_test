"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadTestCard = LoadTestCard;
exports.MkdirLongPath = MkdirLongPath;
exports.fomatFloat = fomatFloat;
exports.checkParam = checkParam;
exports.randMinMax = randMinMax;
exports.randInt = randInt;
exports.randArr = randArr;
exports.removeFromArr = removeFromArr;
exports.timeFormat = timeFormat;
exports.typeOf = typeOf;
exports.deepClone = deepClone;
exports.md5_calculate = md5_calculate;
exports.nowMs = nowMs;
exports.wait = wait;
const crypto_1 = __importDefault(require("crypto"));
const fs_1 = __importDefault(require("fs"));
function LoadTestCard() {
    let fileP = './test.txt';
    if (fs_1.default.existsSync(fileP)) {
        let str = fs_1.default.readFileSync(fileP, "utf-8");
        str = str.replace(/\\/g, "");
        if (str != "") {
            let card = JSON.parse(str);
            return card;
        }
        return [];
    }
    else {
        fs_1.default.writeFileSync(fileP, '');
        return [];
    }
}
function MkdirLongPath(path) {
    if (path.substring(-1) != "/" && path.indexOf(".") > 0) {
        return;
    }
    let pathArr = path.split("/");
    let newPath = "";
    for (let i = 0; i < pathArr.length; i++) {
        let elem = pathArr[i];
        newPath += elem + "/";
        if (fs_1.default.existsSync(newPath)) {
            continue;
        }
        fs_1.default.mkdirSync(newPath);
    }
}
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
function typeOf(obj) {
    const toString = Object.prototype.toString;
    const map = {
        "[object Boolean]": "boolean",
        "[object Number]": "number",
        "[object String]": "string",
        "[object Function]": "function",
        "[object Array]": "array",
        "[object Date]": "date",
        "[object RegExp]": "regExp",
        "[object Undefined]": "undefined",
        "[object Null]": "null",
        "[object Object]": "object"
    };
    return map[toString.call(obj)];
}
function deepClone(data) {
    // 获取传入拷贝函数的数据类型
    const type = typeOf(data);
    // 定义一个返回any类型的数据
    let reData;
    // 递归遍历一个array类型数据，
    if (type === "array") {
        reData = [];
        for (let i = 0; i < data.length; i++) {
            reData.push(deepClone(data[i]));
        }
    }
    else if (type === "object") { //递归遍历一个object类型数据
        reData = {};
        for (const i in data) {
            reData[i] = deepClone(data[i]);
        }
    }
    else {
        // 返回基本数据类型
        return data;
    }
    // 将any类型的数据return出去，作为deepClone的结果
    return reData;
}
/** md5工具 */
function md5_calculate(str) {
    let md5 = crypto_1.default.createHash('md5');
    return md5.update(str).digest('hex');
}
function nowMs() {
    return Date.now();
}
/**
 * 延迟函数的同步实现
 * @param ms
 * @returns
 */
function wait(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Done waiting");
            resolve(ms);
        }, ms);
    });
}
