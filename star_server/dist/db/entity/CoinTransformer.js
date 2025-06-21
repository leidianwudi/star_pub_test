"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoinTransformer = void 0;
const Coin_1 = require("./Coin");
class CoinTransformer {
    /**
     * Used to marshal Decimal when writing to the database.
     */
    to(decimal) {
        return decimal ? decimal.toString() : undefined;
    }
    /**
     * Used to unmarshal Decimal when reading from the database.
     */
    from(decimal) {
        return new Coin_1.Coin(decimal);
    }
}
exports.CoinTransformer = CoinTransformer;
