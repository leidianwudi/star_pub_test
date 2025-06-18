"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameTimer = void 0;
class GameTimer {
    constructor() {
        this.statusTime = 0;
        this.timeMng = []; //计时器管理器
    }
    /**
     * 删除定时器
     * @param timerID
     */
    killGameTimer(timerID) {
        for (var i = 0; i < this.timeMng.length; ++i) {
            if (this.timeMng[i].key == timerID) {
                clearTimeout(this.timeMng[i].value);
                this.timeMng.splice(i, 1);
                break;
            }
        }
    }
    /**
    *清除所有定时器
     */
    clearAllTimer() {
        for (let i = 0; i < this.timeMng.length; ++i) {
            clearTimeout(this.timeMng[i].value);
        }
        this.timeMng.length = 0;
    }
    /**
     * 游戏定时器
     * @param func 回调函数
     * @param timerID 计时器ID
     * @param time 时间
     * @param args
     */
    setGameTimer(func, timerID, time, args) {
        var that = this;
        var args = null;
        if (arguments.length > 3)
            args = Array.prototype.slice.call(arguments, 3); //貌似性能不好？
        this.killGameTimer(timerID);
        var timer = setTimeout(function () {
            for (var i = 0; i < that.timeMng.length; ++i) {
                if (that.timeMng[i].value == timer) {
                    that.timeMng.splice(i, 1);
                    break;
                }
            }
            func.apply(that, args);
        }, time * 1000);
        that.timeMng.push({ key: timerID, value: timer });
        this.recordTimeTick();
    }
    /**
  * 记录定时器启动的那一时刻,场景还原你可能需要用到
  */
    recordTimeTick() {
        this.statusTime = Date.now() / 1000;
    }
    ;
}
exports.GameTimer = GameTimer;
