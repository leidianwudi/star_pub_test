"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LuckyGenerator = void 0;
const GameConfig_1 = require("../slots/GameConfig");
const GameConfig_2 = require("../slots/GameConfig");
const RandomIndex_1 = require("../../common/RandomIndex");
const LUCKY_COUNT = 3;
//自动生成幸运符号
class LuckyGenerator {
    constructor(game, generator, isLucky, ignoreRows, ignorePoints, randomFunc) {
        this.game = game;
        this.generator = generator;
        this.isLucky = isLucky;
        this.round = 0;
        this.ignoreRows = ignoreRows;
        this.ignorePoints = ignorePoints;
        this.randomFunc = randomFunc;
    }
    //判断是否忽略此位置的符号
    checkIgnorePoints(c) {
        if (this.ignoreRows) {
            if (this.ignoreRows.includes(c.row)) {
                return true;
            }
        }
        if (this.ignorePoints) {
            let p = this.ignorePoints.find((p) => p.row == c.row && p.reel == c.reel);
            if (p != undefined) {
                return true;
            }
        }
        return false;
    }
    generateGameSymbols(verifyRes) {
        this.round += 1;
        let res = this.generator.generateGameSymbols(verifyRes);
        //如果是幸运模式，且首次生成。里面3个格子强制改为幸运符号
        if (this.isLucky && this.round == 1) {
            this.setLuckSymbols(res);
        }
        return res;
    }
    random(count) {
        if (this.randomFunc) {
            return this.randomFunc(this.game, count);
        }
        else {
            let reels = this.game.reels; //几列
            let row = this.game.rows; //几行
            let rand = new RandomIndex_1.RandomIndex(row, reels, 1, 1);
            let indexArr = rand.generateMultiple(count); //3个幸运符号
            return indexArr;
        }
    }
    //设置结果为幸运模式
    setLuckSymbols(genRes) {
        let luckyCount = 0;
        while (luckyCount < LUCKY_COUNT) {
            let indexArr = this.random(LUCKY_COUNT);
            for (let i = 0; i < indexArr.length; i++) {
                //得到坐标
                let index = (0, GameConfig_1.getCoordinateIndex)(this.game, { row: indexArr[i][0], reel: indexArr[i][1] });
                let luckSymbol = (0, GameConfig_2.findLuckSymbol)(this.game); //找到幸运符号
                //替换符号为幸运符号
                if (genRes.slotSymbols) {
                    genRes.slotSymbols[index] = luckSymbol;
                    for (let j = 0; j < genRes.symbols.length; j++) {
                        if (genRes.symbols[j].coordinate.row == indexArr[i][0] &&
                            genRes.symbols[j].coordinate.reel == indexArr[i][1]) {
                            console.log("gen res:", genRes.symbols[j], ", ll:", luckSymbol);
                            if (genRes.symbols[j].id != luckSymbol.id) {
                                genRes.symbols[j].id = luckSymbol.id; //替换为幸运符号id
                                luckyCount += 1;
                            }
                        }
                    }
                }
                if (luckyCount >= LUCKY_COUNT) {
                    break;
                }
            }
        }
    }
}
exports.LuckyGenerator = LuckyGenerator;
