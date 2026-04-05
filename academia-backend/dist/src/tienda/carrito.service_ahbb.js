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
exports.CarritoService_ahbb = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let CarritoService_ahbb = class CarritoService_ahbb {
    prisma_ahbb;
    constructor(prisma_ahbb) {
        this.prisma_ahbb = prisma_ahbb;
    }
    async obtenerCarrito_ahbb(id_usuario_ahbb) {
        return this.prisma_ahbb.td_carrito_ahbb.findMany({
            where: { id_usuario_carrito_ahbb: id_usuario_ahbb },
            include: { producto_ahbb: true },
            orderBy: { fechaAgregado_ahbb: 'desc' },
        });
    }
    async agregarAlCarrito_ahbb(id_usuario_ahbb, id_producto_ahbb, cantidad_ahbb = 1) {
        const producto_ahbb = await this.prisma_ahbb.td_producto_ahbb.findUnique({
            where: { id_producto_ahbb },
        });
        if (!producto_ahbb || producto_ahbb.estado_producto_ahbb !== 'activo') {
            throw new common_1.NotFoundException('Producto no encontrado o no disponible.');
        }
        if (producto_ahbb.stock_ahbb < cantidad_ahbb) {
            throw new common_1.BadRequestException('Stock insuficiente.');
        }
        const itemExistente_ahbb = await this.prisma_ahbb.td_carrito_ahbb.findUnique({
            where: {
                id_usuario_carrito_ahbb_id_producto_carrito_ahbb: {
                    id_usuario_carrito_ahbb: id_usuario_ahbb,
                    id_producto_carrito_ahbb: id_producto_ahbb,
                },
            },
        });
        if (itemExistente_ahbb) {
            return this.prisma_ahbb.td_carrito_ahbb.update({
                where: { id_carrito_ahbb: itemExistente_ahbb.id_carrito_ahbb },
                data: { cantidad_ahbb: itemExistente_ahbb.cantidad_ahbb + cantidad_ahbb },
                include: { producto_ahbb: true },
            });
        }
        return this.prisma_ahbb.td_carrito_ahbb.create({
            data: {
                id_usuario_carrito_ahbb: id_usuario_ahbb,
                id_producto_carrito_ahbb: id_producto_ahbb,
                cantidad_ahbb,
            },
            include: { producto_ahbb: true },
        });
    }
    async actualizarCantidad_ahbb(id_carrito_ahbb, id_usuario_ahbb, cantidad_ahbb) {
        const item_ahbb = await this.prisma_ahbb.td_carrito_ahbb.findFirst({
            where: { id_carrito_ahbb, id_usuario_carrito_ahbb: id_usuario_ahbb },
            include: { producto_ahbb: true },
        });
        if (!item_ahbb) {
            throw new common_1.NotFoundException('Item del carrito no encontrado.');
        }
        if (cantidad_ahbb < 1) {
            throw new common_1.BadRequestException('La cantidad debe ser al menos 1.');
        }
        if (item_ahbb.producto_ahbb.stock_ahbb < cantidad_ahbb) {
            throw new common_1.BadRequestException('Stock insuficiente.');
        }
        return this.prisma_ahbb.td_carrito_ahbb.update({
            where: { id_carrito_ahbb },
            data: { cantidad_ahbb },
            include: { producto_ahbb: true },
        });
    }
    async eliminarItem_ahbb(id_carrito_ahbb, id_usuario_ahbb) {
        const item_ahbb = await this.prisma_ahbb.td_carrito_ahbb.findFirst({
            where: { id_carrito_ahbb, id_usuario_carrito_ahbb: id_usuario_ahbb },
        });
        if (!item_ahbb) {
            throw new common_1.NotFoundException('Item del carrito no encontrado.');
        }
        await this.prisma_ahbb.td_carrito_ahbb.delete({
            where: { id_carrito_ahbb },
        });
        return { exito: true };
    }
    async vaciarCarrito_ahbb(id_usuario_ahbb) {
        await this.prisma_ahbb.td_carrito_ahbb.deleteMany({
            where: { id_usuario_carrito_ahbb: id_usuario_ahbb },
        });
        return { exito: true };
    }
};
exports.CarritoService_ahbb = CarritoService_ahbb;
exports.CarritoService_ahbb = CarritoService_ahbb = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CarritoService_ahbb);
//# sourceMappingURL=carrito.service_ahbb.js.map