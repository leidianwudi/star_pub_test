"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TigerVerify = exports.TigerGenerator = void 0;
const SlotGenerator_1 = require("../slots/SlotGenerator");
const GameConfig_1 = require("../slots/GameConfig");
const LineSlotPayline_1 = require("./LineSlotPayline");
const Constants_1 = require("../../common/Constants");
//幸运虎幸运模式配置
//幸运状态触发时，会随机选择一个符号(不包括百搭符号)，随后转轴将只由三种符号：随机选择的符号、百搭符号和空白符号组成。    
//当所有转轴停止旋转后，如果转轴上出现1个或更多非空白符号，所有转轴将再次旋转，之前出的非空白符号将保留在它们的位置上。
//在所有转轴停止旋转后，如果转轴上不再出现额外的非空白符号，则幸运状态结束并支付奖金
class TigerGenerator {
    constructor(game, isLucky, isFree) {
        this.game = game;
        this.isLucky = isLucky;
        this.generator = new SlotGenerator_1.SlotGenerator(game, isLucky, isFree);
    }
    generateGameSymbols() {
        const game = this.game;
        if (!game.lucky || !game.lucky.tiger) {
            throw new Error("slot tiger no lucky config");
        }
        if (this.isLucky) {
            if (!this.lastRoundSymbols) {
                //first round
                const p1Symbols = game.lucky.tiger.phase1Symbols;
                let { symbol: chosenSym } = this.generator.generateSymbol(p1Symbols);
                const p2Symbols = game.lucky.tiger.phase2Symbols;
                let symbols = this.generator.generateSymbols(p2Symbols);
                symbols = symbols.map((s) => {
                    if (s.id == GameConfig_1.CHOSEN_SYMBOL_ID) {
                        return { id: chosenSym.id, coordinate: s.coordinate };
                    }
                    else {
                        return s;
                    }
                });
                this.lastRoundSymbols = symbols;
                this.chosenSymbolId = chosenSym.id;
                return { symbols, chosenSymbolId: this.chosenSymbolId };
            }
            else {
                let res = [];
                let newSymbols = [];
                for (let i = 0; i < this.lastRoundSymbols.length; i++) {
                    let s = this.lastRoundSymbols[i];
                    if (s.id == GameConfig_1.EMPTY_SYMBOL_ID) {
                        const p2Symbols = game.lucky.tiger.phase2Symbols;
                        let { symbol: sym } = this.generator.generateSymbol(p2Symbols);
                        let newSymbol = { id: sym.id, coordinate: s.coordinate };
                        if (sym.id == GameConfig_1.CHOSEN_SYMBOL_ID) {
                            newSymbol.id = this.chosenSymbolId;
                        }
                        res.push(newSymbol);
                        if (newSymbol.id != GameConfig_1.EMPTY_SYMBOL_ID) {
                            newSymbols.push(newSymbol); //非空才添加
                        }
                    }
                    else {
                        res.push(s);
                    }
                }
                this.lastRoundSymbols = res;
                return { symbols: res, newSymbols, chosenSymbolId: this.chosenSymbolId };
            }
        }
        else {
            return this.generator.generateGameSymbols();
        }
    }
}
exports.TigerGenerator = TigerGenerator;
class TigerVerify {
    constructor(game, isLucky) {
        this.game = game;
        this.round = 0;
        this.isLucky = isLucky;
        this.paylineVerify = new LineSlotPayline_1.LineSlotPaylineVerify(game);
    }
    verify(bet, genResult) {
        this.round += 1;
        let r = this.paylineVerify.verify(bet, genResult);
        if (this.isLucky) {
            if (this.round == 1) {
                //如果第一轮生成全空，就不会进入第二轮
                let isAllEmpty = true;
                for (let i = 0; i < genResult.symbols.length; i++) {
                    if (genResult.symbols[i].id != GameConfig_1.EMPTY_SYMBOL_ID) {
                        isAllEmpty = false;
                    }
                }
                return { ...r, isValid: true, isContinue: !isAllEmpty };
            }
            else {
                let newSymbols = genResult.newSymbols;
                if (!newSymbols || newSymbols.length == 0) {
                    return { ...r, isValid: false, isContinue: false };
                }
                let isAllEmpty = true;
                for (let i = 0; i < newSymbols.length; i++) {
                    if (newSymbols[i].id != GameConfig_1.EMPTY_SYMBOL_ID) {
                        isAllEmpty = false;
                    }
                }
                if (isAllEmpty) {
                    return { ...r, isValid: false, isContinue: false };
                }
                if (this.round > Constants_1.SLOT_ROUND_LIMIT) {
                    console.warn("slot tiger round overlimit");
                    return { ...r, isValid: true, isContinue: false };
                }
                else {
                    return { ...r, isValid: true, isContinue: true };
                }
            }
        }
        else {
            return { ...r, isValid: true, isContinue: false };
        }
    }
}
exports.TigerVerify = TigerVerify;
