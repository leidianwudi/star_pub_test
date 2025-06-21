"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PinballPay = void 0;
const PinballGame_1 = require("./PinballGame");
class PinballPay {
    constructor(game) {
        this.game = game;
    }
    pay(bet, genResult, verifyRes, pay) {
        if (!pay) {
            throw new Error("pay is null");
        }
        let pinball = PinballGame_1.pinballGame.createPinball();
        pay.pinball = pinball;
        if (pinball) {
            let payout = bet.coin.multiply(pinball.multiple);
            console.log("pinball pay:", payout.toString());
            pay.payout = pay.payout.add(payout);
        }
        return pay;
    }
}
exports.PinballPay = PinballPay;
