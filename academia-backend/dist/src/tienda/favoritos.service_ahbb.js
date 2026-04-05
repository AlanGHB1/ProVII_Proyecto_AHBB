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
exports.FavoritosService_ahbb = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let FavoritosService_ahbb = class FavoritosService_ahbb {
    prisma_ahbb;
    constructor(prisma_ahbb) {
        this.prisma_ahbb = prisma_ahbb;
    }
    async obtenerFavoritos_ahbb(id_usuario_ahbb) {
        return this.prisma_ahbb.td_favorito_ahbb.findMany({
            where: { id_usuario_favorito_ahbb: id_usuario_ahbb },
            include: { producto_ahbb: true },
            orderBy: { fechaAgregado_ahbb: 'desc' },
        });
    }
    async toggleFavorito_ahbb(id_usuario_ahbb, id_producto_ahbb) {
        const existente_ahbb = await this.prisma_ahbb.td_favorito_ahbb.findUnique({
            where: {
                id_usuario_favorito_ahbb_id_producto_favorito_ahbb: {
                    id_usuario_favorito_ahbb: id_usuario_ahbb,
                    id_producto_favorito_ahbb: id_producto_ahbb,
                },
            },
        });
        if (existente_ahbb) {
            await this.prisma_ahbb.td_favorito_ahbb.delete({
                where: { id_favorito_ahbb: existente_ahbb.id_favorito_ahbb },
            });
            return { esFavorito: false };
        }
        await this.prisma_ahbb.td_favorito_ahbb.create({
            data: {
                id_usuario_favorito_ahbb: id_usuario_ahbb,
                id_producto_favorito_ahbb: id_producto_ahbb,
            },
        });
        return { esFavorito: true };
    }
    async eliminarFavorito_ahbb(id_usuario_ahbb, id_producto_ahbb) {
        await this.prisma_ahbb.td_favorito_ahbb.deleteMany({
            where: {
                id_usuario_favorito_ahbb: id_usuario_ahbb,
                id_producto_favorito_ahbb: id_producto_ahbb,
            },
        });
        return { exito: true };
    }
    async obtenerIdsFavoritos_ahbb(id_usuario_ahbb) {
        const favoritos_ahbb = await this.prisma_ahbb.td_favorito_ahbb.findMany({
            where: { id_usuario_favorito_ahbb: id_usuario_ahbb },
            select: { id_producto_favorito_ahbb: true },
        });
        return favoritos_ahbb.map((f) => f.id_producto_favorito_ahbb);
    }
};
exports.FavoritosService_ahbb = FavoritosService_ahbb;
exports.FavoritosService_ahbb = FavoritosService_ahbb = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], FavoritosService_ahbb);
//# sourceMappingURL=favoritos.service_ahbb.js.map