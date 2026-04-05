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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FacturasController_ahbb = void 0;
const common_1 = require("@nestjs/common");
const facturas_service_ahbb_1 = require("./facturas.service_ahbb");
const jwt_auth_guard_ahbb_1 = require("../common/guards/jwt-auth.guard_ahbb");
const roles_guard_ahbb_1 = require("../common/guards/roles.guard_ahbb");
const roles_decorator_ahbb_1 = require("../common/decorators/roles.decorator_ahbb");
let FacturasController_ahbb = class FacturasController_ahbb {
    facturasService_ahbb;
    constructor(facturasService_ahbb) {
        this.facturasService_ahbb = facturasService_ahbb;
    }
    async crearFactura_ahbb(req_ahbb, datos_ahbb) {
        return this.facturasService_ahbb.crearFactura_ahbb(Number(req_ahbb.usuario_ahbb?.sub), datos_ahbb.nroReferenciaPago);
    }
    async obtenerHistorial_ahbb(req_ahbb) {
        return this.facturasService_ahbb.obtenerHistorial_ahbb(Number(req_ahbb.usuario_ahbb?.sub));
    }
    async obtenerPorId_ahbb(id_ahbb, req_ahbb) {
        return this.facturasService_ahbb.obtenerPorId_ahbb(id_ahbb, Number(req_ahbb.usuario_ahbb?.sub));
    }
    async obtenerTodas_ahbb() {
        return this.facturasService_ahbb.obtenerTodas_ahbb();
    }
    async cambiarEstado_ahbb(id_ahbb, datos_ahbb) {
        return this.facturasService_ahbb.cambiarEstado_ahbb(id_ahbb, datos_ahbb.estado);
    }
};
exports.FacturasController_ahbb = FacturasController_ahbb;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], FacturasController_ahbb.prototype, "crearFactura_ahbb", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FacturasController_ahbb.prototype, "obtenerHistorial_ahbb", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], FacturasController_ahbb.prototype, "obtenerPorId_ahbb", null);
__decorate([
    (0, common_1.UseGuards)(roles_guard_ahbb_1.RolesGuard_ahbb),
    (0, roles_decorator_ahbb_1.RolesDecorator_ahbb)('ADMIN'),
    (0, common_1.Get)('admin/todas'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FacturasController_ahbb.prototype, "obtenerTodas_ahbb", null);
__decorate([
    (0, common_1.UseGuards)(roles_guard_ahbb_1.RolesGuard_ahbb),
    (0, roles_decorator_ahbb_1.RolesDecorator_ahbb)('ADMIN'),
    (0, common_1.Patch)(':id/estado'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], FacturasController_ahbb.prototype, "cambiarEstado_ahbb", null);
exports.FacturasController_ahbb = FacturasController_ahbb = __decorate([
    (0, common_1.Controller)('facturas'),
    (0, common_1.UseGuards)(jwt_auth_guard_ahbb_1.JwtAuthGuard_ahbb),
    __metadata("design:paramtypes", [facturas_service_ahbb_1.FacturasService_ahbb])
], FacturasController_ahbb);
//# sourceMappingURL=facturas.controller_ahbb.js.map