"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.delay = delay;
function delay(d) {
    return new Promise(resolve => setTimeout(resolve, d));
}
