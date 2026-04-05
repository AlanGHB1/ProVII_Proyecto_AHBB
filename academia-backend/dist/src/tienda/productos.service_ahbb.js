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
exports.ProductosService_ahbb = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let ProductosService_ahbb = class ProductosService_ahbb {
    prisma_ahbb;
    constructor(prisma_ahbb) {
        this.prisma_ahbb = prisma_ahbb;
    }
    async obtenerTodos_ahbb(filtros_ahbb) {
        const where_ahbb = {};
        if (filtros_ahbb?.categoria) {
            where_ahbb.categoria_ahbb = filtros_ahbb.categoria;
        }
        if (filtros_ahbb?.estado) {
            where_ahbb.estado_producto_ahbb = filtros_ahbb.estado;
        }
        else {
            where_ahbb.estado_producto_ahbb = 'activo';
        }
        if (filtros_ahbb?.busqueda) {
            where_ahbb.OR = [
                { nombre_ahbb: { contains: filtros_ahbb.busqueda, mode: 'insensitive' } },
                { descripcion_ahbb: { contains: filtros_ahbb.busqueda, mode: 'insensitive' } },
            ];
        }
        return this.prisma_ahbb.td_producto_ahbb.findMany({
            where: where_ahbb,
            orderBy: { creadoEn_ahbb: 'desc' },
        });
    }
    async obtenerPorId_ahbb(id_producto_ahbb) {
        const producto_ahbb = await this.prisma_ahbb.td_producto_ahbb.findUnique({
            where: { id_producto_ahbb },
        });
        if (!producto_ahbb) {
            throw new common_1.NotFoundException('Producto no encontrado.');
        }
        return producto_ahbb;
    }
    async crear_ahbb(datos_ahbb) {
        return this.prisma_ahbb.td_producto_ahbb.create({
            data: {
                nombre_ahbb: datos_ahbb.nombre,
                descripcion_ahbb: datos_ahbb.descripcion ?? null,
                precio_ahbb: datos_ahbb.precio,
                stock_ahbb: datos_ahbb.stock ?? 0,
                categoria_ahbb: datos_ahbb.categoria,
                imagen_ahbb: datos_ahbb.imagen ?? null,
                estado_producto_ahbb: datos_ahbb.estado ?? 'activo',
            },
        });
    }
    async actualizar_ahbb(id_producto_ahbb, datos_ahbb) {
        await this.obtenerPorId_ahbb(id_producto_ahbb);
        return this.prisma_ahbb.td_producto_ahbb.update({
            where: { id_producto_ahbb },
            data: {
                nombre_ahbb: datos_ahbb.nombre,
                descripcion_ahbb: datos_ahbb.descripcion,
                precio_ahbb: datos_ahbb.precio,
                stock_ahbb: datos_ahbb.stock,
                categoria_ahbb: datos_ahbb.categoria,
                imagen_ahbb: datos_ahbb.imagen,
                estado_producto_ahbb: datos_ahbb.estado,
            },
        });
    }
    async eliminar_ahbb(id_producto_ahbb) {
        await this.obtenerPorId_ahbb(id_producto_ahbb);
        await this.prisma_ahbb.td_producto_ahbb.delete({
            where: { id_producto_ahbb },
        });
        return { exito: true };
    }
};
exports.ProductosService_ahbb = ProductosService_ahbb;
exports.ProductosService_ahbb = ProductosService_ahbb = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProductosService_ahbb);
//# sourceMappingURL=productos.service_ahbb.js.map