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
exports.RolesGuard_ahbb = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const roles_decorator_ahbb_1 = require("../decorators/roles.decorator_ahbb");
let RolesGuard_ahbb = class RolesGuard_ahbb {
    reflector_ahbb;
    constructor(reflector_ahbb) {
        this.reflector_ahbb = reflector_ahbb;
    }
    canActivate(context_ahbb) {
        const rolesPermitidos_ahbb = this.reflector_ahbb.getAllAndOverride(roles_decorator_ahbb_1.ROLES_META_AHBB, [context_ahbb.getHandler(), context_ahbb.getClass()]);
        if (!rolesPermitidos_ahbb?.length) {
            return true;
        }
        const request_ahbb = context_ahbb.switchToHttp().getRequest();
        const rolUsuario_ahbb = request_ahbb.usuario_ahbb?.rol;
        if (!rolUsuario_ahbb || !rolesPermitidos_ahbb.includes(rolUsuario_ahbb)) {
            throw new common_1.ForbiddenException('No tienes permisos para esta acción.');
        }
        return true;
    }
};
exports.RolesGuard_ahbb = RolesGuard_ahbb;
exports.RolesGuard_ahbb = RolesGuard_ahbb = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [core_1.Reflector])
], RolesGuard_ahbb);
//# sourceMappingURL=roles.guard_ahbb.js.map