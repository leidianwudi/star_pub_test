"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ruleSystem = exports.RuleSystem = exports.RuleId = void 0;
const typeorm_1 = require("typeorm");
const DBMgr_1 = require("../db/DBMgr");
const DBRule_1 = require("../db/DBRule");
const DataSource_1 = require("../db/DataSource");
const Operand_1 = require("./Operand");
var RuleId;
(function (RuleId) {
    RuleId["MAX_BET_ONE_TIME"] = "userT.total_bet:userT.max_bet_one_time";
    RuleId["MULTIPLIER"] = "user_day_statisticT.total_bet:userT.multiplier";
    RuleId["TASK_DONE"] = "taskT.is_done";
    RuleId["SUPER_TASK_DONE"] = "super_taskT.is_done";
})(RuleId || (exports.RuleId = RuleId = {}));
class RuleSystem {
    async runRule(ruleId, context) {
        const rule = await DBMgr_1.dbRule.getRule(ruleId);
        if (!rule) {
            return false;
        }
        for (let i = rule.statements.length - 1; i >= 0; i--) {
            const statement = rule.statements[i];
            const pass = await this.checkCondition(statement.precondition, context);
            if (pass) {
                await this.executeAction(statement.action, context);
                break;
            }
        }
        return true;
    }
    async checkCondition(condition, context) {
        let left = Operand_1.Operand.fromSymbol(condition.left);
        let right = Operand_1.Operand.fromSymbol(condition.right);
        let leftValue = await this.getOperandValue(left, context, context.srcId);
        let rightValue = await this.getOperandValue(right, context, context.srcId);
        console.log("check condition: ", leftValue, condition.operator, rightValue);
        switch (condition.operator) {
            case DBRule_1.ConditionOperator.GREATER_THAN:
                return leftValue > rightValue;
            case DBRule_1.ConditionOperator.LESS_THAN:
                return leftValue < rightValue;
            case DBRule_1.ConditionOperator.EQUAL:
                return leftValue === rightValue;
            case DBRule_1.ConditionOperator.GREATER_THAN_OR_EQUAL:
                return leftValue >= rightValue;
            case DBRule_1.ConditionOperator.LESS_THAN_OR_EQUAL:
                return leftValue <= rightValue;
        }
        return false;
    }
    async executeAction(action, context) {
        let left = Operand_1.Operand.fromSymbol(action.left);
        let right = Operand_1.Operand.fromSymbol(action.right);
        let leftValue = await this.getOperandValue(left, context, context.dstId);
        let rightValue = await this.getOperandValue(right, context, context.dstId);
        console.log("execute action: ", leftValue, action.operator, rightValue);
        switch (action.operator) {
            case DBRule_1.ActionOperator.ASSIGN:
                await this.setTableField(left.table, left.column, context.dstId, rightValue, context.manager || DataSource_1.AppDataSource.manager);
                break;
            case DBRule_1.ActionOperator.ADD_ASSIGN:
                {
                    let v = leftValue + rightValue;
                    await this.setTableField(left.table, left.column, context.dstId, v, context.manager || DataSource_1.AppDataSource.manager);
                }
                break;
        }
    }
    async getOperandValue(operand, context, objId) {
        let value = undefined;
        if (operand.type === Operand_1.OperandType.CONSTANT) {
            value = operand.value;
        }
        else if (operand.type === Operand_1.OperandType.SESSION_VARIABLE) {
            if (context[operand.name] === undefined) {
                throw new Error("invalid session variable");
            }
            value = context[operand.name];
        }
        else if (operand.type === Operand_1.OperandType.DB_FIELD) {
            value = await this.getTableFieldValue(operand.table, operand.column, objId, context.manager || DataSource_1.AppDataSource.manager);
        }
        if (typeof value === "string") {
            value = parseFloat(value);
        }
        if (typeof value != "number" && typeof value != "boolean") {
            throw new Error("invalid operand value");
        }
        return value;
    }
    getTableRepo(table) {
        let manager = DataSource_1.AppDataSource.manager;
        let metadata = (0, typeorm_1.getMetadataArgsStorage)();
        let tableMeta = metadata.tables.find((t) => {
            let tableName = manager.getRepository(t.target).metadata.tableName;
            return (tableName == table || tableName + "T" == table);
        });
        if (!tableMeta) {
            throw new Error("invalid table name:" + table);
        }
        let repo = manager.getRepository(tableMeta.target);
        if (!repo) {
            throw new Error("invalid table name:" + table);
        }
        return repo;
    }
    async getTableFieldValue(table, column, id, manager) {
        let repo = this.getTableRepo(table);
        let entityTarget = repo.target;
        let metadata = (0, typeorm_1.getMetadataArgsStorage)();
        let tableMeta = metadata.columns.filter(column => column.target === entityTarget);
        let tableName = manager.getRepository(entityTarget).metadata.tableName;
        let property = column;
        let columnMeta = tableMeta.find(meta => meta.options.name == column || meta.propertyName === column);
        if (columnMeta) {
            property = columnMeta.options.name || columnMeta.propertyName;
        }
        //query result is an array
        let r = await manager.query(`SELECT ${property} FROM ${tableName} WHERE id = ?`, [id]);
        if (!r || r.length == 0) {
            throw new Error("Can't get entity with id:" + id);
        }
        r = r[0];
        if (!r.hasOwnProperty(property)) {
            throw new Error("invalid column name:" + column);
        }
        return r[property];
    }
    async setTableField(table, column, id, value, manager) {
        let repo = this.getTableRepo(table);
        let entityTarget = repo.target;
        let metadata = (0, typeorm_1.getMetadataArgsStorage)();
        let tableMeta = metadata.columns.filter(column => column.target === entityTarget);
        let property = tableMeta.find(meta => meta.options.name == column || meta.propertyName === column);
        let columnName = property ? (property.options.name || property.propertyName) : column;
        let tableName = manager.getRepository(entityTarget).metadata.tableName;
        await manager.query(`UPDATE ${tableName} SET ${columnName} = ? WHERE id = ?`, [value, id]);
        // {
        //     fieldCount: 0,
        //     affectedRows: 1,
        //     insertId: 0,
        //     info: 'Rows matched: 1  Changed: 0  Warnings: 0',
        //     serverStatus: 2,
        //     warningStatus: 0,
        //     changedRows: 0
        //   }
        return true;
    }
}
exports.RuleSystem = RuleSystem;
exports.ruleSystem = new RuleSystem();
