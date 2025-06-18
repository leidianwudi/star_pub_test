"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clamp = clamp;
function clamp(value, min, max) {
    return min < max
        ? (value < min ? min : value > max ? max : value)
        : (value < max ? max : value > min ? min : value);
}
