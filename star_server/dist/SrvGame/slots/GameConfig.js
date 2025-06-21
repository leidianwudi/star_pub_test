"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EMPTY_SYMBOL_ID = exports.CHOSEN_SYMBOL_ID = void 0;
exports.findSlotSymbol = findSlotSymbol;
exports.findWildSymbol = findWildSymbol;
exports.findLuckSymbol = findLuckSymbol;
exports.getCoordinateIndex = getCoordinateIndex;
//根据id查询symbol配置
function findSlotSymbol(game, id) {
    return game.symbols.find((s) => s.id == id);
}
//查询万能替换符号
function findWildSymbol(game) {
    return game.symbols.find((s) => s.isWild);
}
//查询幸运符号
function findLuckSymbol(game) {
    return game.symbols.find((s) => s.isLucky);
}
//根据行列位置查询symbol在一维数组的下标
function getCoordinateIndex(game, coordinate) {
    let row = coordinate.row;
    let reel = coordinate.reel;
    let index = (row - 1) * game.reels + reel - 1;
    return index;
}
exports.CHOSEN_SYMBOL_ID = "the_chosen";
exports.EMPTY_SYMBOL_ID = "the_empty";
