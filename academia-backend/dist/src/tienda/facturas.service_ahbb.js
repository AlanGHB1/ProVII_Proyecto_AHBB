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
exports.FacturasService_ahbb = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
const validacion_pago_util_ahbb_1 = require("../common/utils/validacion-pago.util_ahbb");
let FacturasService_ahbb = class FacturasService_ahbb {
    prisma_ahbb;
    constructor(prisma_ahbb) {
        this.prisma_ahbb = prisma_ahbb;
    }
    IVA_PORCENTAJE_AHBB = 16;
    calcularDesglose_ahbb(detalles) {
        const subtotal = detalles.reduce((acc, d) => acc + Number(d.precioUnitario_ahbb) * d.cantidad_ahbb, 0);
        const iva = subtotal * (this.IVA_PORCENTAJE_AHBB / 100);
        const total = subtotal + iva;
        return {
            subtotal: +subtotal.toFixed(2),
            ivaPorcentaje: this.IVA_PORCENTAJE_AHBB,
            ivaMontoUSD: +iva.toFixed(2),
            totalConIva: +total.toFixed(2),
        };
    }
    async crearFactura_ahbb(id_usuario_ahbb, nroReferenciaPago_ahbb) {
        (0, validacion_pago_util_ahbb_1.validarReferenciaPago_ahbb)(nroReferenciaPago_ahbb);
        const itemsCarrito_ahbb = await this.prisma_ahbb.td_carrito_ahbb.findMany({
            where: { id_usuario_carrito_ahbb: id_usuario_ahbb },
            include: { producto_ahbb: true },
        });
        if (itemsCarrito_ahbb.length === 0) {
            throw new common_1.BadRequestException('El carrito está vacío.');
        }
        for (const item_ahbb of itemsCarrito_ahbb) {
            if (item_ahbb.producto_ahbb.stock_ahbb < item_ahbb.cantidad_ahbb) {
                throw new common_1.BadRequestException(`Stock insuficiente para "${item_ahbb.producto_ahbb.nombre_ahbb}". Disponible: ${item_ahbb.producto_ahbb.stock_ahbb}`);
            }
        }
        const total_ahbb = itemsCarrito_ahbb.reduce((acc_ahbb, item_ahbb) => {
            return acc_ahbb + Number(item_ahbb.producto_ahbb.precio_ahbb) * item_ahbb.cantidad_ahbb;
        }, 0);
        const factura_ahbb = await this.prisma_ahbb.$transaction(async (tx_ahbb) => {
            const nuevaFactura_ahbb = await tx_ahbb.td_factura_ahbb.create({
                data: {
                    id_usuario_factura_ahbb: id_usuario_ahbb,
                    nroReferenciaPago_ahbb,
                    total_ahbb,
                    estadoFactura_ahbb: 'pagada',
                },
            });
            for (const item_ahbb of itemsCarrito_ahbb) {
                await tx_ahbb.td_detalle_factura_ahbb.create({
                    data: {
                        id_factura_detalle_ahbb: nuevaFactura_ahbb.id_factura_ahbb,
                        id_producto_detalle_ahbb: item_ahbb.id_producto_carrito_ahbb,
                        cantidad_ahbb: item_ahbb.cantidad_ahbb,
                        precioUnitario_ahbb: item_ahbb.producto_ahbb.precio_ahbb,
                    },
                });
                await tx_ahbb.td_producto_ahbb.update({
                    where: { id_producto_ahbb: item_ahbb.id_producto_carrito_ahbb },
                    data: { stock_ahbb: { decrement: item_ahbb.cantidad_ahbb } },
                });
            }
            await tx_ahbb.td_carrito_ahbb.deleteMany({
                where: { id_usuario_carrito_ahbb: id_usuario_ahbb },
            });
            return nuevaFactura_ahbb;
        });
        return this.obtenerPorId_ahbb(factura_ahbb.id_factura_ahbb, id_usuario_ahbb);
    }
    async obtenerHistorial_ahbb(id_usuario_ahbb) {
        const facturas = await this.prisma_ahbb.td_factura_ahbb.findMany({
            where: { id_usuario_factura_ahbb: id_usuario_ahbb },
            include: {
                detalles_ahbb: { include: { producto_ahbb: true } },
            },
            orderBy: { fechaFactura_ahbb: 'desc' },
        });
        return facturas.map(f => ({
            ...f,
            desglose_ahbb: this.calcularDesglose_ahbb(f.detalles_ahbb),
        }));
    }
    async obtenerPorId_ahbb(id_factura_ahbb, id_usuario_ahbb) {
        const where_ahbb = { id_factura_ahbb };
        if (id_usuario_ahbb) {
            where_ahbb.id_usuario_factura_ahbb = id_usuario_ahbb;
        }
        const factura_ahbb = await this.prisma_ahbb.td_factura_ahbb.findFirst({
            where: where_ahbb,
            include: {
                detalles_ahbb: { include: { producto_ahbb: true } },
                usuario_ahbb: {
                    select: {
                        id_usuario_ahbb: true,
                        nombre_ahbb: true,
                        apellido_ahbb: true,
                        correo_ahbb: true,
                    },
                },
            },
        });
        if (!factura_ahbb) {
            throw new common_1.NotFoundException('Factura no encontrada.');
        }
        return {
            ...factura_ahbb,
            desglose_ahbb: this.calcularDesglose_ahbb(factura_ahbb.detalles_ahbb),
        };
    }
    async obtenerTodas_ahbb() {
        return this.prisma_ahbb.td_factura_ahbb.findMany({
            include: {
                detalles_ahbb: { include: { producto_ahbb: true } },
                usuario_ahbb: {
                    select: {
                        id_usuario_ahbb: true,
                        nombre_ahbb: true,
                        apellido_ahbb: true,
                        correo_ahbb: true,
                    },
                },
            },
            orderBy: { fechaFactura_ahbb: 'desc' },
        });
    }
    async cambiarEstado_ahbb(id_factura_ahbb, estadoFactura_ahbb) {
        const factura_ahbb = await this.prisma_ahbb.td_factura_ahbb.findUnique({
            where: { id_factura_ahbb },
        });
        if (!factura_ahbb) {
            throw new common_1.NotFoundException('Factura no encontrada.');
        }
        return this.prisma_ahbb.td_factura_ahbb.update({
            where: { id_factura_ahbb },
            data: { estadoFactura_ahbb },
        });
    }
};
exports.FacturasService_ahbb = FacturasService_ahbb;
exports.FacturasService_ahbb = FacturasService_ahbb = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], FacturasService_ahbb);
//# sourceMappingURL=facturas.service_ahbb.js.map