"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createGameType = createGameType;
exports.parseGameType = parseGameType;
function createGameType(major, minor) {
    if (minor && minor.length > 0) {
        return major + ":" + minor;
    }
    else {
        return major;
    }
}
function parseGameType(gameType) {
    let a = gameType.split(":");
    let r = { major: a[0] };
    if (a.length > 1) {
        r.minor = a[1];
    }
    return r;
}
