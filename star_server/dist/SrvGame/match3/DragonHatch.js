"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DragonHatchVerify = exports.DragonHatchPay = exports.DragonHatchGenerator = void 0;
const SlotsDragonHatch_1 = require("../../shared/protocols/public/slots/SlotsDragonHatch");
const GameConfig_1 = require("../slots/GameConfig");
const Match3Generator_1 = require("./Match3Generator");
const AggregationVerify_1 = require("./AggregationVerify");
//寻龙探宝
class DragonHatchGenerator {
    constructor(game, logger, isLucky, isFree) {
        this.game = game;
        this.isInDragonMode = false;
        this.highValueSymbols = game.symbols.filter((s) => s.isHighValue || s.isWild);
        this.generator = new Match3Generator_1.Match3Generator(game, isLucky, isFree);
        this.lastSymbols = undefined;
        this.lastValidGenResult = undefined;
        this.lastValidVerifyResult = undefined;
        this.logger = logger;
    }
    generateGameSymbols(verifyRes) {
        if (verifyRes === null || verifyRes === void 0 ? void 0 : verifyRes.isValid) {
            this.lastValidGenResult = this.lastSymbols;
            this.lastValidVerifyResult = verifyRes;
        }
        //使用上一有效轮来生成新一轮的符号
        this.lastSymbols = this.lastValidGenResult;
        this.generator.lastSymbols = this.lastValidGenResult;
        verifyRes = this.lastValidVerifyResult;
        let res = this.generate(verifyRes);
        this.lastSymbols = res;
        this.generator.lastSymbols = this.lastSymbols;
        return res;
    }
    generate(verifyRes) {
        let game = this.game;
        if (this.lastSymbols) {
            if (!this.lastSymbols.slotSymbols) {
                throw new Error("slots symbols is null");
            }
            if ((verifyRes === null || verifyRes === void 0 ? void 0 : verifyRes.usedDragon) == SlotsDragonHatch_1.Dragon.DRAGON) {
                this.isInDragonMode = true;
            }
            if ((verifyRes === null || verifyRes === void 0 ? void 0 : verifyRes.usedDragon) != undefined) {
                this.logger.log("used dragon:", verifyRes === null || verifyRes === void 0 ? void 0 : verifyRes.usedDragon);
            }
            if (this.isInDragonMode) {
                this.logger.log("in dragon mode");
            }
            if ((verifyRes === null || verifyRes === void 0 ? void 0 : verifyRes.usedDragon) == SlotsDragonHatch_1.Dragon.EARTH) {
                //消除所有低奖励值符号，不会计入中奖
                let points = [];
                for (let row = 1; row <= game.rows; row++) {
                    for (let reel = 1; reel <= game.reels; reel++) {
                        let slotSymbols = this.lastSymbols.slotSymbols;
                        let coIndex = (0, GameConfig_1.getCoordinateIndex)(game, { row, reel });
                        let sym = slotSymbols[coIndex];
                        if (sym.isLowValue) {
                            points.push({ row, reel });
                        }
                    }
                }
                return this.generator.generate(this.lastSymbols, points);
            }
            else if ((verifyRes === null || verifyRes === void 0 ? void 0 : verifyRes.usedDragon) == SlotsDragonHatch_1.Dragon.WATER) {
                let wildSym = game.symbols.find((s) => s.isWild);
                if (!wildSym) {
                    throw new Error("can't find wildcard symbol");
                }
                //将转盘中四个位置的符号变为百搭符号
                let slotSymbols = [...this.lastSymbols.slotSymbols];
                let symbols = [...this.lastSymbols.symbols];
                let newSymbols = [];
                let points = [
                    { row: 2, reel: 2 },
                    { row: 4, reel: 2 },
                    { row: 2, reel: 4 },
                    { row: 4, reel: 4 },
                ];
                for (let p of points) {
                    let coIndex = (0, GameConfig_1.getCoordinateIndex)(game, p);
                    slotSymbols[coIndex] = wildSym;
                    let index = symbols.findIndex((s) => s.coordinate.row == p.row && s.coordinate.reel == p.reel);
                    if (index == -1) {
                        throw new Error("can't find symbol index");
                    }
                    symbols[index] = { ...symbols[index], id: wildSym.id };
                    newSymbols.push({ id: wildSym.id, coordinate: p });
                }
                return { symbols: symbols, slotSymbols: slotSymbols, newSymbols: newSymbols };
            }
            else if ((verifyRes === null || verifyRes === void 0 ? void 0 : verifyRes.usedDragon) == SlotsDragonHatch_1.Dragon.FIRE) {
                let chosenSym = undefined;
                while (true) {
                    //随机选择一个符号，并将转盘上奇数行的第一、三、五个符号和偶数行的第二、四个符号全都替换为该符号，但不会替代百搭符号
                    let index = Math.floor(Math.random() * game.symbols.length);
                    chosenSym = game.symbols[index];
                    if (!chosenSym.isWild) {
                        break;
                    }
                }
                //5*5 
                let points = [
                    { row: 1, reel: 1 },
                    { row: 1, reel: 3 },
                    { row: 1, reel: 5 },
                    { row: 3, reel: 1 },
                    { row: 3, reel: 3 },
                    { row: 3, reel: 5 },
                    { row: 5, reel: 1 },
                    { row: 5, reel: 3 },
                    { row: 5, reel: 5 },
                    { row: 2, reel: 2 },
                    { row: 2, reel: 4 },
                    { row: 4, reel: 2 },
                    { row: 4, reel: 4 },
                ];
                let slotSymbols = [...this.lastSymbols.slotSymbols];
                let symbols = [...this.lastSymbols.symbols];
                let newSymbols = [];
                for (let p of points) {
                    let coIndex = (0, GameConfig_1.getCoordinateIndex)(game, p);
                    if (slotSymbols[coIndex].isWild) {
                        continue;
                    }
                    slotSymbols[coIndex] = chosenSym;
                    let index = symbols.findIndex((s) => s.coordinate.row == p.row && s.coordinate.reel == p.reel);
                    if (index == -1) {
                        throw new Error("can't find symbol index");
                    }
                    symbols[index] = { ...symbols[index], id: chosenSym.id };
                    newSymbols.push({ id: chosenSym.id, coordinate: p });
                }
                return { symbols: symbols, slotSymbols: slotSymbols, newSymbols: newSymbols };
            }
            else if (this.isInDragonMode) {
                if (!(verifyRes === null || verifyRes === void 0 ? void 0 : verifyRes.paySymbols) || (verifyRes === null || verifyRes === void 0 ? void 0 : verifyRes.paySymbols.length) == 0) {
                    let slotSymbols = [...this.lastSymbols.slotSymbols];
                    let symbols = [...this.lastSymbols.symbols];
                    let deleteSymbols = [];
                    let newSymbols = [];
                    //将所有低奖励值符号随机转化为高奖励值符号或百搭符号。触发该效果后，每次符号下落后都会进行一次转化，直到本次旋转结束
                    for (let row = 1; row <= game.rows; row++) {
                        for (let reel = 1; reel <= game.reels; reel++) {
                            let coIndex = (0, GameConfig_1.getCoordinateIndex)(game, { row, reel });
                            if (this.lastSymbols.slotSymbols[coIndex].isLowValue) {
                                deleteSymbols.push({ id: this.lastSymbols.slotSymbols[coIndex].id, coordinate: { row, reel } });
                                let s = this.generator.generator.generateSymbol(this.highValueSymbols);
                                let index = symbols.findIndex((s) => s.coordinate.row == row && s.coordinate.reel == reel);
                                if (index == -1) {
                                    throw new Error("can't find symbol index");
                                }
                                slotSymbols[coIndex] = this.highValueSymbols[s.index];
                                symbols[index] = { ...symbols[index], id: s.symbol.id };
                                newSymbols.push({ id: s.symbol.id, coordinate: { row, reel } });
                            }
                        }
                    }
                    return { symbols: symbols, slotSymbols: slotSymbols, deleteSymbols: deleteSymbols, newSymbols: newSymbols };
                }
                else {
                    return this.generator.generateGameSymbols(verifyRes);
                }
            }
            else {
                return this.generator.generateGameSymbols(verifyRes);
            }
        }
        else {
            return this.generator.generateGameSymbols(verifyRes);
        }
    }
}
exports.DragonHatchGenerator = DragonHatchGenerator;
class DragonHatchPay {
    constructor(game, logger) {
        this.game = game;
        this.dragons = [];
        this.paySymbolCount = 0;
        this.logger = logger;
    }
    pay(bet, genResult, verifyResult, pay) {
        if (!pay) {
            throw new Error("pay should't be null");
        }
        pay.addDragon = verifyResult.addDragon;
        pay.usedDragon = verifyResult.usedDragon;
        if (verifyResult.dragons != undefined) {
            pay.dragons = [...verifyResult.dragons];
        }
        if (verifyResult.paySymbolCount != undefined) {
            pay.match3Multipliers = [verifyResult.paySymbolCount];
        }
        return pay;
    }
}
exports.DragonHatchPay = DragonHatchPay;
class DragonHatchVerify {
    constructor(game, isLucky, logger) {
        this.game = game;
        this.logger = logger;
        this.dragons = [];
        this.paySymbolCount = 0;
        this.verifier = new AggregationVerify_1.AggregationVerify(game, logger);
        this.round = 0;
        this.dragonRoundCount = 0;
        this.isLucky = true;
        if (this.isLucky) {
            let dragons = [
                SlotsDragonHatch_1.Dragon.EARTH,
                SlotsDragonHatch_1.Dragon.WATER,
                SlotsDragonHatch_1.Dragon.FIRE,
                SlotsDragonHatch_1.Dragon.DRAGON,
            ];
            let index = Math.floor(Math.random() * dragons.length);
            this.luckyDragon = dragons[index];
            this.logger.log("dragon hatch lucky dragon:", this.luckyDragon);
        }
    }
    verify(bet, genResult) {
        this.round += 1;
        let verifyResult = this.verifier.verify(bet, genResult);
        if (!verifyResult.paySymbols) {
            throw new Error("paySymbols of verify result is null");
        }
        let payPoints = new Set();
        for (let paySym of verifyResult.paySymbols) {
            for (let point of paySym.points) {
                let coIndex = (0, GameConfig_1.getCoordinateIndex)(this.game, point);
                payPoints.add(coIndex);
            }
        }
        let addDragon = undefined;
        let count = this.paySymbolCount + payPoints.size;
        if (this.paySymbolCount < 70 && count >= 70) {
            addDragon = SlotsDragonHatch_1.Dragon.DRAGON;
        }
        else if (this.paySymbolCount < 50 && count >= 50) {
            addDragon = SlotsDragonHatch_1.Dragon.FIRE;
        }
        else if (this.paySymbolCount < 30 && count >= 30) {
            addDragon = SlotsDragonHatch_1.Dragon.WATER;
        }
        else if (this.paySymbolCount < 10 && count >= 10) {
            addDragon = SlotsDragonHatch_1.Dragon.EARTH;
        }
        if (addDragon != undefined) {
            verifyResult.addDragon = addDragon;
            this.dragons.push(addDragon);
            if (addDragon == this.luckyDragon) {
                this.luckyDragon = undefined;
            }
            this.logger.log("add dragon:", addDragon);
        }
        this.paySymbolCount += payPoints.size;
        if (this.paySymbolCount > 70) {
            this.paySymbolCount = 70;
        }
        if (!verifyResult.paySymbols || verifyResult.paySymbols.length == 0 && this.dragons.length > 0) {
            //没有中奖， 触发特效
            let usedDragon = this.dragons.splice(0, 1)[0];
            verifyResult.usedDragon = usedDragon;
            if (usedDragon == SlotsDragonHatch_1.Dragon.DRAGON) {
                this.isInDragonMode = true;
            }
            this.logger.log("use dragon:", usedDragon);
        }
        verifyResult.dragons = [...this.dragons];
        verifyResult.paySymbolCount = this.paySymbolCount;
        if (verifyResult.usedDragon != undefined) {
            verifyResult.isContinue = true;
        }
        if (this.isInDragonMode) {
            this.dragonRoundCount += 1;
            if (this.dragonRoundCount % 2 == 1) {
                //巨龙模式下，替换，下落，替换， 下落...
                verifyResult.paySymbols = [];
                //下一轮将低价值符号替换为高价值符号
                verifyResult.isContinue = true;
                this.logger.log("assign paysymbols as empty array in dragon mode");
            }
        }
        if (!verifyResult.isContinue) {
            if (this.luckyDragon != undefined) {
                if (verifyResult.usedDragon != undefined) {
                    //无效轮， 将龙蛋返回
                    this.dragons.push(verifyResult.usedDragon);
                }
                //保证幸运状态下一定出现龙的效果
                verifyResult.isValid = false;
                verifyResult.isContinue = true;
                this.logger.log("dargon hatch run until lucky dragon appear");
            }
        }
        this.logger.log("dragons:", this.dragons, " pay symbol count:", this.paySymbolCount);
        return verifyResult;
    }
}
exports.DragonHatchVerify = DragonHatchVerify;
