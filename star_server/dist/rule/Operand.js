"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Operand = exports.OperandType = void 0;
var OperandType;
(function (OperandType) {
    OperandType["CONSTANT"] = "constant";
    OperandType["SESSION_VARIABLE"] = "session_variable";
    OperandType["DB_FIELD"] = "db_field";
})(OperandType || (exports.OperandType = OperandType = {}));
class Operand {
    static fromConstant(value) {
        let o = new Operand(OperandType.CONSTANT);
        o.value = parseInt(value);
        if (Number.isNaN(o.value)) {
            throw new Error("invalid constant value");
        }
        return o;
    }
    static fromSessionVariable(value) {
        let o = new Operand(OperandType.SESSION_VARIABLE);
        o.name = value;
        return o;
    }
    static fromDBField(value) {
        let o = new Operand(OperandType.DB_FIELD);
        let [t, c] = value.split(".");
        o.table = t;
        o.column = c;
        return o;
    }
    static fromSymbol(value) {
        if (value.startsWith("${")) {
            return Operand.fromSessionVariable(value);
        }
        if (value.includes(".")) {
            return Operand.fromDBField(value);
        }
        return Operand.fromConstant(value);
    }
    constructor(type) {
        this.type = type;
    }
}
exports.Operand = Operand;
