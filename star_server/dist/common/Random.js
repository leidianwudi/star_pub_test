"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Random = void 0;
//随机值生成工具
class Random {
    /**
    * 生成指定范围内的随机整数，可排除特定值
    * @param min - 最小值（包含）
    * @param max - 最大值（包含）
    * @param exclude - 需要排除的值或值数组
    */
    static getNum_1(min, max, exclude = []) {
        const excludeArray = Array.isArray(exclude) ? exclude : [exclude];
        const possibleValues = [];
        for (let i = min; i <= max; i++) {
            if (!excludeArray.includes(i)) {
                possibleValues.push(i);
            }
        }
        if (possibleValues.length === 0) {
            throw new Error('没有可生成的有效整数');
        }
        return possibleValues[Math.floor(Math.random() * possibleValues.length)];
    }
    /**
     * 根据权重，返回数组索引
     * @param chances 各随机事件的概率（权重）
     */
    static randomIndex(chances) {
        let total = chances.reduce((prev, cur) => prev + cur, 0);
        let r = Math.random() * total;
        let rr = r;
        for (let i = 0; i < chances.length; i++) {
            if (r < chances[i]) {
                return i;
            }
            r -= chances[i];
        }
        console.log("can't get random index, chances:", chances, " r:", rr);
        throw new Error("can't get random index");
    }
}
exports.Random = Random;
