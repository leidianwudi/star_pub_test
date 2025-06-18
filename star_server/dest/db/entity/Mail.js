"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mail = exports.MailState = void 0;
const typeorm_1 = require("typeorm");
var MailState;
(function (MailState) {
    MailState["UNREAD"] = "unread";
    MailState["READED"] = "readed";
    MailState["DELETED"] = "deleted";
})(MailState || (exports.MailState = MailState = {}));
let Mail = class Mail {
    get timestamp() {
        return this.time.getTime() / 1000;
    }
};
exports.Mail = Mail;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "bigint" }),
    __metadata("design:type", String)
], Mail.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Mail.prototype, "uid", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Mail.prototype, "from", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "datetime" }),
    __metadata("design:type", Date)
], Mail.prototype, "time", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Mail.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Mail.prototype, "content", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "enum", enum: MailState, default: MailState.UNREAD }),
    __metadata("design:type", String)
], Mail.prototype, "state", void 0);
exports.Mail = Mail = __decorate([
    (0, typeorm_1.Entity)()
], Mail);
