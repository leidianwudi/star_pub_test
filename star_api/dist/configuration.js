"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const yaml = require("js-yaml");
const YAML_CONFIG_FILENAME = 'config.yaml';
exports.default = () => {
    return yaml.load((0, fs_1.readFileSync)(YAML_CONFIG_FILENAME, 'utf8'));
};
//# sourceMappingURL=configuration.js.map