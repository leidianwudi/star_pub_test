"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DBRule = exports.ActionOperator = exports.ConditionOperator = void 0;
var ConditionOperator;
(function (ConditionOperator) {
    ConditionOperator["GREATER_THAN"] = ">";
    ConditionOperator["LESS_THAN"] = "<";
    ConditionOperator["EQUAL"] = "==";
    ConditionOperator["GREATER_THAN_OR_EQUAL"] = ">=";
    ConditionOperator["LESS_THAN_OR_EQUAL"] = "<=";
})(ConditionOperator || (exports.ConditionOperator = ConditionOperator = {}));
var ActionOperator;
(function (ActionOperator) {
    ActionOperator["ASSIGN"] = "=";
    ActionOperator["ADD_ASSIGN"] = "+=";
})(ActionOperator || (exports.ActionOperator = ActionOperator = {}));
const rules = [
    {
        id: "userT.total_bet:userT.max_bet_one_time",
        desc: "根据投注总量变更单次最大投注额",
        statements: [
            {
                precondition: {
                    left: "userT.total_bet",
                    right: "10000000",
                    operator: ConditionOperator.GREATER_THAN,
                },
                action: {
                    left: "userT.max_bet_one_time",
                    right: "450000",
                    operator: ActionOperator.ASSIGN,
                }
            }
        ],
    },
    {
        id: "user_day_statisticT.total_bet:userT.multiplier",
        desc: "根据投注总量变更乘数",
        statements: [
            {
                precondition: {
                    left: "user_day_statisticT.total_bet",
                    right: "10000",
                    operator: ConditionOperator.GREATER_THAN,
                },
                action: {
                    left: "userT.multiplier",
                    right: "2",
                    operator: ActionOperator.ASSIGN,
                },
            },
            {
                precondition: {
                    left: "user_day_statisticT.total_bet",
                    right: "20000",
                    operator: ConditionOperator.GREATER_THAN,
                },
                action: {
                    left: "userT.multiplier",
                    right: "3",
                    operator: ActionOperator.ASSIGN,
                }
            },
            {
                precondition: {
                    left: "user_day_statisticT.total_bet",
                    right: "30000",
                    operator: ConditionOperator.GREATER_THAN,
                },
                action: {
                    left: "userT.multiplier",
                    right: "4",
                    operator: ActionOperator.ASSIGN,
                }
            },
        ]
    },
    {
        id: "taskT.is_done",
        desc: "根据用户统计数据判断任务是否完成",
        statements: [
            {
                precondition: {
                    left: "taskT.spin_count",
                    right: "4",
                    operator: ConditionOperator.GREATER_THAN,
                },
                action: {
                    left: "taskT.is_done",
                    right: "1",
                    operator: ActionOperator.ASSIGN,
                }
            },
            {
                precondition: {
                    left: "taskT.total_bet",
                    right: "100000",
                    operator: ConditionOperator.GREATER_THAN,
                },
                action: {
                    left: "taskT.is_done",
                    right: "1",
                    operator: ActionOperator.ASSIGN,
                }
            },
            {
                precondition: {
                    left: "taskT.level_up",
                    right: "5",
                    operator: ConditionOperator.GREATER_THAN,
                },
                action: {
                    left: "taskT.is_done",
                    right: "1",
                    operator: ActionOperator.ASSIGN,
                }
            },
            {
                precondition: {
                    left: "taskT.win_coins",
                    right: "100000",
                    operator: ConditionOperator.GREATER_THAN,
                },
                action: {
                    left: "taskT.is_done",
                    right: "1",
                    operator: ActionOperator.ASSIGN,
                }
            },
            {
                precondition: {
                    left: "taskT.big_win_count",
                    right: "5",
                    operator: ConditionOperator.GREATER_THAN,
                },
                action: {
                    left: "taskT.is_done",
                    right: "1",
                    operator: ActionOperator.ASSIGN,
                }
            },
        ]
    },
    {
        id: "super_taskT.is_done",
        desc: "根据用户统计数据判断任务是否完成",
        statements: [
            {
                precondition: {
                    left: "super_taskT.spin_count",
                    right: "20",
                    operator: ConditionOperator.GREATER_THAN,
                },
                action: {
                    left: "super_taskT.is_done",
                    right: "1",
                    operator: ActionOperator.ASSIGN,
                }
            },
            {
                precondition: {
                    left: "super_taskT.total_bet",
                    right: "100000",
                    operator: ConditionOperator.GREATER_THAN,
                },
                action: {
                    left: "super_taskT.is_done",
                    right: "1",
                    operator: ActionOperator.ASSIGN,
                }
            },
            {
                precondition: {
                    left: "super_taskT.level_up",
                    right: "5",
                    operator: ConditionOperator.GREATER_THAN,
                },
                action: {
                    left: "super_taskT.is_done",
                    right: "1",
                    operator: ActionOperator.ASSIGN,
                }
            },
            {
                precondition: {
                    left: "super_taskT.win_coins",
                    right: "100000",
                    operator: ConditionOperator.GREATER_THAN,
                },
                action: {
                    left: "super_taskT.is_done",
                    right: "1",
                    operator: ActionOperator.ASSIGN,
                }
            },
            {
                precondition: {
                    left: "super_taskT.big_win_count",
                    right: "5",
                    operator: ConditionOperator.GREATER_THAN,
                },
                action: {
                    left: "super_taskT.is_done",
                    right: "1",
                    operator: ActionOperator.ASSIGN,
                }
            },
        ]
    }
];
class DBRule {
    async getRule(rule_id) {
        return rules.find(rule => rule.id === rule_id);
    }
}
exports.DBRule = DBRule;
