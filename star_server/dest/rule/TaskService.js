"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskSystem = exports.TaskService = void 0;
const User_1 = require("../db/entity/User");
const BettingLog_1 = require("../db/entity/BettingLog");
const UserDayStatistic_1 = require("../db/entity/UserDayStatistic");
const Task_1 = require("../db/entity/Task");
const DataSource_1 = require("../db/DataSource");
const typeorm_1 = require("typeorm");
const RuleSystem_1 = require("./RuleSystem");
class TaskService {
    constructor() {
    }
    async playSlotsGame(uid, gameId, bet, winCoins) {
        //第一个事务，重要的操作
        let r = await this.updateTotalBet(uid, bet, winCoins);
        if (!r) {
            console.error("update user total_bet&win_coins fail");
            return false;
        }
        //第二个事务
        await DataSource_1.AppDataSource.transaction(async (manager) => {
            //insert下注记录
            const bettingLogRepo = manager.getRepository(BettingLog_1.BettingLog);
            await bettingLogRepo.insert({ uid: uid, gameId: gameId, bet: bet, winCoins: winCoins });
            let statId = await this.updateDayStat(uid, bet, winCoins, manager);
            await RuleSystem_1.ruleSystem.runRule(RuleSystem_1.RuleId.MULTIPLIER, { srcId: statId, dstId: uid, manager: manager });
            //今天要完成的任务配置
            const todayTasksConfig = [Task_1.TaskType.TOTAL_BET, Task_1.TaskType.WIN_COIN, Task_1.TaskType.SPIN_COUNT];
            let taskThresholds = new Map();
            taskThresholds.set(Task_1.TaskType.TOTAL_BET, 1000);
            taskThresholds.set(Task_1.TaskType.BIG_WIN_COUNT, 4);
            taskThresholds.set(Task_1.TaskType.LEVEL_UP, 2);
            taskThresholds.set(Task_1.TaskType.SPIN_COUNT, 100);
            taskThresholds.set(Task_1.TaskType.WIN_COIN, 100000);
            const taskRepo = manager.getRepository(Task_1.Task);
            let tasks = await this.getTasks(uid, taskRepo);
            console.log("tasks:", tasks);
            if (tasks.length == 0) {
                console.warn("User has no tasks, uid:", uid);
            }
            //今天未完成的任务
            let task = tasks.find((t) => !t.isDone);
            if (task) {
                await this.updateTaskBet(task, taskRepo, bet, winCoins);
                await RuleSystem_1.ruleSystem.runRule(RuleSystem_1.RuleId.TASK_DONE, { srcId: task.id, dstId: task.id, manager: manager });
                let t = await taskRepo.findOneBy({ id: task.id });
                if (t && t.isDone) {
                    let nextTaskType = await this.nextTaskType(tasks);
                    if (nextTaskType) {
                        await this.createTask(nextTaskType, uid, taskRepo);
                    }
                }
            }
            else if (tasks.length != todayTasksConfig.length) {
                console.warn("All tasks of the user have been completed, but the number of tasks is insufficient. uid:", uid);
                //程序可能存在bug， 是否需要在此创建新任务？
            }
            const superTaskRepo = manager.getRepository(Task_1.SuperTask);
            //未完成的超级任务
            let superTask = await superTaskRepo.findOne({ where: { uid: uid, isDone: false } });
            if (superTask) {
                await this.updateTaskBet(superTask, superTaskRepo, bet, winCoins);
                await RuleSystem_1.ruleSystem.runRule(RuleSystem_1.RuleId.SUPER_TASK_DONE, { srcId: superTask.id, dstId: superTask.id, manager: manager });
                let t = await superTaskRepo.findOneBy({ id: superTask.id });
                if (t && t.isDone) {
                    let nextTaskType = await this.nextSuperTaskType(superTask.taskType);
                    await this.createTask(nextTaskType, uid, superTaskRepo);
                }
            }
        });
        return true;
    }
    //下一个普通任务类型
    async nextTaskType(tasks) {
        //今天要完成的任务配置
        const todayTasksConfig = [Task_1.TaskType.TOTAL_BET, Task_1.TaskType.WIN_COIN, Task_1.TaskType.SPIN_COUNT];
        if (tasks.length < todayTasksConfig.length) {
            return todayTasksConfig[tasks.length];
        }
        return undefined;
    }
    //下一个超级任务类型
    async nextSuperTaskType(currentTaskType) {
        let allTaskTypes = [Task_1.TaskType.BIG_WIN_COUNT, Task_1.TaskType.LEVEL_UP, Task_1.TaskType.SPIN_COUNT, Task_1.TaskType.WIN_COIN, Task_1.TaskType.TOTAL_BET];
        let nextTaskType = allTaskTypes[Math.floor(Math.random() * allTaskTypes.length)];
        return nextTaskType;
    }
    async createTask(taskType, uid, taskRepo) {
        await taskRepo.insert({ taskType: taskType, uid: uid, isDone: false });
    }
    async getTasks(uid, taskRepo) {
        let begin = new Date();
        begin.setHours(0, 0, 0, 0);
        let end = new Date(begin);
        end.setDate(begin.getDate() + 1);
        //找出用户今天的所有任务
        let options = {
            uid: uid,
            createTime: (0, typeorm_1.Raw)((alias) => `${alias} between :begin and :end`, { begin: this.toDatetimeParameter(begin), end: this.toDatetimeParameter(end) })
        };
        let tasks = await taskRepo.find({ where: options });
        return tasks;
    }
    //修改此用户今天的下注总额
    async updateDayStat(uid, bet, winCoins, manager) {
        //TODO 加锁
        let statId;
        const dayStatRepo = manager.getRepository(UserDayStatistic_1.UserDayStatistic);
        let now = new Date();
        let raw = (0, typeorm_1.Raw)((alias) => `${alias} = :today`, { today: this.toDateParameter(now) });
        const stat = await dayStatRepo.findOne({ where: { uid: uid, date: raw } });
        if (!stat) {
            let r = await dayStatRepo.insert({ uid: uid, date: new Date(), totalBet: bet });
            statId = r.identifiers[0].id;
            console.log("inserted stat id:", statId);
        }
        else {
            await dayStatRepo.update({ id: stat.id }, { totalBet: stat.totalBet + bet });
            statId = stat.id;
        }
        return statId;
    }
    async updateTaskBet(task, taskRepo, bet, winCoins, levelIsUp) {
        console.log("update task|super task bet, task id:", task.id, " bet:", bet, " win coins:", winCoins);
        if (task.taskType === Task_1.TaskType.TOTAL_BET) {
            await taskRepo.update({ id: task.id }, { totalBet: task.totalBet + bet });
        }
        else if (task.taskType === Task_1.TaskType.WIN_COIN) {
            await taskRepo.update({ id: task.id }, { winCoins: task.winCoins + winCoins });
        }
        else if (task.taskType === Task_1.TaskType.SPIN_COUNT) {
            await taskRepo.update({ id: task.id }, { spinCount: task.spinCount + 1 });
        }
        else if (Task_1.TaskType.BIG_WIN_COUNT) {
            //TODO read 10000 from config table, 判断是否中大奖
            if (winCoins > 10000) {
                await taskRepo.update({ id: task.id }, { bigWinCount: task.bigWinCount + 1 });
            }
        }
        else if (Task_1.TaskType.LEVEL_UP) {
            if (levelIsUp) {
                await taskRepo.update({ id: task.id }, { levelUp: task.levelUp + 1 });
            }
        }
    }
    //更新用户表， 总投注额和金币字段
    async updateTotalBet(uid, bet, winCoins) {
        console.log("update user bet:", uid, bet, winCoins);
        let r = await DataSource_1.AppDataSource.transaction(async (manager) => {
            const userRepository = manager.getRepository(User_1.User);
            //todo 加独占锁
            const user = await userRepository.findOneBy({ id: uid });
            if (!user) {
                return false;
            }
            let totalBet = user.totalBet + bet;
            let coin = user.coin.add(winCoins);
            await userRepository.update({ totalBet: totalBet, coin: coin }, { id: uid });
            return true;
        });
        return r;
    }
    toDateParameter(date) {
        let t = this.toDatetimeParameter(date);
        return t.split("T")[0];
    }
    toDatetimeParameter(date) {
        var tzoffset = date.getTimezoneOffset() * 60000; //offset in milliseconds
        Date.now();
        var localISOTime = (new Date(date.getTime() - tzoffset)).toISOString().slice(0, -1);
        return localISOTime;
    }
}
exports.TaskService = TaskService;
exports.taskSystem = new TaskService();
