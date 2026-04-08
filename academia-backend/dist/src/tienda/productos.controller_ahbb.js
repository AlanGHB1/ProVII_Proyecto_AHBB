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
exports.ProductosController_ahbb = void 0;
const common_1 = require("@nestjs/common");
const productos_service_ahbb_1 = require("./productos.service_ahbb");
const jwt_auth_guard_ahbb_1 = require("../common/guards/jwt-auth.guard_ahbb");
const roles_guard_ahbb_1 = require("../common/guards/roles.guard_ahbb");
const roles_decorator_ahbb_1 = require("../common/decorators/roles.decorator_ahbb");
const jwt_optional_auth_guard_ahbb_1 = require("../common/guards/jwt-optional-auth.guard_ahbb");
let ProductosController_ahbb = class ProductosController_ahbb {
    productosService_ahbb;
    constructor(productosService_ahbb) {
        this.productosService_ahbb = productosService_ahbb;
    }
    async obtenerTodos_ahbb(categoria_ahbb, busqueda_ahbb, estado_ahbb, req_ahbb) {
        const esAdmin_ahbb = req_ahbb?.usuario_ahbb?.rol === 'ADMIN';
        const estadoPermitido_ahbb = esAdmin_ahbb ? estado_ahbb : undefined;
        return this.productosService_ahbb.obtenerTodos_ahbb({
            categoria: categoria_ahbb,
            busqueda: busqueda_ahbb,
            estado: estadoPermitido_ahbb,
        });
    }
    async obtenerPorId_ahbb(id_ahbb) {
        return this.productosService_ahbb.obtenerPorId_ahbb(id_ahbb);
    }
    async crear_ahbb(datos_ahbb) {
        return this.productosService_ahbb.crear_ahbb(datos_ahbb);
    }
    async actualizar_ahbb(id_ahbb, datos_ahbb) {
        return this.productosService_ahbb.actualizar_ahbb(id_ahbb, datos_ahbb);
    }
    async eliminar_ahbb(id_ahbb) {
        return this.productosService_ahbb.eliminar_ahbb(id_ahbb);
    }
};
exports.ProductosController_ahbb = ProductosController_ahbb;
__decorate([
    (0, common_1.UseGuards)(jwt_optional_auth_guard_ahbb_1.JwtOptionalAuthGuard_ahbb),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('categoria')),
    __param(1, (0, common_1.Query)('busqueda')),
    __param(2, (0, common_1.Query)('estado')),
    __param(3, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, Object]),
    __metadata("design:returntype", Promise)
], ProductosController_ahbb.prototype, "obtenerTodos_ahbb", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProductosController_ahbb.prototype, "obtenerPorId_ahbb", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_ahbb_1.JwtAuthGuard_ahbb, roles_guard_ahbb_1.RolesGuard_ahbb),
    (0, roles_decorator_ahbb_1.RolesDecorator_ahbb)('ADMIN'),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductosController_ahbb.prototype, "crear_ahbb", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_ahbb_1.JwtAuthGuard_ahbb, roles_guard_ahbb_1.RolesGuard_ahbb),
    (0, roles_decorator_ahbb_1.RolesDecorator_ahbb)('ADMIN'),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], ProductosController_ahbb.prototype, "actualizar_ahbb", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_ahbb_1.JwtAuthGuard_ahbb, roles_guard_ahbb_1.RolesGuard_ahbb),
    (0, roles_decorator_ahbb_1.RolesDecorator_ahbb)('ADMIN'),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProductosController_ahbb.prototype, "eliminar_ahbb", null);
exports.ProductosController_ahbb = ProductosController_ahbb = __decorate([
    (0, common_1.Controller)('productos'),
    __metadata("design:paramtypes", [productos_service_ahbb_1.ProductosService_ahbb])
], ProductosController_ahbb);
//# sourceMappingURL=productos.controller_ahbb.js.map