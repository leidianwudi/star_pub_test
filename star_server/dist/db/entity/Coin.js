"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Coin = exports.COIN_PRECISION = exports.COIN_SCALE = void 0;
const bignumber_js_1 = __importDefault(require("bignumber.js"));
exports.COIN_SCALE = 4;
exports.COIN_PRECISION = 10;
const BN = bignumber_js_1.default.clone({ DECIMAL_PLACES: exports.COIN_SCALE });
class Coin {
    constructor(value) {
        this.value = new BN(value);
    }
    add(value) {
        if (value instanceof Coin) {
            return new Coin(this.value.plus(value.value));
        }
        else {
            return new Coin(this.value.plus(value));
        }
    }
    sub(value) {
        if (value instanceof Coin) {
            return new Coin(this.value.minus(value.value));
        }
        else {
            return new Coin(this.value.minus(value));
        }
    }
    multiply(value) {
        return new Coin(this.value.multipliedBy(value));
    }
    div(value) {
        return new Coin(this.value.div(value));
    }
    negated() {
        return new Coin(this.value.negated());
    }
    toString() {
        return this.value.toFixed(exports.COIN_SCALE);
    }
    toNumber() {
        return this.value.toNumber();
    }
    isInteger() {
        return this.value.isInteger();
    }
    getValue() {
        return this.value;
    }
    isGreaterThan(value) {
        if (value instanceof Coin) {
            return this.value.isGreaterThan(value.value);
        }
        else {
            return this.value.isGreaterThan(value);
        }
    }
    isLessThanOrEqualTo(value) {
        if (value instanceof Coin) {
            return this.value.isLessThanOrEqualTo(value.value);
        }
        else {
            return this.value.isLessThanOrEqualTo(value);
        }
    }
    isLessThan(value) {
        if (value instanceof Coin) {
            return this.value.isLessThan(value.value);
        }
        else {
            return this.value.isLessThan(value);
        }
    }
    isEqualTo(value) {
        if (value instanceof Coin) {
            return this.value.isEqualTo(value.value);
        }
        else {
            return this.value.isEqualTo(value);
        }
    }
}
exports.Coin = Coin;
