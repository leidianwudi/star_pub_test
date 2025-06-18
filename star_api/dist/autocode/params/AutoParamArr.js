"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutoParamArr = void 0;
const AutoParam_1 = require("./AutoParam");
class AutoParamArr {
}
exports.AutoParamArr = AutoParamArr;
AutoParamArr.list = [
    {
        modelName: "report\\ReportGame",
        tableName: "report_day_game",
        selCols: ["game_code", 'type_code'],
        selColsGap: ['day'],
        joinTable: [
            {
                joinEnClass: 'En_GameBase',
                joinEnClass_Url: 'src/game/gameBase/entities/En_GameBase',
                joinEnClassPro: 'gameBase',
                joinType: AutoParam_1.JoinType.ManyToOne,
                inverseJoinEnClassPro: 'reportDayGame',
                joinColumn: {
                    name: 'game_code',
                    referencedColumnName: 'code'
                }
            },
            {
                joinEnClass: 'En_GameType',
                joinEnClass_Url: 'src/game/gameType/entities/En_GameType',
                joinEnClassPro: 'gameType',
                joinType: AutoParam_1.JoinType.ManyToOne,
                inverseJoinEnClassPro: 'reportDayGame',
                joinColumn: {
                    name: 'type_code',
                    referencedColumnName: 'type_code'
                }
            }
        ],
    },
];
//# sourceMappingURL=AutoParamArr.js.map