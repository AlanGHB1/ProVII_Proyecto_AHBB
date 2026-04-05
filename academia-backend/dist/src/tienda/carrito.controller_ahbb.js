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
exports.CarritoController_ahbb = void 0;
const common_1 = require("@nestjs/common");
const carrito_service_ahbb_1 = require("./carrito.service_ahbb");
const jwt_auth_guard_ahbb_1 = require("../common/guards/jwt-auth.guard_ahbb");
let CarritoController_ahbb = class CarritoController_ahbb {
    carritoService_ahbb;
    constructor(carritoService_ahbb) {
        this.carritoService_ahbb = carritoService_ahbb;
    }
    async obtenerCarrito_ahbb(req_ahbb) {
        return this.carritoService_ahbb.obtenerCarrito_ahbb(Number(req_ahbb.usuario_ahbb?.sub));
    }
    async agregar_ahbb(req_ahbb, datos_ahbb) {
        return this.carritoService_ahbb.agregarAlCarrito_ahbb(Number(req_ahbb.usuario_ahbb?.sub), datos_ahbb.idProducto, datos_ahbb.cantidad ?? 1);
    }
    async actualizarCantidad_ahbb(id_ahbb, req_ahbb, datos_ahbb) {
        return this.carritoService_ahbb.actualizarCantidad_ahbb(id_ahbb, Number(req_ahbb.usuario_ahbb?.sub), datos_ahbb.cantidad);
    }
    async eliminarItem_ahbb(id_ahbb, req_ahbb) {
        return this.carritoService_ahbb.eliminarItem_ahbb(id_ahbb, Number(req_ahbb.usuario_ahbb?.sub));
    }
    async vaciarCarrito_ahbb(req_ahbb) {
        return this.carritoService_ahbb.vaciarCarrito_ahbb(Number(req_ahbb.usuario_ahbb?.sub));
    }
};
exports.CarritoController_ahbb = CarritoController_ahbb;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CarritoController_ahbb.prototype, "obtenerCarrito_ahbb", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], CarritoController_ahbb.prototype, "agregar_ahbb", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object, Object]),
    __metadata("design:returntype", Promise)
], CarritoController_ahbb.prototype, "actualizarCantidad_ahbb", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], CarritoController_ahbb.prototype, "eliminarItem_ahbb", null);
__decorate([
    (0, common_1.Delete)(),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CarritoController_ahbb.prototype, "vaciarCarrito_ahbb", null);
exports.CarritoController_ahbb = CarritoController_ahbb = __decorate([
    (0, common_1.Controller)('carrito'),
    (0, common_1.UseGuards)(jwt_auth_guard_ahbb_1.JwtAuthGuard_ahbb),
    __metadata("design:paramtypes", [carrito_service_ahbb_1.CarritoService_ahbb])
], CarritoController_ahbb);
//# sourceMappingURL=carrito.controller_ahbb.js.map