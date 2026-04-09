import { PrismaService } from '../prisma.service';
export declare class FacturasService_ahbb {
    private readonly prisma_ahbb;
    constructor(prisma_ahbb: PrismaService);
    private readonly IVA_PORCENTAJE_AHBB;
    private calcularDesglose_ahbb;
    crearFactura_ahbb(id_usuario_ahbb: number, nroReferenciaPago_ahbb: string): Promise<{
        desglose_ahbb: {
            subtotal: number;
            ivaPorcentaje: number;
            ivaMontoUSD: number;
            totalConIva: number;
        };
        usuario_ahbb: {
            nombre_ahbb: string;
            id_usuario_ahbb: number;
            apellido_ahbb: string;
            correo_ahbb: string;
        };
        detalles_ahbb: ({
            producto_ahbb: {
                nombre_ahbb: string;
                descripcion_ahbb: string | null;
                creadoEn_ahbb: Date | null;
                actualizadoEn_ahbb: Date | null;
                id_producto_ahbb: number;
                precio_ahbb: import("@prisma/client-runtime-utils").Decimal;
                stock_ahbb: number;
                categoria_ahbb: string;
                imagen_ahbb: string | null;
                estado_producto_ahbb: string;
            };
        } & {
            cantidad_ahbb: number;
            id_detalle_factura_ahbb: number;
            precioUnitario_ahbb: import("@prisma/client-runtime-utils").Decimal;
            id_factura_detalle_ahbb: number;
            id_producto_detalle_ahbb: number;
        })[];
        nroReferenciaPago_ahbb: string;
        fechaFactura_ahbb: Date | null;
        total_ahbb: import("@prisma/client-runtime-utils").Decimal;
        estadoFactura_ahbb: string;
        id_factura_ahbb: number;
        id_usuario_factura_ahbb: number;
    }>;
    obtenerHistorial_ahbb(id_usuario_ahbb: number): Promise<{
        desglose_ahbb: {
            subtotal: number;
            ivaPorcentaje: number;
            ivaMontoUSD: number;
            totalConIva: number;
        };
        detalles_ahbb: ({
            producto_ahbb: {
                nombre_ahbb: string;
                descripcion_ahbb: string | null;
                creadoEn_ahbb: Date | null;
                actualizadoEn_ahbb: Date | null;
                id_producto_ahbb: number;
                precio_ahbb: import("@prisma/client-runtime-utils").Decimal;
                stock_ahbb: number;
                categoria_ahbb: string;
                imagen_ahbb: string | null;
                estado_producto_ahbb: string;
            };
        } & {
            cantidad_ahbb: number;
            id_detalle_factura_ahbb: number;
            precioUnitario_ahbb: import("@prisma/client-runtime-utils").Decimal;
            id_factura_detalle_ahbb: number;
            id_producto_detalle_ahbb: number;
        })[];
        nroReferenciaPago_ahbb: string;
        fechaFactura_ahbb: Date | null;
        total_ahbb: import("@prisma/client-runtime-utils").Decimal;
        estadoFactura_ahbb: string;
        id_factura_ahbb: number;
        id_usuario_factura_ahbb: number;
    }[]>;
    obtenerPorId_ahbb(id_factura_ahbb: number, id_usuario_ahbb?: number): Promise<{
        desglose_ahbb: {
            subtotal: number;
            ivaPorcentaje: number;
            ivaMontoUSD: number;
            totalConIva: number;
        };
        usuario_ahbb: {
            nombre_ahbb: string;
            id_usuario_ahbb: number;
            apellido_ahbb: string;
            correo_ahbb: string;
        };
        detalles_ahbb: ({
            producto_ahbb: {
                nombre_ahbb: string;
                descripcion_ahbb: string | null;
                creadoEn_ahbb: Date | null;
                actualizadoEn_ahbb: Date | null;
                id_producto_ahbb: number;
                precio_ahbb: import("@prisma/client-runtime-utils").Decimal;
                stock_ahbb: number;
                categoria_ahbb: string;
                imagen_ahbb: string | null;
                estado_producto_ahbb: string;
            };
        } & {
            cantidad_ahbb: number;
            id_detalle_factura_ahbb: number;
            precioUnitario_ahbb: import("@prisma/client-runtime-utils").Decimal;
            id_factura_detalle_ahbb: number;
            id_producto_detalle_ahbb: number;
        })[];
        nroReferenciaPago_ahbb: string;
        fechaFactura_ahbb: Date | null;
        total_ahbb: import("@prisma/client-runtime-utils").Decimal;
        estadoFactura_ahbb: string;
        id_factura_ahbb: number;
        id_usuario_factura_ahbb: number;
    }>;
    obtenerTodas_ahbb(): Promise<({
        usuario_ahbb: {
            nombre_ahbb: string;
            id_usuario_ahbb: number;
            apellido_ahbb: string;
            correo_ahbb: string;
        };
        detalles_ahbb: ({
            producto_ahbb: {
                nombre_ahbb: string;
                descripcion_ahbb: string | null;
                creadoEn_ahbb: Date | null;
                actualizadoEn_ahbb: Date | null;
                id_producto_ahbb: number;
                precio_ahbb: import("@prisma/client-runtime-utils").Decimal;
                stock_ahbb: number;
                categoria_ahbb: string;
                imagen_ahbb: string | null;
                estado_producto_ahbb: string;
            };
        } & {
            cantidad_ahbb: number;
            id_detalle_factura_ahbb: number;
            precioUnitario_ahbb: import("@prisma/client-runtime-utils").Decimal;
            id_factura_detalle_ahbb: number;
            id_producto_detalle_ahbb: number;
        })[];
    } & {
        nroReferenciaPago_ahbb: string;
        fechaFactura_ahbb: Date | null;
        total_ahbb: import("@prisma/client-runtime-utils").Decimal;
        estadoFactura_ahbb: string;
        id_factura_ahbb: number;
        id_usuario_factura_ahbb: number;
    })[]>;
    cambiarEstado_ahbb(id_factura_ahbb: number, estadoFactura_ahbb: string): Promise<{
        nroReferenciaPago_ahbb: string;
        fechaFactura_ahbb: Date | null;
        total_ahbb: import("@prisma/client-runtime-utils").Decimal;
        estadoFactura_ahbb: string;
        id_factura_ahbb: number;
        id_usuario_factura_ahbb: number;
    }>;
    generarPdf_ahbb(id_factura_ahbb: number, id_usuario_ahbb?: number): Promise<Buffer>;
}
