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
exports.FavoritosController_ahbb = void 0;
const common_1 = require("@nestjs/common");
const favoritos_service_ahbb_1 = require("./favoritos.service_ahbb");
const jwt_auth_guard_ahbb_1 = require("../common/guards/jwt-auth.guard_ahbb");
let FavoritosController_ahbb = class FavoritosController_ahbb {
    favoritosService_ahbb;
    constructor(favoritosService_ahbb) {
        this.favoritosService_ahbb = favoritosService_ahbb;
    }
    async obtenerFavoritos_ahbb(req_ahbb) {
        return this.favoritosService_ahbb.obtenerFavoritos_ahbb(Number(req_ahbb.usuario_ahbb?.sub));
    }
    async obtenerIds_ahbb(req_ahbb) {
        return this.favoritosService_ahbb.obtenerIdsFavoritos_ahbb(Number(req_ahbb.usuario_ahbb?.sub));
    }
    async toggleFavorito_ahbb(idProducto_ahbb, req_ahbb) {
        return this.favoritosService_ahbb.toggleFavorito_ahbb(Number(req_ahbb.usuario_ahbb?.sub), idProducto_ahbb);
    }
    async eliminar_ahbb(idProducto_ahbb, req_ahbb) {
        return this.favoritosService_ahbb.eliminarFavorito_ahbb(Number(req_ahbb.usuario_ahbb?.sub), idProducto_ahbb);
    }
};
exports.FavoritosController_ahbb = FavoritosController_ahbb;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FavoritosController_ahbb.prototype, "obtenerFavoritos_ahbb", null);
__decorate([
    (0, common_1.Get)('ids'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FavoritosController_ahbb.prototype, "obtenerIds_ahbb", null);
__decorate([
    (0, common_1.Post)(':idProducto'),
    __param(0, (0, common_1.Param)('idProducto', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], FavoritosController_ahbb.prototype, "toggleFavorito_ahbb", null);
__decorate([
    (0, common_1.Delete)(':idProducto'),
    __param(0, (0, common_1.Param)('idProducto', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], FavoritosController_ahbb.prototype, "eliminar_ahbb", null);
exports.FavoritosController_ahbb = FavoritosController_ahbb = __decorate([
    (0, common_1.Controller)('favoritos'),
    (0, common_1.UseGuards)(jwt_auth_guard_ahbb_1.JwtAuthGuard_ahbb),
    __metadata("design:paramtypes", [favoritos_service_ahbb_1.FavoritosService_ahbb])
], FavoritosController_ahbb);
//# sourceMappingURL=favoritos.controller_ahbb.js.map