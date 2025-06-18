"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DataSource_1 = require("../db/DataSource");
const Task_1 = require("../db/entity/Task");
const TaskService_1 = require("../rule/TaskService");
describe("task", () => {
    const manager = DataSource_1.AppDataSource.manager;
    it("createTask", async () => {
        const taskRepo = manager.getRepository(Task_1.Task);
        let r = await taskRepo.insert({ uid: "22", taskType: Task_1.TaskType.SPIN_COUNT });
        console.log("inserted task id:", r.identifiers[0].id);
        {
            const superTaskRepo = manager.getRepository(Task_1.SuperTask);
            let r = await superTaskRepo.insert({ uid: "22", taskType: Task_1.TaskType.SPIN_COUNT });
            console.log("inserted super task id:", r.identifiers[0].id);
        }
    });
    it("playSlotsGame", async () => {
        await TaskService_1.taskSystem.playSlotsGame("22", "demo", 1000, 2000);
    });
});
