"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.redisClientFactory = void 0;
const ioredis_1 = require("ioredis");
const config_1 = require("@nestjs/config");
exports.redisClientFactory = {
    provide: 'RedisClient',
    useFactory: (config) => {
        const redis = config.get("redis");
        const redisInstance = new ioredis_1.Redis({
            host: redis.host,
            port: redis.port,
            password: redis.password
        });
        redisInstance.on('error', e => {
            throw new Error(`Redis connection failed: ${e}`);
        });
        return redisInstance;
    },
    inject: [config_1.ConfigService],
};
//# sourceMappingURL=redis.client.js.map