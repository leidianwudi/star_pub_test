"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodeInterceptor = void 0;
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
let CodeInterceptor = class CodeInterceptor {
    constructor() {
        this.logger = new common_1.Logger('CodeInterceptor');
    }
    intercept(context, next) {
        const request = context.switchToHttp().getRequest();
        const response = context.switchToHttp().getResponse();
        const statusCode = response.statusCode;
        return next.handle().pipe((0, operators_1.map)(data => {
            let msg = statusCode >= 400 ? 'Error' : 'Success';
            if (data && data.message) {
                msg = data.message;
            }
            return {
                code: statusCode,
                msg: msg,
                error: statusCode >= 400 ? msg : null,
                data,
            };
        }), (0, operators_1.catchError)((err) => {
            this.logger.error(`CodeInterceptor caught error (raw): ${err.stack || err}`);
            let statusCode = 500;
            let message = 'Internal server error';
            let errorName = 'Error';
            let detailedErrors = {};
            if (err instanceof common_1.HttpException) {
                statusCode = err.getStatus();
                const originalResponse = err.getResponse();
                this.logger.verbose(`Original HttpException response: ${JSON.stringify(originalResponse)}`);
                if (typeof originalResponse === 'string') {
                    message = originalResponse;
                }
                else if (typeof originalResponse === 'object' && originalResponse !== null) {
                    message = originalResponse.message || err.message;
                    errorName = originalResponse.error || err.name;
                    if (Array.isArray(originalResponse.message)) {
                        this.logger.warn('Detailed validation errors found:', originalResponse.message);
                        detailedErrors = { validationErrors: originalResponse.message };
                    }
                }
                else {
                    message = err.message;
                }
                errorName = err.name;
            }
            else if (err instanceof Error) {
                message = err.message;
                errorName = err.name;
            }
            const errorResponse = {
                statusCode,
                message,
                error: errorName,
                timestamp: Date.now(),
                version: 'v2',
                data: Object.keys(detailedErrors).length > 0 ? detailedErrors : {},
            };
            this.logger.error(`Responding with error: ${JSON.stringify(errorResponse)}`);
            return (0, rxjs_1.throwError)(() => new common_1.HttpException(errorResponse, statusCode));
        }));
    }
};
exports.CodeInterceptor = CodeInterceptor;
exports.CodeInterceptor = CodeInterceptor = __decorate([
    (0, common_1.Injectable)()
], CodeInterceptor);
//# sourceMappingURL=code.interceptor.js.map