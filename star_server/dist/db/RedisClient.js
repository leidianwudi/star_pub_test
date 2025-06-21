"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedisClient = void 0;
const ioredis_1 = require("ioredis");
class RedisClient {
    constructor(options) {
        this.client = new ioredis_1.Redis(options);
    }
    static async createClient(options) {
        RedisClient.instance = new RedisClient({ ...options, lazyConnect: true });
        RedisClient.instance.client.on('error', (err) => {
            console.log('Redis error: ' + err);
        });
        await RedisClient.instance.client.connect();
    }
    static getInstance() {
        return RedisClient.instance;
    }
    async set(key, value) {
        await this.client.set(key, value);
    }
    async setEX(key, value, seconds) {
        await this.client.set(key, value, "EX", seconds);
    }
    async get(key) {
        return await this.client.get(key);
    }
    async del(key) {
        return await this.client.del(key);
    }
}
exports.RedisClient = RedisClient;
