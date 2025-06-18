"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pinballGame = exports.PinballGame = void 0;
const promises_1 = __importDefault(require("node:fs/promises"));
const node_fs_1 = __importDefault(require("node:fs"));
const node_path_1 = __importDefault(require("node:path"));
class PinballGame {
    constructor() {
        this.fileMap = new Map();
        this.fileData = new Map();
        this.zipData = new Map();
        this.multipliers = [];
    }
    handleFile(jsonPath, jsonFiles, fileMap) {
        for (let filename of jsonFiles) {
            const regex = /data_(\d+)/;
            const match = filename.match(regex);
            if (match) {
                let m = parseInt(match[1]);
                if (!this.fileMap.has(m)) {
                    this.fileMap.set(m, []);
                }
                let arr = this.fileMap.get(m);
                arr.push(node_path_1.default.join(jsonPath, filename));
            }
            else {
                console.warn(`文件名: ${filename} not match`);
            }
        }
    }
    async init(jsonPath) {
        console.log("init pinball game, json path:", jsonPath);
        let files = await promises_1.default.readdir(jsonPath);
        let jsonFiles = files.filter((filename) => node_path_1.default.extname(filename) == ".json");
        let zipFiles = files.filter((filename) => node_path_1.default.extname(filename) == ".zip");
        this.handleFile(jsonPath, jsonFiles, this.fileMap);
        this.handleFile(jsonPath, zipFiles, this.fileMap);
        this.multipliers = Array.from(this.fileMap.keys());
        console.log("pinball multipliers:", this.multipliers);
    }
    createPinball() {
        let multipliers = this.multipliers;
        if (multipliers.length <= 0) {
            return undefined;
        }
        let index = Math.floor(Math.random() * multipliers.length);
        let m = multipliers[index];
        let files = this.fileMap.get(m);
        if (files.length == 0) {
            return undefined;
        }
        try {
            let fileIndex = Math.floor(Math.random() * files.length);
            let filename = files[fileIndex];
            let ext = node_path_1.default.extname(filename);
            if (ext == ".json") {
                if (!this.fileData.has(filename)) {
                    let data = node_fs_1.default.readFileSync(filename, "utf-8");
                    this.fileData.set(filename, data);
                }
                let data = this.fileData.get(filename);
                let pinball = { data: data, multiple: m };
                return pinball;
            }
            else if (ext == ".zip") {
                if (!this.zipData.has(filename)) {
                    let data = node_fs_1.default.readFileSync(filename);
                    this.zipData.set(filename, data);
                }
                let data = this.zipData.get(filename);
                let pinball = { zipData: data, multiple: m };
                return pinball;
            }
            else {
                console.warn("invalid file extname:", ext);
                return undefined;
            }
        }
        catch (e) {
            console.warn("read file err:", e);
            return undefined;
        }
    }
}
exports.PinballGame = PinballGame;
exports.pinballGame = new PinballGame();
