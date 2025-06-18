"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RuleAction = exports.RuleRound = void 0;
var RuleRound;
(function (RuleRound) {
    RuleRound["Preflop_Blinds"] = "blinds";
    //预翻牌
    RuleRound["Preflop"] = "pre_flop";
    //翻牌后
    RuleRound["Flop"] = "flop";
    RuleRound["Turn"] = "turn";
    RuleRound["River"] = "river";
})(RuleRound || (exports.RuleRound = RuleRound = {}));
var RuleAction;
(function (RuleAction) {
    RuleAction["Bet"] = "bet";
    RuleAction["Call"] = "call";
    RuleAction["Raise"] = "raise";
    RuleAction["AllIn"] = "allin";
    RuleAction["Check"] = "check";
    RuleAction["Fold"] = "fold";
    RuleAction["CallOrCheck"] = "call_or_check";
    RuleAction["BetOrRaise"] = "bet_or_raise";
})(RuleAction || (exports.RuleAction = RuleAction = {}));
