"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RabbitGenerator = void 0;
const SlotGenerator_1 = require("../slots/SlotGenerator");
//幸运线， 幸运线上的符号固定为万能符，并且服务器自动旋转直到中奖为止
class RabbitGenerator {
    constructor(game, isLucky, isFree) {
        this.game = game;
        this.isLucky = isLucky;
        this.isFree = isFree;
        this.generator = new SlotGenerator_1.SlotGenerator(game, isLucky, isFree);
    }
    generateGameSymbols() {
        let game = this.game;
        let gamePay = game.pay;
        if (!gamePay) {
            throw new Error("slot rabbit no pay config");
        }
        if (this.isLucky || this.isFree) {
            let payIds = gamePay.symbols.map((s) => s.id);
            let paySymbols = this.game.symbols.filter((s) => {
                return payIds.includes(s.id);
            });
            if (paySymbols.length == 0) {
                throw new Error("slot rabbit no pay symbol config");
            }
            return { symbols: this.generator.generateSymbols(paySymbols) };
        }
        else {
            return this.generator.generateGameSymbols();
        }
    }
}
exports.RabbitGenerator = RabbitGenerator;
