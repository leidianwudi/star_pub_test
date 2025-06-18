"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FishGame = void 0;
class FishGame {
    constructor(game) {
        this.nextId = 0;
        this.game = game;
        this.nextId = 0;
    }
    //获得此类型的鱼对应的金币数量
    getFishScore(fishType) {
        let ft = this.game.fishTypes.find((f) => f.type == fishType);
        return ft ? ft.golds : 0;
    }
    getBulletLevels() {
        return this.game.bulletLevels;
    }
    getBulletLevel(cannonType) {
        return this.game.bulletLevels.find((b) => b.cannonType == cannonType);
    }
    getMaxBulletCount() {
        return this.game.maxBulletCount || Number.MAX_SAFE_INTEGER;
    }
    getMaxFishCount() {
        return this.game.maxFishCount || Number.MAX_SAFE_INTEGER;
    }
    getMaxIdleTime() {
        return this.game.maxIdleTime;
    }
    isFishGroupEnabled() {
        return this.game.fishGroups && this.game.fishGroups.length > 0;
    }
    isBulletTurnAround() {
        return this.game.bulletTurnAround ? true : false;
    }
    //生成鱼群
    generateGroupFish() {
        if (!this.game.fishGroups || this.game.fishGroups.length == 0) {
            return undefined;
        }
        let group = this.game.fishGroups[Math.floor(Math.random() * this.game.fishGroups.length)];
        let fishes = [];
        let startId = "";
        for (let i = 0; i < group.fishTypes.length; i++) {
            this.nextId += 1;
            const fishId = "" + this.nextId;
            let fishType = this.game.fishTypes.find((f) => f.type == group.fishTypes[i]);
            if (!fishType) {
                console.warn("fishType not found", group.fishTypes[i]);
                continue;
            }
            let liveTimestamp = Date.now() + fishType.ttl * 1000;
            let fish = { id: fishId, type: fishType.type, hp: fishType.hp, liveTimestamp: liveTimestamp };
            fishes.push(fish);
            if (i == 0) {
                startId = fishId;
            }
        }
        return { fishes, startId, id: group.groupId };
    }
    generateFish() {
        const fishType = this.game.fishTypes[Math.floor(Math.random() * this.game.fishTypes.length)];
        this.nextId += 1;
        const fishId = "" + this.nextId;
        let liveTimestamp = Date.now() + fishType.ttl * 1000;
        let fish = { id: fishId, type: fishType.type, hp: fishType.hp, liveTimestamp: liveTimestamp };
        return fish;
    }
}
exports.FishGame = FishGame;
