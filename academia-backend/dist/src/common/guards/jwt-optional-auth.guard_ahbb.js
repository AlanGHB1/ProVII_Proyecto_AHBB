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
exports.JwtOptionalAuthGuard_ahbb = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
let JwtOptionalAuthGuard_ahbb = class JwtOptionalAuthGuard_ahbb {
    jwtService_ahbb;
    constructor(jwtService_ahbb) {
        this.jwtService_ahbb = jwtService_ahbb;
    }
    async canActivate(context_ahbb) {
        const request_ahbb = context_ahbb.switchToHttp().getRequest();
        const authorization_ahbb = request_ahbb.headers.authorization;
        if (!authorization_ahbb?.startsWith('Bearer ')) {
            return true;
        }
        const token_ahbb = authorization_ahbb.replace('Bearer ', '').trim();
        if (!token_ahbb) {
            return true;
        }
        try {
            const payload_ahbb = await this.jwtService_ahbb.verifyAsync(token_ahbb);
            request_ahbb.usuario_ahbb = payload_ahbb;
        }
        catch {
            request_ahbb.usuario_ahbb = undefined;
        }
        return true;
    }
};
exports.JwtOptionalAuthGuard_ahbb = JwtOptionalAuthGuard_ahbb;
exports.JwtOptionalAuthGuard_ahbb = JwtOptionalAuthGuard_ahbb = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService])
], JwtOptionalAuthGuard_ahbb);
//# sourceMappingURL=jwt-optional-auth.guard_ahbb.js.map