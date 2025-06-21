"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RandomIndex = void 0;
//生成2维数组的随机下标
class RandomIndex {
    //构造函数，输入最大值，最小值, [minRow, maxRow], [minCol, maxCol]
    constructor(maxRow, maxCol, minRow = 0, minCol = 0) {
        this.maxRow = maxRow;
        this.maxCol = maxCol;
        this.minRow = minRow;
        this.minCol = minCol;
        this.usedIndices = new Set();
        this.validateRange();
    }
    validateRange() {
        if (this.minRow > this.maxRow || this.minCol > this.maxCol) {
            throw new Error('最小值不能大于最大值');
        }
        const totalPossibleIndices = (this.maxRow - this.minRow + 1) * (this.maxCol - this.minCol + 1);
        if (totalPossibleIndices <= 0) {
            throw new Error('没有有效的索引范围');
        }
    }
    /**
     * 生成一个唯一的随机下标，返回数据先行后列
     * @returns 包含行和列的元组，如果无法生成更多唯一下标则返回 undefined
     */
    generate() {
        const totalPossibleIndices = (this.maxRow - this.minRow + 1) * (this.maxCol - this.minCol + 1);
        if (this.usedIndices.size >= totalPossibleIndices) {
            return undefined; // 所有可能的索引都已使用
        }
        const maxAttempts = 1000;
        let attempts = 0;
        while (attempts < maxAttempts) {
            const row = this.getRandomInt(this.minRow, this.maxRow);
            const col = this.getRandomInt(this.minCol, this.maxCol);
            const key = `${row},${col}`;
            if (!this.usedIndices.has(key)) {
                this.usedIndices.add(key);
                return [row, col];
            }
            attempts++;
        }
        // 如果尝试多次仍无法生成唯一索引，尝试遍历所有可能的索引
        return this.findUnusedIndex();
    }
    /**
     * 生成指定数量的唯一随机下标，返回数据先行后列
     * @param count - 需要生成的下标数量
     * @returns 包含行和列的元组数组
     */
    generateMultiple(count) {
        const result = [];
        for (let i = 0; i < count; i++) {
            const index = this.generate();
            if (index) {
                result.push(index);
            }
            else {
                break; // 无法生成更多唯一索引
            }
        }
        return result;
    }
    /**
     * 重置已使用的索引记录
     */
    reset() {
        this.usedIndices.clear();
    }
    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    findUnusedIndex() {
        for (let row = this.minRow; row <= this.maxRow; row++) {
            for (let col = this.minCol; col <= this.maxCol; col++) {
                const key = `${row},${col}`;
                if (!this.usedIndices.has(key)) {
                    this.usedIndices.add(key);
                    return [row, col];
                }
            }
        }
        return undefined;
    }
}
exports.RandomIndex = RandomIndex;
