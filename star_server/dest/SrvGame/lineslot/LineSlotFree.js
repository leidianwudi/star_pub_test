"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LineSlotFree = void 0;
//有一定概率获得免费次数
class LineSlotFree {
    constructor(game, isLucky) {
        this.game = game;
        this.isLucky = isLucky;
    }
    pay(bet, genResult, verifyRes, pay) {
        if (!pay) {
            throw new Error("pay is null");
        }
        let game = this.game;
        let freeCount = 0;
        if (game.free) {
            if (Math.random() * 100 < game.free.probability) {
                console.log("get free count:", game.free.count);
                freeCount += game.free.count;
            }
        }
        if (this.isLucky && game.lucky && game.lucky.rabbit) {
            freeCount += game.lucky.rabbit.freeCount;
        }
        if (this.isLucky && game.lucky && game.lucky.dragon) {
            freeCount += game.lucky.dragon.freeCount;
        }
        if (freeCount > 0) {
            if (pay.freeCount) {
                pay.freeCount += freeCount;
            }
            else {
                pay.freeCount = freeCount;
            }
        }
        return pay;
    }
}
exports.LineSlotFree = LineSlotFree;
