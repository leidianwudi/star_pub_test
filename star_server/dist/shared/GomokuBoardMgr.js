"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GomokuBoardMgr = void 0;
const GRID_SIZE = 1.25;
const UINT_BITS = 32;
const BITS_PER_GRID = 2;
const GRID_PER_UNIT = Math.floor(UINT_BITS / BITS_PER_GRID);
const tmpV2_0 = { x: 0, y: 0 };
const tmpV2_1 = { x: 0, y: 0 };
const tmpV2_2 = { x: 0, y: 0 };
class GomokuBoardMgr {
    constructor() {
        this._sizeInGrid = 64;
        this._size = this._sizeInGrid * GRID_SIZE;
        this._halfSize = this._size / 2;
        /**
         * @en 1 means black, 2 means white  2bits a grid
         * @zh 格子数据，1 表示黑 2表示白 每个格子占2个比特位
        */
        this._gridData = new Uint32Array(this._sizeInGrid * this._sizeInGrid * BITS_PER_GRID / UINT_BITS);
        /**
         *
         *
         * 分数排行：五子 ·100，活四 80，活三 70，冲四 60，死三 50，活二 40，死二 30，单子 0
         * **/
        this._scoreMap = {
            '5': 100,
            '4': 80,
            '3': 70,
            'B4': 60,
            'B3': 50,
            '2': 40,
            'B2': 30,
        };
    }
    get sizeInGrid() {
        return this._sizeInGrid;
    }
    get gridData() {
        return this._gridData;
    }
    set gridData(v) {
        this._gridData = v;
    }
    getGridData(gridX, gridY) {
        if (gridX < 0 || gridX >= this._sizeInGrid || gridY < 0 || gridY >= this._sizeInGrid) {
            return -1;
        }
        let index = gridY * this._sizeInGrid + gridX;
        let uintIndex = Math.floor(index / GRID_PER_UNIT);
        let bitsIndex = (index % GRID_PER_UNIT) * BITS_PER_GRID;
        let data = this._gridData[uintIndex];
        if (!data) {
            return 0;
        }
        return (data >>> bitsIndex) & 0x3;
    }
    getGridDataByPos(x, y) {
        let grid = this.posToGrid(x, y);
        return this.getGridData(grid.x, grid.y);
    }
    setGrid(gridX, gridY, v) {
        if (!(v == 0 || v == 1 || v == 2)) {
            throw Error('only can be 0, 1 or 2.');
        }
        if (this.getGridData(gridX, gridY) != 0) {
            throw Error('adfsaf');
        }
        let index = gridY * this._sizeInGrid + gridX;
        let uintIndex = Math.floor(index / GRID_PER_UNIT);
        let bitsIndex = (index % GRID_PER_UNIT) * BITS_PER_GRID;
        let data = this._gridData[uintIndex] || 0;
        data = data | (v << bitsIndex);
        this._gridData[uintIndex] = data;
    }
    getNearestGridCenter(x, y) {
        tmpV2_0.x = Math.floor(x / GRID_SIZE + 0.5) * GRID_SIZE;
        tmpV2_0.y = Math.floor(y / GRID_SIZE + 0.5) * GRID_SIZE;
        return tmpV2_0;
    }
    gridToPos(gridX, gridY) {
        tmpV2_1.x = gridX * GRID_SIZE - this._halfSize;
        tmpV2_1.y = gridY * GRID_SIZE - this._halfSize;
        return tmpV2_1;
    }
    posToGrid(x, y) {
        tmpV2_2.x = Math.floor((x + this._halfSize) / GRID_SIZE + 0.5);
        tmpV2_2.y = Math.floor((y + this._halfSize) / GRID_SIZE + 0.5);
        return tmpV2_2;
    }
    reset() {
        this._gridData.fill(0, 0);
    }
    /**
     * @en check whether there is 5 in a line in every direction from the given grid.
     * @zh 从当前格子开始，检查各个方向是否有5子连珠。
     *
    **/
    checkWin(gridX, gridY, v) {
        //check line.
        let fnCheck = (dirX, dirY) => {
            let countInLine = 0;
            for (let i = -4; i <= 4; ++i) {
                let tv = this.getGridData(gridX + i * dirX, gridY + i * dirY);
                if (tv != v) {
                    countInLine = 0;
                }
                else {
                    countInLine++;
                    if (countInLine >= 5) {
                        return true;
                    }
                }
            }
            return false;
        };
        //horizontal
        if (fnCheck(1, 0)) {
            return true;
        }
        //vertical
        if (fnCheck(0, 1)) {
            return true;
        }
        //corner 1
        if (fnCheck(1, 1)) {
            return true;
        }
        //corner 2
        if (fnCheck(1, -1)) {
            return true;
        }
        return false;
    }
    getBestPlaceGrid(v) {
        let fnCheck = (gridX, gridY, dirX, dirY) => {
            let num = 1;
            for (let i = 1; i < 5; ++i) {
                let tv = this.getGridData(gridX + i * dirX, gridY + i * dirY);
                if (tv == v) {
                    num++;
                    if (num == 5) {
                        return this._scoreMap['5'];
                    }
                }
                else {
                    let type = '' + num;
                    if (tv != 0) {
                        type = 'B' + type;
                    }
                    return this._scoreMap[type] || 0;
                }
            }
            return 0;
            ;
        };
        let score = 0;
        let gridX = -1;
        let gridY = -1;
        for (let i = 0; i < this._sizeInGrid; ++i) {
            for (let j = 0; j < this._sizeInGrid; ++j) {
                if (!this.getGridData(i, j)) {
                    for (let m = -1; m <= 1; ++m) {
                        for (let n = -1; n <= 1; ++n) {
                            if (!(m == 0 && n == 0)) {
                                let t = fnCheck(i, j, m, n);
                                if (t > score) {
                                    score = t;
                                    gridX = i;
                                    gridY = j;
                                }
                            }
                        }
                    }
                }
            }
        }
        return {
            score: score,
            gridX: gridX,
            gridY: gridY
        };
    }
}
exports.GomokuBoardMgr = GomokuBoardMgr;
