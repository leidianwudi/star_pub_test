"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiGetBasicConfig = ApiGetBasicConfig;
const BasicConfig_1 = require("../../configs/BasicConfig");
async function ApiGetBasicConfig(call) {
    call.succ(BasicConfig_1.basicConfig);
}
